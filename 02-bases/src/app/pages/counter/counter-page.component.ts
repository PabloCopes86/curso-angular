import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(0);

  constructor() {}

  increaseBy(value: number): void {
    // this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  resetCounter(): void {
    // this.counter = 0;
    this.counterSignal.set(0);
  }
}
