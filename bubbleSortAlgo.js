
function bubbleSort(a) {
    var start = Date.now()
    console.log(start.toString())
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
    var finish = Date.now();
    console.log(finish.toString())
    console.log(finish - start);
}
 
var ary = [];

for(i = 0; i < 1000000; i++){
    var number = Math.floor(Math.random() * 500);
    ary.push(number);
}

//don't even try it, it takes forever
bubbleSort(ary);
console.log(ary);
console.log(ary.length);