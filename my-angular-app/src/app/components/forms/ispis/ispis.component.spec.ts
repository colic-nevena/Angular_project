import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspisComponent } from './ispis.component';

describe('IspisComponent', () => {
  let component: IspisComponent;
  let fixture: ComponentFixture<IspisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
