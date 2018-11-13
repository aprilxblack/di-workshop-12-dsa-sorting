# Workshop: Sorting Algorithms 🔀

As with previous workships, you should fork this repo and then complete the bold questions below.

**Remember, it's about exploration and understanding. Take your time!Don't move on until you fully understand what's happening.**

To run these algorithms, you'll need to create a new js file for each and then run them with Node, just like you have for previous workshops...

```shell
# 1. Create the file
touch bubbleSortAlgo.js

# 2. Add some code.

# 3. Run the file with node.
node bubbleSortAlgo.js
```

🚨 Remember to **commit** regularly as you write code and answer the questions.

## The bubble sort algorithm

The following code implements an (in-place) bubble sort algorithm in JavaScript:

```js 
function bubbleSort(a) {
    var swapped;
    do {
    	swapped = false;
    	for (var i=0; i < a.length-1; i++) {
        	if (a[i] > a[i+1]) {
            	var temp = a[i];
            	a[i] = a[i+1];
            	a[i+1] = temp;
            	swapped = true;
        	}
    	}
    } while (swapped);
}
 
var ary = [34, 203, 3, 746, 200, 984, 198, 764, 9];

bubbleSort(ary);
console.log(ary);
```

**1. Read the code to understand how it works before running it.**

**2. Confirm that it works in Node**

**3. Try changing the integers in the array. Does it still work?**

**4. Add some integers to the array, so there are 100 items in it. Does it still work?**


## Other sorting algorithms
Implement the following algorithms in JavaScript, each in their own file in your project folder:

- Selection Sort
- Merge Sort
- Insertion Sort

For each algorithm:

**1. Ensure the input array has at least 100 items in it.**

**2. Check that it works in Node.**

**3. Print the sorted array to the console.**

⚠️ **Important**: You’re not required to write the algorithms from scratch (unless you really want a challenge) - it’s okay to get them from google!

## Generating data and measuring execution time

The following function will generate a single integer between `0` and `max`.

```js
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
```

**1. Make a copy of your bubble sort algorithm, and replace the hard-coded array with a loop that generates an array of 1000 random integers.**
Oh crap, I've already done that haha, I didn't feel like adding a 100 numbers manually

**2. Add some code to measure the time it takes for the sorting algorithm to execute (print the time at which the algorithm started, the time at which it ended and the time that elapsed while it was running).**

**3. Modify your selection, insertion and merge sort algorithms so they also generate their own input array and print the execution time to the console.**
