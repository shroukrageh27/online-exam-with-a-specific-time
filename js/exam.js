
/* exam.html js */

// Start header

//get Clock



var minutesCount=0,
    secondsCount=0;

function showTime() {
    secondsCount++;
    if(secondsCount == 60){
        secondsCount=0;
        minutesCount++;
    }
    
    if(secondsCount <10){
        secondsCount = "0"+secondsCount;
        
    }
    
    
    document.getElementById("examClock").textContent = "00" + ":" + "0" + minutesCount +":" + secondsCount;
    
    if(minutesCount == 5){
        document.getElementById("examClock").textContent = "Time is over ... ";
        document.getElementById("getResult").style.display="none";
        clearInterval(time);
    }

}


var time = setInterval(showTime,1000);




// log out

document.getElementById("logButton").onclick = function() {
    window.location.href="file:///C:/Users/Shrouk/Videos/front_end_doneeeee/Applications/onlineExam%20(html,css,js)/index.html";
}

// End header

//*****************************************************************************************


//Start Exam

document.getElementById("getResult").onclick = function() {
    var count = 0;
    
    if(document.myform.q1.value === "0")
        count++;
    if(document.myform.q2.value === "350")
        count++;
    if(document.myform.q3.value === "1680")
        count++;
    if(document.myform.q4.value === "1")
        count++;
    if(document.myform.q5.value === "3")
        count++;
    
    alert("you get "+count +" / 5");
    
}

//End Exam

//***********************************************************************************************************************************************