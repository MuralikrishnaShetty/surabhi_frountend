export class Menu {
    foodId:number;
    name:String;
    price:number;
    image:string;
    tag:string;
    constructor(foodId:number,name:string,price:number,image:string,tag:string){
        this.foodId=foodId;
        this.name=name;
        this.price=price;
        this.image=image;
        this.tag=tag;
    }
}
