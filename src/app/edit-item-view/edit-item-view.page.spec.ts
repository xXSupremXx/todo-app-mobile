import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditItemViewPage } from './edit-item-view.page';

describe('EditItemViewPage', () => {
  let component: EditItemViewPage;
  let fixture: ComponentFixture<EditItemViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditItemViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
