<script lang="ts">
    import { goto } from "$app/navigation";
    import { isAuthenticated } from "../lib/stores";
    import { login, logout } from "../lib/auth";
  </script>

<header>
    <nav>
        <a href="/" use:goto>Home</a>
        <a href="/profile" use:goto>Profile</a>
        {#if $isAuthenticated}
          <button on:click="{logout}">Logout</button>
        {:else}
          <button on:click="{login}">Login</button>
        {/if}
    </nav>
</header>
  
<main>
    <slot></slot>
</main>
