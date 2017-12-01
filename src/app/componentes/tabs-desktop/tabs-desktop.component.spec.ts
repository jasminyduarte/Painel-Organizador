import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDesktopComponent } from './tabs-desktop.component';

describe('TabsDesktopComponent', () => {
  let component: TabsDesktopComponent;
  let fixture: ComponentFixture<TabsDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
