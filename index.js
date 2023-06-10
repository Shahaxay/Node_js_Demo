console.log("hello world");

//fat arrow function
const product=(a,b)=>a*b;

console.log(product(5,6));

//student object
const student={

name:"AK",
phone:"123"

}

//displaying name of the student object

console.log(student.name)

//map
const ar=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const modified_ar=ar.map((ele)=>{
    if(ele===' '){
        return 'empty string';
    }
    return ele;
})
console.log(modified_ar);