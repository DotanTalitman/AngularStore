

export class Product{

    id:number;
    title:string;
    price:number;
    img:string;
    description:string

    constructor(id:number,title:string,price:number,img:string,description:string){
        this.id=id;
        this.title=title;
        this.price= price;
        this.img= img;
        this.description=description;
    }

}