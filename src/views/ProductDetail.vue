<script setup>
import { onMounted, ref } from 'vue';
import { data } from '../data';
import { useRoute } from 'vue-router';
import { useCart } from '../store/cartSlice';

const id = Number(useRoute().params.id)
const Data = data.find((item) => item.id === id)

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

// API
// onMounted(async () => {
//     try {
//         const res = await fetch("http://localhost/Project/GameShopAPI/Admin/model/Detail/getorderaz.php")
//         const result = await res.json()
//         Data.value = result.find(item => parseInt(item.productid) === id)
//         console.table(Data.value)
//     } catch (error) {
//         console.log(error)
//     }
// })
</script>

<template>

    <router-link to="/" class="ml-5 text-blue-500 hover:underline text-lg font-medium">
        ← Back
    </router-link>

    <main v-if="Data" class="w-full flex justify-center py-8">
        <article class="w-[95%] grid lg:grid-cols-2 grid-cols-1 gap-10 bg-white p-6 rounded-xl shadow-lg">

            <!-- IMAGE -->
            <div class="flex justify-center items-center bg-gray-50 rounded-xl p-4">
                <img :src="Data.img" :alt="Data.id" class="w-[90%] rounded-xl shadow-sm" />
            </div>

            <!-- DETAILS -->
            <div class="px-2 flex flex-col">

                <h1 class="text-3xl font-bold mb-4" v-html="Data.name"></h1>

                <div class="flex items-center gap-3 mb-6">
                    <p class="text-2xl font-semibold text-green-600">
                        ${{ (Data.price * (1 - Data.discount / 100)).toFixed(2) }}
                    </p>
                    <del v-if="Data.discount > 0" class="text-gray-500 text-lg">
                        ${{ Data.price }}
                    </del>
                </div>

                <!-- Quantity -->
                <div class="flex items-center gap-3 mb-6 select-none">
                    <button @click="decreaseqty"
                        class="px-4 py-2 bg-gray-200 rounded-lg text-xl font-bold hover:bg-gray-300">−</button>

                    <span class="px-6 py-2 bg-gray-100 rounded-lg text-xl font-semibold shadow-sm">
                        {{ qty }}
                    </span>

                    <button @click="increaseqty"
                        class="px-4 py-2 bg-gray-200 rounded-lg text-xl font-bold hover:bg-gray-300">+</button>
                </div>

                <!-- Add to cart -->
                <button @click.prevent="cartStore.addtocart({
                    id: Data.productid,
                    name: Data.name,
                    img: Data.img,
                    price: Data.price,
                    discount: Data.discount,
                    qty: qty
                })"
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg rounded-lg w-[220px] transition-all shadow-md active:scale-95">
                    Add to cart
                </button>

                <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam amet at tenetur
                    dolorem
                    nostrum libero cumque sequi assumenda a, recusandae fugit delectus sit culpa ullam voluptas fugiat!
                    Eum adipisci error eius excepturi debitis sit dolorum temporibus quas modi eos quod provident illum
                    deserunt rerum qui, incidunt cum eaque corrupti?</p>
            </div>

        </article>
    </main>

    <p v-else class="text-center text-xl py-10">Loading...</p>

</template>
