import {Observable, of} from 'rxjs';
import {ITvShowService} from './tvshow.service';
import { IFavoriteShow} from '../ifavorite-show';

export class TvShowServiceFake implements ITvShowService {
   private fakeTvShow: IFavoriteShow[]= [{
    name: 'Lion',
    summary: 'Show about wild lions',
    runtime: 1,
    officialSite: '',
    url: '',
    language: 'English',
    genres: '',
    schedule: '',
    days: '',
    image: ''
}];


   public getTVShowsearchlist(userSearchText: string | number): Observable<IFavoriteShow[]> {
   return of(this.fakeTvShow);
}
}