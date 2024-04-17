const nav = document.querySelector('.nav__list');
const allNavLinks = document.querySelectorAll('.nav__list--item');
const burgerBtn = document.querySelector('.nav__burger-btn');

burgerBtn.addEventListener('click', () => {
	if (nav.classList.contains('active')) {
		nav.classList.remove('active');
		window.document.body.classList.remove('body-sticky');
	} else {
		nav.classList.add('active');
		window.document.body.classList.add('body-sticky');
	}
});
