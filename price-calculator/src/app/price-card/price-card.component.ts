import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseService } from '../base.service';
import { Statics } from '../statics.model';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  @Input() itemId: number;
  @Input() itemName: string;
  @Input() itemUrl: string;
  @Input() itemCartonPrice: string;
  @Input() itemUnitPrice: string;
  @Output() outputValue: EventEmitter<any>;

  unitAmount: number;
  cartonAmount: number;

  constructor(private service: BaseService) { 
    this.outputValue = new EventEmitter<any>();
    this.unitAmount = 0;
    this.cartonAmount = 0;
  }

  ngOnInit() {
  }

  sendDetails() {
    let totalPrice = 0;
    this.service.post(Statics.PRICe_CALCULATE + "/" + this.itemId + "/" + this.cartonAmount + "/" + true, false, { }).subscribe(cartonResponse => {
        totalPrice = totalPrice + cartonResponse.totalPrice;
        this.service.post(Statics.PRICe_CALCULATE + "/" + this.itemId + "/" + this.unitAmount + "/" + false, false, { }).subscribe(unitResponse => {
          totalPrice = totalPrice + unitResponse.totalPrice;
          let sendItem = {
            itemName: this.itemName,
            itemUrl: this.itemUrl,
            unitAmount: this.unitAmount,
            cartonAmount: this.cartonAmount,
            totalPrice: totalPrice
          }
          this.outputValue.emit(sendItem);
        })
    })
  }
  
}
