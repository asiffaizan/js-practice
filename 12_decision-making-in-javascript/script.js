const username = prompt('Please Enter Your Name.') || 'ProCoder';
const userAge = parseInt(prompt('Please Enter Your Age.')) || 24;
const userGender = confirm("Are you male?");

debugger
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);
console.log(`Gender: ${userGender}`);

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log(`And ${userGender?"he":"she"} is playing.`);
}

else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log(`And ${userGender?"he":"she"} is learning science and maths.`);
}

else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log(`And ${userGender?"he":"she"} is learning computer science.`);
}

else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log(`And ${userGender?"he":"she"} is a web developer.`);
}

else {
    console.log(`${username} is retired.`);
    console.log(`And ${userGender?"he":"she"} reads newspaper.`);
}

console.log('Program Ended!!');