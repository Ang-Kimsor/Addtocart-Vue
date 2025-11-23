<script setup>
import { data } from './../data'
import { ProductCard } from './../components'
import { onMounted, ref } from 'vue';
const Data = ref(data)
// onMounted(async () => {
//     try {
//         const res = await fetch("http://localhost//Project/GameShopAPI/Admin/model/Detail/getorderaz.php")
//         const data = await res.json()
//         Data.value = data
//     } catch (error) {
//         console.log(error)
//     }
// })
</script>
<template>
    <main class="w-full flex items-center justify-center">
        <div class="w-[95%]">
            <h1 class="font-semibold text-2xl">Product Page</h1>
            <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 group">
                <ProductCard v-for="d in data" :key="d.id" :id="d.id" :name="d.name" :price="d.price"
                    :discount="d.discount" :img="d.img" />
                <!-- For API -->
                <!-- <ProductCard v-for="d in Data" :key="parseInt(d.productid)" :id="parseInt(d.productid)" :name="d.name"
                    :price="parseFloat(d.price)" :discount="parseFloat(d.discount)" :img="d.img" /> -->
            </div>
        </div>
    </main>
</template>