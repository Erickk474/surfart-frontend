import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Product } from 'src/app/models/product/product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product
  loading: boolean;
  routerId: any;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: true,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 3
        }
    }
};

  constructor(
    private produtosService: ProdutosService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerId = this.router.params['_value'].id
    this.getByid();
  }

  getByid(): void {
    this.loading = true;
    this.produtosService.getByid(this.routerId)
    .pipe(take(1))
    .subscribe( item => this.product = item[0],
    error => console.log({error: error, message: 'Deu ruim'}),
    () => this.loading = false );
  }
  // return(): void {
  //   window.history.back();
  // }
}
