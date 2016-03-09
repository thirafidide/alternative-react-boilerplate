Alt(ernative) React Boilerplate
================================
[![Build Status](https://travis-ci.org/iamn00b/alternative-react-boilerplate.svg?branch=master)](https://travis-ci.org/iamn00b/alternative-react-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/iamn00b/alternative-react-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/iamn00b/alternative-react-boilerplate?branch=master)
[![GitHub license](https://img.shields.io/badge/license-BSD--2-blue.svg)](https://raw.githubusercontent.com/iamn00b/alternative-react-boilerplate/master/LICENSE)

An alt(ernative)-react boilerplate for webpack-babel-react-alt combo. 
This is heavily based on [SurviveJS](https://survivejs.com) book written by @bebraw.

This boilerplate includes
* __React__ 
* __Alt__ as flux implementation for state management
* __Babel__ for sweet ES6 and jsx
* __React Router__ to handle routing
* __Webpack__ with config for development and production
* __Karma__ & __Mocha__ for testing. Also integration with Travis

## Installation
``` bash
npm install 
```

## Development
``` bash 
npm start 
```
Open ``localhost:8080`` to see the result. It use Hot Reload Module so it will
automatically reload the changes.

## Build
``` bash 
npm run build 
```
build result in ``/build`` folder. The build process itself separate the app bundle and vendor bundle and also use hash for naming for better browser caching.

## To Do
For v1.0.0 :
* Make Coveralls work
* Separating css for production
* Better Readme, Introduction, and Documentation
* Comments in code for better understanding