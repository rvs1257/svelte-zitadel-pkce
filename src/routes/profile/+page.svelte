<script lang="ts">
	import { user } from '../../lib/stores';
</script>

{#if $user}
	<h2>User Profile</h2>
	{#if !$user.profile.email}
		<p><b>Note: </b>If you are seeing this message you probably need to check <b>User Info inside ID Token</b> at <b>Zitadel Project Console > [Your project] > [Your application] > Token Settings</b></p>
	{:else}
		<p>Name: {$user.profile.name}</p>
		<p>Email: {$user.profile.email}</p>
		<p>Preferred Username: {$user.profile.preferred_username}</p>
	{/if}
{:else}
	<p>Please log in to view your profile.</p>
{/if}
