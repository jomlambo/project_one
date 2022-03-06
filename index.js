function link() {
    //This function allows the button to link to the Marriott website
    window.open("https://marriott.byu.edu/infosys/");
}

function colorCircle(finalGrade) {
    //color the circle green for 3.7 or higher, yellow for 3.4 or higher, and red for any lower.
         if (finalGrade>=3.7) {
             document.getElementById("myCircle").style.display = "block";                                         
             document.getElementById("myCircle").style.fill="green";
         }
         else if (finalGrade>=3.4) {
             document.getElementById("myCircle").style.display = "block";                                         
             document.getElementById("myCircle").style.fill="yellow";
         }
         else {
             document.getElementById("myCircle").style.display = "block";                                         
             document.getElementById("myCircle").style.fill="red";
         }
 }

 function clearCircle() {
     //clears of all boxes and drop-downs and resets everything to blanks.
     //also sets focus to IS201
     document.getElementById("myCircle").style.display = "none"; 
     document.getElementById("finalGrade").style.display='none';
     document.getElementById("0").value = "nada";
     document.getElementById("1").value = "nada";
     document.getElementById("2").value = "nada";
     document.getElementById("3").value = "nada";
     document.getElementById("4").value = "nada";
     document.getElementById("5").value = "0.00";
     document.getElementById("6").value = "0.00";
     document.getElementById("retake0").checked = false;
     document.getElementById("retake1").checked = false;
     document.getElementById("retake2").checked = false;
     document.getElementById("retake3").checked = false;
     document.getElementById("retake4").checked = false;
     document.getElementById("0").focus();
 }
 
 //function to pull the value of all class grades (checkboxes) 
 // and put it into a decimal value (ordered in an array)
 function takeGrade() {
     //array for holding the grades and gpa data
     var decimals =[];
     //for loop to go through each course and each retake box
 
     for(i=0;i<5;i++) {
     //variable to pull value from each course AND to pull from retake id's .
     //could make this better by changing course id's to 
     //start with course and then the number.
     let grade=parseInt(document.getElementById(i).value);
     let retakeV=document.getElementById("retake"+i);
     //if statement to check for retake
         if (retakeV.checked === true){
             grade+=1;
         }

     //if statement to pull the grade from each class dropdown. 
         if (document.getElementById(i).value === 'nada') {
             alert("You must fill out every box.")
             i=5;
         }
         else if (grade==100) {
             decimals[i]=4;
         }
         else if (grade==101){
             decimals[i]=3.7;
         }
         else if (grade==102){
             decimals[i]=3.4;
         }
         else if (grade==103){
             decimals[i]=3;
         }
         else if (grade==104){
             decimals[i]=2.7;
         }
         else if (grade==105){
             decimals[i]=2.4;
         }
         else if (grade==106){
             decimals[i]=2;
         }
         else if (grade==107){
             decimals[i]=1.7;
         }
         else if (grade==108){
             decimals[i]=1.4;
         }
         else if (grade==109){
             decimals[i]=1;
         }
         else if (grade==110){
             decimals[i]=.7;
         }
         else {
             decimals[i]=0;
         }
     }
     if (document.getElementById(5).value != 0 || document.getElementById(6).value != 0) {
     decimals.push(parseFloat(document.getElementById("5").value));
     decimals.push(parseFloat(document.getElementById("6").value));
     }
     else if (i===6) {
         decimals=[0];
     }
     else {
         alert(" GPA must be higher than 0")
         decimals=[0];
     }
     return decimals;
 }
 
 //function to take the various decimal values and put 
 //the weightings into the calculation /put out the final score.
 function finalGrade(gradeArray) {
     let finalGrade=0;
     finalGrade=((gradeArray[0]*.2)+(gradeArray[1]*.2)+(((gradeArray[2]
     +gradeArray[3]+gradeArray[4])*.2)/3)
     +((gradeArray[5])*.2)+(gradeArray[6])*.2); 
     if (gradeArray[0] !== 0) {
         colorCircle(finalGrade.toFixed(2));
         document.getElementById("finalGrade").innerHTML = "Weighted likelihood of getting into the program complete. Calculated GPA: " + finalGrade.toFixed(2);
         document.getElementById('finalGrade').style.display='block';
     }
     return finalGrade
 }