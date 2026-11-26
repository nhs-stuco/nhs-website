<script lang="ts">
    import Navbar from '../../lib/components/Navbar.svelte';
    import ClubCard from '../../lib/components/ClubCard.svelte';

    let { data } = $props();
</script>

<main>
    <div>
        <header>
            <Navbar />
        </header>
    </div>
    <h1 class = "text-[4rem] font-black text-center">Clubs</h1>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each data.clubs as club}
            <ClubCard {club} class="border-neutral-300" />
        {/each}
    </div>
</main>