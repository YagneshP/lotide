# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yagnesh_parekh/lotide`

**Require it:**

`const _ = require('@yagnesh_parekh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: find the first element from the array.
* `tail`: returns the tail of the array that means it returns the new array except the first element of the array.
* `middle`: returns an array containing of middle elements of passing array. 
* `countLetters`: take string as an input and return an object which contain key as letters and value as how many times that letter repeats.
* `countOnly` : This function should take in a collection of items and return counts for a specific subset of those items.
* `findKey` :  takes in an object and a callback,s scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue` : this function takes in an object and a value, scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `letterPositions` :  this function ,takes a string as an argumnet,which will return all the indices (zero-based positions) in the string where each character is found.
* `map` : take an array and callback as arguments and return new array depending on the result of callback.
* `takeUntil` : takes an array and a callback , return slice of an array until callback return truthy value.
* `without` : this function takes two arrays as an arguments and filter out items and return a new array.   