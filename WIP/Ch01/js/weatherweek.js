function forcast (day, high, low) {
    this.day = day;
    this.high = high;
    this.low = low;
}

let f1 = new forcast("Monday", 80, 60);
let f2 = new forcast("Tuesday", 88,76);
let f3 = new forcast("Wednesday", 86,80);

let weeklyForcast = [f1,f2,f3];

let lowestLow = weeklyForcast.sort(function(a,b){
    if (a.low < b.low) {
        return -1;
    } else if (a.low > b.low) {
        return 1;
    } else {
        return 0;
    }
})[0];
let highestHigh = weeklyForcast.sort(function(a,b){
    if (a.high > b.high) {
        return -1;
    } else if (a.high < b.high) {
        return 1;
    } else {
        return 0;
    }
})[0];

console.log(`The lowest temperature this week was on ${lowestLow.day} and it was ${lowestLow.low}`);
console.log(`The highest temperature this week was on ${highestHigh.day} and it was ${highestHigh.high}`);
