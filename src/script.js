$(document).ready(() => {
    const slickOption ={
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
    };
$('.slider').slick(slickOption);

let value = 1

setInterval(() => {
const numbersCollection = document.querySelectorAll(".counter__number");

numbersCollection.forEach((number) => {
const currentNumber = parseInt(number.innerHTML);
number.innerHTML = currentNumber + 1;
});
}, 5000);

const counterOptions = {
delay: 10,
time: 1000,
};

$(".counter__number").counterUp(counterOptions);

$('.footer__form-button').on('click', () =>{
    const email = $('#email').val();
    Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : email,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}),
});


