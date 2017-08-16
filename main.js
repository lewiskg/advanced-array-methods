var fruits = ["apple", "banana", "cherry"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.
function outputFruitOld (array) {
	for (var i = 0; i < array.length; i++) {
		console.log(`Fruit from 1a.: ${array[i]}`);
	}
}
outputFruitOld("Part 1A: ", fruits);
// 1B: Rewrite using forEach array method
// using callback function
fruits.forEach(listFruit)


function listFruit(fruit) {
	console.log(`Fruit from 1b.: ${fruit}`);
}

function listFruit(fruit, index, array) {
	console.log(`Fruit from 1b.: ${fruit}`);
	console.log("index, ", index);
	console.log("array, ", array);
}
// using anonymous function
fruits.forEach(function(item) {
	console.log("using anonymous fxn: ", item);
})


// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.
function backwardFruitsOld (array) {
	console.log("On part 2A.");
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i].split('').reverse().join(""));
	}
	console.log(newArray);
	
}

backwardFruitsOld(fruits);

// 2B: Rewrite using map array method
var secondNewArray = fruits.map(function(item){
	return item.split('').reverse().join("");
})

console.log(`Part 2B.: ${secondNewArray}`);

function splitter (item) {
	return item.split('').reverse().join("");
}

console.log("Using the splitter function: ", fruits.map(splitter));

// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.
function fiveLettersOnlyOld (array) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if(array[i].length === 5) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log("Part 3A.: ", fiveLettersOnlyOld(fruits));

// 3B: Rewrite using filter array method
var filteredFruits = fruits.filter(function(fruit){    // test for condition, filter will return value if test is true
	if (fruit.length === 5) {
		return true;
	}
});
console.log("Part 3B.: ", filteredFruits);


// 4A: Write a function called addzOld that returns the sum of an array.
var numbers = [0, 1, 2, 3, 4];

function addzOld(array) {
	var sum = 0;
	for(var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
console.log("Part 4A.: ", addzOld(numbers));

// 4B: Rewrite using reduce array method

var summation = numbers.reduce(function(accumulation, currentValue) {
	return accumulation + currentValue;
});

console.log("Part 4B.: ", summation);

