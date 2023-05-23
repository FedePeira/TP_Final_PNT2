import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6464e4e3127ad0b8f8ab352a.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargar(){
        try{
            const response = await apiClient.get('/Carrito');
            return response.data
        } catch(e) {
            throw "Error con el cargar";
        }
    },
    async comprar(elem) {
        try{
            await apiClient.post('/Carrito', elem)
        }catch(e){
            throw "Error al tratar de comprar un elemento"
        }
    },
    async eliminar(id) {
        try{
            await apiClient.delete('/Carrito/' + id)
        }catch(e){
            throw "Error al tratar de eliminar un elemento del carrito"
        }
    },
    async modificar(id) {
        try{
            
        }catch(e){
            throw "Error al tratar de modificar un elemento del carrito"
        }
    }
}