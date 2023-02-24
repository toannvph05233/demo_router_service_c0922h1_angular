import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, provideRouter} from "@angular/router";
import { Router } from '@angular/router';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/ProductService";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id: any;
  product: Product | undefined;
  formCreate !: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService,private router:Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // if (this.id!= null){
    //   this.product = this.productService.findById(+this.id);
    //
    //   this.formCreate = new FormGroup({
    //     id: new FormControl(this.product?.id, [Validators.required,Validators.max(50)]),
    //     name: new FormControl(this.product?.name),
    //     img: new FormControl(this.product?.img),
    //     price: new FormControl(this.product?.price),
    //   })

    }

  }



