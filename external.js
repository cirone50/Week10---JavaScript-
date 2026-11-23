// external js

function random() {
	var r;
	r = Math.floor(Math.random()*10);

	document.getElementById("demo").innerHTML = r;

	var page = document.getElementById("demo")

	page.style.backgroundColor="olive";
	page.style.color = "white";

	if (r<5) {
		page.style.backgroundColor = "olive";
	}

	else {
		page.style.backgroundColor = "teal";
	}
}

function changeCss() {
	var x = document.getElementById("menu");

	x.className = "list showList";
	x.style.color = "black";
	x.style.fontFamily = "Arial";
	x.style.fontSize = "larger";
}

function hide () {
	document.getElementById("menu").className = "list hideList";
}

function swap() {
	var img = document.getElementById("img-swap");

	img.setAttribute("src", "problem-solving.png");
	img.setAttribute("alt", "puzzle pieces and a cog");

	if (img.setAttribute("src")=="happy-sheep.jpg") {

		img.setAttribute("src", "problem-solving.png");
		img.setAttribute("alt", "puzzle pieces and a cog");
	}

	else
	img.setAttribute("src", "happy-sheep.png");
	img.setAttribute("alt", "happy sheep");

}

function bigText() {
	document.getElementById("news-text").style.fontSize="30px";

}


function nigthMode() {
	document.getElementById("news").className="card night";
}

function resetNews() {
	document.getElementById("news-text").style.fontSize = "";
	document.getElementById("news").className="card";
}



