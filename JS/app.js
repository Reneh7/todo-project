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