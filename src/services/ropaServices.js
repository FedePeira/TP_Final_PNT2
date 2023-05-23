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
            const response = await apiClient.get('/E-commerceRopa');
            return response.data
        } catch(e) {
            throw "Error con el cargar";
        }
    },
    async agregar(elem){
        try{
            await apiClient.post('/E-commerceRopa', elem)
        }catch(e) {
            throw "Error al agregar un elemento"
        }
    },
    async eliminar(id) {
        try{
            await apiClient.delete('/E-commerceRopa/' + id)
        }catch(e){
            throw "Error al tratar de eliminar un elemento"
        }
    },
    async modificar(id, elem){
        try{
            await apiClient.put('/E-commerceRopa/' + id, elem)
        }catch(e){
            throw "Error al tratar de modificar un elemento"
        }
    }
}