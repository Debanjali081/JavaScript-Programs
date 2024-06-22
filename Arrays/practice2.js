let arr = [250, 645, 300, 900, 50];
let arr2 = [];



for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - arr[i] / 10;
    arr2.push(arr[i])

} console.log(arr2)
