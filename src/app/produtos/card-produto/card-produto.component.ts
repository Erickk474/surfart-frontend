import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {
  
  @Input() product: any;
  @Input() idRoute: any;

  constructor() { }

  ngOnInit(): void {
  }


}
