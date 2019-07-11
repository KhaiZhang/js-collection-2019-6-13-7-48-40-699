'use strict';

function choose_even(collection) {
  return collection.filter(filter_even)
}

const  filter_even = number => number%2==0;

module.exports = choose_even;
