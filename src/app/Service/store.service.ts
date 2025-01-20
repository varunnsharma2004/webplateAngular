import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  setTokan= (tokan:any)=>localStorage.setItem('tokan',tokan);
  getTokan=()=> localStorage.getItem('tokan');
  removeTokan=()=>localStorage.removeItem('tokan');

  setProfile = (data: any) => localStorage.setItem('profile', JSON.stringify(data));
  getMyProfile = () => JSON.parse(localStorage.getItem('profile') || '{}');
  removeProfile=()=>localStorage.removeItem('profile');

  setUsers =(data:any)=> localStorage.setItem('users',JSON.stringify(data));
  getUsers =()=>JSON.parse(localStorage.getItem('users')|| '{}');
  removeUsers = ()=>localStorage.removeItem('users');

  setProduct=(data:any)=>localStorage.setItem('product', JSON.stringify(data));
  getProduct=()=>JSON.parse(localStorage.getItem('product')|| "{}");
  removeProduct=()=>localStorage.removeItem('product');


}
