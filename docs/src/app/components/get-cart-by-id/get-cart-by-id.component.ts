import { Component } from '@angular/core';

@Component({
  selector: 'app-get-cart-by-id',
  templateUrl: './get-cart-by-id.component.html',
  styleUrls: ['./get-cart-by-id.component.scss']
})
export class GetCartByIdComponent {

  route= "/cart/{id}"

  title="Get Cart By Id"

  output = `
  {
    "id": 0,
    "created_at": "2023-12-24T16:00:09.207Z",
    "updated_at": "2023-12-24T16:00:09.207Z",
    "user_id": 0,
    "products": [
      {
        product_id: 0,
        quantity: 0
      }
    ]
  }
  `;
}
