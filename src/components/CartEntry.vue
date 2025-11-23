<script setup>
import { defineProps } from 'vue';
import { useCart } from '../store/cartSlice';

const cartStore = useCart()

defineProps({
    id: Number,
    name: String,
    img: String,
    price: Number,
    discount: Number,
    qty: Number,
})
</script>

<template>
    <div class="w-full flex items-center border-b pb-4 mb-4 gap-4 relative mt-4">

        <!-- remove -->
        <button @click="cartStore.removefromcart(id)"
            class="text-sm px-2 py-1 rounded hover:bg-red-100 hover:text-red-500 transition">
            ✕
        </button>

        <!-- Image -->
        <div class="w-24 h-24 overflow-hidden rounded-md border">
            <img :src="img" class="w-full h-full object-cover" />
        </div>

        <!-- Text Info -->
        <div class="flex flex-col gap-1 flex-1">

            <p class="text-[15px] font-medium leading-tight">
                {{ name }}
            </p>

            <p class="text-[#59C491] font-semibold text-sm">
                ${{ (price * (1 - discount / 100)).toFixed(2) }}
            </p>

            <!-- Qty Control -->
            <div class="flex items-center gap-5 mt-1">

                <button @click="cartStore.decreaseqty(id)"
                    class="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100">-</button>

                <span class="font-medium">{{ qty }}</span>

                <button @click="cartStore.increaseqty(id)"
                    class="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100">+</button>

            </div>
        </div>

        <!-- item total -->
        <p class="text-lg font-semibold text-gray-700">
            ${{ (qty * price * (1 - discount / 100)).toFixed(2) }}
        </p>

    </div>
</template>
