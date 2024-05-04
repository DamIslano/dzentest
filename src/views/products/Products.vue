<script setup lang="ts">
import { ComputerDesktopIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<div class="card p-2 px-5">
		<div class="card-body d-flex align-items-center justify-content-between">
			<div class="me-4 status status_availible"></div>
			<div class="me-4"><ComputerDesktopIcon style="width: 50px;" /></div>
			<div class="me-4">
				<div>product name</div>
				<div>product description</div>
			</div>

			<div class="me-4 status_availible_text">availible</div>
			<div class="me-4">
				<div>from <span class="text-light">111222</span></div>
				<div>to <span class="text-primary">111222</span></div>
			</div>
			<div class="me-4">new</div>

			<div class="me-4">
				<div>$$$</div>
				<div>uah</div>
			</div>
			<div class="me-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ab.</div>
			<div class="me-4">
				<div>date1</div>
				<div>date2</div>
			</div>

			<div class="me-4"><TrashIcon style="width: 20px;"/></div>
		</div>
	</div>
</template>