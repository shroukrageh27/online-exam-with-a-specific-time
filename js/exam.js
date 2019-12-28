
/* exam.html js */

// Start header

//get Clock



var nowww = new Date(),
Sec = nowww.getSeconds();

function showTime() {
    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();
    
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    
    document.getElementById("clockk").textContent = hours + ":" + minutes + ":" + seconds;
    if(seconds == (Sec + 10) || seconds == ((Sec + 10)-60)) {
        clearInterval(time);
        document.getElementById("clockk").textContent = "time is over ... ";
        document.getElementById("getResult").style.display = "none";
    
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