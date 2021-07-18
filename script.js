function toggleNav() {
    document.getElementsByClassName("main-nav")[0].classList.toggle("mobile-active");

    if(document.getElementById("hamburger").src.includes("images/icon-hamburger.svg")) {
        document.getElementById("hamburger").src = "images/icon-close.svg";
        document.getElementById("logo").src = "images/logo-bookmark-mobile-a.svg";
        document.getElementsByClassName("images")[0].classList.add("mobile-nav-active");
        document.body.style.overflowY = "hidden";
    } else {
        document.getElementById("hamburger").src = "images/icon-hamburger.svg";
        document.getElementById("logo").src = "images/logo-bookmark.svg";
        document.getElementsByClassName("images")[0].classList.remove("mobile-nav-active");
        document.body.style.overflowY = "scroll";
    }
    
}

function slide(input) {
    var target = "move-" + input;
    var targetName = input + "-toggle";
    var slider = document.getElementsByClassName("moving-underline")[0];
    slider.classList.remove(slider.classList[1]);
    slider.classList.add(target);
    
    var text = document.getElementsByClassName("tgls");
    Array.from(text).forEach(element => {
        element.classList.remove("selected");
    });

    document.getElementById(targetName).classList.add("selected");
}

function showUnderline(position) {
    var underlines = document.getElementsByClassName("underline-mobile");
    var toggle = document.getElementsByClassName("tglm");

    Array.from(underlines).forEach(underline => {
        underline.style.background = "transparent";
    });

    Array.from(toggle).forEach(tog => {
        tog.style.color = "hsl(229, 8%, 60%)";
    });

    var show = "underline-" + position;
    document.getElementsByClassName(show)[0].style.background = "hsl(0, 94%, 66%)";

    var active = position + "-toggle-m";
    document.getElementById(active).style.color = "hsl(229, 31%, 21%)";
}


function toggleTab(input, num) {

    var tabs = document.getElementsByClassName("tab");
    Array.from(tabs).forEach( tab => {
        tab.style.display = "none";
    });

    document.getElementById(input).style.display = "block";

    document.getElementById("tab-image").src = "images/illustration-features-tab-" + num + ".svg";
}

function toggleAccordion(answer, icon) {
    document.getElementById(answer).classList.toggle("display");
    document.getElementById(icon).classList.toggle("flip");
    document.getElementById(icon).classList.toggle("orange");
}

function emailSubmit(event) {
    event.preventDefault();
    
    var input = document.getElementById("email").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.match(mailformat)) {
        document.getElementById("error").classList.remove("email-err-show");
        document.getElementById("txt-area").classList.remove("email-error");
        document.getElementById("error-icon").style.visibility = "hidden";
        document.getElementById("txt-area").classList.add("email-success");
        document.getElementById("email").value = "submitted!";
    } else {
        document.getElementById("txt-area").classList.remove("email-success");
        document.getElementById("error").classList.add("email-err-show");
        document.getElementById("txt-area").classList.add("email-error");
        document.getElementById("error-icon").style.visibility = "visible";
    }
}

const form = document.getElementById('email-form');
form.addEventListener('submit', emailSubmit);