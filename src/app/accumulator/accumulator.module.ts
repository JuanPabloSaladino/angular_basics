import { NgModule } from '@angular/core';
import { AccumulatorComponent } from './accumulator/accumulator.component';

@NgModule({
    declarations: [
        AccumulatorComponent
    ],
    exports: [
        AccumulatorComponent
    ]
})
export class AccumulatorModule {

}