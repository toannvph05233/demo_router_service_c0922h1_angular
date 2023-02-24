import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  products: Product[] = [];
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data=>{
      this.products = data;
    });
  }


}
