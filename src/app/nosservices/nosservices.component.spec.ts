import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosservicesComponent } from './nosservices.component';

describe('NosservicesComponent', () => {
  let component: NosservicesComponent;
  let fixture: ComponentFixture<NosservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
