import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cart-detail.component';
import { CartSummaryComponent } from './cart-summary.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../models/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "app/store/counter.directive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [
        StoreComponent,
        CounterDirective,
        CartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent
    ]
})

export class StoreModule { }