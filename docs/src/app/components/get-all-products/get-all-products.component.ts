import { Component } from '@angular/core';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss'],
  //imports: [HighlightJsDirective]
})
export class GetAllProductsComponent {

  index =0;

  route= "/products/"

  title="Get all products"

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
