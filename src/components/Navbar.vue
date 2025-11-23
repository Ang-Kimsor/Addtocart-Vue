<script setup>
</script>

<template>
    <nav class="w-full h-[70px] bg-white shadow-md border-b flex items-center justify-between px-10 mb-10">

        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold tracking-wide hover:opacity-70 transition">
            MyStore
        </router-link>

        <!-- Menu -->
        <div class="flex items-center gap-8 text-lg font-medium">
            <router-link to="/" class="hover:text-[#59C491] transition">
                Products
            </router-link>
            <router-link to="/Cart" class="hover:text-[#59C491] transition">
                Cart
            </router-link>

        </div>

    </nav>
</template>
