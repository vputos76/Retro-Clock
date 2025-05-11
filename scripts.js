changeClock()                       // Change time right away to start at real time
setInterval(changeClock, 1000)      // Every second, update the timer


// Update each of the clock panels
function changeClock(){
    let panels = new Map([[0, "hour-1"], [1, "hour-2"], [3, "minute-1"], [4, "minute-2"], [6, "second-1"], [7, "second-2"],])
    let startTime = new Date().toLocaleTimeString()
    
    // If hour is in single digits add leading 0, and trim off "AM/PM"
    if (startTime.length == 10) {startTime = "0" + startTime.slice(0, 7)}
    // Else just trim the "AM/PM" from the time string
    else{startTime = startTime.slice(0,8)}

    // Update each time panel
    panels.forEach(function(key, val){
        let element = document.getElementById(key)
        // If the value is different flip the card while it changes numbers
        if (element.innerHTML != startTime[val]) {
            element.innerHTML = startTime[val]
            element.classList.remove("flipCard")        // Remove class for animation
            void element.offsetWidth;                   // Force reflow
            element.classList.add("flipCard")           // Add class for animation to trigger flipping
        }        
    })
}