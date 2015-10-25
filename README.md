# direct-instance-of [![Build Status](https://travis-ci.org/tjmehta/direct-instance-of.svg?branch=master)](https://travis-ci.org/tjmehta/direct-instance-of) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Check if a value is a direct instance of a class ( not inherited)

## Installation

```
npm install direct-instance-of
```

## Usage

```js
var directInstanceOf = require('direct-instance-of')

// Cat inherits from Mammal inherits from Animal

directInstanceOf(new Animal(), Animal)    // true
directInstanceOf(new Mammal(), Animal)    // false
directInstanceOf(new Mammal(), Mammal)    // true
directInstanceOf(new Cat('walk'), Animal) // false
directInstanceOf(new Cat('walk'), Mammal) // false
directInstanceOf(new Cat('walk'), Cat)    // true
```

## License
MIT