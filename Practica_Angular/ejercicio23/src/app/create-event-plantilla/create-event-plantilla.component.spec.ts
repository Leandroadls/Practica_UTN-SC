import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPlantillaComponent } from './create-event-plantilla.component';

describe('CreateEventPlantillaComponent', () => {
  let component: CreateEventPlantillaComponent;
  let fixture: ComponentFixture<CreateEventPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
