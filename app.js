(function tp1() {


	var tab;

	function getPageModules() {
		return document.querySelectorAll("#entete, #aside, #container, #footer");
	}


	function styliserModule(num, color, bg) {
		tab[num].style.color = color;
		tab[num].style.backgroundColor = bg;

	}


	function getModuleInfos(num) {

		console.log(object = { id: tab[num].id,
				classe: tab[num].className,
				balise: tab[num].tagName,
				dimension: tab[num].getBoundingClientRect()




		});

	}

	window.onload = function init() {
		tab = getPageModules();
		styliserModule(0, "black", "peachpuff");
		styliserModule(1, "black", "rosybrown");
		styliserModule(2, "black", "papayawhip");
		styliserModule(3, "black", "silver");



	}

}());