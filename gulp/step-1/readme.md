# gulp 基本概念
 1. task 任务管理
 2. src dest
 3. src将开发目录文件，经过一些处理（转译es6，压缩，合并），
 将其目标文件放置到dist线上目录
 4. babel转译任务集成到gulp中
 yarn add --dev gulp-babel babel-core babel-presets-env
 5. 压缩css gulp-clean-css