<script setup lang="ts">
import { ref } from 'vue';
import { TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline';
defineProps({
	product: {
		type: Object,
		default: {}
	}
})
const isOpen = ref(false)

</script>

<template>
	<button @click="isOpen = true" type="button" class="btn btn-primary">
		Launch demo modal
	</button>

	<div v-if="isOpen" class="d-flex align-items-center justify-content-center position-absolute modal-window">
		<div class="bg-light pt-4 position-relative rounded">
			<div class="px-5">
				<h3 class="card-title mb-4">Are you sure to delete this product?</h3>
				<div @click="isOpen = false" class="position-absolute d-flex align-items-center justify-content-center rounded-circle shadow close-menu-modal" data-bs-dismiss="modal" aria-label="Close">
					<XMarkIcon class="w-20px"/>
				</div>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<div class="d-flex align-items-center justify-content-end p-4 col-green-bg rounded-bottom">
				<button @click="isOpen = false" class="btn text-light me-3 bg-transparent"><strong class="letter-spacing-75">Decline</strong></button>
				<button type="button" class="btn btn-primary px-4 d-flex align-items-center justify-content-center bg-white text-danger border-0 border-radius-25px"><TrashIcon class="w-20px me-1"/><span><strong>Delete</strong></span></button>
			</div>
		</div>
	</div>
</template>