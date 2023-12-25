import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByCategoryIdComponent } from './get-product-by-category-id.component';

describe('GetProductByCategoryIdComponent', () => {
  let component: GetProductByCategoryIdComponent;
  let fixture: ComponentFixture<GetProductByCategoryIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductByCategoryIdComponent]
    });
    fixture = TestBed.createComponent(GetProductByCategoryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
