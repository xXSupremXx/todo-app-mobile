import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddItemViewPage } from './add-item-view.page';

describe('AddItemViewPage', () => {
  let component: AddItemViewPage;
  let fixture: ComponentFixture<AddItemViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddItemViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
