let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n + 2);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("main-img");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

const images = document.querySelectorAll('.bigimgs .main-img');

images.forEach(container => {
    const image = container.querySelector('img');
  
    container.addEventListener('mousemove', handleMouseMove);
  
    function handleMouseMove(event) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
  
      const mouseX = event.pageX - container.offsetLeft;
      const mouseY = event.pageY - container.offsetTop;
  
      const xPercentage = (mouseX / containerWidth) * 100;
      const yPercentage = (mouseY / containerHeight) * 100;
  
      const scaleFactor = 1.4;
      const scaledWidth = containerWidth * scaleFactor;
      const scaledHeight = containerHeight * scaleFactor;
  
      const translateX = Math.min(Math.max((containerWidth - scaledWidth) * (mouseX / containerWidth), -containerWidth + scaledWidth), 0);
      const translateY = Math.min(Math.max((containerHeight - scaledHeight) * (mouseY / containerHeight), -containerHeight + scaledHeight), 0);
  
      image.style.transformOrigin = `${xPercentage}% ${yPercentage}%`;
      image.style.transform = `scale(${scaleFactor}) translate(${translateX}px, ${translateY}px)`;
    }
  
    container.addEventListener('mouseleave', () => {
      image.style.transformOrigin = 'center center';
      image.style.transform = 'scale(1) translate(0, 0)';
    });
  });

const numberInput = document.getElementById('qty');
const increaseBtn = document.getElementById('qtyplus');
const decreaseBtn = document.getElementById('qtyminus');
increaseBtn.addEventListener('click', () => {
    let value = parseInt(numberInput.value);
    if (value < 10) {
        value += 1;
        numberInput.value = value;
    }
});
decreaseBtn.addEventListener('click', () => {
    let value = parseInt(numberInput.value);
    if (value > 1) {
        value -= 1;
        numberInput.value = value;
    }
});
numberInput.addEventListener('input', () => {
    let value = parseInt(numberInput.value);
    if (value > 10) {
        numberInput.value = 10;
    }
});

function showcont1() {
    document.getElementById("desc").style.color = "#00a00d"
    document.getElementById("desc").style.border = "1px solid #00a00d"
    document.getElementById("spec").style.color = "#000"
    document.getElementById("spec").style.border = "1px solid #dfe2e1"
    document.getElementById("rev").style.color = "#000"
    document.getElementById("rev").style.border = "1px solid #dfe2e1"
    document.getElementById("vend").style.color = "#000"
    document.getElementById("vend").style.border = "1px solid #dfe2e1"
    document.getElementById("desccont").style.display = "block"
    document.getElementById("speccont").style.display = "none"
    document.getElementById("revcont").style.display = "none"
    document.getElementById("vendcont").style.display = "none"
}
function showcont2() {
    document.getElementById("spec").style.color = "#00a00d"
    document.getElementById("spec").style.border = "1px solid #00a00d"
    document.getElementById("desc").style.color = "#000"
    document.getElementById("desc").style.border = "1px solid #dfe2e1"
    document.getElementById("rev").style.color = "#000"
    document.getElementById("rev").style.border = "1px solid #dfe2e1"
    document.getElementById("vend").style.color = "#000"
    document.getElementById("vend").style.border = "1px solid #dfe2e1"
    document.getElementById("speccont").style.display = "block"
    document.getElementById("desccont").style.display = "none"
    document.getElementById("revcont").style.display = "none"
    document.getElementById("vendcont").style.display = "none"
}
function showcont3() {
    document.getElementById("rev").style.color = "#00a00d"
    document.getElementById("rev").style.border = "1px solid #00a00d"
    document.getElementById("spec").style.color = "#000"
    document.getElementById("spec").style.border = "1px solid #dfe2e1"
    document.getElementById("desc").style.color = "#000"
    document.getElementById("desc").style.border = "1px solid #dfe2e1"
    document.getElementById("vend").style.color = "#000"
    document.getElementById("vend").style.border = "1px solid #dfe2e1"
    document.getElementById("revcont").style.display = "block"
    document.getElementById("speccont").style.display = "none"
    document.getElementById("desccont").style.display = "none"
    document.getElementById("vendcont").style.display = "none"
}
function showcont4() {
    document.getElementById("vend").style.color = "#00a00d"
    document.getElementById("vend").style.border = "1px solid #00a00d"
    document.getElementById("spec").style.color = "#000"
    document.getElementById("spec").style.border = "1px solid #dfe2e1"
    document.getElementById("rev").style.color = "#000"
    document.getElementById("rev").style.border = "1px solid #dfe2e1"
    document.getElementById("desc").style.color = "#000"
    document.getElementById("desc").style.border = "1px solid #dfe2e1"
    document.getElementById("vendcont").style.display = "block"
    document.getElementById("speccont").style.display = "none"
    document.getElementById("revcont").style.display = "none"
    document.getElementById("desccont").style.display = "none"
}