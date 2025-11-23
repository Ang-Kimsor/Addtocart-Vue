<script setup>
import { defineProps } from 'vue';
import { useCart } from '../store/cartSlice';

const cartStore = useCart()

defineProps({
    id: Number,
    name: { type: String, default: "Unknown" },
    img: { type: String, default: "https://static.vecteezy.com/system/resources/previews/007/451/786/non_2x/an-outline-isometric-icon-of-unknown-product-vector.jpg" },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
})
</script>

<template>
    <router-link :to="`/ProductDetail/${id}`"
        class="block bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300">
        <!-- Image -->
        <div class="relative overflow-hidden">
            <img :src="img" class="w-full h-64 object-cover transition duration-300" />

            <span v-if="discount > 0"
                class="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                -{{ discount }}%
            </span>
        </div>

        <!-- Body -->
        <div class="p-4">

            <p class="text-lg font-semibold mb-2 line-clamp-1">
                {{ name }}
            </p>

            <p class="text-[16px] font-medium text-[#59C491] flex gap-2 mb-3">
                <del v-if="discount > 0" class="text-gray-400">${{ price }}</del>
                <span>${{ (price * (1 - discount / 100)).toFixed(2) }}</span>
            </p>

            <button @click.prevent="cartStore.addtocart({
                id,
                name,
                img,
                price,
                discount,
                qty: 1
            })"
                class="w-full py-2 bg-[#59C491] text-white rounded-md font-medium hover:bg-[#45a57a] transition duration-300">
                Add to Cart
            </button>
        </div>
    </router-link>
</template>
