function turnon(id) {
	if (document.documentElement.clientWidth > 1200) {
		document.getElementById(id).style.display = "block";
		document.getElementById("default").style.display = "none";
	}
}

function turnoff(id) {
	if (document.documentElement.clientWidth > 1200) {
		document.getElementById(id).style.display = "none";
		document.getElementById("default").style.display = "block";
	}
}