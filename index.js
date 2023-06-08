const showImg = document.querySelector("#show img");
const indicators = document.querySelector(".indicators");

indicators.addEventListener("click", function (e) {
 e.target.src && (showImg.src = e.target.src);
});




const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((hdr, i) => {
  hdr.addEventListener("click", function () {
    accordionContents.forEach((el, j) => {
      if (i != j) {
        el.style.maxHeight = null;
      }
    });
    let nextElement = hdr.nextElementSibling;
    if (nextElement.style.maxHeight) {
      nextElement.style.maxHeight = null;
    } else {
      nextElement.style.maxHeight = nextElement.scrollHeight + "px";
      // hdr.parentElement.classList.add("active");
    }
  });
});