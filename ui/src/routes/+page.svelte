<script>
    import { onMount } from 'svelte';

    let data = null;
    let error = null;
    let loading = true;

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:5000/user', { // Replace with your API endpoint
                method: 'GET', // or POST, PUT, DELETE, etc. as needed
                headers: {
                    'Content-Type': 'application/json', 
                },
                // If you are sending data with POST, PUT, etc. include a body
                // body: JSON.stringify({ key: 'value' }) 
            });

            if (response.ok) {
                let payload = await response.json();
                data = await payload.data;
                console.log("data",data);
                loading = false;
            }

            
        } catch (err) {
            error = err.message;
            console.error("Error fetching data:", err); // Log the full error for debugging
        } 
    });
</script>

<h1>Welcome connection to API</h1>

{#if loading}
    <p>Loading data...</p>
{:else}
   {#each data as user }
    <h1>{user.email}</h1>
    <h1>{user.password}</h1>
   {/each}
{/if}