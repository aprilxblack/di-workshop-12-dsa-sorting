function swap(ary, firstIndex, secondIndex){
    var temp = ary[firstIndex];
    ary[firstIndex] = ary[secondIndex];
    ary[secondIndex] = temp;
}

function selectionSort(){
    var ary = [];

    var start = Date.now();

    for(i = 0; i < 100000; i++){
    var number = Math.floor(Math.random() * 10000);
    ary.push(number);
    }

    var len = ary.length,
        min;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (ary[j] < ary[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(ary, i, min);
        }
    }
    var finish = Date.now()
    console.log(finish - start + 'ms');

    return ary;
}

console.log(selectionSort());