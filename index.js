/* constructor function is another way of creating an object, use 'function' keyword with a captilised 'function name' eg 'Car'. Put parameters in the parenthesis and use them as an argument in the function body */

function Car (year, owner, manufacturer) {
  /* the construction functon is still a JS function, it can pass parameters to arguments in the body. */
	this.year = year;
  this.owner = owner;  
	this.manufacturer = manufacturer;
	this.speak = function () {
		return `vrooooooom!`;
	}
};

/* there are some differences in sytax between 'Literal Notation' uses equal '=' sign for defining properties' */

/* 'Constructor Function'uses the 'this' keyword which referenecs the current object when adding data to it. */
