import { Component } from '@angular/core';

@Component({
  selector: 'app-get-product-by-category-id',
  templateUrl: './get-product-by-category-id.component.html',
  styleUrls: ['./get-product-by-category-id.component.scss']
})
export class GetProductByCategoryIdComponent {

  route= "/products/category/{id}";

  title= " Get products by category Id"

  output = `
  [
    {
      "id": 0,
      "created_at": "2023-12-24T14:37:32.697Z",
      "updated_at": "2023-12-24T14:37:32.697Z",
      "name": "string",
      "description": "string",
      "image": "string",
      "price": "string",
      "category_id": 0
    }
  ]
  `;
}
