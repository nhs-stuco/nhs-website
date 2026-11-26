<script lang="ts">
    // creating a new data structure = interface
    // correct way: defines the shape an object should have

    // has to take values of name and href
    //structure that each navigation item must follow 
    interface NavItem {
        name: string;
        href: string;
    };

    // export let bigName: string = "Namebar";
    
    // since this is a component 
    // pass props to the component from the parent component
    // use defaults ex. navitems when not specified in the parent component
    let {
    bigName = "NHS StuCo",
    navItems = [
        { name: "Home", href: "/" },
        { name: "Announcements", href: "/announcements" },
        { name: "Events", href: "/events" },
        { name: "Clubs", href: "/clubs" },
        { name: "FAQ", href: "/faq" },
        { name: "Members", href: "/members" }
    ]
}: {
    bigName?: string;
    navItems?: NavItem[];
} = $props();

// ^ basically telling what incoming props are expected and what their types are

</script>

<nav>
    <a href="/" class="big-name">{bigName} </a>
    <div class="navItems">
    <!-- each = for loop in svelte, iterates over navItems array and creates an anchor tag for each item -->
        {#each navItems as item}
            <a href={item.href}>{item.name}</a>
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