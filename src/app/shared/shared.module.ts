import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { LoaderComponent } from './loader/loader.component';
import { AppHeaderComponent } from './header/app.header.component';
import { AppFooterComponent } from './footer/app.footer.component';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    TabsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    TabsComponent,
    LoaderComponent
  ],

})
export class SharedModule { }
