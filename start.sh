# 切换到主分支
git checkout main

# 编译
npm install
npm run docs:build

# 上传编译文件
git add .
git commit -m "编译上传"
git push origin main

# 切换到dist分支
git checkout dist

# 复制main分支编译后的静态文件到dist分支
git checkout origin/main ./docs/.vitepress/dist

# 同步文件
# rsync -av ./docs/.vitepress/dist/ ./
robocopy .\docs\.vitepress\dist\ .\ /E

git add .
git commit -m "上传编译文件"
git push origin dist