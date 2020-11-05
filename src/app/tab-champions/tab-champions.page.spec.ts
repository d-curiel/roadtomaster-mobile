import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabChampionsPage } from './tab-champions.page';

describe('TabChampionsPage', () => {
  let component: TabChampionsPage;
  let fixture: ComponentFixture<TabChampionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChampionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabChampionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
