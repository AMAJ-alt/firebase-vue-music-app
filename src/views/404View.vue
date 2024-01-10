<template>
    <div class="h-96 flex flex-col items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-4xl font-bold text-gray-800">404</h1>
            <p class="text-xl text-gray-600">page was not found</p>
            <router-link :to="{ name: 'home' }" class="text-blue-500 hover:underline mt-2 inline-block">redirect to the home
                page</router-link>
        </div>
    </div>
</template>
