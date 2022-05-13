console.log("Working...");

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;
console.log(studentRecords);


//question1//
let q1 = studentRecords.map(s1 =>s1.name.toUpperCase());
console.log(q1);

//question2//
let q2 = studentRecords.filter(mark => mark.marks >50);
console.log(q2);


//question 3//
let q3 = studentRecords.filter(x=>x.marks>50 && x.id>120)
console.log(q3);

//question 4//
let q4 = studentRecords.reduce((acc,cur)=>  //accumulator current
          acc = acc+cur.marks,0)
          console.log(q4);

//question 5//
let q5 = studentRecords.filter(q5 =>q5.marks>50);
console.log(q5);
console.log(q5.map(x => x.name))

//question 6//
let q6 = studentRecords.filter(s => s.id>120)
 .reduce((acc,cur) => acc+cur.marks,0)
console.log(q6)

//question 7//
let q7 = studentRecords.map (function(mark){
    if(mark.marks < 50){
        mark.marks +=15
    };
    return mark;
}).filter(mark => mark.marks > 50).reduce((acc,cur) => acc+cur.marks,0);
console.log(q7);

//question8//
let array =[
    {Name:"Smily" , RollNo:30 , Class:"4th year" },
    {Name:"Devi" , RollNo:32 , Class:"4th year" },
    {Name:"Salma" , RollNo:33 , Class:"3th year" },
    {Name:"Diya" , RollNo:34 , Class:"2th year" },
    {Name:"Tina" , RollNo:35 , Class:"1th year" },
]
console.log(array)
 