
// console.log (first_id.innerText) 

// second_id.innerText= "My DOM App"

// var firstClass= document.getElementsByClassName("first_class")
// console.log(firstClass);

// console.log(firstClass[1]);

// console.log(firstClass[2]);

// var secondClass= document.getElementsByClassName("second_class")
// console.log(secondClass);

// function printName () {
//     var userName= prompt ("your name")
//     document.write ("<h2>"+userName+"<h2>")

// }
// printName ()

// function printColor () {
//     var userColor= prompt ("enter your color")
//     var userNumber= +prompt ("enter your number")
//     for (var i=0; i<userNumber; i++) {
//         document.write ("<span>"+userColor+"<br>"+"<span>")
//     }
// }
// printColor ()

// function tagFunction1 () {
//     var userText= prompt ("enter your text")
//     var userTag= prompt ("enter your tag name")
//     document.write ("<"+userTag+">"+userText+"<"+userTag+"/>")
// }
// tagFunction()

// function tagFunction2 () {
//     var tagg= prompt ("enter your tag")
//     var textt= prompt ("enter your text")
//     var result= document.getElementById(tagg)
//     result.innerText= textt
// }
// tagFunction2 ()

// function someFunction () {
//     var inputType= prompt ("enter your input type")
//     document.write ("<input type="+inputType+">")
// }
// someFunction ()

// function classFunction (className, text) {
//     var elemArray= document.getElementsByClassName(className)
//     for (var i=0; i<elemArray.length; i++) {
//         elemArray[i].innerHTML= text
//     }
//     document.write (elemArray)
// }
// classFunction (prompt("class name"), prompt ("your text"))

// function spanFunction () {
//     var pClass= document.getElementsByTagName ("p")
//     for (var i=0; i<pClass.length;i++) {
//         pClass[i].innerHTML= "<span>"+"hello world"+"</span"
//     }
// }
// spanFunction ()

// //exercise 13//
// function printInfo () {
//     var userName= prompt ("enter your name") 
//     var lastName= prompt ("enter your last name")
//     var age= +prompt ("enter your age") 
//     document.write (userName+lastName+age)
//     if (age>18) {
//         document.write (userName+lastName+age+"<br>"+"<input>")
//     }
// }
// printInfo ()

//exercise 14//


// //exercise 15//
// var employ= {
//     firstName: prompt ("enter first name"),
//     lastName: prompt ("enter your last name"),
//     email: prompt ("enter your email"),
//     department: prompt ("enter your department")
// }
// document.body.innerHTML+= "<h1>"+employ.firstName+"</h1>"
// document.body.innerHTML+= "<h2>"+employ.lastName+"</h2>"
// document.body.innerHTML+= "<h3>"+employ.email+"</h3>"
// document.body.innerHTML+= "<h4>"+employ.department+"</h4>"

// //exrecise 16//
// function printObject () {
//     var userNumber= +prompt ("enter your number")
//     for (var i=0; i<userNumber; i++) {
//         var building= {
//             contractorName: prompt("enter your Contractor name"),
//             companyName: prompt ("enter your company name"),
//             floors: prompt ("Several floors"),
//             apartments: prompt ("Number of apartments")
//         } 
//         document.body.innerHTML+= "<h1>"+building.contractorName+" "+building.companyName+" "+building.floors+" "+building.apartments+" "+"</h1>"
//     }
// }
// printObject ()

// //exrecise 17//
// var counter= 0;
// function printStores () {
//     var userNumber= +prompt ("enter your number")
//     for (var i=0; i<userNumber;i++) {
//         var store= {
//             storeName: prompt ("enter the store name"),
//             adress: prompt ("enter your adress"),
//             departments: +prompt ("enter number of Departments"),
//             employees: +prompt ("number of employees")
//         }
//         if (store.employees>10) {
//             document.body.innerHTML+= "<h2>"+store.storeName+"</h2>"
//             counter++
//         }
//     }

// }
// printStores ()

// //exrecise 18// 
// function elementNumber () {
//     console.log(counter);
// }
// elementNumber ()

// //exercise 19//
// function listFunction () {
//     var userNumber= +prompt ("enter your number")
//     for (var i=0; i<userNumber; i++) {
//         var person= {
//             fullName: prompt ("enter your full name"),
//             company: prompt ("enter your company name"),
//             phone: prompt ("enter your phone number"),
//             email: prompt ("enter your email")
//         }
//         document.getElementById("list").innerHTML+= "<li>"+person.fullName+"</li>"
//     }
// }
// listFunction ()





