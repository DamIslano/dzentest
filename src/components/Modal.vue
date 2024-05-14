<script setup lang="ts">
import { ref } from 'vue';
import { TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline';
defineProps({
	product: {
		type: Object,
		default: {}
	}
})
const isOpen = ref(true)

</script>

<template>
	<button @click="isOpen = true" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
		Launch demo modal
	</button>

	<div v-if="isOpen" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header position-relative">
					<h5 class="modal-title" id="exampleModalLabel">Are you sure to delete this product?</h5>
					<div class="position-absolute d-flex align-items-center justify-content-center rounded-circle shadow close-menu-modal" data-bs-dismiss="modal" aria-label="Close">
						<XMarkIcon class="w-20px"/>
					</div>
				</div>
				<div class="modal-body">
					...
				</div>
				<div class="modal-footer" style="background: green;">
					<button type="button" class="btn btn-secondary bg-transparent border-0 me-2" data-bs-dismiss="modal">Decline</button>
					<button type="button" class="btn btn-primary px-4 d-flex align-items-center justify-content-center bg-white text-danger border-0" style="border-radius: 20px;"><TrashIcon class="w-20px me-1"/><span>Delete</span></button>
				</div>
			</div>
		</div>
	</div>
</template>