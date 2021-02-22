import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinishScreenPage } from './finish-screen.page';

describe('FinishScreenPage', () => {
  let component: FinishScreenPage;
  let fixture: ComponentFixture<FinishScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
