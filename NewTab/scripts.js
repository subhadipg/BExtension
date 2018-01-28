// Scripts for the background html

(function () {
	let quotes  = [
		{ quote: "I'm not lazy, I'm just in energy saving mode.", author: "Furry Potter" },
		{ quote: "Where is that Human? My bowl is empty!", author: "Felis A. Catus" },
		{ quote: "You want me to purr? I charge extra for that.", author: "Grumpy C. Kat" },
		{ quote: "I like sleeping, it's like death without commitment.", author: "Dr. Whiskers, PHD" },
		{ quote: "First the dot... and then the world!", author: "Adolf Kittner" }
	];

	let img = document.getElementById("maimage"); 
	var suffix = Math.floor((Math.random() * 5) + 1);
	img.src="Pics/th" + suffix + ".jpg";

	var newquote = quotes[suffix-1];
	document.getElementById("maquote").textContent = newquote.quote + "\r\n - " + newquote.author; 
})();