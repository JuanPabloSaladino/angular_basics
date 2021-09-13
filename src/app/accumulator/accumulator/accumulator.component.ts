import { Component } from '@angular/core';

@Component({
    selector: 'app-accumulator',
    template: `
    
    <h1> {{ title }} </h1>
    <h3> The base is: {{ base }}</h3>

    <button (click) = "accumulate(base)"> + {{ base }} </button>
    <span> {{ number }} </span>
    <button (click) = "accumulate(-base)"> - {{ base }} </button>
    
    `
})
export class AccumulatorComponent {
    title   : string  = 'Contador app';
    number  : number  = 10;
    base    : number  = 5;

    accumulate( number : number ) {
        this.number += number;
    }
}