import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  ColorCircleDirective,
  PriceLocaliztionPipe,
  PriceDirective,
  ThumbnailSaleDirective,
  ThumbnailTitleDirective,
  CostumWidthDirective
} from './'

const components = [
  ColorCircleDirective,
  PriceLocaliztionPipe,
  PriceDirective,
  ThumbnailSaleDirective,
  ThumbnailTitleDirective,
  CostumWidthDirective
]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
