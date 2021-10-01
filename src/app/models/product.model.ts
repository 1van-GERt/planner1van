export class Product{
    public purchase: string;
    public done: boolean;
    public price: number;
    public id: number;
    public amount: number;
     
    constructor(purchase: string, price: number, productId: number) {
        
        this.purchase = purchase;
        this.price = price;
        this.done = false;
        this.id = productId;
        this.amount = 1;
    }
}