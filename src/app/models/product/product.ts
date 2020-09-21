export interface Product { 
    category: any[]; 
    created_at?: Date; 
    id: Number; 
    image: String; 
    price: Number; 
    rate_stars?: Number; 
    tags?: any[]; 
    title: String; 
    updated_at?: Date;
    variants?: any[];
    limit?: Number;
    page?: Number;
    pages?: Number;
    total?: Number;
}
