import { Cart, Product, ProductDetail } from './../views'
import { createRouter, createWebHistory } from 'vue-router'
import RootLayout from './../layouts/rootLayout.vue'
const routes = [
    {
        path: '/',
        component: RootLayout,
        children: [
            { path: "", name: "Product", component: Product },
            { path: "/Cart", name: "Cart", component: Cart },
            { path: "/ProductDetail/:id", name: "ProductDetail", component: ProductDetail },
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router