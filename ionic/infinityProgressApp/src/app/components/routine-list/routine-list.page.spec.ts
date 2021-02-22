import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutineListPage } from './routine-list.page';

describe('RoutineListPage', () => {
  let component: RoutineListPage;
  let fixture: ComponentFixture<RoutineListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutineListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
