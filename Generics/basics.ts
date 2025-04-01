function indetityFuncOne(val: boolean | number): boolean | number {
    return val
}

function indetityFuncTwo(val: any): any {
    return val
}

function indetityFuncThree<Type>(val: Type): Type {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

function getSearchProducts<T>(products: T[]): T {
    return products[0];
}

// with Arrow Function

const AllProducts = <T>(products: T[]): T => {
    return products[0];
}