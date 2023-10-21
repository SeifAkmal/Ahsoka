let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".bar span");
let button = document.querySelector(".top");
let startSection = document.querySelector(".articles");

/*
 ** Countdown Timer
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/* Animate Width On Scrolling

/* Increase Numbers On Scrolling */

let nums = document.querySelectorAll(".stats .num");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Increase  width
  if (window.scrollY >= section.offsetTop - 400) {
    console.log("hi");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  // Start scroll to top button

  if (window.scrollY >= startSection.offsetTop) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }

  button.onclick = function myFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};

function startCount(num) {
  let goal = num.dataset.goal;
  let count = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Start scroll to top button

// let button = document.querySelector(".top");
// let startSection = document.querySelector(".articles");

// window.onscroll = function () {
//   if (window.scrollY >= startSection.offsetTop) {
//     button.classList.add("show");
//   } else {
//     button.classList.remove("show");
//   }

//   button.onclick = function myFunction() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
// };
