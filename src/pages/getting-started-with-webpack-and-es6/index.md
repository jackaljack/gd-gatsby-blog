---
title: Getting started with Webpack and ES6
date: "2017-05-12"
path: "/getting-started-with-webpack-and-es6/"
tags:
  - Webpack
  - ES6
---

Project starters like [Angular starter](https://github.com/AngularClass/angular-starter) and [Cookiecutter-Django](https://github.com/pydanny/cookiecutter-django) are really amazing when you are experienced with the technology they use and you want to develop applications that follow best practices and are ready for production. On the other hand, if you are just starting out, trying to wrap your head around these complex setups will be a daunting task and most likely a waste of your time. It's fundamental to know why you need a given package in your project, and why it's good to have your files in a given location in your project directory tree.

Here I want to list all the basic requirements to get you started with a Webpack project that uses ES6, and I going to explain, very briefly, why you need each package and configuration.

_Note: If you use npm, replace all yarn commands with theit npm equivalent_.

Here is a nice checklist:

1.  Think about your project
2.  ESLint
3.  The bare minimum
4.  babel-core
5.  babel-preset-es2015
6.  webpack
7.  webpack-dev-server
8.  Loaders
9.  package.json
10. webpack.config.js

---

## 1 - Think about your project

Take some time to think about your project. Will it be a small project? A big one? Are you going to use third-party Javascript / CSS libraries? What about a CSS preprocessor like SASS? Do you need different environments (e.g. development, production, test)?

The structure of your project depends on the type of application you are developing, the size of the project itself, and of course on personal preferences. You can use some common principles and general guidelines though. A popular approach is to follow [the Twelve Factor App](https://12factor.net/) (see also [here](http://www.clearlytech.com/2014/01/04/12-factor-apps-plain-english/) for an explanation easier to digest than the original one). Probably for small projects - like this one - such considerations are a bit an overkill, but I think it's important to keep that in mind anyway.

In this article we are going to create a very simple project. In the end it will look like this:

```shell
.
├── dist
│   ├── bundle.js  # generated by webpack
│   ├── bundle.js.map  # generated by webpack
│   └── index.html
├── node_modules
├── package.json
├── src
│   ├── index.js
│   └── style.css
├── webpack.config.js
└── yarn.lock
```

To get started, open a terminal and run:

```shell
yarn init
```

This will create a `package.json` file containing the information about your project and its dependencies. You don't really need to type anything, just press enter and accept the default choices.

_Note: if you created this project on GitHub and you cloned it on your machine, the yarn init wizard will fill in the correct author and url of your repository._

## 2 - ESLint

Using a linter will certainly improve the quality of the code you write, so if you don't have it yet, I strongly suggest you to install ESLint **globally** with:

```shell
yarn global add eslint
```

In your project folder, setup the linter with:

```shell
eslint --init
```

Answer the questions on the screen. I like to use the [AirBnB style guide](https://github.com/airbnb/javascript) and to save the linter configuration file as JSON: `.eslintrc.json`.

## 3 - The bare minimum

You are going to need an HTML file that contains your webpack bundle, a Javascript file that represents the _entry point_ of your application, and a CSS file for styling.

Create an `index.html` file in your `dist` folder. As you can see, the `bundle.js` generated by webpack is included in the `<script>` tag. I added some Google fonts too.

```html
<html>
  <head>
    <meta charset='utf-8'>
    <title>Getting started with Webpack and ES6</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet">
  </head>
  <body>
    <h1>Getting started with Webpack and ES6</h1>
    <script src="./bundle.js" charset="utf-8"></script>
  </body>
</html>
```

Create a `style.css` file in your `src` folder. This file will be processed by the `css-loader` first, and by the `style-loader` second.

```css
h1 {
  font-family: 'Open Sans';
}

p {
  font-family: 'Raleway';
  font-style: italic;
}
```

Lastly, write an `index.js` in your `src` folder. This file will be the entry point for your app.

```javascript
require('./style.css')

const name = 'Webpack'
const p = document.createElement('p')
p.textContent = `Hello ${name}`
document.body.appendChild(p)
```

## 4 - babel-core

babel-core is the Babel compiler itself, or maybe it's more appropriate calling it _transpiler_, because it transforms javascript code into javascript code. It can be broken down into 3 parts: a parser, a transformer and a generator. You can find more about how it works in the [documentation](https://github.com/babel/babel). Install it with:

```shell
yarn add --dev babel-core
```

_Note: [this page on babeljs.io](http://babeljs.io/docs/setup/#installation) tells you which packages you need in order to integrate Babel with your tools of choice_.

## 5- babel-preset-es2015

As the name implies, it's a preset that automatically determines the Babel plugins you need, based on your supported environments, so Babel can perform its syntax transformation. If you are developing a web application then you want the es2015 preset because you need to target ECMAScript 2015 (a.k.a ES6). You enter ES6 code, and thanks to all Babel plugins installed (because such plugins are required by this preset) the Babel compiler will generate code that can run in all major browsers. You can find more about this process [here](http://babeljs.io/docs/plugins/preset-env/).

```shell
yarn add --dev "babel-preset-es2015
```

You could specify the preset in a `.babelrc` file (you need to put it under version control) or in the `webpack.confg.js`. For more information about `babelrc` see [here](http://babeljs.io/docs/usage/babelrc/).

_Note: Keep in mind that ECMAScript is a standard, and Javascript is an implementation of such standard. For a nice, short overview of major ECMAScript versions see [this article](https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/)_.

## 6 - webpack

It's the Javascript module bundler, currently at version 2. It lets you create bundles for your application. You can have one or more bundles for all your Javascript files, and one or more bundles for your stylesheets. The number of bundles depends on your webpack configuration. Even if you are going to use Webpack in all of your projects, install it **locally**:

```shell
yarn add --dev webpack
```

## 7 - webpack-dev-server

It's a little Node.js Express server for development. It's really fast because it serves your bundles from the memory, and since it has _live reload_ it's also very handy to use.

```shell
yarn add --dev webpack-dev-server
```

## 8 - Loaders

Webpack treats every file as a _module_. Loaders convert files into modules, so you can _require_ these files in your application. In order to tell Webpack which loader to use, you need to write a set of rules in your `webpack.config.js` file. For each rule you need to specify a regular expression (the `test` field) and the loader you want to use (the `use` field).

You will need `babel-loader` to convert ES6 files into modules, `css-loader` to convert CSS files into modules, and `style-loader` to create a `<style>` node and append it in the `<head>` of your `index.html`.

```shell
yarn add --dev babel-loader style-loader css-loader
```

## 9 - package.json

Now that all the dependencies are set, the next step is to open your `package.json` and write the commands for running the webpack dev server and build the bundle/s. These commands go to the `scripts` field in `package.json`.

```json
{
  "name": "webpack-starter",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "server": "webpack-dev-server --config webpack.config.js",
    "lint": "eslint src",
    "build": "webpack --config webpack.config.js --progress"
  },
  "license": "MIT",
  "devDependencies": {
    "babel-core": "^6.24.1",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^0.28.1",
    "eslint": "^3.19.0",
    "eslint-config-airbnb-base": "^11.1.3",
    "eslint-plugin-import": "^2.2.0",
    "style-loader": "^0.17.0",
    "webpack": "^2.5.1",
    "webpack-dev-server": "^2.4.5"
  }
}
```

## 10 - webpack.config.js

There is only one thing left to do: writing a configuration file for Webpack. You will need to set the entry point of your application, the output of your `bundle.js`, the rules for your loaders, and the configuration for the webpack-dev-server.

For this very simple project, the `webpack.config.js` will look like this:

```javascript
const path = require('path')

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.js')],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // rule for .js/.jsx files
      {
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, 'src')],
        exclude: [path.join(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      // rule for .css files
      {
        test: /\.css$/,
        include: [path.join(__dirname, 'src')],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    inline: true, // live reloading
  },
}
```

_Note: it's not mandatory to set_ `devtool` _and generate a source map, but since it really helps when debugging your application I decided to include it in the configuration_.

## Next steps

If you managed to run this project, congratulations! As you can see, even for a small project like this one the `webpack.config.js` file is not that small. If your application gets bigger, you might want to create multiple entry points for your app, organize your project tree in a different way (e.g. create a folder for js files, another one for css files, etc), or use some Webpack plugin.

Webpack is a great tool, and has a vast ecosystem of plugins. In this article I wanted to keep things as simple as possible, so I didn't include any, but in a real project you will likely use several plugins. If you are curious about which Webpack plugins I am currently using you may want to check [this article](http://giacomodebidda.com/blog/webpack-plugins-that-i-am-currently-using/).