<script setup lang="ts">
import { Cog8ToothIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<div class="d-flex">
		<aside id="sidebar" class="expand bg-light">
			<div class="d-flex">
				<!-- <button class="toggle-btn" type="button">
					<i class="lni lni-grid-alt"></i>
				</button> -->
				<div class="mx-auto position-relative mt-5 mb-3">
					<img src="../assets/images/user.png" alt="avatar image" class="sidebar_logo">
					<div class="sidebar_logo_2 position-absolute border d-flex align-items-center justify-content-center"><Cog8ToothIcon class="w-20px"/></div>
				</div>
			</div>
			<ul class="sidebar-nav text-center">
				<li class="sidebar-item">
					<router-link to="/orders" class="sidebar-link" :class="{ active: $route.path === '/orders' }">
						<span>Orders</span>
					</router-link>
				</li>
				<li class="sidebar-item">
					<router-link to="/products" class="sidebar-link" :class="{ active: $route.path === '/products' }">
						<span>Products</span>
					</router-link>
				</li>
			</ul>
		</aside>
		<div class="main" style="background-color: rgb(240, 243, 245);">
			<div class="p-10">
				<RouterView />
			</div>
		</div>
		
	</div>
</template>