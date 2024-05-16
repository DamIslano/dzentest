<script setup lang="ts">
import { TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
import { computed, nextTick, onMounted, ref, watch, defineEmits } from 'vue'
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
	},
	deleteProductMenu: {
		type: Boolean,
		default: true
	},
	selectedProduct: {
		type: Array,
		default: []
	},
	statusTitle: {
		type: Boolean,
		default: true
	},
	classes: {
		type: Array,
		default: []
	}
})

const store = useStore()
const route = useRouter()
const allProducts = computed(() => store.getters.allProducts)

const emit = defineEmits(['deleteProduct'])
const deletingProduct = (product: Object) => {
	emit('deleteProduct', product)
}

const productType = ref('')
const productSpecification = ref('')
const clearValues = () => {
	productType.value = ''
	productSpecification.value = ''
	nextTick(() => {
		route.push({ query: {} })
	})
}

watch(productType, (newV) => {
	store.commit('setProductType', newV)
	route.push({ query: { ...route.currentRoute.value.query, type: newV ? newV : undefined } })
})
watch(productSpecification, (newV) => {
	store.commit('setProductSpecification', newV)
	route.push({ query: { ...route.currentRoute.value.query, specification: newV ? newV : undefined } })
})

onMounted(() => {
	const queryType = route.currentRoute.value.query.type
	const querySpecification = route.currentRoute.value.query.specification

	if(queryType) {
		store.commit('setProductType', queryType)
		productType.value = queryType.toString()
	}
	if(querySpecification) {
		store.commit('setProductSpecification', querySpecification)
		productSpecification.value = querySpecification.toString()
	}
})
</script>

<template>
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
		<div 
			v-for="product in (selectedProduct.length ? selectedProduct : allProducts)" 
			:key="product.id" 
			class="p-2 px-5 product-hovered d-inline-block" 
			:class="
				classes, 
				{ 'mb-3 card border': type === 'product', 'border-top': type === 'order' }
			"
		>
			<div class="d-flex align-items-center py-2" :class="{ 'justify-content-between': !classes }">
				<div class="me-4 product-status min-w-15px" :class="product.status === 'Available' ? 'product-available' : 'product-disabled'"</div>
				<div v-if="product.icon" class="me-4 min-w-80px"><img src="../../assets/images/computer.png" alt="computer icon" class="w-50px"></div>
				<div class="me-4 min-w-450px">
					<div class="text-decoration-underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
					<div class="text-grey-light">{{ product.product_subtitle }}</div>
				</div>

				<div 
					v-if="statusTitle" 
					class="me-4 min-w-100px" 
					:class="[
						{ 'flex-grow-1': type === 'order' }, 
						product.status === 'Available' ? 'product-available-text' : 'product-disabled-text'
					]"
				>{{ product.status }}</div>
				<div v-if="period" class="me-5 text-uppercase min-w-150px">
					<div class="text-grey-light d-flex align-items-end justify-content-between">
						<div class="fsz-11px mb-2px">from</div>
						<div class="text-grey-light">{{ product.period_from }}</div>
					</div>
					<div class="d-flex align-items-end justify-content-between">
						<div class="fsz-11px mb-2px">to</div>
						<div>{{ product.period_to }}</div>
					</div>
				</div>
				<div v-if="condition" class="me-4 min-w-100px">{{ product.product_condition }}</div>

				<div v-if="cost" class="me-4 min-w-150px">
					<div class="text-grey-light">{{ product.cost_USD }} $</div>
					<div>{{ product.cost_UAH }} UAH</div>
				</div>
				<div v-if="productDescription" class="me-4 min-w-400px text-decoration-underline">{{ product.product_description }}</div>
				<div v-if="licenseData" class="me-4 min-w-250px d-flex">
					<div class="text-center">
						<div class="text-grey-light">{{ product.product_license }}</div>
						<div>{{ product.product_arrivalDate }}</div>
					</div>
				</div>

				<div v-if="deleteProductMenu" @click="deletingProduct(product)" class="me-4 hover-overlay d-flex align-items-center justify-content-center rounded-circle delete-icon w-h-50px"><TrashIcon class="w-20px"/></div>
			</div>
		</div>
	</div>
</template>