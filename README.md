## 项目开发目录：指的是你要开发的项目，将项目的源码放置到src文件夹里面<br />
<br />
<br />
┠─dist ━━━━━━━━━━━━━┱─images<br />
(项目上线代码) &nbsp; &nbsp; &nbsp; &nbsp;┠─styles<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ┠─scripts<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ┖─index.html<br />
┠─src &nbsp;━━━━━━━━━━━━━┱─images<br />
(项目生产源码) &nbsp; &nbsp; &nbsp; &nbsp;┠─styles<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ┠─scripts<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ┖─index.html&nbsp;<br />
<br />
<br />
┠─node_modules(bower_components) (存储了项目所需要的包)<br />
┠─gulpfile.js (控制工作流的js文件)<br />
┠─package.json （记录项目的版本，名称，主文件，开发依赖，以及生产依赖）<br />
┖─README.md (项目的说明和帮助文档)<br />
<br />
<br />
## 实现功能：<br />
- 将src/scripts文件夹中的.less文件编译压缩合并生成dist/styles/app.css文件<br />
- 将src/styles文件夹中的.js文件压缩合并生成dist/scripts/app.js文件<br />
- 将src/images文件夹中的照片压缩生成在dist/images目录下面<br />
- 将src/index.html文件夹中的index.html文件压缩生成dist/index.html文件<br />
<br />
<br />
## 使用方法：<br />
- 使用时需要安装npm，nodejs环境，下载workflow文件夹，将在src中创建项目源码文件<br />
- 在根目录打开命令行，执行: $ gulp&nbsp;<br />
- 项目会自动打开浏览器实现实时更新&nbsp;