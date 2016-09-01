/* hide summary and content containers */
initialSetup();

function initialSetup(){
    closeAccordions();
	onWindowResize();
	
    /* add click listener to keyPoints */
    var elements = document.getElementsByClassName('keyPoint');
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', keyPointClick);
    }
}

function closeAccordions(){
    var elements = document.querySelectorAll('.js-accordion');
    for(var i = 0; i < elements.length; i++) {
        changeVisibility(elements[i], true)
    }
}
				
/* keyPoint Click Event */
function keyPointClick() {
	var matchingAccordion;
	
    matchingAccordion = findSiblingOfClass(this, 'js-accordion');
	changeVisibility(matchingAccordion);
}
		
function findSiblingOfClass(element, className){
    var elements = element.parentNode.children;
    var matchingElement;
    for(var i = 0; i < elements.length; i++) {
		var classList = elements[i].classList;
        for(var ci = 0; ci < classList.length; ci++) {
			if(classList[ci] === className){
            	matchingElement = elements[i];
				ci = classList.length;
				i = elements.length;
			}
        }
    }
    return matchingElement;
}

/* changes the visibility of the supplied element
   can be supplied a visible value to force state */
function changeVisibility(element, forceClose){
    if(element === undefined) return;
	var elementOpen = (forceClose || element.style.height != "0px");

    if(elementOpen) {
	    element.style.height = "0px";
    } else {
	    element.style.height = "";
    }	 
}

function onWindowResize(){
    var furBabies = document.getElementsByClassName('imgFurBaby');
    if(window.innerWidth < 700){
	    furBabies[0].style["display"]="";
	    furBabies[1].style["display"]="none";
	} else {
	    furBabies[0].style["display"]="none";
	    furBabies[1].style["display"]="";
	}
}