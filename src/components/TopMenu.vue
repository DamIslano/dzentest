<script setup lang="ts">
import { ref } from 'vue'
import { ClockIcon } from '@heroicons/vue/24/outline'
const currentDay = ref(getCurrentDateTime())
const currentTime = ref('Loading...')

function getCurrentDateTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
  return dateString;
}

setInterval(() => {
	currentDay.value = getCurrentDateTime();
	currentTime.value = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
}, 1000);
</script>

<template>
    <header class="shadow">
			<div class="container">
				<nav class="navbar px-md-1 py-md-4 py-3">
					<div class="container-fluid">
						<div class="d-flex">
							<router-link to="/" class="navbar-brand" style="margin-right: 7rem;">
								<img src="../assets/vue.svg" width="30" height="30" class="d-inline-block align-top" alt="">
								INVENTORY
							</router-link>
							<form class="d-flex" role="search">
								<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
							</form>
						</div>
						<div class="d-none d-md-block">
							<div class="d-flex flex-column align-items-start">
								<div>Today</div>
								<div class="d-flex flex-row">
									<div class="me-3">{{ currentDay }}</div>
									<div class="d-flex align-items-center"><ClockIcon style="width: 15px;" /> {{ currentTime }}</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
</template>