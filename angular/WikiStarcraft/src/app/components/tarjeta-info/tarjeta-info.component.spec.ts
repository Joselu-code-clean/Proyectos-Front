import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaInfoComponent } from './tarjeta-info.component';

describe('TarjetaInfoComponent', () => {
  let component: TarjetaInfoComponent;
  let fixture: ComponentFixture<TarjetaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
