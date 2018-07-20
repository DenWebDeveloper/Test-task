const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 107,
    slidesOffsetBefore: 167,
    freeMode: true,
    pagination: {
        clickable: true,
    },
});


const slidePrev = document.querySelector('.swiper-button-prev');
const slideNext = document.querySelector('.swiper-button-next');

slidePrev.addEventListener('click', () => {
    swiper.slidePrev()
});

slideNext.addEventListener('click', () => {
    swiper.slideNext()
});


const calculatorInput = document.querySelector('#js-calculator-input');
const calculatorTo = document.querySelector('#js-calculator-to');
const calculatorResult = document.querySelector('#js-calculator-result');

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which)
    }

    return null;
}

calculatorInput.onkeypress = function (e) {

    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    const chr = getChar(e);

    if (chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }
};

calculatorInput.addEventListener('input', (e) => {
    calculatorTo.innerHTML = `$ ${e.target.value * 852}`;
    calculatorResult.innerHTML = `${e.target.value * 852} LTY tokens + ${e.target.value * 852} x 40% bonus = ${((e.target.value * 852) * 40 / 100) + (e.target.value * 852) } LTY`
});

const calculatorCopy = document.querySelector('#js-calculator-copy');

function copy(str) {
    let tmp = document.createElement('INPUT'),
        focus = document.activeElement;

    tmp.value = str;

    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    focus.focus();
}

calculatorCopy.addEventListener('click', (e) => {
    e.preventDefault();
    copy(calculatorResult.innerHTML)
});