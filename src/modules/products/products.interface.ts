type ratings = {
    name:string ;
    image:string ;
    comment:string ;
}

export type TProducts = {
    image:string ;
    title:string ;
    brand:string ;
    quantity:number ;
    price : number ;
    ratings:ratings[];
}