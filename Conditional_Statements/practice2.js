function calucateGrade(mark) {
    let grade;
    if (mark >= 90 && mark <= 100) {
        grade = 'A';
    }
    else if (mark >= 70 && mark <= 89) {
        grade = 'B';

    }
    else if (mark >= 60 && mark <= 69) {
        grade = 'C';

    }
    else if (mark >= 50 && mark <= 59) {
        grade = 'D';

    }
    else if (mark >= 0 && mark <= 49) {
        grade = 'F';

    }
    console.log("Your mark is ", mark, "And grade is ", grade)
}
calucateGrade(85)