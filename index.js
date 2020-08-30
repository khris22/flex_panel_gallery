const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open')
}

function toggleActive(e){
    // pass in the event to determine the target
    if(e.propertyName.includes('flex')) {
        // needs to be inside an if state because of issue on different browsers:
        this.classList.toggle('open-active')
    }

}

// listen for a click on panel to run the function toggleOpen and set the clicked elemen to open
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))