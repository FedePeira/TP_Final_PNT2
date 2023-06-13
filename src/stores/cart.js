import { defineStore } from 'pinia'
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6464e4e3127ad0b8f8ab352a.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const useCartStore = defineStore('cart', {
    state: () => {
        return { counter: 0, productsInCart: []}
    },
    actions: {
        addToCart(product) {
            this.productsInCart.push(product)
        },
        removeFromCart(product) {
            this.productsInCart.pop(product)
        },
    },
})