const fiveNumbers = [ 1,2,3,4,5 ];
const personalInfo =[
    name = "bernadette" ,
    age = "18",
    Height = "158",
    location = "beirut",
    nationality = "lebanese",
]
const nextThreeNumbers = [5 ,6 ,7];
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];
console.log(allNumbers);

const additionalinfo =[
    hobby = "reading" ,
    education = "school",
]
const fullinfo =[...personalInfo, ...additionalinfo];
console.log(fullinfo);