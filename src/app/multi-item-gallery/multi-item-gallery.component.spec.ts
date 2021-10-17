import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemGalleryComponent } from './multi-item-gallery.component';

describe('MultiItemGalleryComponent', () => {
  let component: MultiItemGalleryComponent;
  let fixture: ComponentFixture<MultiItemGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiItemGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
