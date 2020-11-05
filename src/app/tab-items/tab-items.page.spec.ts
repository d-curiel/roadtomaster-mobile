import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabItemsPage } from './tab-items.page';

describe('TabItemsPage', () => {
  let component: TabItemsPage;
  let fixture: ComponentFixture<TabItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
