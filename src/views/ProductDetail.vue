<script setup>
import { onMounted, ref } from 'vue';
import { data } from '../data';
import { useRoute } from 'vue-router'
import { useCart } from '../store/cartSlice';
const id = Number(useRoute().params.id)
const Data = data.find((item) => item.id === id)
console.log(Data)
// const Data = ref(null)
// onMounted(async () => {
//     try {
//         const res = await fetch("http://localhost//Project/GameShopAPI/Admin/model/Detail/getorderaz.php")
//         const data = await res.json()
//         Data.value = data.find((item) => parseInt(item.productid) === id)
//         console.table(Data.value)
//     } catch (error) {
//         console.log(error)
//     }
// })
const qty = ref(1)
const cartStore = useCart()
const decreaseqty = () => {
    if (qty.value - 1 <= 0) qty.value = 1
    else qty.value--
}
const increaseqty = () => {
    if (qty.value + 1 > 5) qty.value = 5
    else qty.value++
}
</script>
<template>
    <router-link to="/" class=" ml-5">Back</router-link>
    <main v-if="Data" className="w-full h-fit  flex items-center flex-col">
        <article className="lg:w-[95%] w-full h-fit grid lg:grid-cols-2 grid-cols-1 gap-10 py-5">
            <div className="bg-white flex justify-center ">
                <img :src="Data.img" :alt="Data.id" />
            </div>
            <div className="lg:p-0 p-5 cursor-default flex flex-col">
                <p className="xl:text-3xl  text-2xl mt-6 md:w-[90%] font-medium mb-2" v-html="Data.name">
                </p>
                <p className="text-xl mb-5">
                    ${{ (Data.price * (1 - Data.discount / 100)).toFixed(2) }} <del v-if="Data.discount > 0">${{
                        Data.price }}</del>
                </p>
                <div class="flex flex-row w-[150px] justify-between bg-red-500">
                    <button @click="decreaseqty" class="w-[30%] bg-green-500 text-center">-</button>
                    <p class="w-[30%] bg-green-500 text-center">{{ qty }}</p>
                    <button @click="increaseqty" class="w-[30%] bg-green-500 text-center">+</button>
                </div>
                <div className="size-fit  mt-5 flex flex-wrap gap-3">
                    <button @click.prevent="cartStore.addtocart({
                        id: Data.productid,
                        name: Data.name,
                        img: Data.img,
                        price: Data.price,
                        discount: Data.discount,
                        qty: qty
                    })" className="hover:bg-[#fe6150] cursor-pointer capitalize px-12 py-3 bg-[#59C491] text-white
                        font-bold text-lg ">
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    </main>
    <p v-else>Loading</p>
</template>