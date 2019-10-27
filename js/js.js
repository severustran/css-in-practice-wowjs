new WOW().init();

let animateList = ['bounce', 'shake', 'bounceIn', 'jackInTheBox', 'heartBeat'];
let colorList = ['red', 'blue', 'cyan', 'yellow', 'tomato', 'aqua', 'brown'];

let myListElement = document.querySelectorAll(".items > div");
//console.log(myListElement);
myListElement.forEach(element => {
    element.classList.add("item");
});

let myElement = document.querySelectorAll(".item");

myElement.forEach(element => {
    element.classList.add("wow", animateList[Math.floor(Math.random() * animateList.length)]);
    //element.style.background = "linear-gradient(" + colorList[Math.floor(Math.random() * colorList.length)] + "," + colorList[Math.floor(Math.random() * colorList.length)] + ")";
    element.setAttribute("data-wow-iteration", "3");
    element.setAttribute("data-wow-offset", "200");
});