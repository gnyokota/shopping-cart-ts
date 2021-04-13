import {ADD_TO_CART,REMOVE_FROM_CART,ADJUST_QTY,LOAD_CURRENT_ITEM} from './shopTypes'; 

export interface AddRemoveI {
    type:string; 
    payload: {
        id:number
    }
}

export interface AdjustI {
    type:string; 
    payload: {
        id:number, 
        qty:number
    }
}

interface ItemI {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    qty?:number; 
}

//using generics 
export interface LoadI<T>{
    type:string; 
    payload: T
}

export const addToCart = (itemId:number):AddRemoveI=>{
    return{
        type:ADD_TO_CART, 
        payload: {
            id:itemId
        }
    }
}

export const removeFromCart = (itemId:number):AddRemoveI=>{
    return{
        type:REMOVE_FROM_CART, 
        payload: {
            id:itemId
        }
    }
}

export const adjustQty = (itemId:number,value:number):AdjustI => {
    return{
        type:ADJUST_QTY,
        payload:{
            id:itemId, 
            qty:value
        }
    }
}

export const loadCurrentItem = (item:ItemI):LoadI<ItemI>=>{
    return{
        type:LOAD_CURRENT_ITEM, 
        payload: item
    }
}