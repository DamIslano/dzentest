<script setup lang="ts">
import { TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Products from '../views/products/Products.vue'

defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['openModal', 'closeModal'])
</script>

<template>
  <div
    v-if="isOpen"
    class="d-flex align-items-center justify-content-center position-absolute modal-window p-5"
  >
    <div class="bg-light position-relative rounded p-0 pt-4 max-w-min-content">
      <div>
        <h3 class="card-title mb-4 px-5">Are you sure you want to delete this product?</h3>
        <div
          class="position-absolute d-flex align-items-center justify-content-center rounded-circle shadow close-menu-modal"
          @click="$emit('closeModal')"
        >
          <XMarkIcon class="w-20px" />
        </div>
        <div>
          <Products
            :selected-product="products"
            :classes="['w-100 border-top justify-content-center']"
            type="orders"
            :period="false"
            :product-description="false"
            :cost="false"
            :license-data="false"
            :condition="false"
            :delete-product-menu="false"
            :status-title="false"
          />
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-end p-4 col-green-bg rounded-bottom">
        <button
          class="btn text-light me-3 bg-transparent"
          @click="$emit('closeModal')"
        >
          <strong class="letter-spacing-75">Decline</strong>
        </button>
        <button
          type="button"
          class="btn btn-primary px-4 d-flex align-items-center justify-content-center bg-white text-danger border-0 border-radius-25px"
          @click="$emit('closeModal')"
        >
          <TrashIcon class="w-20px me-1" /><span><strong>Delete</strong></span>
        </button>
      </div>
    </div>
  </div>
</template>
