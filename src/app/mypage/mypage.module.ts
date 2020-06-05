import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage/mypage.component';
import { MypageCardComponent } from './mypage-card/mypage-card.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MypageComponent, MypageCardComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    SharedModule,
  ]
})
export class MypageModule { }
