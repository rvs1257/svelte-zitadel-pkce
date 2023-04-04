<script lang="ts">
	import { onMount } from 'svelte';
	import { isAuthenticated } from '../lib/stores';

	onMount(() => {
		if (!$isAuthenticated) {
			console.log('!$isAuthenticated');
		}
	});

	const isProduction = import.meta.env.NODE_ENV === 'production';
	const apiBaseURL = isProduction ? '$app/env.API_BASE_URL' : 'http://localhost:3000';
</script>

<h2>
	Welcome to the home page!
</h2>

<pre>
<b>Server:</b>			{apiBaseURL}
<b>isAuthenticated:</b>	{JSON.stringify( $isAuthenticated )}
</pre>
