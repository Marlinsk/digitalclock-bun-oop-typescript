import { DigitalClock } from "./digitalclock";

const myDigitalClock = new DigitalClock();

myDigitalClock.start();

setTimeout(() => {
  myDigitalClock.stop();
}, 24 * 60 * 60 * 1000);
