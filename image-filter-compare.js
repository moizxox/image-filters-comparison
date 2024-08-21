document.querySelectorAll('.slider').forEach((slider) => {
    let container = slider.closest('.img-compare-container');
    let beforeImg = container.querySelector('.img-compare-before');
    let sliderLine = container.querySelector('.slider-line');
    let sliderIcon = container.querySelector('.slider-icon');
    let beforeLabel = container.querySelector('.img-label-before');
    let afterLabel = container.querySelector('.img-label-after');

    slider.addEventListener('input', (e) => {
        let value = e.target.value + '%';

        beforeImg.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
        sliderLine.style.left = value;
        sliderIcon.style.left = value;

        let afterOpacity = (100 - e.target.value) / 100;
        let beforeOpacity = e.target.value / 100;

        beforeLabel.style.opacity = beforeOpacity;
        afterLabel.style.opacity = afterOpacity;

        beforeLabel.style.display = beforeOpacity > 0 ? 'block' : 'none';
        afterLabel.style.display = afterOpacity > 0 ? 'block' : 'none';
    });
});