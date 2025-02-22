import { Component, Input } from '@angular/core';
import { Publication, StoryList } from '../../models/storylist.model';
import { Story } from '../../models/story.model';
import { APP_ROUTE_TREE } from '../../app-routing.module';

@Component({
    selector: 'cuentoneta-story-navigation-bar',
    templateUrl: './story-navigation-bar.component.html',
    styleUrls: ['./story-navigation-bar.component.scss'],
})
export class StoryNavigationBarComponent {
    @Input() storyList!: StoryList;

    readonly appRouteTree = APP_ROUTE_TREE;
    dummyList: null[] = Array(10);

    // ToDo: Separar card de cada cuento de la lista en su propio componente, para evitar usar un método en el template
    getEditionLabel(publication: Publication<Story>, editionIndex: number = 0): string {
        return `${this.storyList?.editionPrefix} ${editionIndex} ${
            this.storyList.displayDates ? ' - ' + publication.publishingDate : ''
        }`;
    }
}
