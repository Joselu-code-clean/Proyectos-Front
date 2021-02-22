import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRoutinePage } from './my-routine.page';

describe('MyRoutinePage', () => {
  let component: MyRoutinePage;
  let fixture: ComponentFixture<MyRoutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRoutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
