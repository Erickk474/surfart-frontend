import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListComponent } from './list/list.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { DetailsComponent } from './details/details.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SharedModule } from '../shared/shared.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [ListComponent, CardProdutoComponent, DetailsComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SwiperModule,
    SharedModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  exports: [ListComponent]
})
export class ProdutosModule { }
