/* index.html js */

//Start header Login Form

/* Clear Input Placeholder On Focus */

var email = document.getElementById("mail");
var palce = email.getAttribute("placeholder");

email.onfocus = function() {
    email.setAttribute("placeholder",'');
}

email.onblur = function() {
    email.setAttribute("placeholder",palce);
}

var pass = document.getElementById("pass");
var palce1 = pass.getAttribute("placeholder");

pass.onfocus = function() {
    pass.setAttribute("placeholder",'');
}

pass.onblur = function() {
    pass.setAttribute("placeholder",palce1);
}

//****************************************************************


/*Show & Hide Password*/

var show = document.getElementById("img");
show.onmouseenter = function() {
    pass.setAttribute("type","text");
}

show.onmouseleave = function() {
    pass.setAttribute("type","password");
}

//****************************************************************

/* validation */
var myButton = document.getElementById("butt");
myButton.onclick = function() {
    
    if(email.value == ""){
        email.focus();
    }
    
    if(pass.value == ""){
        pass.focus();
    }
}

//****************************************************************

//Start header sign up Form

var fname= document.getElementById("fname"),
    lname= document.getElementById("lname"),
    mob= document.getElementById("mob"),
    pass1= document.getElementById("pass1"),
    show1= document.getElementById("img1");


/* Clear Input Placeholder On Focus */

var fnamePlace = fname.getAttribute("placeholder"),
    lnamePlace = lname.getAttribute("placeholder"),
    mobilePlace = mob.getAttribute("placeholder"),
    passPlace = pass1.getAttribute("placeholder"),
    showPlace = show1.getAttribute("placeholder");

fname.onfocus = function() {
    fname.setAttribute("placeholder",'');
}

fname.onblur = function() {
    fname.setAttribute("placeholder",fnamePlace);
}

lname.onfocus = function() {
    lname.setAttribute("placeholder",'');
}

lname.onblur = function() {
    lname.setAttribute("placeholder",lnamePlace);
}

mob.onfocus = function() {
    mob.setAttribute("placeholder",'');
}

mob.onblur = function() {
    mob.setAttribute("placeholder",mobilePlace);
}

pass1.onfocus = function() {
    pass1.setAttribute("placeholder",'');
}

pass1.onblur = function() {
    pass1.setAttribute("placeholder",passPlace);
}



//****************************************************************

/*Show & Hide Password*/

var show1 = document.getElementById("img1");
show1.onmouseenter = function() {
    pass1.setAttribute("type","text");
}

show1.onmouseleave = function() {
    pass1.setAttribute("type","password");
}

//****************************************************************

/* validation */

var Button = document.getElementById("signupButton");
Button.onclick = function() {
    
    if(fname.value == ""){
        fname.focus();
    }
    
    if(lname.value == ""){
        lname.focus();
    }
    
    if(pass1.value == ""){
        pass1.focus();
    }
    
    if(mob.value == ""){
        mob.focus();
    }
}


//*****************************************************************************************************************************************

