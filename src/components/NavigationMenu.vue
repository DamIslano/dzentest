<script setup lang="ts">

</script>

<template>
	<div class="d-flex">
		<aside id="sidebar" class="expand bg-light">
			<div class="d-flex">
				<!-- <button class="toggle-btn" type="button">
					<i class="lni lni-grid-alt"></i>
				</button> -->
				<div class="mx-auto position-relative mt-5 mb-3">
					<div class="sidebar_logo"></div>
					<div class="sidebar_logo_2 position-absolute"></div>
				</div>
			</div>
			<ul class="sidebar-nav text-center">
				<li class="sidebar-item">
					<router-link to="/orders" class="sidebar-link">
						<span>Orders</span>
					</router-link>
				</li>
				<li class="sidebar-item">
					<router-link to="/products" class="sidebar-link">
						<span>Products</span>
					</router-link>
				</li>
			</ul>
		</aside>
		<div class="main">
			<div class="p-10">
				<RouterView />
			</div>
		</div>
		
	</div>
</template>