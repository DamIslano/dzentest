<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { TrashIcon, ListBulletIcon, ChevronRightIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Products from '../products/Products.vue';
import Modal from '../../components/Modal.vue'

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
	<div class="d-flex align-items-center mb-5">
		<div class="me-2 rounded-circle d-flex align-items-center justify-content-center plus-icon-bg">
			<PlusIcon class="w-17px icon-white"/>
		</div>
		<div>Orders / 25</div>
		<Modal />
	</div>
	<div :class="{ 'd-flex justify-content-between': !fullMenu }">
		<div :style="{ 'min-width': fullMenu ? '' : '30%' }" class="me-3">
			<div 
				v-for="(order, idx) in allOrders" 
				class="p-2 mb-3 card position-relative"
				:class="{ 'px-3': !fullMenu, 'px-5': fullMenu }" 
				:style="{ width: fullMenu ? '' : '100%' }"
			>
				<div class="d-flex align-items-center py-1" :class="{ 'justify-content-between': fullMenu }">
					<div v-if="fullMenu" class="max-w-full-180px">{{ order.order_name }}</div>
					<div class="d-flex align-items-center">
						<div @click="toggleMenu(idx)" class="me-2 d-flex align-items-center justify-content-center rounded-circle border order-list-icon"><ListBulletIcon class="w-20px"/></div>
						<div class="me-5">
							<div>{{ order.product_amount }}</div>
							<div>Products</div>
						</div>
					</div>
					<div>
						<div>{{ order.creation_date.short }}</div>
						<div>{{ order.creation_date.full }}</div>
					</div>
					<div class="min-w-120px" v-if="fullMenu">
						<div>{{ order.price.USD }} $</div>
						<div>{{ order.price.UAH }} UAH</div>
					</div>
					<div v-if="fullMenu" class="me-4 hover-overlay d-flex align-items-center justify-content-center rounded-circle delete-icon w-h-50px"><TrashIcon class="w-20px"/></div>
					<div v-show="openedOrderIndex === idx && !fullMenu" class="position-absolute end-0 h-100 d-flex align-items-center justify-content-center order-opened" :class="{ active: openedOrderIndex === idx && !fullMenu }"><ChevronRightIcon class="icon-white w-25px"/></div>
				</div>
			</div>
		</div>
		<div v-if="!fullMenu" class="w-100 card p-0 pt-4 position-relative">
			<div @click="fullMenu = !fullMenu" class="position-absolute d-flex align-items-center justify-content-center rounded-circle shadow close-menu">
				<XMarkIcon class="w-20px"/>
			</div>
			<div class="px-5">
				<div class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eum reiciendis. Ex voluptates aspernatur harum vel. Consequatur quis repellendus reiciendis.</div>
				<div class="d-flex align-items-center mb-3">
					<div class="me-2 rounded-circle d-flex align-items-center justify-content-center w-h-20px" style=" background-color: green;">
						<PlusIcon class="width-17px icon-white"/>
					</div>
					<div>Add product</div>
				</div>
			</div>
			<ul class="list-group list-group-flush border-top-0">
				<li class="list-group-item p-0">
					<Products type="order" :period="false" :productDescription="false" :cost="false" :licenseData="false" :condition="false"/>
				</li>
			</ul>
		</div>
	</div>
</template>