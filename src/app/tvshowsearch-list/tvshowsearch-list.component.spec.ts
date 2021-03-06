import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsearchListComponent } from './tvshowsearch-list.component';
import { TvshowService } from '../tvshow/tvshow.service';
import { TvShowServiceFake } from '../tvshow/tvshow.service.fake';

describe('TvshowsearchListComponent', () => {
  let component: TvshowsearchListComponent;
  let fixture: ComponentFixture<TvshowsearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsearchListComponent ],
      providers:[{ provide: TvshowService, useClass: TvShowServiceFake }] //for testing
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
