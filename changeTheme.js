let theme = window.localStorage.getItem('data-theme');
if (theme) {document.documentElement.setAttribute('data-theme',theme);}

const theme1btn = document.getElementById("btn1");
const theme2btn = document.getElementById("btn2");
const theme3btn = document.getElementById("btn3");


/********** set preferred theme *********/
if(theme === 'theme3'){

    // change css variables to theme3 css variables
    document.documentElement.style.cssText = "--mainbg : var(--theme3mainbg); --keypadbg : var(--theme3keypadbg); --screenbg : var(--theme3screenbg); --keybg1 : var(--theme3keybg1); --keyshadow1 : var(--theme3keyshadow1); --keybg2 : var(--theme3keybg2); --keyshadow2 : var(--theme3keyshadow2); --keybg3 : var(--theme3keybg3); --keyshadow3 : var(--theme3keyshadow3); --text1 : var(--text1theme3); --text2 : var(--text2theme3); --text3 : var(--text3theme3); --text4 : var(--text4theme3);"

    // hide second and first button and show third button
    theme2btn.style.cssText = "visibility: hidden";
    theme1btn.style.cssText = "visibility: hidden";
    theme3btn.style.cssText = "visibility: visible";

    //store theme 3
    window.localStorage.setItem('data-theme','theme3');
} else if(theme === 'theme2'){
    // change css variables to theme2 css variables
    document.documentElement.style.cssText = "--mainbg : var(--theme2mainbg); --keypadbg : var(--theme2keypadbg); --screenbg : var(--theme2screenbg); --keybg1 : var(--theme2keybg1); --keyshadow1 : var(--theme2keyshadow1); --keybg2 : var(--theme2keybg2); --keyshadow2 : var(--theme2keyshadow2); --keybg3 : var(--theme2keybg3); --keyshadow3 : var(--theme2keyshadow3); --text1 : var(--text1theme2); --text2 : var(--text2theme2); --text3 : var(--text3theme2); --text4 : var(--text4theme2);"

    // hide first and third button and show second button
    theme1btn.style.cssText = "visibility: hidden";
    theme3btn.style.cssText = "visibility: hidden";
    theme2btn.style.cssText = "visibility: visible";

    //store theme 2
    window.localStorage.setItem('data-theme','theme2');
} else{
    // change css variables to theme1 css variables
    document.documentElement.style.cssText = "--mainbg : var(--theme1mainbg); --keypadbg : var(--theme1keypadbg); --screenbg : var(--theme1screenbg); --keybg1 : var(--theme1keybg1); --keyshadow1 : var(--theme1keyshadow1); --keybg2 : var(--theme1keybg2); --keyshadow2 : var(--theme1keyshadow2); --keybg3 : var(--theme1keybg3); --keyshadow3 : var(--theme1keyshadow3); --text1 : var(--text1theme1); --text2 : var(--text2theme1); --text3 : var(--text3theme1); --text4 : var(--text4theme1);"

    // hide third and second button and show first button
    theme3btn.style.cssText = "visibility: hidden";
    theme2btn.style.cssText = "visibility: hidden";
    theme1btn.style.cssText = "visibility: visible";

    //store theme 1
    window.localStorage.setItem('data-theme','theme1');

}


/**** change from theme 1 to theme 2 *******/
theme1btn.addEventListener("click",() => {

    // change css variables to theme2 css variables
    document.documentElement.style.cssText = "--mainbg : var(--theme2mainbg); --keypadbg : var(--theme2keypadbg); --screenbg : var(--theme2screenbg); --keybg1 : var(--theme2keybg1); --keyshadow1 : var(--theme2keyshadow1); --keybg2 : var(--theme2keybg2); --keyshadow2 : var(--theme2keyshadow2); --keybg3 : var(--theme2keybg3); --keyshadow3 : var(--theme2keyshadow3); --text1 : var(--text1theme2); --text2 : var(--text2theme2); --text3 : var(--text3theme2); --text4 : var(--text4theme2);"

    // hide first button and show second button
    theme1btn.style.cssText = "visibility: hidden";
    theme2btn.style.cssText = "visibility: visible";

    //store theme 2
    window.localStorage.setItem('data-theme','theme2');
    
});

/****** change from theme 2 to theme 3 *********/
theme2btn.addEventListener("click",() => {
    // change css variables to theme3 css variables
    document.documentElement.style.cssText = "--mainbg : var(--theme3mainbg); --keypadbg : var(--theme3keypadbg); --screenbg : var(--theme3screenbg); --keybg1 : var(--theme3keybg1); --keyshadow1 : var(--theme3keyshadow1); --keybg2 : var(--theme3keybg2); --keyshadow2 : var(--theme3keyshadow2); --keybg3 : var(--theme3keybg3); --keyshadow3 : var(--theme3keyshadow3); --text1 : var(--text1theme3); --text2 : var(--text2theme3); --text3 : var(--text3theme3); --text4 : var(--text4theme3);"

    // hide second button and show third button
    theme2btn.style.cssText = "visibility: hidden";
    theme3btn.style.cssText = "visibility: visible";

    //store theme 3
    window.localStorage.setItem('data-theme','theme3');
    
});


/***** change from theme 3 to theme 1 */
theme3btn.addEventListener("click",() => {
    // change css variables to theme1 css variables
    document.documentElement.style.cssText = "--mainbg : var(--theme1mainbg); --keypadbg : var(--theme1keypadbg); --screenbg : var(--theme1screenbg); --keybg1 : var(--theme1keybg1); --keyshadow1 : var(--theme1keyshadow1); --keybg2 : var(--theme1keybg2); --keyshadow2 : var(--theme1keyshadow2); --keybg3 : var(--theme1keybg3); --keyshadow3 : var(--theme1keyshadow3); --text1 : var(--text1theme1); --text2 : var(--text2theme1); --text3 : var(--text3theme1); --text4 : var(--text4theme1);"

    // hide third button and show first button
    theme3btn.style.cssText = "visibility: hidden";
    theme1btn.style.cssText = "visibility: visible";

    //store theme 1
    window.localStorage.setItem('data-theme','theme1');
    
});

//window.localStorage.clear('data-item');