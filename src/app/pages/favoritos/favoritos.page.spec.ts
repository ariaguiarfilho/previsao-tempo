import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosPage } from './favoritos.page';

describe('FavoritosPage', () => {
  let component: FavoritosPage;
  let fixture: ComponentFixture<FavoritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
