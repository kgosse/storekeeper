# Synopsis
It is a simple Single Page App with two menu items. The Orders menu item shows the list of orders with filtering possibility. The dashboard contains the a chart made with the orders.

![alt text][storekeeper]

[storekeeper]: storekeeper.png "Storekeeper - Orders screen"

## Summary

* [Installation](#installation)
* [What I have learned](#what-i-have-learned)
* [Technologies](#technologies)

### Installation

<pre>
    > git clone https://github.com/kgosse/storekeeper.git
    > cd storekeeper
    > npm i
    > webpack-dev-server
    # open another console or terminal in the same folder
    > babel-node back-server
</pre>

After that, you then need to open your browser on: [localhost:8080](http://localhost:8080/)
If something went wrong, it's because you may have use nodejs version 4 or above.

### What I have learned

* Build a strong foundation in React Components by slicing and dicing designs into fruition
* Unit test UIs to find regression errors
* Save memory and boost execution speed by embracing immutable data structures

### Technologies

* [React](https://facebook.github.io/react/)
* ES6 with [babel](http://babeljs.io/)
* Flux Architecture wiht [Alt](http://alt.js.org/)
* [Immutable.js](https://facebook.github.io/immutable-js/)
* [webpack](https://webpack.github.io/)
* [NodeJS](https://nodejs.org/en/) with [Express](http://expressjs.com/en/)
* Unit testing: [mocha](https://mochajs.org/), [jsdom](https://github.com/tmpvar/jsdom) and [Sinon.JS](http://sinonjs.org/)

