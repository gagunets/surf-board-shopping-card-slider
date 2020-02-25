// carousel
$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    dots: true,
    nav: true,
    navText:[
        "<div class='nav-btn prev-slide'><i class=\"fas fa-arrow-left\"></i></div>",
        "<div class='nav-btn next-slide'><i class=\"fas fa-arrow-right\"></i></div>"
    ],
    items: 1,
    touchDrag  : true,
    mouseDrag  : false
});


// main image switching

    const icons = document.getElementsByClassName("icon");

    for (let i = 0; i < icons.length; i++) {
        icons[i].onclick = function() {
            document.getElementById("main_icon").src = this.src;
        };
    }


    // highlight switch

const btnContainer = document.getElementById("img_switch");
const btns = btnContainer.getElementsByClassName("img_box");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    });
}


// tabs

function openTab(evt, name) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}