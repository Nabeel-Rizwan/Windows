let taskbar = document.getElementsByClassName("taskbar")[0]
let start = document.getElementsByClassName("start")[0]
let notification = document.getElementsByClassName("notification")[0]
let right = document.getElementsByClassName("right")[0]
let nabeel = document.getElementsByClassName("nabeel")[0]


taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(start.style.bottom == "50px"){
        start.style.bottom = "-655px"
    }
    else{
        start.style.bottom = "50px"
    }
})

right.addEventListener("click", ()=>{
if(notification.style.bottom == "50px"){
    notification.style.bottom = "-655px"
}
else{
    notification.style.bottom = "50px"
}
});

