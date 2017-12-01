import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposEventComponent } from './tipos-event.component';

describe('TiposEventComponent', () => {
  let component: TiposEventComponent;
  let fixture: ComponentFixture<TiposEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
