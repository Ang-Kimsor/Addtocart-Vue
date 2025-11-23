import { defineStore } from "pinia";
const getCart = () => {
    const cart = localStorage.getItem("cart")
    return cart ? JSON.parse(cart) : []
}
const setCart = (items) => {
    localStorage.setItem('cart', JSON.stringify(items))
}
export const useCart = defineStore('cartItems', {
    state: () => ({
        cart: getCart()
    }),
    actions: {
        addtocart(product) {
            const existincart = this.cart.find((item) => item.id === product.id)
            if (existincart) {
                if (product.qty == 1) {
                    if (existincart.qty < 5) existincart.qty += 1
                    else alert("Reach Limit")
                } else {
                    if (existincart.qty + product.qty <= 5) existincart.qty += product.qty
                    else alert("Reach limit")
                }
            }
            else {
                this.cart.push(product)
            }
            setCart(this.cart)
        },
        removefromcart(id) {
            this.cart = this.cart.filter((item) => item.id !== id)
            setCart(this.cart)
        },
        increaseqty(id) {
            const existincart = this.cart.find((item) => item.id === id)
            if (existincart.qty < 5) existincart.qty += 1
            else alert("Reach Limit")
            setCart(this.cart)
        },
        decreaseqty(id) {
            const existincart = this.cart.find((item) => item.id === id)
            if (existincart.qty - 1 <= 0) this.cart = this.cart.filter((item) => item.id !== id)
            else existincart.qty -= 1
            setCart(this.cart)
        },
        emptycart() {
            this.cart = []
            setCart(this.cart)
        }
    }
})