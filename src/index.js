
exports.min = function min (array) {
    if(arguments.length == 0) return 0;
    let len = array.length;
    if (len == 0) return 0;
    let min_value = array[0];
    for(let i = 1; i < len; i++) {
        if(array[i] < min_value)
            min_value = array[i];
    }    
    return min_value;
}

exports.max = function max (array) {
    if(arguments.length == 0) return 0;
    let len = array.length;
    if (len == 0) return 0;
    let max_value = array[0];
    for(let i = 1; i < len; i++) {
        if(array[i] > max_value)
            max_value = array[i];
    }    
    return max_value;
}

exports.avg = function avg (array) {
    if(arguments.length == 0) return 0;
    let len = array.length;
    if (len == 0) return 0;
    let summa = 0;
    for(let i = 0; i < len; i++) summa += array[i]
    return summa/len;
}
