import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadWindowsPage } from './load-windows.page';

describe('LoadWindowsPage', () => {
  let component: LoadWindowsPage;
  let fixture: ComponentFixture<LoadWindowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadWindowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadWindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
