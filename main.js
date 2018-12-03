const hours = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
const mins = ["one minute",
    "two minutes",
    "three minutes",
    "four minutes",
    "five minutes",
    "six minutes",
    "seven minutes",
    "eight minutes",
    "nine minutes",
    "ten minutes",
    "eleven minutes",
    "twelve minutes",
    "thirteen minutes",
    "forteen minutes",
    "quarter",
    "sixteen minutes",
    "seventeen minutes",
    "eighteen minutes",
    "nineteen minutes",
    "twenty minutes",
    "twenty one minutes",
    "twenty two minutes",
    "twenty three minutes",
    "twenty four minutes",
    "twenty five minutes",
    "twenty six minutes",
    "twenty seven minutes",
    "twenty eight minutes",
    "twenty nine minutes",
    "half"];

function timeInWords(h, m) {
    let result = document.getElementById('result')
    let currentHour = hours[h - 1];
    let currentMinutes = 0;
    if (m > 60 || h > 12) {
        result.innerHTML = 'Hours: Please enter a number between 1-12. \n Minutes: Please enter a number between 1-60.'
    } else if (m > 30) {
        currentMinutes = `${mins[(60 - m) - 1]} to `
        currentHour = hours[h]
        result.innerHTML = currentMinutes + `${currentHour === undefined ? 'one' : currentHour}`
    } else if (m == 00 || m == 0 || m == undefined) {
        currentMinutes = ` o' clock`

        result.innerHTML = currentHour + currentMinutes
    } else {
        currentMinutes = `${mins[m - 1]} past `

        result.innerHTML = currentMinutes + currentHour
    }
}

function validate(evt) {
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
    const hours = document.getElementById('hours')
    const mins = document.getElementById('minutes')


    timeInWords(hours.value, mins.value)
});

