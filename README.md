# node-maths

[![downloadsBadge](https://img.shields.io/npm/dt/node-maths?style=for-the-badge)](https://npmjs.com/node-maths)
[![versionBadge](https://img.shields.io/npm/v/node-maths?style=for-the-badge)](https://npmjs.com/node-maths)


Node-Maths is a Node.js module that you can use mathematics in any field, any time, **unlimitedly.**

## Installation

```sh
npm install --save node-maths
```

## Usage

```js
const { Maths } = require('node-maths');
const math = new Maths;

console.log(math.collect(5,2)) //7

```


## Math Operations

```js
//Add between 2 numbers.
math.collect(5,7) //12

//Subtract between 2 numbers.
math.subtraction(7,5) //2

//Calculates the square of a number.
math.squares(4) //16

//It solves a problem.
math.problem(5%8/2*3-8%5-2*5%2) //4,5

//Rounds a number to the number closest to it.
math.round(11,4) //11
math.round(11,5) //12

//Divides the two numbers together.
math.divide(10,2) //2

//Multiplies two numbers.
math.multiplicat(10,2) //20

//Finds the smallest common multiple between two numbers.
math.scf(10,2) //10

//Finds the biggest common divisor between two numbers.
math.bcf(10,2) //2
```
