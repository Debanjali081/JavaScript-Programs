// function vowelDetector(str) {
//     let arr = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
//     let vowelArr = [];
//     for (let char of str) {
//         if (arr.includes(char)) {
//             vowelArr.push(char)
//         }

//     }
//     return vowelArr;

// }
// let val = vowelDetector("Debanjali")
// console.log(val)
// console.log(val.length)


// function Arrow

let func=(str)=>{
    let arr=['A','E','I','O','U','a','e','i','o','u']
    let foundVowel=[];
    for (const char of str) {
        if(arr.includes(char)){
            foundVowel.push(char)
        }
        
    }
    return foundVowel;
}
let res=func("Debanjali")
console.log(res)
console.log(res.length)



