

function greeting(){
var hr = document.getElementById("hour").value;
var min = document.getElementById("mins").value;
var mer = document.getElementById("Meridiem").value;

console.log(hr)
console.log(min)
console.log(mer)

    if ( (hr >= 09 || hr <= 11 && mer == "PM")  && (hr <= 06 && mer == "AM" )){
        console.log("Have a good night");
    }

    else if ( (hr >= 07 && mer == "AM")  && (hr <= 08 && mer == "PM" )){

        console.log("Have a good day");
    }
}