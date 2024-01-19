var navCount = 0;
var emma = window.scroll;

function testScroll() {
    console.log("itWorked")
    window.scroll(0, 0);
}

function scrollFunc() {
       console.log("emma")
       window.scroll(0, 150);
       setTimeout(testScroll, 5000)
}

function navShowHide() {
    navCount += 1;
    console.log(navCount)
    if (navCount % 2 == 1){
        document.getElementById("nav").style.display = "flex" 
        document.getElementById("nav").style.width = "60vw" 
        document.getElementById("nav").style.justifyContent = "space-evenly" 
    } else {
        document.getElementById("nav").style.display = "none" 
    }
}
 