/*
name score date passed
Jane 95 2020-01-24 true
Joe 77 2018-05-14 true
Jack 59 2019-07-05 false
Jill 88 2020-04-22 true
*/
const submissions = [
    {name:'Jane', score:95, date:'2020-01-24', passed: true},
    {name:'Joe', score:77, date:'2018-05-14', passed: true},
    {name:'Jack', score:59, date:'2019-07-05', passed: 0},
    {name:'Jill', score:88, date:'2020-04-22', passed: true},
    {name:'Jack', score:99, date:'2012-07-05', passed: true},
];

function deleteSubmissionByIndex(array, index){
    array.splice(index,1);
}

function deleteSubmissionByName(array, name){
    const index = array.findIndex((element)=>{
        return element.name === name
    });
    if(index>=0){
        array.splice(index,1);
    }
    
}
/*
 Parameter(s): array, index, score
○ Functionality: update an object’s score in the array at the specified index. Use
conditional statements to set the value for the passed property to true if the
score is greater than or equal to 60 and false otherwise.
*/
function editSubmission(array, index, score){
    array[index].score = score;
    array[index].passed = score >= 60;   
}
//editSubmission(submissions, 2, 60);
/*
Parameter(s): array, name
○ Functionality: return the object in the array that has the provided name. Use the
find method.
*/
function findSubmissionByName(array, name){
    return array.find((element)=>{
        return element.name === name
    });
}

function findLowestScore(array){
    let lowestScore= array[0];
    array.forEach(sub=>{
        lowestScore = lowestScore.score > sub.score ? sub : lowestScore;
        if(lowestScore.score > sub.score){
            lowestScore = sub
        } 
    })
    return lowestScore
}

function findAverageScore(array){
    let sum = 0;
    for(const sub of array){ //loop through all elements of array
        sum = sum + sub.score //add all elements score together
    }
    return sum/array.length //return sum of all scores from loop divide by array length
}

function filterPassing(array){
    const passing = array.filter(element => element.passed )
    return passing;
}

function filter90AndAbove(array){
    const passing = array.filter(element => {
        element.score >= 90
    } )
    return passing;
}
//deleteSubmissionByName(submissions,'Jack');
console.log(filter90AndAbove(submissions))
//console.log(submissions);