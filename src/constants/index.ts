import { Product, Category } from '../types';

export const PRODUCTS: Product[] = [
  { id: 1, name: "Alpinestars Honda Cr-X Drystar Shoe", price: 45000, oldPrice: 49000, image: "image/Boot.png", category: "Boots", discount: "20% off" },
  { id: 2, name: "Icon Contra 2 Jacket", price: 500000, oldPrice: 560000, image: "image/Jaket.png", category: "Jackets", discount: "20% off" },
  { id: 3, name: "Alpinestars SP-8 V3 Gloves", price: 500000, oldPrice: 560000, image: "image/glove 2.png", category: "Gloves", discount: "20% off" },
  { id: 4, name: "EBC Brakes Sintered Pads", price: 150000, oldPrice: 180000, image: "image/ebc.png", category: "Parts", discount: "20% off" },
  { id: 5, name: "Rear Paddock Stand Pro", price: 900000, oldPrice: 960000, image: "image/stand2.png", category: "Accessories", discount: "20% off" },
  { id: 6, name: "Motul 7100 4T 10W40", price: 500000, oldPrice: 560000, image: "image/keg.png", category: "Maintenance", discount: "20% off" },
  { id: 7, name: "Chain Lube & Cleaner Kit", price: 200000, oldPrice: 240000, image: "image/Oil.png", category: "Maintenance", discount: "20% off" },
  { id: 8, name: "Front Wheel Stand", price: 500000, oldPrice: 4500000, image: "image/stand.png", category: "Accessories", discount: "20% off" },
];

export const CATEGORIES: Category[] = [
  { name: "Helmets", image: "image/Helmet.png" },
  { name: "Jackets", image: "image/Jaket.png" },
  { name: "Boots", image: "image/Boot.png" },
  { name: "Gloves", image: "image/Glof.png" },
  { name: "Maintenance", image: "image/Filter Oil.png" },
];

export const BRANDS = [
  "image/1.png", "image/2.png", "image/3.png", "image/4.png",
  "image/5.png", "image/6.png", "image/7.png"
];
