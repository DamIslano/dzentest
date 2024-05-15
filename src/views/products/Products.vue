<script setup lang="ts">
import { TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

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

const store = useStore()
const route = useRouter()
const allProducts = computed(() => store.getters.allProducts)

const productType = ref('')
const productSpecification = ref('')
const clearValues = () => {
	productType.value = ''
	productSpecification.value = ''
}

watch(productType, (newV) => {
	store.commit('setProductType', newV)
	route.push({ query: { type: newV } })
})
watch(productSpecification, (newV) => {
	store.commit('setProductSpecification', newV)
	route.push({ query: { specification: newV } })
})
</script>

<template>
	<!-- <pre>{{ route.currentRoute.value.query.type }}</pre> -->
	<div v-if="type === 'product'" class="d-flex align-items-center mb-5 min-h-35px">
		<div class="me-5">Orders / 25</div>
		<div class="d-flex align-items-center me-5">
			<div class="me-2">Type:</div>
			<div class="input-group position-relative">
				<select class="custom-select border-0" v-model="productType">
					<option value="Available">Available</option>
					<option value="Sold">Sold</option>
				</select>
			</div>
		</div>
		<div class="d-flex align-items-center me-5">
			<div class="me-2">Specification:</div>
			<div class="input-group">
				<select class="custom-select border-0" v-model="productSpecification">
					<option value="New">New</option>
					<option value="Used">Used</option>
					<option value="Refurbished">Refurbished</option>
				</select>
			</div>
		</div>
		<div v-if="productType || productSpecification" @click="clearValues" class="d-flex align-items-center">
			<div class="me-2">*Clear filter:</div>
			<div class="d-flex align-items-center justify-content-center rounded-circle filter-clear">
				<XMarkIcon class="w-20px"/>
			</div>
		</div>
	</div>
	<div :class="{ 'd-flex flex-column': type === 'order' }" class="overflow-auto">
		<div v-for="product in allProducts" :key="product.id" class="p-2 px-5" :class="{ 'mb-3 card d-inline-block border': type === 'product', 'border-top': type === 'order' }">
			<div class="d-flex align-items-center justify-content-between py-2">
				<div class="me-4 product-status product-available col-green min-w-15px"></div>
				<div v-if="product.icon" class="me-4 min-w-80px"><img src="../../assets/images/computer.png" alt="computer icon" class="w-50px"></div>
				<div class="me-4 min-w-450px">
					<div class="text-decoration-underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
					<div>{{ product.product_subtitle }}</div>
				</div>

				<div class="me-4 product-available-text col-green min-w-100px">{{ product.status }}</div>
				<div v-if="period" class="me-4 text-uppercase d-flex min-w-250px">
					<div class="me-2">
						<div>from</div>
						<div>to</div>
					</div>
					<div>
						<div class="text-secondary">{{ product.period_from }}</div>
						<div class="text-primary">{{ product.period_to }}</div>
					</div>
				</div>
				<div v-if="condition" class="me-4 min-w-100px">{{ product.product_condition }}</div>

				<div v-if="cost" class="me-4 min-w-150px">
					<div>{{ product.cost_USD }} $</div>
					<div>{{ product.cost_UAH }} UAH</div>
				</div>
				<div v-if="productDescription" class="me-4 min-w-400px">{{ product.product_description }}</div>
				<div v-if="licenseData" class="me-4 min-w-250px">
					<div>{{ product.product_license }}</div>
					<div>{{ product.period_to }}</div>
				</div>

				<div class="me-4 hover-overlay d-flex align-items-center justify-content-center rounded-circle delete-icon w-h-50px"><TrashIcon class="w-20px"/></div>
			</div>
		</div>
	</div>
</template>