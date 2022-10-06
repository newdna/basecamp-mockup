function myDate(){
    var temp = new Date()
    var weekdays = new Array(7)
    weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var showDay = weekdays[temp.getDay()]
    document.getElementById("date").innerHTML = showDay;
}

myDate()