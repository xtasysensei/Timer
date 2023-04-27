const minutes = document.querySelector(".timer_part-minutes");
const seconds = document.querySelector(".timer_part-seconds");
const control = document.querySelector(".timer_btn-control");
const reset = document.querySelector(".timer_btn-reset");

let interval = null;
let remainingSeconds = 0;

control.addEventListener("click", () => {
	if (interval === null) {
		start();
	} else {
		stop();
	}
});

reset.addEventListener("click", () => {
	const inputMinutes = prompt("Enter number of minutes:");

	if (inputMinutes <= 60) {
		stop();
		remainingSeconds = inputMinutes * 60;
		updateInterfaceTime();
	}
});

function updateInterfaceTime() {
	const minute = Math.floor(remainingSeconds / 60);
	const second = remainingSeconds % 60;

	minutes.innerHTML = minute.toString().padStart(2, "0");
	seconds.innerHTML = second.toString().padStart(2, "0");
}

updateInterfaceTime();

function updateInterfaceControl() {
	if (interval === null) {
		control.innerHTML = "<img src='src/play.png'/>";
		control.classList.add("timer_btn-start");
		control.classList.remove("timer_btn-pause");
	} else {
		control.innerHTML = "<img src='src/pause.png'/>";
		control.classList.add("timer_btn-pause");
		control.classList.remove("timer_btn-start");
	}
}

function start() {
	if (remainingSeconds === 0) return;

	interval = setInterval(() => {
		remainingSeconds--;
		updateInterfaceTime();

		if (remainingSeconds === 0) {
			stop();
		}
	}, 1000);
	updateInterfaceControl();
}

start();

function stop() {
	clearInterval(interval);
	interval = null;
	updateInterfaceControl();
}

stop();
