/**
alogritham for bubble sort. Not that native javascript array.sort() uses the same logic
 */
function bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length-1; i++) {
        //Number of passes
        for (var j = 0; j <(length - i); j++) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
    return items;
}

var items = [5,6,7,1,3,2,9,8,10,10,144,123,12];

console.log(bubbleSort(items));
