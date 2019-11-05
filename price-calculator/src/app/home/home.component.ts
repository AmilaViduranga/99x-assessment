import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Statics } from '../statics.model';
import { Product, TableCell } from '../models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  availableProducts:Array<Product>;
  availableCells: Array<TableCell>;
  updateProduct: Product;
  totalPrice: number;
  isLogedToSystem: boolean;
  username: string ;
  password: string;

  constructor(private service: BaseService, private modalService: NgbModal) {
    this.availableProducts = new Array<Product>();
    this.availableCells = new Array<TableCell>();
    this.isLogedToSystem = false;
    this.totalPrice = 0.0;
    this.username = null;
    this.password = null;
    this.updateProduct = new Product();
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
    let newCell = new TableCell();
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

  login(content) {
    this.modalService.open(content);
  }

  loginToSystem() {
    if(this.username == null || this.password == null) {
      alert("Please provide both user name and password");
    } else {
      this.service.post(Statics.AUTHONTICATE, false, {
        username: this.username,
        password: this.password
      }).subscribe(response => {
        sessionStorage.setItem("token", response.token);
        this.isLogedToSystem = true;
        this.modalService.dismissAll();
      }, err => {
        this.modalService.dismissAll();
        alert("Your login is unsuccess");
      })
    }
  }

  preUpdate(product: Product, content) {
    this.updateProduct = product;
    this.modalService.open(content);
  }

  updateProductAction() {
    this.service.put(Statics.PRICE_UPDATE + "/" + this.updateProduct.id, true, this.updateProduct).subscribe(response => {
      this.modalService.dismissAll();
    }, err => {
      console.log(err);
    })
  }
}
