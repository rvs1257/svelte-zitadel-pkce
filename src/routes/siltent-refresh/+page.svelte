<script lang="ts">
	import { onMount } from 'svelte';
	import { handleSilentCallback } from '../../lib/auth';

	onMount(() => {
		handleSilentCallback();
	});
</script>

<div>Refreshing...</div>
