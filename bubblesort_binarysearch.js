var array_sort = [4, 6, 2, 3, 33 ,64, 765, 88,24,765,89745,9956,345,4578,9678,3534,22,567,64,52,22,12,1564,6546,345,756,678,89,675,9788,567,454,33,44,23,12,245,4466,0,2];

// bubble sort function
function bubbleSort(array_sort) {

    for(var i = 0; i < array_sort.length; i++) {
        for(var j = 0; j < array_sort.length - i - 1; j++) {
            if(array_sort[j] > array_sort[j+1]) {
                var temp = array_sort[j]
                array_sort[j] = array_sort[j+1]
                array_sort[j+1] = temp
            }
        }
    }
    console.log(array_sort)
}

bubbleSort(array_sort);

// binary search function
function binarySearch(arr, i) {
    var mid = Math.floor(arr.length/2)
    if(arr[mid] === i) {
        console.log("Value match", arr[mid])
        return true
    }
    else if(arr[mid] < i && arr.length > 1) {
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i)
    }
    else if(arr[mid] > i && arr.length > 1) {
        binarySearch(arr.splice(0, mid), i)
    }
    else {
        console.log("Value not found", i)
        return false
    }
}
binarySearch(array_sort, 99526)