import { AuthService } from './auth.service';
import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],
    providers: [
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource,
        AuthService,
        ProductRepository,
        Cart,
        Order,
        OrderRepository
    ],
})

export class ModelModule { }