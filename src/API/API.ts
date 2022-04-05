import axios from "axios";
import { ProductModel } from '../models/ProductModel';
import { CreatorsModel } from '../models/CreatorsModel';

export type GetProductsType = {
    status: string,
    data: {
        products: ProductModel[],
        creators: CreatorsModel
    }
}

const instance = axios.create({
	baseURL: 'https://artisant.io/api/',
});

export const productsAPI = {
    getProducts() {
        return instance.get<GetProductsType>('products')
            .then(res => res.data)
    },
}
