
var image = document.getElementsByTagName('img');
	var count = 7;

	function imageSwap() {
		if (count === 1) {
			count = 7;
			document.getElementById('image' + count).style.opacity = 1;
			document.getElementById('image1').style.opacity = 0;
			
		} else {
			document.getElementById('image' + count).style.opacity = 0.0;
			document.getElementById('image' + (count-1)).style.opacity = 1;
			count--;
		}
		console.log(count);
		

		// document.getElementById('image' + count).style.opacity = 0.0;
		// document.getElementById('image' + (count-1)).style.opacity = 1;
	};
	var timer = setInterval(imageSwap, 1000);










// different attempt... need some outside help to figure out how to swap that src imput... 
// window.onload = function() {

// 	var image = document.getElementsByTagName('img');
// 	console.log(image);

// 	var count = 0;

// 	function imageSwap() {
// 		if (image[image.length-1] === count) {
// 			count = 0;
// 		} else {
// 			count++;
// 		}
		
// 		image[count].setAttribute("src", image[count+1].src);
// 	};

// 	// var timer = setInterval(imageSwap, 5000);
// }