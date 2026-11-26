<script lang="ts">
    import { resolve } from '$app/paths';
    import type { RouteId } from '$app/types';

    interface NavItem {
        name: string;
        href: RouteId;
    }

    let {
        bigName = "NHS StuCo",
        navItems = [
            { name: "Home", href: "/" },
            { name: "Announcements", href: "/announcements" },
            { name: "Events", href: "/events" },
            { name: "Clubs", href: "/clubs" },
            { name: "Members", href: "/members" }
        ]
    }: {
        bigName?: string;
        navItems?: NavItem[];
    } = $props();
</script>

<nav>
    <a href={resolve('/')} class="big-name">{bigName}</a>
    <div class="navItems">
        {#each navItems as item}
            <a href={resolve(item.href)}>{item.name}</a>
        {/each}
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }

    .big-name {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .navItems {
        display: flex;
        gap: 3rem;
    }
</style>