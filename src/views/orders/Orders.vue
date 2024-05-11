<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { TrashIcon, ListBulletIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import Products from '../products/Products.vue';

const { allOrders } = useStore().getters
const fullMenu = ref(true)
const openedOrderIndex = ref(-1)

const toggleMenu = (index: number) => {
	if(!fullMenu.value && openedOrderIndex.value != index) {
		openedOrderIndex.value = index
	} else {
		fullMenu.value = !fullMenu.value
		openedOrderIndex.value = index 
	}
}
</script>

<template>
	<div :class="{ 'd-flex alight-items-center justify-content-between': !fullMenu }">
		<div :style="{ 'min-width': fullMenu ? '' : '30%' }">
			<div 
				v-for="(order, idx) in allOrders" 
				class="p-2 mb-3 card position-relative"
				:class="{ 'px-3': !fullMenu, 'px-5': fullMenu }" 
				:style="{ width: fullMenu ? '' : '100%' }"
			>
				<div class="d-flex align-items-center justify-content-between py-1">
					<div v-if="fullMenu" style="max-width: 180px; width: 100%;">{{ order.order_name }}</div>
					<div class="d-flex align-items-center">
						<div @click="toggleMenu(idx)" class="me-2 d-flex align-items-center justify-content-center rounded-circle border order-list-icon"><ListBulletIcon style="width: 20px;"/></div>
						<div>
							<div>{{ order.product_amount }}</div>
							<div>Products</div>
						</div>
					</div>
					<div>
						<div>{{ order.creation_date.short }}</div>
						<div>{{ order.creation_date.full }}</div>
					</div>
					<div v-if="fullMenu" style="min-width: 120px;">
						<div>{{ order.price.USD }} $</div>
						<div>{{ order.price.UAH }} UAH</div>
					</div>
					<div v-if="fullMenu" class="me-4 hover-overlay d-flex alighn-items-center justify-content-center rounded-circle delete-icon" style="min-width: 50px; height: 50px;"><TrashIcon style="width: 20px;"/></div>
					<div v-show="openedOrderIndex === idx && !fullMenu" class="position-absolute end-0 h-100 d-flex alighn-items-center justify-content-center order-opened" :class="{ active: openedOrderIndex === idx && !fullMenu }"><ChevronRightIcon style="width: 25px; color: white;"/></div>
				</div>
			</div>
		</div>
		<div v-if="!fullMenu"><Products :period="false" :productDescription="false" :cost="false" :licenseData="false" :condition="false"/></div>
	</div>
</template>