import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { BioSummaryCardModule } from '../../components/bio-summary-card/bio-summary-card.module';
import { StoryNavigationBarModule } from '../../components/story-navigation-bar/story-navigation-bar.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ShareContentComponent } from '../../components/share-content/share-content.component';

@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
    NgOptimizedImage,
    BioSummaryCardModule,
    StoryNavigationBarModule,
    NgxSkeletonLoaderModule,
    ShareContentComponent,
  ],
})
export class StoryModule {}
