// SLIDE
function show(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length){
        slide_index = 1;
    }
    else if (n < 1){
        slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}


let slide_index = 1;
show(slide_index);

function plus(n) {
    show(slide_index += n);
}


// ABOUT
function about(small){
    let full = document.getElementById("box_image");
    full.src = small.src;
}