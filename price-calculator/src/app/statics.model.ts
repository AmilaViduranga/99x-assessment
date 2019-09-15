import { environment } from '../environments/environment';

export class Statics {

    static TOKEN: string;
    //api
    static API: string = environment.BACKEND_API + "/api"

    // price urls
    static PRICE: string = Statics.API + "/prices";
    static PRICE_ADD: string = Statics.PRICE + "/add";
    static PRICE_GET: string = Statics.PRICE + "/get";
    static PRICE_UPDATE: string = Statics.PRICE + "/update";
    static PRICE_DELETE: string = Statics.PRICE + "/delete";
    static PRICe_CALCULATE: string = Statics.PRICE + "/calculate";
}