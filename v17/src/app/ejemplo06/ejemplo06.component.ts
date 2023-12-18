import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ejemplo06',
  templateUrl: './ejemplo06.component.html',
  styleUrls: ['./ejemplo06.component.scss']
})
export class Ejemplo06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public counter = signal(10);
  public squareCounter = computed(() => this.counter() + this.counter());

  increaseBy(value: number){
    this.counter.update((current) => current + value)
  }

  count = signal(0);

    multiplier: number = 0;

    derivedCounter = computed(() => {
        if (this.count() == 0) {
            return 0
        }
        else {
            return this.count() * this.multiplier;
        }
    })

    increment() {

        console.log(`Updating counter...`)

        this.count.set(this.count() + 1);

    }

}
