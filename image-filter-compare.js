// Making the Toggle Buttons
document.querySelectorAll(".filter-panel").forEach((filterPanel) => {
  let isActive = false;
  let filterBtn = filterPanel.querySelector(".filter-btn");
  let filterSlider = filterPanel.querySelector(".filter-slider");
  filterBtn.addEventListener("click", (e) => {
    if (isActive == false) {
      filterSlider.style.visibility = "visible";
      filterBtn.classList.add("active");
      isActive = true;
    } else {
      filterSlider.style.visibility = "hidden";
      filterBtn.classList.remove("active");
      isActive = false;
    }
  });
});

// Get the Filtered Image

const filterImage = document.querySelector(".after-img");

let brSlider = document.querySelector(".br-slider");
let clrSlider = document.querySelector(".clr-slider");
let ctrSlider = document.querySelector(".ctr-slider");

function applyFilters() {
  let brValue = brSlider.value / 50;
  let clrValue = clrSlider.value + "%";
  let ctrValue = ctrSlider.value / 50;

  filterImage.style.filter = `brightness(${brValue}) contrast(${ctrValue}) grayscale(${clrValue})`;
}

brSlider.addEventListener("input", applyFilters);
clrSlider.addEventListener("input", applyFilters);
ctrSlider.addEventListener("input", applyFilters);


// let brSlider = document.querySelector(".br-slider");
// let clrSlider = document.querySelector(".clr-slider");
// let ctrSlider = document.querySelector(".ctr-slider");
// brSlider.addEventListener("input", (filterFunction) => {
//   let brValue = brSlider.value / 50;
//   let ctrValue = ctrSlider.value / 50;
//   let clrValue = clrSlider.value + '%';
//   filterImage.style.filter = `brightness(${brValue})`;
// });

// Functionality for Before and After Slider

document.querySelectorAll(".comp-slider").forEach((slider) => {
  let container = slider.closest(".img-compare-container");
  let beforeImg = container.querySelector(".img-compare-before");
  let sliderLine = container.querySelector(".slider-line");
  let sliderIcon = container.querySelector(".slider-icon");
  let beforeLabel = container.querySelector(".img-label-before");
  let afterLabel = container.querySelector(".img-label-after");

  slider.addEventListener("input", (e) => {
    let value = e.target.value + "%";

    beforeImg.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
    sliderLine.style.left = value;
    sliderIcon.style.left = value;

    let afterOpacity = (100 - e.target.value) / 100;
    let beforeOpacity = e.target.value / 100;

    beforeLabel.style.opacity = beforeOpacity;
    afterLabel.style.opacity = afterOpacity;

    beforeLabel.style.display = beforeOpacity > 0 ? "block" : "none";
    afterLabel.style.display = afterOpacity > 0 ? "block" : "none";
  });
});
