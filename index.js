function popup(id, name) {
	// for (var i=0;i<img.length;i++) {
	// 	alert(img[i].src);
	// }
	if (document.documentElement.clientWidth > 1200) {
		var obj = document.getElementById(id);
		var value = obj.innerHTML;
		// alert(value);
		document.getElementById("pop-title").innerHTML = name;
		document.getElementById("pop-text").innerHTML = value;
		document.getElementById("pop-outer").style.display = "block";
		document.getElementById("landing").style.opacity = 0.5;
	} else {
		var obj = document.getElementById(id);
		var value = obj.innerHTML;
		// alert(value);
		document.getElementById("pop-title").innerHTML = name;
		document.getElementById("pop-text").innerHTML = value;
		document.getElementById("pop-outer").style.display = "block";
		document.getElementById("landing").style.opacity = 0.5;
	}
}

function popdown() {
	document.getElementById("pop-outer").style.display = "none";
	document.getElementById("landing").style.opacity = 1;
}

function turnon(id) {
	if (document.documentElement.clientWidth > 1200) {
		document.getElementById(id).style.display = "block";
		document.getElementById("default").style.display = "none";
	} else {
		// var obj = document.getElementById(id);
		// obj.style.display = "block";
		// obj.style.position = "fixed";
		// obj.style.background = "#272727";
		// obj.style.top = "0";
		// obj.style.left = "0";
		// obj.style.padding = "20px";
		// obj.style.borderColor = "#C5C6C7";
		// obj.style.borderWidth = "1px";
		// obj.style.borderStyle = "solid";
		// obj.style.zIndex = "10";
		// obj.style.color = "#AAA";
	}
}

function turnoff(id) {
	if (document.documentElement.clientWidth > 1200) {
		document.getElementById(id).style.display = "none";
		document.getElementById("default").style.display = "block";
	} else {
		// var obj = document.getElementById(id);
		// document.getElementById("default").style.display = "block";
		// obj.style.display = "none";
		// obj.style.position = "relative";
		// obj.style.background = "none";
		// obj.style.top = "none";
		// obj.style.left = "none";
		// obj.style.padding = "0";
		// obj.style.borderColor = "none";
		// obj.style.borderWidth = "none";
		// obj.style.borderStyle = "none";
		// obj.style.zIndex = "none";
	}
}

function searchFunction() {
	var input, filter, article, div, articleEntry, text, passed;
	input = document.getElementById("searcherInput");
	filter = input.value.toUpperCase();
	const filterArray = filter.split(" ");
	article = document.getElementById("skills-article");
	div = article.getElementsByTagName("div");
	var count = 0;
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		passed = false;
		filterArray.forEach(item => {
			passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
		})
		if (passed) {
			div[i].style.display = "";
			count++;
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("experience-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		passed = false;
		filterArray.forEach(item => {
			passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
		})
		if (passed) {
			div[i].style.display = "";
			count++;
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("projects-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		passed = false;
		filterArray.forEach(item => {
			passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
		})
		if (passed) {
			div[i].style.display = "";
			count++;
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("certifications-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		passed = false;
		filterArray.forEach(item => {
			passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
		})
		if (passed) {
			div[i].style.display = "";
			count++;
		} else {
			div[i].style.display = "none";
		}
	}
	article = document.getElementById("awards-article");
	div = article.getElementsByClassName("entry");
	for (i = 0; i < div.length; i++) {
		articleEntry = document.getElementById(div[i].getAttribute("title"));
		text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
		passed = false;
		filterArray.forEach(item => {
			passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
		})
		if (passed) {
			div[i].style.display = "";
			count++;
		} else {
			div[i].style.display = "none";
		}
	}
	// article = document.getElementById("music-article");
	// div = article.getElementsByClassName("entry");
	// for (i = 0; i < div.length; i++) {
	// 	articleEntry = document.getElementById(div[i].getAttribute("title"));
	// 	text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
	// 	if (text.toUpperCase().indexOf(filter) > -1) {
	// 		div[i].style.display = "";
	// 	} else {
	// 		div[i].style.display = "none";
	// 	}
	// }
}

// var mallsData = [
// ]
