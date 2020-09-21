import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../produtos.service';
import { take, finalize } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[];
  id: string;
  loading: boolean

  constructor(
    private produtosService: ProdutosService
    ) { }

  ngOnInit(): void {
    this.list();
  }

  ngOnDestroy(): void {
    console.log('cai aqui mano');
  }

  list(): void {
    this.loading = true;
    this.produtosService.getAllProducts({})
    .pipe(take(1))
    .subscribe( 
    item => this.products = item['docs'],
    error => console.log({ error: error, message: 'caiu no erro'}),
    () => this.loading = false);
  }
}
