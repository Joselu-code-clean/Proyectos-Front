import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitCardPage } from './unit-card.page';

describe('UnitCardPage', () => {
  let component: UnitCardPage;
  let fixture: ComponentFixture<UnitCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
