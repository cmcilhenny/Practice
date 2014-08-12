window.onload = function() {
// defining variable to use
			var navExpand = document.getElementById('toggle'),
	      		leftNav = document.getElementById('left-nav'),
	     		 mainText = document.getElementById('main-text'),
	     listItemMain = document.getElementById('book-text'),
	 listItemProjects = document.getElementById('stop-text'),
	    listItemAbout = document.getElementById('moon-text'),
	    // toggleText = document.getElementsByClassName('hidden'),
	    			toggled = false;

// onclick of expand icon
	navExpand.onclick = function () {

		// check to see if toggle is true/false
		if (toggled === false) {
			// expand the width of the navbar and main text
			leftNav.style.width = 310 + "px";
			mainText.style.left = 310 + "px";
			// add in text for navbar
			// listItemMain.appendChild(document.createTextNode("MAIN PAGE"));
			// listItemProjects.appendChild(document.createTextNode("AWESOME PROJECTS"));
			// listItemAbout.appendChild(document.createTextNode("ABOUT THIS BUSINESS"));
			window.setTimeout(function() {
				listItemMain.style.display = "inline-block";
				listItemProjects.style.display = "inline-block";
				listItemAbout.style.display = "inline-block";
			}, 250);
			// set toggles to true
			toggled = true;
		} else {
			// shrink the width of the navbar
			leftNav.style.width = 100 + "px";
			mainText.style.left = 100 + "px";
			// remove text nodes
			listItemMain.style.display = "none";
			listItemProjects.style.display = "none";
			listItemAbout.style.display = "none";

			// set toggled to false
			toggled = false;
			
		};
	};

};