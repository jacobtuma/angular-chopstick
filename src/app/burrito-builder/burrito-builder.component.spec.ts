import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoBuilderComponent } from './burrito-builder.component';

describe('BurritoBuilderComponent', () => {
  let component: BurritoBuilderComponent;
  let fixture: ComponentFixture<BurritoBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurritoBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
