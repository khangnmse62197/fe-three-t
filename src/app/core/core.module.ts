import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    // Vendor
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class CoreModule { }
