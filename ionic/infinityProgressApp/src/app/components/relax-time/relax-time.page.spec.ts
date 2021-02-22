import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelaxTimePage } from './relax-time.page';

describe('RelaxTimePage', () => {
  let component: RelaxTimePage;
  let fixture: ComponentFixture<RelaxTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelaxTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelaxTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
