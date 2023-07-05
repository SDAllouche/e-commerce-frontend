
export interface Product {
  id : number;
  name : string;
  slug : string;
  category :string;
  stock:number;
}

export interface ProductRequest {
  name : string;
  slug : string;
  category :string;
  stock:number;
}
