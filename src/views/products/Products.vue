<script setup lang="ts">
import { ComputerDesktopIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { DefineProps } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
	status: {
		type: Boolean,
		default: true
	},
	title: {
		type: String,
		default: ''
	},
	subtitle: {
		type: String,
		default: ''
	},
	cost: {
		type: Boolean,
		default: true
	},
	period: {
		type: Boolean,
		default: true
	},
	condition: {
		type: Boolean,
		default: true
	},
	productDescription: {
		type: Boolean,
		default: true
	},
	licenseData: {
		type: Boolean,
		default: true
	},
})

const { allProducts } = useStore().getters
</script>

<template>
	<div style="overflow-x: auto;">
		<div v-for="product in allProducts" :key="product.id" class="card p-2 px-5 mb-3">
		<div class="card-body d-flex align-items-center justify-content-between">
			<div v-if="status" class="me-4 status status_availible" style="min-width: 15px;"></div>
			<div v-if="product.icon" class="me-4" style="min-width: 80px;"><ComputerDesktopIcon style="width: 50px;" /></div>
			<div class="me-4" style="min-width: 450px;">
				<div class="text-decoration-underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
				<div>{{ product.product_subtitle }}</div>
			</div>

			<div class="me-4 status_availible_text" style="min-width: 100px;">{{ product.status }}</div>
			<div v-if="period" class="me-4 text-uppercase d-flex" style="min-width: 250px;">
				<div class="me-2">
					<div>from</div>
					<div>to</div>
				</div>
				<div>
					<div class="text-secondary">{{ product.period_from }}</div>
					<div class="text-primary">{{ product.period_to }}</div>
				</div>
			</div>
			<div v-if="condition" class="me-4" style="min-width: 100px;">{{ product.product_condition }}</div>

			<div v-if="cost" class="me-4" style="min-width: 150px;">
				<div>{{ product.cost_USD }} $</div>
				<div>{{ product.cost_UAH }} UAH</div>
			</div>
			<div v-if="productDescription" class="me-4" style="min-width: 400px;">{{ product.product_description }}</div>
			<div v-if="licenseData" class="me-4" style="min-width: 250px;">
				<div>{{ product.product_license }}</div>
				<div>{{ product.period_to }}</div>
			</div>

			<div class="me-4" style="min-width: 50px;"><TrashIcon style="width: 20px;"/></div>
		</div>
	</div>
	</div>
</template>