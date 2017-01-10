## 项目开发目录：指的是你要开发的项目，将项目的源码放置到src文件夹里面

┠─dist ━━━━━━━━━━━━━┱─images

(项目上线代码)        ┠─styles

                    ┠─scripts

                    ┖─index.html

┠─src  ━━━━━━━━━━━━━┱─images

(项目生产源码)        ┠─styles<br /> 

                    ┠─scripts<br /> 

                    ┖─index.html 
                    
┠─node_modules(bower_components) (存储了项目所需要的包)

┠─gulpfile.js (控制工作流的js文件)

┠─package.json （记录项目的版本，名称，主文件，开发依赖，以及生产依赖）

┖─README.md (项目的说明和帮助文档)


## 实现功能：
- 将src/scripts文件夹中的.less文件编译压缩合并生成dist/styles/app.css文件
- 将src/styles文件夹中的.js文件压缩合并生成dist/scripts/app.js文件
- 将src/images文件夹中的照片压缩生成在dist/images目录下面
- 将src/index.html文件夹中的index.html文件压缩生成dist/index.html文件

## 使用方法：
- 使用时需要安装npm，nodejs环境，下载workflow文件夹，将在src中创建项目源码文件
- 在根目录打开命令行，执行: $ gulp 
- 项目会自动打开浏览器实现实时更新 
