function opm1() {
    var dropdown1 = document.getElementById("m1");
    var dropdown2 = document.getElementById("m2");
    var dropdown3 = document.getElementById("m3");
    var dropdown4 = document.getElementById("m4");
    var dropdown5 = document.getElementById("m5");
    var dropdowncont1 = dropdown1.nextElementSibling;
    var dropdowncont2 = dropdown2.nextElementSibling;
    var dropdowncont3 = dropdown3.nextElementSibling;
    var dropdowncont4 = dropdown4.nextElementSibling;
    var dropdowncont5 = dropdown5.nextElementSibling;
    if (dropdowncont2.classList.contains("show")) {
        dropdowncont2.classList.remove("show");
    }
    if (dropdowncont3.classList.contains("show")) {
        dropdowncont3.classList.remove("show");
    }
    if (dropdowncont4.classList.contains("show")) {
        dropdowncont4.classList.remove("show");
    }
    if (dropdowncont5.classList.contains("show")) {
        dropdowncont5.classList.remove("show");
    }
    dropdowncont1.classList.toggle("show")
}
function opm2() {
    var dropdown1 = document.getElementById("m1");
    var dropdown2 = document.getElementById("m2");
    var dropdown3 = document.getElementById("m3");
    var dropdown4 = document.getElementById("m4");
    var dropdown5 = document.getElementById("m5");
    var dropdowncont1 = dropdown1.nextElementSibling;
    var dropdowncont2 = dropdown2.nextElementSibling;
    var dropdowncont3 = dropdown3.nextElementSibling;
    var dropdowncont4 = dropdown4.nextElementSibling;
    var dropdowncont5 = dropdown5.nextElementSibling;
    if (dropdowncont1.classList.contains("show")) {
        dropdowncont1.classList.remove("show");
    }
    if (dropdowncont3.classList.contains("show")) {
        dropdowncont3.classList.remove("show");
    }
    if (dropdowncont4.classList.contains("show")) {
        dropdowncont4.classList.remove("show");
    }
    if (dropdowncont5.classList.contains("show")) {
        dropdowncont5.classList.remove("show");
    }
    dropdowncont2.classList.toggle("show")
}
function opm3() {
    var dropdown1 = document.getElementById("m1");
    var dropdown2 = document.getElementById("m2");
    var dropdown3 = document.getElementById("m3");
    var dropdown4 = document.getElementById("m4");
    var dropdown5 = document.getElementById("m5");
    var dropdowncont1 = dropdown1.nextElementSibling;
    var dropdowncont2 = dropdown2.nextElementSibling;
    var dropdowncont3 = dropdown3.nextElementSibling;
    var dropdowncont4 = dropdown4.nextElementSibling;
    var dropdowncont5 = dropdown5.nextElementSibling;
    if (dropdowncont2.classList.contains("show")) {
        dropdowncont2.classList.remove("show");
    }
    if (dropdowncont1.classList.contains("show")) {
        dropdowncont1.classList.remove("show");
    }
    if (dropdowncont4.classList.contains("show")) {
        dropdowncont4.classList.remove("show");
    }
    if (dropdowncont5.classList.contains("show")) {
        dropdowncont5.classList.remove("show");
    }
    dropdowncont3.classList.toggle("show")
}
function opm4() {
    var dropdown1 = document.getElementById("m1");
    var dropdown2 = document.getElementById("m2");
    var dropdown3 = document.getElementById("m3");
    var dropdown4 = document.getElementById("m4");
    var dropdown5 = document.getElementById("m5");
    var dropdowncont1 = dropdown1.nextElementSibling;
    var dropdowncont2 = dropdown2.nextElementSibling;
    var dropdowncont3 = dropdown3.nextElementSibling;
    var dropdowncont4 = dropdown4.nextElementSibling;
    var dropdowncont5 = dropdown5.nextElementSibling;
    if (dropdowncont2.classList.contains("show")) {
        dropdowncont2.classList.remove("show");
    }
    if (dropdowncont3.classList.contains("show")) {
        dropdowncont3.classList.remove("show");
    }
    if (dropdowncont1.classList.contains("show")) {
        dropdowncont1.classList.remove("show");
    }
    if (dropdowncont5.classList.contains("show")) {
        dropdowncont5.classList.remove("show");
    }
    dropdowncont4.classList.toggle("show")
}
function opm5() {
    var dropdown1 = document.getElementById("m1");
    var dropdown2 = document.getElementById("m2");
    var dropdown3 = document.getElementById("m3");
    var dropdown4 = document.getElementById("m4");
    var dropdown5 = document.getElementById("m5");
    var dropdowncont1 = dropdown1.nextElementSibling;
    var dropdowncont2 = dropdown2.nextElementSibling;
    var dropdowncont3 = dropdown3.nextElementSibling;
    var dropdowncont4 = dropdown4.nextElementSibling;
    var dropdowncont5 = dropdown5.nextElementSibling;
    if (dropdowncont2.classList.contains("show")) {
        dropdowncont2.classList.remove("show");
    }
    if (dropdowncont3.classList.contains("show")) {
        dropdowncont3.classList.remove("show");
    }
    if (dropdowncont4.classList.contains("show")) {
        dropdowncont4.classList.remove("show");
    }
    if (dropdowncont1.classList.contains("show")) {
        dropdowncont1.classList.remove("show");
    }
    dropdowncont5.classList.toggle("show")
}
function openNav() {
    document.getElementById("mobsidehead").style.visibility = "visible";
    document.getElementById("mobsidehead").style.opacity = "1";
    document.getElementById("mobsidehead").style.transform = "translateX(0)";
}
function closeNav() {
    document.getElementById("mobsidehead").style.visibility = "hidden";
    document.getElementById("mobsidehead").style.opacity = "0";
    document.getElementById("mobsidehead").style.transform = "translateX(-100%)";
    var dropdown1 = document.getElementById("m1");
    var dropdown2 = document.getElementById("m2");
    var dropdown3 = document.getElementById("m3");
    var dropdown4 = document.getElementById("m4");
    var dropdown5 = document.getElementById("m5");
    var dropdowncont1 = dropdown1.nextElementSibling;
    var dropdowncont2 = dropdown2.nextElementSibling;
    var dropdowncont3 = dropdown3.nextElementSibling;
    var dropdowncont4 = dropdown4.nextElementSibling;
    var dropdowncont5 = dropdown5.nextElementSibling;
    dropdowncont1.classList.remove("show");
    dropdowncont2.classList.remove("show");
    dropdowncont3.classList.remove("show");
    dropdowncont4.classList.remove("show");
    dropdowncont5.classList.remove("show");
}
window.onclick = closeNav()