// We are given array of marks of students. Filter out the marks of students  that scored 90+ .

let marks=[80,90,20,30,57,90,100,107,105];

let highScorer=marks.filter((val)=>{
    return val>90;
});
console.log(highScorer)