@echo off
chcp 65001 >nul  REM 设置控制台为 UTF-8 编码（如果文件保存为 UTF-8 无 BOM）

REM 切换到 main 分支
git checkout main

REM 编译
call npm install
call npm run docs:build

REM 提交编译后的文件到 main 分支
git add .
git commit -m "编译上传"
git push origin main

REM 切换到 dist 分支（如果不存在则创建并切换到该分支）
git checkout dist 2>nul || git checkout -b dist

REM 从 main 分支检出编译后的静态文件到当前工作区
git checkout origin/main -- docs/.vitepress/dist

REM 用 robocopy 将文件同步到根目录（与之前 rsync 效果类似）
robocopy .\docs\.vitepress\dist\ .\ /E

REM 提交并推送到 dist 分支
git add .
git commit -m "上传编译文件"
git push origin dist

echo 部署完成！
pause