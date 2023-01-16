/*MENU*/
let menuBar = $("#menuBar");
let menu = $("#menu");
let menuText = menu.children("li");
let menuBars = menuBar.children("li");
let screenWidth = $(window).width();
let a = menuText.find("a");
let galleryCafe = $(".galleryCafe").find("li");
let prev = $(".prev");
let next = $(".next");

//console.log(sliderPictures);

menuBar.on("click", function (event) {
	toggleMenu();
});

$.each(menuText, function (event) {
	//console.log(this);
	if (screenWidth < 650) {
		$(this).on("click", function (event) {
			toggleMenu();
			console.log(this);
		});
	}
});

function toggleMenu() {
	menu.slideToggle(2000);
	menuBars.toggleClass("movement");
	setTimeout(removeClass, 5000);
}

function removeClass() {
	menuBars.removeClass("movement");
}

/*GALLERY CAFE */
galleryCafe.hover(
	function () {
		$(this).append(
			$(
				"<p><span class='new'>Pellentesque habitant morbi tristique senectu</span></p>"
			).css({
				color: "black",
				"font-size": "2vmin",
				"text-align": "center",
			})
		);
		$("span.new").css({
			"background-color": "rgb(131, 111, 76)",
		});
	},
	function () {
		$(this).find("span").last().remove();
	}
);

/*SLIDER*/
let index = 1;
let slider = $(".containerImages").children("img");

next.on("click", function () {
	if (index < 4 && index > 0) {
		index++;
	} else {
		index = 1;
	}
	console.log(index);
	$.each(slider, function () {
		//console.log($(this).data("number"));
		if ($(this).data("number") === index) {
			slider.fadeOut(3000);
			$(this).fadeIn(2000);
		}
	});
});

prev.on("click", function () {
	console.log("fff");
	if (index > 1 && index < 5) {
		index--;
	} else {
		index = 4;
	}
	console.log(index);
	$.each(slider, function () {
		if ($(this).data("number") === index) {
			slider.fadeOut(2000);
			$(this).fadeIn(3000);
		}
	});
});

if (screenWidth < 925) {
	let count = () => {
		if (index < 4 && index > 0) {
			index++;
		} else {
			index = 1;
		}
		$.each(slider, function () {
			if ($(this).data("number") === index) {
				slider.fadeOut(2000);
				$(this).fadeIn(2000);
			}
		});
		console.log(index);
	};
	setInterval(count, 5000);
}

/*SMOOTH SCROLLING*/

let scroll = () => {
	$('a[href^="#"]').on("click", function (event) {
		let href = $(this).attr("href");
		let desiredHeight = $(window).height() * 0.14;

		if (href.length) {
			event.preventDefault();
			$("html, body").animate(
				{
					scrollTop: $("body").find(href).offset().top - desiredHeight,
				},
				1000
			);
		}
	});
};
scroll();
