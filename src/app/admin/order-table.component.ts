import { Order } from './../models/order.model';
import { OrderRepository } from './../models/order.repository';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: "order-table.component.html"
})

export class OrderTableComponent {
    includeShipped = false;

    constructor(private repository: OrderRepository) { }

    getOrders(): Order[] {
        return this.repository.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    delete(id: number) {
        this.repository.deleteOrder(id);
    }
}