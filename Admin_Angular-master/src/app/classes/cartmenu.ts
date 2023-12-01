export class Cartmenu {
    userId:number;
    foodId: number;
    name: string;
    price: number;
    image: string;
    tag: string;
    quantity:number;
    constructor(userId:number,foodId: number, name: string, price: number, image: string, tag: string,quantity:number) {
        this.foodId = foodId;
        this.name = name;
        this.price = price;
        this.image = image;
        this.tag = tag;
        this.quantity=quantity;
        this.userId=userId;
    }
}


