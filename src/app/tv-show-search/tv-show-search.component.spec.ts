import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSearchComponent } from './tv-show-search.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('TvShowSearchComponent', () => {
  let component: TvShowSearchComponent;
  let fixture: ComponentFixture<TvShowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [ TvShowSearchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a button tag', () => {
    const fixture = TestBed.createComponent(TvShowSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('button').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('title').value).toEqual('Search TV show');
  });

  it('should render placeholder in a input tag', () => {
    const fixture = TestBed.createComponent(TvShowSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const nodeAttributes = compiled.querySelector('input').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('placeholder').value).toEqual('Search');
  });

});
