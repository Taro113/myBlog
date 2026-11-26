@echo off
chcp 65001 >nul
setlocal

REM 临时目录，用于暂存编译产物（放在系统临时目录，不污染仓库）
set "TEMP_DIST=%TEMP%\myblog_dist_temp"

echo [1/8] 切换到 main 分支...
git checkout main
if errorlevel 1 goto :error

echo [2/8] 安装依赖并编译...
call npm install
if errorlevel 1 goto :error
call npm run docs:build
if errorlevel 1 goto :error

echo [3/8] 把编译产物暂存到临时目录...
if exist "%TEMP_DIST%" rmdir /s /q "%TEMP_DIST%"
robocopy "docs\.vitepress\dist" "%TEMP_DIST%" /E /NFL /NDL /NJH /NJS
if %ERRORLEVEL% GEQ 8 goto :error

echo [4/8] 切换到 dist 分支...
git fetch origin
git rev-parse --verify dist >nul 2>&1
if errorlevel 1 (
    echo 本地没有 dist 分支，从远程创建...
    git checkout -b dist origin/dist
    if errorlevel 1 goto :error
) else (
    git checkout dist
    if errorlevel 1 goto :error
)
git pull --ff-only origin dist
if errorlevel 1 (
    echo 警告：dist 分支无法快进，强制重置到远程版本...
    git reset --hard origin/dist
)

echo [5/8] 用镜像模式同步产物到根目录（排除 .git）...
robocopy "%TEMP_DIST%" "." /MIR /XD ".git" "node_modules" /XF ".gitignore" ".gitattributes" "start.bat" /NFL /NDL /NJH /NJS
if %ERRORLEVEL% GEQ 8 goto :error

echo [6/8] 清理临时目录...
rmdir /s /q "%TEMP_DIST%"

echo [7/8] 提交并推送 dist 分支...
git add -A
git commit -m "上传编译文件"
git push origin dist
if errorlevel 1 goto :error

echo [8/8] 切换回 main 分支
git checkout main

echo.
echo 部署完成！
pause
exit /b 0

:error
echo.
echo 部署失败，请检查上方错误信息。
pause
exit /b 1

# npm run docs:dev