<!-- src/routes/callback.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { handleCallback } from '../../lib/auth';

	onMount(() => {
		handleCallback();
	});
</script>

<div>Logging in...</div>
