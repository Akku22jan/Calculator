let theme = window.localStorage.getItem('data-theme');

const theme1btn = document.getElementById("btn1");
const theme2btn = document.getElementById("btn2");
const theme3btn = document.getElementById("btn3");


/********** set preferred theme *********/
if(theme === 'theme3'){
    updateTheme3();
} else if(theme === 'theme2'){
    updateTheme2();
} else{
    updateTheme1();
}


/**** change from theme 1 to theme 2 *******/
theme1btn.addEventListener("click",() => {
    updateTheme2();
});

/****** change from theme 2 to theme 3 *********/
theme2btn.addEventListener("click",() => {
    updateTheme3();
});


/***** change from theme 3 to theme 1 */
theme3btn.addEventListener("click",() => {
    updateTheme1();    
});


function updateTheme1(){
    //remove classes for theme 2 and theme 3
    document.documentElement.classList.remove('theme2');
    document.documentElement.classList.remove('theme3');
    // hide third and second button and show first button
    theme3btn.style.cssText = "visibility: hidden";
    theme2btn.style.cssText = "visibility: hidden";
    theme1btn.style.cssText = "visibility: visible";

    //store theme 1
    window.localStorage.setItem('data-theme','theme1');

}

function updateTheme2(){
    //remove class for theme 3 and add class for theme 2
    document.documentElement.classList.add('theme2');
    document.documentElement.classList.remove('theme3');
    // hide first and third button and show second button
    theme1btn.style.cssText = "visibility: hidden";
    theme3btn.style.cssText = "visibility: hidden";
    theme2btn.style.cssText = "visibility: visible";

    //store theme 2
    window.localStorage.setItem('data-theme','theme2');
}

function updateTheme3() {
    //remove class for theme 2 and add class for theme 3
    document.documentElement.classList.add('theme3');
    document.documentElement.classList.remove('theme2');
    //document.documentElement.classList.remove('theme1');
    // hide second and first button and show third button
    theme2btn.style.cssText = "visibility: hidden";
    theme1btn.style.cssText = "visibility: hidden";
    theme3btn.style.cssText = "visibility: visible";

    //store theme 3
    window.localStorage.setItem('data-theme','theme3');
}