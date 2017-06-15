import { Product } from 'app/models/product.model';
import { ProductRepository } from './../models/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  selectedCategory: string = null;
  pageSize = 4;
  currentPage = 1;

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    let pageIndex = (this.currentPage - 1) * this.pageSize;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.pageSize);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
  }

  changePageSize(newSize: number) {
    this.pageSize = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.pageSize)
  }

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository
  //     .getProducts(this.selectedCategory).length / this.pageSize))
  //     .fill(0).map((x, i) => i + 1);
  // }

}
