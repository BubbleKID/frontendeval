/*
* https://frontendeval.com/questions/array-prototype-map
*
* Implement a barebones Array.prototype.map function
*/

function map(array, callback) {
    let result = [];
    
    if (!Array.isArray(array)) return 'Invalid array';
    if (typeof callback !== 'function') return 'Invalid callback';
    
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);
// [2, 4, 6, 8, 10];