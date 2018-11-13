var ary = [];
var miliseconds = 0;

for(i = 0; i < 1000000; i++){
    var number = Math.floor(Math.random() * 500);
    ary.push(number);
}

function startTheTimer(){
    setInterval(function(){
        miliseconds++;
    }, 1000)
}

function mergeSort (arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  // compare the arrays item by item and return the concatenated result
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
    
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

  var start =  new Date();
  console.log(mergeSort(ary));
  var finish = new Date();
  console.log(start.toISOString())
  console.log(finish.toISOString());
  console.log(finish - start + 'ms');