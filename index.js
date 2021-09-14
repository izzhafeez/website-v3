function turnon(id) {
	if (document.documentElement.clientWidth > 1200) {
		document.getElementById(id).style.display = "block";
		document.getElementById("default").style.display = "none";
	} else {
		document.getElementById(id).style.display = "block";
		document.getElementById(id).style.position = "fixed";
		document.getElementById(id).style.background = "#202020";
		document.getElementById(id).style.top = "0";
		document.getElementById(id).style.left = "0";
		document.getElementById(id).style.padding = "20px";
		document.getElementById(id).style.borderColor = "white";
		document.getElementById(id).style.borderWidth = "1px";
		document.getElementById(id).style.borderStyle = "solid";
	}
}

function turnoff(id) {
	if (document.documentElement.clientWidth > 1200) {
		document.getElementById(id).style.display = "none";
		document.getElementById("default").style.display = "block";
	} else {
		document.getElementById(id).style.display = "none";
	}
}

function searchFunction() {
	var input, filter, article, div, articleEntry, text;
	input = document.getElementById("searcherInput");
	filter = input.value.toUpperCase();
	article = document.getElementById("skills-article");
	div = article.getElementsByTagName("div");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		if (text.toUpperCase().indexOf(filter) > -1) {
			div[i].style.display = "";
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("experience-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		if (text.toUpperCase().indexOf(filter) > -1) {
			div[i].style.display = "";
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("projects-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		if (text.toUpperCase().indexOf(filter) > -1) {
			div[i].style.display = "";
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("certifications-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		if (text.toUpperCase().indexOf(filter) > -1) {
			div[i].style.display = "";
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("awards-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		if (text.toUpperCase().indexOf(filter) > -1) {
			div[i].style.display = "";
		} else {
			div[i].style.display = "none";
		}
	}
}