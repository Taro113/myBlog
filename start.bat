@echo off
REM 切换到 main 分支
git checkout main

REM 编译
npm install
npm run docs:build

REM 提交编译文件到 main 分支
git add .
git commit -m "编译上传"
git push origin main

REM 切换到 dist 分支（如果不存在则创建）
git checkout dist
git pull

REM 从 main 分支检出编译后的静态文件
git checkout origin/main -- docs/.vitepress/dist

REM 用 robocopy 将文件同步到项目根目录
robocopy .\docs\.vitepress\dist\ .\ /E
@REM rmdir /s /q ".\docs\.vitepress\dist"

REM 提交并推送到 dist 分支
git add .
git commit -m "上传编译文件"
git push origin dist

echo 部署完成！
pause