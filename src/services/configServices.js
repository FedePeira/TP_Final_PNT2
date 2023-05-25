import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6464e4e3127ad0b8f8ab352a.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarCarrito(){
        try{
            const response = await apiClient.get('/Carrito');
            return response.data
        } catch(e) {
            throw "Error con el cargar";
        }
    },
    async comprarCarrito(elem) {
        try{
            await apiClient.post('/Carrito', elem)
        }catch(e){
            throw "Error al tratar de comprar un elemento"
        }
    },
    async eliminarCarrito(id) {
        try{
            await apiClient.delete('/Carrito/' + id)
        }catch(e){
            throw "Error al tratar de eliminar un elemento del carrito"
        }
    },
    async modificarCarrito(id) {
        try{
            
        }catch(e){
            throw "Error al tratar de modificar un elemento del carrito"
        }
    },
    async cargarRopa(){
        try{
            const response = await apiClient.get('/E-commerceRopa');
            return response.data
        } catch(e) {
            throw "Error con el cargar";
        }
    },
    async agregarRopa(elem){
        try{
            await apiClient.post('/E-commerceRopa', elem)
        }catch(e) {
            throw "Error al agregar un elemento"
        }
    },
    async eliminarRopa(id) {
        try{
            await apiClient.delete('/E-commerceRopa/' + id)
        }catch(e){
            throw "Error al tratar de eliminar un elemento"
        }
    },
    async modificarRopa(id, elem){
        try{
            await apiClient.put('/E-commerceRopa/' + id, elem)
        }catch(e){
            throw "Error al tratar de modificar un elemento"
        }
    }
}