const topmenu = document.getElementById('topmenu');
const switcher = document.getElementById('switcher');
switcher.addEventListener('mouseover.closenow',() =>{
    topmenu.className = "opennow";
    switcher.className = "opennow";
});

switcher.addEventListener('mouseover.opennow',() =>{
    topmenu.className = "closenow";
    switcher.className= "closenow";
});