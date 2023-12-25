import { Component } from '@angular/core';

@Component({
  selector: 'app-get-products-by-id',
  templateUrl: './get-products-by-id.component.html',
  styleUrls: ['./get-products-by-id.component.scss']
})
export class GetProductsByIdComponent {

  route= "/products/{id}";
 
  title= "Get products by Id";
  
  output = `
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
  `;

}
