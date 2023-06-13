import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6464e4e3127ad0b8f8ab352a.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async addtToCart(elem) {
        try{
            await apiClient.post('/Carrito', elem)
        }catch(e){
            throw "Error al tratar de comprar un elemento"
        }
    },
    async deleteFromCart(id) {
        try{
            await apiClient.delete('/Carrito/' + id)
        }catch(e){
            throw "Error al tratar de eliminar un elemento del carrito"
        }
    },
    async loadList(){
        try{
            const response = await apiClient.get('/E-commerceRopa');
            return response.data
        } catch(e) {
            throw "Error con el cargar";
        }
    },
    async loadCart(){
        try{
            const response = await apiClient.get('/Carrito');
            return response.data
        } catch(e) {
            throw "Error con el cargar";
        }
    },
    async addPrpduct(elem){
        try{
            await apiClient.post('/E-commerceRopa', elem)
        }catch(e) {
            throw "Error al agregar un elemento"
        }
    },
    async deleteProduct(id) {
        try{
            await apiClient.delete('/E-commerceRopa/' + id)
        }catch(e){
            throw "Error al tratar de eliminar un elemento"
        }
    },
    async modifyProduct(id, elem){
        try{
            await apiClient.put('/E-commerceRopa/' + id, elem)
        }catch(e){
            throw "Error al tratar de modificar un elemento"
        }
    }
}