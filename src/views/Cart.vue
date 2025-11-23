<script setup>
import { computed } from 'vue'
import { CartEntry } from '../components'
import { useCart } from '../store/cartSlice'

const cartStore = useCart()
const data = computed(() => cartStore.cart)
</script>

<template>
    <main class="w-full flex justify-center">
        <div class="w-[95%]">
            <!-- Header -->
            <div class="flex items-center justify-between mb-6 mt-4">
                <h1 class="font-bold text-3xl">Cart</h1>
                <button v-if="data.length" @click="cartStore.emptycart"
                    class="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    Clear
                </button>
            </div>
            <!-- Empty Cart -->
            <div v-if="data.length == 0"
                class="w-full h-[350px] flex items-center justify-center border rounded-lg bg-gray-50 text-gray-500 text-lg">
                Cart is empty.
            </div>
            <!-- Cart Items -->
            <div v-else class="w-full border-t pt-6 flex flex-col gap-4">
                <CartEntry v-for="d in data" :key="d.id" :id="d.id" :name="d.name" :price="d.price"
                    :discount="d.discount" :img="d.img" :qty="d.qty" />
            </div>
        </div>
    </main>
</template>
