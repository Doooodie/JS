// setInterval(onIntervalNextTick, 1000);

// const htmlElements = {};
// htmlElements.startBtn = document.querySelector('.container .buttons button.start');
// htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
// htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
// htmlElements.clock = document.querySelector('.container .links .clock');
// htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
// htmlElements.timer = document.querySelector('.container .links .timer');
// htmlElements.output = document.querySelector('.container .output');

import { Tabs } from "./modules/tabs.js";

const tabs = new Tabs();

function init() {
    tabs.init();
}

init();