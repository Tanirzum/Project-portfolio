
// используем для прокрутки верх
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

// После 500px появиться кнопка для пркрутки верх
window.addEventListener("scroll", function () {
	scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

// После нажати кнопки пойтии врех без пикселья 
scrollTopBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

// Используем для ночной темы
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	themeBtn.classList.toggle("sun");
});

// для меню
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
	navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
	navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
	navItem.addEventListener("click", () => {
		navigation.classList.remove("active");
	});
});
