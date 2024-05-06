<script setup lang="ts">
import { ComputerDesktopIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { DefineProps } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
	status: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: ''
	},
	subtitle: {
		type: String,
		default: ''
	},
})

const { allProducts } = useStore().getters
</script>

<template>
	<div v-for="product in allProducts" :key="product.id" class="card p-2 px-5 mb-3">
		<div class="card-body d-flex align-items-center justify-content-between">
			<div v-if="status" class="me-4 status status_availible col-1"></div>
			<div v-if="product.icon" class="me-4 col-1"><ComputerDesktopIcon style="width: 50px;" /></div>
			<div class="me-4 col-2">
				<div>{{ product.product_title }}</div>
				<div>{{ product.product_subtitle }}</div>
			</div>

			<div class="me-4 status_availible_text col-1">{{ product.status }}</div>
			<div class="me-4 text-uppercase col-2 d-flex">
				<div class="me-2">
					<div>from</div>
					<div>to</div>
				</div>
				<div>
					<div class="text-secondary">{{ product.period_from }}</div>
					<div class="text-primary">{{ product.period_to }}</div>
				</div>
			</div>
			<div class="me-4 col-1">{{ product.product_condition }}</div>

			<div class="me-4 col-1">
				<div>{{ product.cost_USD }} $</div>
				<div>{{ product.cost_UAH }} UAH</div>
			</div>
			<div class="me-4 col-2">{{ product.product_description }}</div>
			<div class="me-4 col-1">
				<div>{{ product.product_license }}</div>
				<div>{{ product.period_to }}</div>
			</div>

			<div class="me-4 col-3"><TrashIcon style="width: 20px;"/></div>
		</div>
	</div>
</template>