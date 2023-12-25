import { Component } from '@angular/core';

@Component({
  selector: 'app-get-all-categories',
  templateUrl: './get-all-categories.component.html',
  styleUrls: ['./get-all-categories.component.scss']
})
export class GetAllCategoriesComponent {

  route= "/category/"

  title="Get all Catgories"

  output = `
    [
      {
        "id": 0,
        "created_at": "2023-12-24T15:03:30.444Z",
        "updated_at": "2023-12-24T15:03:30.444Z",
        "name": "string",
        "description": "string",
        "slug": "string"
      }
    ]
  `;

}
