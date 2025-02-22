import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { BioSummaryCardComponent } from './bio-summary-card.component';

@NgModule({
    declarations: [BioSummaryCardComponent],
  imports: [CommonModule, NgOptimizedImage],
    exports: [BioSummaryCardComponent],
})
export class BioSummaryCardModule {}
