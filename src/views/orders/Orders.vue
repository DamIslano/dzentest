<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { TrashIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

const { allOrders } = useStore().getters
const fullMenu = ref(true)

function toggleMenu() {
	fullMenu.value = !fullMenu.value
}
</script>

<template>
	<div v-for="order in allOrders" class="p-2 px-5 mb-3 card" :style="{ width: fullMenu ? '' : '30%' }">
		<div class="d-flex align-items-center justify-content-between py-1">
			<div v-if="fullMenu">{{ order.order_name }}</div>
      <div class="d-flex align-items-center">
				<div @click="toggleMenu" class="me-2 d-flex align-items-center justify-content-center rounded-circle border order-list-icon"><ListBulletIcon style="width: 20px;"/></div>
				<div>
					<div>{{ order.product_amount }}</div>
					<div>Products</div>
				</div>
			</div>
			<div>
				<div>{{ order.creation_date.short }}</div>
				<div>{{ order.creation_date.full }}</div>
			</div>
			<div v-if="fullMenu">
				<div>{{ order.price.USD }} $</div>
				<div>{{ order.price.UAH }} UAH</div>
			</div>
			<div v-if="fullMenu" class="me-4 hover-overlay d-flex alighn-items-center justify-content-center rounded-circle delete-icon" style="min-width: 50px; height: 50px;"><TrashIcon style="width: 20px;"/></div>

		</div>
	</div>
</template>