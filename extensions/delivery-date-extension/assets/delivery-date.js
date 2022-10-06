let second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

const countDown = new Date();
countDown.setHours(countDown.getHours() + 10);
// var countDown = new Date("{{- end_date -}}").getTime(),
x = setInterval(function () {
  var now = Date.parse(new Date()),
    distance = Date.parse(countDown) - now;

  (document.querySelector(".js-timer-hours").innerText = Math.floor(
    (distance % day) / hour
  )),
    (document.querySelector(".js-timer-minutes").innerText = Math.floor(
      (distance % hour) / minute
    )),
    (document.querySelector(".js-timer-seconds").innerText = Math.floor(
      (distance % minute) / second
    ));
}, second);

const deliveredDate = new Date();
deliveredDate.setDate(deliveredDate.getDate() + 5);

if (deliveredDate.getDay() == 6 || deliveredDate.getDay() == 0) {
  deliveredDate.getDay() == 6
    ? deliveredDate.setDate(deliveredDate.getDate() + 2)
    : deliveredDate.setDate(deliveredDate.getDate() + 1);
}
document.querySelector(".js-delivered-date").innerText =
  deliveredDate.toDateString();
