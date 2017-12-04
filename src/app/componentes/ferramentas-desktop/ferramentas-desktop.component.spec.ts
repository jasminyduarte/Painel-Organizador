import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentasDesktopComponent } from './ferramentas-desktop.component';

describe('FerramentasDesktopComponent', () => {
  let component: FerramentasDesktopComponent;
  let fixture: ComponentFixture<FerramentasDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerramentasDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerramentasDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
