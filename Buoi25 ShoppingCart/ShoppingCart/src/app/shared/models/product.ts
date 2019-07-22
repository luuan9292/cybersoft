// interface dinh nghia product
//de cac class ke thua cai mau nay bat buoc class phai co day du cac thuoc tinh
export interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    inventory: number;
    rating: number;
}