import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCliniqueComponent } from './news-clinique.component';

describe('NewsCliniqueComponent', () => {
  let component: NewsCliniqueComponent;
  let fixture: ComponentFixture<NewsCliniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCliniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
