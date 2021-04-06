import axios from 'axios';
import { error, success } from "./ResponseHandler";

const PRODUCT_URL = "https://fakestoreapi.com/products";

class ProductService {
    async  getProducts() {
        try {
            const response = await axios.get(PRODUCT_URL);

            return success(response);
        } catch (e) {
            return error(e);
        }
    }
}

export default ProductService;
