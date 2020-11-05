import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabHistoryPage } from './tab-history.page';

describe('TabHistoryPage', () => {
  let component: TabHistoryPage;
  let fixture: ComponentFixture<TabHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
