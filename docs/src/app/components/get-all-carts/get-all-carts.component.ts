import { Component } from '@angular/core';

@Component({
  selector: 'app-get-all-carts',
  templateUrl: './get-all-carts.component.html',
  styleUrls: ['./get-all-carts.component.scss']
})
export class GetAllCartsComponent {

  route= "/cart/"

  title="Get all Carts"

  output = `
  [
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
]
  `;

}
