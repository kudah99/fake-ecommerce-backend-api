import { Component ,Input} from '@angular/core';
import { setOptions } from 'marked';

@Component({
  selector: 'app-example-card',
  templateUrl: './example-card.component.html',
  styleUrls: ['./example-card.component.scss']
})
export class ExampleCardComponent {

  @Input() route: String;
  @Input() is_get: boolean;
  @Input() output: any;
  @Input() title: string;

  baseUrl = "https://fake-ecommerce-backend-api-e5g3.vercel.app/api";

  isVisible = false;
  showSpinner =false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
   clearTimeout( setTimeout(() =>{
      this.showSpinner =true;
    },5000));
    this.showSpinner = false;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
