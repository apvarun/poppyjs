![logo](https://github.com/apvarun/poppyjs/raw/master/docs/Poppy-logo.png)
# Poppy

![NPM](https://img.shields.io/npm/l/poppyjs.svg)
![GitHub package.json version](https://img.shields.io/github/package-json/v/apvarun/poppyjs.svg)
![npm](https://img.shields.io/npm/v/poppyjs.svg)


Simple, Multipurpose Open Source Pop-in Messages
[https://github.com/apvarun/poppyjs](https://github.com/apvarun/poppyjs)   
 
[Demo page](https://apvarun.github.io/poppyjs)

   
## Features
* Customaziable options
* No dependency

## Browser Support
* Chrome
* Safari
* Firefox
* IE 10+
* Edge
* Opera

## Getting Started
#### npm
````bash
$ npm install poppyjs

or

$ yarn add poppyjs
````

## Usage
#### ES6
```javascript
import poppy from 'poppyjs'
    
let poppy = new Poppy({
    title: {
        text: "Hello Poppy",
        color: "#556BA4"
    },
    content: "Time to switch to Poppy for a better user experience.",
    cta: {
        text: "Click me",
        url: "https://github.com/apvarun/poppyjs",
        color: "#556BA4",
        newtab: true
    },
    position: "bottomLeft"
});
poppy.show();
```

## Options
````javascript
new Poppy({
    title: {
        text: String, // Title text (Default : "")
        avatar: String, // Avatar image URL (Default : "")
        color: String,  // Color Code (Default : "")
    },
    content: String, // Content text (Default : "")
    cta: {
        text: String, // CTA text (Default : "")
        url: String, // CTA Link URL (Default : "")
        color: String, // Color Code (Default : "")
        newtab: Boolean, // To open the CTA link in a new tab (Default : false)
        onclick: Function, // Callback function when CTA button is clicked (Default : () => {})
    },
    coverImage: String, // Cover image URL (Default : "")
    position: String, // Potision (topLeft, topRight, bottomLeft, bottomRight) (Default : "bottomRight")
    delay: Number, // Delay in ms before displaying poppy (Default : 0),
    closeAfter: Number, // Time in ms after which the poppy should auto-close (Default : null)
})
````

## Built With

* [Webpack](https://webpack.js.org)
* [Babel](https://babeljs.io)


## Changelog

Refer [CHANGELOG.md](CHANGELOG.md) file for library changes

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

