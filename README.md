# Bihspace
---  

### Development Environment
**Execute environment：**
- Node version: v10.15.3
- NPM version: v6.14.5

**Dependency install：**
```bash
npm install
```
### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Web Tempalte
TITLE: Exclusivity - Free Bootstrap 4 Template
AUTHOR: Free-Template.co
LICENSE: Under Creative Commons 3.0 (free-template.co/license)
Twitter: https://twitter.com/Free_Templateco
CREDITS:

1. [Bootstrap](http://getbootstrap.com/)
2. [jQuery](http://jquery.com/)
3. [Google Fonts](https://www.google.com/fonts/)
4. [Icomoon](https://icomoon.io/app/)
5. [Open Iconic](https://useiconic.com/open/)
6. [Demo Images](https://unsplash.com)
7. [Waypoints](https://imakewebthings.com/waypoints/)
8. [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
9. [AnimateNumber](aishek.github.io/jquery-animateNumber/)


For More HTML5 Templates: https://themewagon.com

### Note

**Refactor whole Project and webpack config at 2021/02/21**

Change log: 

1. update webpack4 version to lastest of v4
2. add hot-reload and clear-before-build feature for webpack
3. change to use the "build" folder to put whole website's resource which build by webpack, and it won't be version control
4. move css, js, font, download folders  from root to src folder
4. remove all html file which locate root folder
5. remove CNAME file because chaning hosting service to Netlify
6. change npm script's name to be short
7. remove some unuseful file, e.g. ajax-loader.gif, scss file
8. write more detail README.md