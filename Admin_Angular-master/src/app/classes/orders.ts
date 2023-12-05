export class Orders {
    orderId:number;
    image:string;
    name:string;
    price:number;
    quantity:number;
    tag:string;
    username:string;
    constructor(orderId:number,image:string,name:string,price:number,quantity:number,tag:string,username:string){
        this.orderId=orderId;
        this.image=image;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.tag=tag;
        this.username=username;
    }
    setUserName(username:string){
        this.username=username;
    }

}

