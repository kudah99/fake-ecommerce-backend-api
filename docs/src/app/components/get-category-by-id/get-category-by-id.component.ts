import { Component } from '@angular/core';

@Component({
  selector: 'app-get-category-by-id',
  templateUrl: './get-category-by-id.component.html',
  styleUrls: ['./get-category-by-id.component.scss']
})
export class GetCategoryByIdComponent {

  route= "/category/{id}"

  title="Get Category by Id"

  output = `

      {
        "id": 0,
        "created_at": "2023-12-24T15:03:30.444Z",
        "updated_at": "2023-12-24T15:03:30.444Z",
        "name": "string",
        "description": "string",
        "slug": "string"
      }
  `;
}
