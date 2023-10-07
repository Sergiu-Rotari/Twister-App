import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static tags: any;

  constructor() { }
  
getFoodById(id: number):Food{
  return this.getAll().find(food => food.id == id)!;
}



  getAllTags(): Tag[]{
    return[
    { name: 'All', count: 16},
    { name: 'Kebab', count: 6},
    { name: 'Burger', count: 4},
    { name: 'Sandwich', count: 2},
    { name: 'Platou', count: 2},
    { name: 'Monster', count: 2}

  ];
  }

  getAllFoodsByTag(tag:string) : Food[]{
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
   
  
  }
  getAll():Food [] {
    return [
      {
        id:1,
        name: 'Black Twist de pui',
        description: 'Lavaș negru, carne de pui, cartofi pai, varză, castraveți murați, roșii, sos alb, sos roșu.',
        price: {
          amount: 76, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '400g',
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags : ['Good Twist', 'Kebab'],
        
      },
      {
        id:2,
        name: 'Twist de pui',
        description: 'Lavaș, carne de pui, cartofi pai, varză, castraveți murați, roșii, sos alb, sos roșu.',
        price: {
          amount: 74, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '400g',
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags : ['Good Twist', 'Kebab'],
        
      },
      {
        id:3,
        name: 'Black Twist de porc',
        description: 'Lavaș negru, carne de porc, cartofi pai, varză, castraveți murați, roșii, sos alb, sos roșu.',
        price: {
          amount: 81, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '400g',
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags : ['Good Twist', 'Kebab'],
        
      },
      {
        id:4,
        name: 'Twist de porc',
        description: 'Lavaș, carne de porc, cartofi pai, varză, castraveți murați, roșii, sos alb, sos roșu.',
        price: {
          amount: 79, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '400g',
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags : ['Good Twist', 'Kebab'],
        
      },
      {
        id:5,
        name: 'Veggie Black Twist',
        description: 'Lavaș negru, ciuperci/falafel, cartofi pai, varză, castraveți murați, roșii, sos alb, sos roșu.',
        price: {
          amount: 76, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '380g',
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags : ['Good Twist', 'Kebab'],
        
      },
      {
        id:6,
        name: 'Veggie Twist',
        description: 'Lavaș, ciuperci/falafel, cartofi pai, varză, castraveți murați, roșii, sos alb, sos roșu.',
        price: {
          amount: 74, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '380g',
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags : ['Good Twist', 'Kebab'],
        
      },
      {
        id:7,
        name: 'Black Burger',
        description: 'Parjoală de pui și porc, roşii, cașcaval, ceapă marinată, frunză de salată, becon, chiflă neagră, sos Barbeque.',
        price: {
          amount: 71, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '310g',
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags : ['Good Burger', 'Burger'],
        
      },
      {
        id:8,
        name: 'Burger',
        description: 'Parjoală de pui și porc, roşii, cașcaval, ceapă marinată,frunză de salată, becon, chiflă, sos Barbeque.'  ,
        price: {
          amount: 69, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '310g',
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags : ['Good Burger', 'Burger'],
        
      },
      {
        id:9,
        name: 'Black Burger de vită',
        description: 'Pîrjoală de vită, roșii, cașcaval, ceapă marinată, frunză de salată, chiflă, sos Barbeque. ',
        price: {
          amount: 77, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '',
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags : ['Good Burger', 'Burger'],
        
        
      },
      {
        id:10,
        name: 'Burger de vită',
        description: 'Pîrjoală de vită, roșii, cașcaval, ceapă marinată, frunză de salată, chiflă, sos Barbeque. ',
        price: {
          amount: 75, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '',
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags : ['Good Burger', 'Burger']
        
      },
      {
        id:11,
        name: 'Monster de pui',
        description: 'Pită, carne de pui, varză, castraveți murați, roșii, sos alb, sos roșu.        ',
        price: {
          amount: 75, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '420g',
        imageUrl: '/assets/images/foods/food-11.jpg',
        tags : ['Good Sandwich', 'Monster'],
        
      },
      {
        id:12,
        name: 'Sandwich de pui',
        description: 'Pită, carne de pui, varză, castraveți murați, roșii, sos alb sos roșu.        ',
        price: {
          amount: 65, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '300g',
        imageUrl: '/assets/images/foods/food-12.jpg',
        tags : ['Good Sandwich', 'Sandwich'],
        
      },
      {
        id:13,
        name: 'Platou de pui',
        description: 'Carne de pui, roșii, varză, ardei dulce, cartofi pai, sos alb, sos roșu, pită coaptă.        ',
        price: {
          amount: 82, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '410g',
        imageUrl: '/assets/images/foods/food-13.jpg',
        tags : ['Good Sandwich', 'Platou'],
        
      },
      {
        id:14,
        name: 'Monster de porc',
        description: 'Pită, carne de porc, varză, castraveți murați, roșii, sos alb, sos roșu.        ',
        price: {
          amount: 79, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '420g',
        imageUrl: '/assets/images/foods/food-14.jpg',
        tags : ['Good Twist', 'Monster'],
        
      },
      {
        id:15,
        name: 'Sandwich de porc',
        description: 'Pită, carne de porc, varză, castraveți murați, roșii, sos alb, sos roșu.        ',
        price: {
          amount: 69, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '300g',
        imageUrl: '/assets/images/foods/food-15.jpg',
        tags : ['Good Twist', 'Sandwich' ],
        
      },
      {
        id:16,
        name: 'Platou de porc',
        description: 'Carne de porc, roșii, varză, ardei dulce, cartofi pai, sos alb, sos roșu, pită coaptă.        ',
        price: {
          amount: 87, 
          currency: 'MDL'
        },
        favorite: false,
        origins: ['italy'],
        weight: '410g',
        imageUrl: '/assets/images/foods/food-16.jpg',
        tags : ['Good Twist' , 'Platou'],
        
      },
      

    ]
  }
}
