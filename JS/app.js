var name=window.prompt("Please Enter Your Name");
var gender=window.prompt("Please Enter Your Gender(Male/Female)");
if( gender === "Male")
    {
        window.alert("You Selected Male");
    }
    else if (gender == "Female")
    {
        window.alert("You Selected Female");
    }
    else 
    {
        window.alert("Invalid Gender Please select Male or Female");
        window.prompt("Please Enter Your Gender(Male/Female)");
    }
var age= window.prompt("Please Enter Your Age");
if( age <= 0)
{
    window.alert("Invalid Age");
    window.prompt("Please Enter Your Age");
}
else 
 window.alert("Thank You");
 var confirmation=window.confirm("Do You Want To Skip The Welcoming Message");
 if (confirmation == false )
 {
    if( gender === "Male")
    {
        window.alert("Hallo Mr "+ name);
    }
    else if (gender === "Female")
    {
        window.alert("Hallo Ms " + name);
    }
    else 
    {
        window.alert("Hallo " + name);
    }
 } 

 let question1="Are you jordanien?";
 let question2="Is your favorite color red?";
 let question3="Are you over 18 years old?";

 function questions(string1)
 {
    let answers=[];
    let question= prompt(string1);
    while(question !== "Yes" && question !== "No")
    {
        if(question === "")
        {
            window.alert("Invalid Answer!")
            question= prompt(string1);
        }
        else
       question= window.prompt("please answer with Yes or No")
    }
    answers.push(question);
    console.log(ansFunction(answers));
    return question;
 }

 console.log(questions(question1));
 console.log(questions(question2));
 console.log(questions(question3));

 function ansFunction(arr)
 {
    for (let i = 0; i < arr.length; i++)
    {
       console.log(arr[i]);
    }
    return arr;
 }
 
 
  
 