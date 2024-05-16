<script setup lang="ts">
import { TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import Products from '../views/products/Products.vue';

defineProps({
	products: {
		type: Array,
		default: []
	},
	isOpen: {
		type: Boolean,
		default: false
	}
})

defineEmits(['openModal', 'closeModal'])
</script>

<template>
	<div v-if="isOpen" class="d-flex align-items-center justify-content-center position-absolute modal-window p-5">
		<div class="bg-light position-relative rounded p-0 pt-4 max-w-min-content">
			<div>
				<h3 class="card-title mb-4 px-5">Are you sure you want to delete this product?</h3>
				<div @click="$emit('closeModal')" class="position-absolute d-flex align-items-center justify-content-center rounded-circle shadow close-menu-modal">
					<XMarkIcon class="w-20px"/>
				</div>
				<div
				>
					<Products :selectedProduct="products" :classes="['w-100 border-top justify-content-center']" type="orders" :period="false" :productDescription="false" :cost="false" :licenseData="false" :condition="false" :deleteProductMenu="false" :status-title="false" />
				</div>
			</div>
			<div class="d-flex align-items-center justify-content-end p-4 col-green-bg rounded-bottom">
				<button @click="$emit('closeModal')" class="btn text-light me-3 bg-transparent"><strong class="letter-spacing-75">Decline</strong></button>
				<button @click="$emit('closeModal')" type="button" class="btn btn-primary px-4 d-flex align-items-center justify-content-center bg-white text-danger border-0 border-radius-25px"><TrashIcon class="w-20px me-1"/><span><strong>Delete</strong></span></button>
			</div>
		</div>
	</div>
</template>