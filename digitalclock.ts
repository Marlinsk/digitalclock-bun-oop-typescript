export class DigitalClock {
  private intervalId: Timer | null = null;

  public start(): void {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.displayDigitalTime();
      }, 1000);
    } else {
      console.log("The clock is already running.");
    }
  }

  public stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("Clock stopped.");
    } else {
      console.log("The clock is not running.");
    }
  }

  private displayDigitalTime(): void {
    const currentTime = new Date();
    const hours = this.formatDigit(currentTime.getHours());
    const minutes = this.formatDigit(currentTime.getMinutes());
    const seconds = this.formatDigit(currentTime.getSeconds());

    const digitalTime = `${hours}:${minutes}:${seconds}`;

    console.clear();
    console.log(digitalTime);
  }

  private formatDigit(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}