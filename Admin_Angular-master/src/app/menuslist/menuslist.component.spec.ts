import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuslistComponent } from './menuslist.component';

describe('MenuslistComponent', () => {
  let component: MenuslistComponent;
  let fixture: ComponentFixture<MenuslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuslistComponent]
    });
    fixture = TestBed.createComponent(MenuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
