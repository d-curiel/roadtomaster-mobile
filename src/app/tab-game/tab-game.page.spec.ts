import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabGamePage } from './tab-game.page';

describe('TabGamePage', () => {
  let component: TabGamePage;
  let fixture: ComponentFixture<TabGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
