import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Statics } from '../statics.model';
import { Product } from '../models/product.model';

class tableCell {
  itemNumber: number;
  itemName: string;
  itemURL: string;
  cartonAmount: number;
  unitAmount: number;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  availableProducts:Array<Product>;
  availableCells: Array<tableCell>;
  totalPrice: number;

  constructor(private service: BaseService) {
    this.availableProducts = new Array<Product>();
    this.availableCells = new Array<tableCell>();
    this.totalPrice = 0.0;
  }

  ngOnInit() {
    this.getAvailableProducts();
  }

  getAvailableProducts() {
    this.availableProducts = [];
    this.service.get(Statics.PRICE_GET, false).subscribe(response => {
      response.forEach(product => {
        let newProduct = new Product();
        newProduct.id = product.id;
        newProduct.cartonPrice = product.cartonPrice;
        newProduct.imageUrl = product.imageUrl;
        newProduct.productName = product.productName;
        newProduct.unitPrice = product.unitPrice;
        newProduct.unitsOfCarton = product.unitsOfCarton;
        this.availableProducts.push(newProduct);
      })
    })
  }

  getSelectedDetails(value) {
    let availableRows = this.availableCells.length;
    let newCell = new tableCell();
    newCell.itemNumber = availableRows + 1;
    newCell.cartonAmount = value.cartonAmount;
    newCell.itemName = value.itemName;
    newCell.itemURL = value.itemUrl;
    newCell.price = value.totalPrice.toFixed(2);
    newCell.unitAmount = value.unitAmount;
    this.availableCells.push(newCell);
    this.totalPrice = 0;
    this.availableCells.forEach(cell => {
      this.totalPrice = parseFloat((this.totalPrice + parseFloat(cell.price.toString())).toFixed(2));
    });
  }

  remove(itemNumber) {
    for(let i=0; i<this.availableCells.length; i++) {
      if(this.availableCells[i].itemNumber == itemNumber) {
        this.totalPrice = parseFloat((this.totalPrice - parseFloat(this.availableCells[i].price.toString())).toFixed(2));
        this.availableCells.splice(i,1);
        break;
      }
    }
  }

}
