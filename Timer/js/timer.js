export default class timer {
	constructor(root) {
		root.innerHTML = timer.getHTML();
	}

	static getHTML() {
		return `
            <span class="timer_part timer_part-minutes">00</span>
                <span class="timer_part">:</span>
                <span class="timer_part timer_part-seconds">00</span>
                <button
                    type="button"
                    class="timer_btn timer_btn-control timer_btn-start"
                >
                    <img src="src/play.png" alt="" /></button
                ><button
                    type="button"
                    class="timer_btn timer_btn-control timer_btn-reset"
                >
                    <img src="src/timer.png" alt="" />
                </button>
        `;
	}
}
