let n = prompt("Enter a number");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;

}
console.log(arr)

let sum = arr.reduce((first, second) => {
    return first + second

});
console.log(sum)