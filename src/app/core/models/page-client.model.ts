import {EventListModel} from './event-list.model';

export class PageClientModel {
  content: EventListModel[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number ;
  first: boolean ;
  sort: string ;
  numberOfElements: number ;
}
