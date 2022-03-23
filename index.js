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

function turnon(id, name) {
	if (document.documentElement.clientWidth > 0 || id == "default") {
		var replaceWith = "<h1>" + name.toUpperCase() + " </h1>" + document.getElementById(id).innerHTML;
		document.getElementById("summary").innerHTML = replaceWith;
	}
}

function searchFunction() {
	var input, filter;
	input = document.getElementById("searcherInput");
	filter = input.value.toUpperCase();
	const filterArray = filter.split(" ");
	try {
		const articleArray = ["experience", "projects", "certifications", "awards", "skills"];
		articleArray.forEach(articleName => {
			var article = document.getElementById(articleName + "-article");
			var div = article.querySelectorAll("[title]");
			var count = 0;
			for (i = 0; i < div.length; i++) {
				var articleEntry = document.getElementById(div[i].getAttribute("title"));
				var text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
				var passed = false;
				filterArray.forEach(item => {
					passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
				})
				if (filter == "") {
					passed = true;
				}
				if (passed) {
					div[i].style.display = "";
					count++;
				} else {
					div[i].style.display = "none";
				}
			}
		})
	} catch (e) {
		const articleArray = ["modules", "hobbies", "interests"];
		articleArray.forEach(articleName => {
			var article = document.getElementById(articleName + "-article");
			var div = article.querySelectorAll("[title]");
			var count = 0;
			for (i = 0; i < div.length; i++) {
				var articleEntry = document.getElementById(div[i].getAttribute("title"));
				var text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
				var passed = false;
				filterArray.forEach(item => {
					passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
				})
				if (filter == "") {
					passed = true;
				}
				if (passed) {
					div[i].style.display = "";
					count++;
				} else {
					div[i].style.display = "none";
				}
			}
		})
	}
	// article = document.getElementById("skills-article");
	// div = article.getElementsByTagName("div");
	// var count = 0;
	// for (i = 0; i < div.length; i++) {
	// 	articleEntry = document.getElementById(div[i].getAttribute("title"));
	// 	text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
	// 	passed = false;
	// 	filterArray.forEach(item => {
	// 		passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
	// 	})
	// 	if (passed) {
	// 		div[i].style.display = "";
	// 		count++;
	// 	} else {
	// 		div[i].style.display = "none";
	// 	}
	// }
	// article = document.getElementById("experience-article");
	// div = article.getElementsByClassName("entry");
	// for (i = 0; i < div.length; i++) {
	// 	articleEntry = document.getElementById(div[i].getAttribute("title"));
	// 	text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
	// 	passed = false;
	// 	filterArray.forEach(item => {
	// 		passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
	// 	})
	// 	if (passed) {
	// 		div[i].style.display = "";
	// 		count++;
	// 	} else {
	// 		div[i].style.display = "none";
	// 	}
	// }
	// article = document.getElementById("projects-article");
	// div = article.getElementsByClassName("entry");
	// for (i = 0; i < div.length; i++) {
	// 	articleEntry = document.getElementById(div[i].getAttribute("title"));
	// 	text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
	// 	passed = false;
	// 	filterArray.forEach(item => {
	// 		passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
	// 	})
	// 	if (passed) {
	// 		div[i].style.display = "";
	// 		count++;
	// 	} else {
	// 		div[i].style.display = "none";
	// 	}
	// }
	// article = document.getElementById("certifications-article");
	// div = article.getElementsByClassName("entry");
	// for (i = 0; i < div.length; i++) {
	// 	articleEntry = document.getElementById(div[i].getAttribute("title"));
	// 	text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
	// 	passed = false;
	// 	filterArray.forEach(item => {
	// 		passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
	// 	})
	// 	if (passed) {
	// 		div[i].style.display = "";
	// 		count++;
	// 	} else {
	// 		div[i].style.display = "none";
	// 	}
	// }
	// article = document.getElementById("awards-article");
	// div = article.getElementsByClassName("entry");
	// for (i = 0; i < div.length; i++) {
	// 	articleEntry = document.getElementById(div[i].getAttribute("title"));
	// 	text = articleEntry.textContent || articleEntry.innerText + div[i].textContent || div[i].innerText;
	// 	passed = false;
	// 	filterArray.forEach(item => {
	// 		passed = item != "" ? passed || text.toUpperCase().indexOf(item) > -1 : passed
	// 	})
	// 	if (passed) {
	// 		div[i].style.display = "";
	// 		count++;
	// 	} else {
	// 		div[i].style.display = "none";
	// 	}
	// }
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
