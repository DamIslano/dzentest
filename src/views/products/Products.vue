<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'

defineProps({
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
	type: {
		type: String,
		default: 'product'
	}
})

const { allProducts } = useStore().getters

const avabilitySort = (condition) => allProducts.sort((a, b) => condition.indexOf(a.status) - condition.indexOf(b.status))
const availibleProducts = () => avabilitySort(["Available", "Sold"])
const soldProducts = () => avabilitySort(["Sold", "Available"])


const conditionSort = (condition) => allProducts.sort((a, b) => condition.indexOf(a.product_condition) - condition.indexOf(b.product_condition))

const newProducts = () => conditionSort(["New", "Used", "Refurbished"])
const usedProducts = () => conditionSort(["Used", "New", "Refurbished"])
const refurbishedProducts = () => conditionSort(["Refurbished", "New", "Used"])
</script>

<template>
	<div v-if="type === 'product'" class="d-flex align-items-center mb-5">
		<div class="me-5">Orders / 25</div>
		<div class="d-flex align-items-center me-5">
			<div class="me-2">Type:</div>
			<div class="input-group position-relative">
				<div class="position-absolute" @click="refurbishedProducts">test |</div>
				<select class="custom-select border-0" style="width: 200px; outline: none;">
					<option selected></option>
					<option value="1">Availible</option>
					<option value="2">Under repair</option>
				</select>
			</div>
		</div>
		<div class="d-flex align-items-center">
			<div class="me-2">Specification:</div>
			<div class="input-group">
				<select class="custom-select border-0" style="width: 200px; outline: none;">
					<option selected></option>
					<option value="1">Availible</option>
					<option value="2">Under repair</option>
				</select>
			</div>
		</div>
	</div>
	<div :class="{ 'd-flex flex-column': type === 'order' }" class="overflow-auto">
		<div v-for="product in allProducts" :key="product.id" class="p-2 px-5" :class="{ 'mb-3 card d-inline-block border': type === 'product', 'border-top': type === 'order' }">
			<div class="d-flex align-items-center justify-content-between py-2">
				<div class="me-4 status status_availible" style="min-width: 15px;"></div>
				<div v-if="product.icon" class="me-4" style="min-width: 80px;"><img src="../../assets/images/computer.png" alt="computer icon" style="width: 50px;"></div>
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

				<div class="me-4 hover-overlay d-flex align-items-center justify-content-center rounded-circle delete-icon" style="min-width: 50px; height: 50px;"><TrashIcon class="w-20px"/></div>
			</div>
		</div>
	</div>
</template>