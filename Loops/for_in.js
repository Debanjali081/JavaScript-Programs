const student = {
    name: "Debanjali Lenka",
    branch: "CSE",
    mob_no: 9827780783,
    age: 21
}

for (const key in student) {
    console.log("key=", key, "value=", student[key])
}