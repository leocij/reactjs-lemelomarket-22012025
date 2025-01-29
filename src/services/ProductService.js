// yarn add axios
import apiAxios from '../config/ApiAxios';

export const getAllProducts = async () => {
    const response = await apiAxios.get('/products');
    return response.data;
}