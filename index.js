
function colorCircle() {
    /*if the GPA is 3.7 or above, display a green circle.
    If the GPA is 3.4 and above but less than 3.7, display a yellow circle.
    Otherwise display a red circle.*/

    // And how you can change its color:
        document.getElementById("myCircle").style.display = "block";                                         
        document.getElementById("myCircle").style.fill="green";
}
function clearCircle() {
    /*When the user clicks on the RESET button you should 
    call a JavaScript function called clearCircle() 
    and clear the circle (style.display = "none" and 
    style.fill = "none" for the element), clear the 
    output GPA, clear the overall GPA and the last 
    30 credits GPA, reset all drop downs to empty 
    and the checkboxes to false, and then set focus 
    to the IS202 drop down.*/
}


//function to pull the value of all class grades (checkboxes) 
// and put it into a decimal value (ordered in an array)
function takeGrade(gradeArray) {

    return gradeArray;
}

//function to take the various decimal values and put 
//the weightings into the calculation (ordered in an array)
function weightGrade(gradeArray) {
/*
IS 201 is worth 20%
IS 303 or CS142 is worth 20%
ACC 200, FIN 201, and MKTG 201 combined are worth 20%
The overall GPA is worth 20%
The last 30 GPA credits is worth 20%
*/
    return gradeArray;
}

//final function to pull all data and create the output(initially in an array)
function displayTotal(gradeArray){
    weightGrade(takeGrade(gradeArray));
    return 
}


