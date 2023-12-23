import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductsByIdComponent } from './get-products-by-id.component';

describe('GetProductsByIdComponent', () => {
  let component: GetProductsByIdComponent;
  let fixture: ComponentFixture<GetProductsByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductsByIdComponent]
    });
    fixture = TestBed.createComponent(GetProductsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
