import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { HeaderComponent } from "../header/header.component";
import { StoreService } from '../../Service/store.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TableModule, HeaderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
products:any=[];
constructor(private data:StoreService){
  this.products=this.data.getProduct()[0].products;
  console.log(this.products)
}
}
