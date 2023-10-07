export class Food{
    constructor(id:number){
        this.id = id;
    
}
id:number = 0;
name!:string;
price!: {
    amount: number, 
    currency: string 
};
tags?:string[];
favorite:boolean = false;
weight!:string;
imageUrl!:string;
origins!:string[];
description!:string;
}