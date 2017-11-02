import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebowlBuilderComponent } from './pokebowl-builder.component';

describe('PokebowlBuilderComponent', () => {
  let component: PokebowlBuilderComponent;
  let fixture: ComponentFixture<PokebowlBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokebowlBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokebowlBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
