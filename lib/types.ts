export type Mode = 'student' | 'admin';
export type StudentTab = 'home' | 'timer' | 'store' | 'wallet' | 'stats';
export type AdminTab = 'overview' | 'products' | 'scanner' | 'settings' | 'schools' | 'points';
export type Product = { id:string; name:string; points:number; image:string; active:boolean };
export type Voucher = { id:string; productId:string; productName:string; image:string; purchasedAt:number; used:boolean };
export type Student = { id:string; name:string; grade:number; classNo:number; number:number; points:number };
export type School = { id:string; name:string; code:string };
