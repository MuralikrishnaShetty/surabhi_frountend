import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedmenuComponent } from './searchedmenu.component';

describe('SearchedmenuComponent', () => {
  let component: SearchedmenuComponent;
  let fixture: ComponentFixture<SearchedmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedmenuComponent]
    });
    fixture = TestBed.createComponent(SearchedmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
