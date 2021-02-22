import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrarseComponent } from './login-registrarse.component';

describe('LoginRegistrarseComponent', () => {
  let component: LoginRegistrarseComponent;
  let fixture: ComponentFixture<LoginRegistrarseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegistrarseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
