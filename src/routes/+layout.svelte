<script>
    import "../app.css";
    import { page } from "$app/stores";

    let { children } = $props()
    const ROUTES = [
        { href: "/", name: "calculator" },
        { href: "/history", name: "history" },
    ];

    let activeHref = $derived($page.route.id);
</script>

<div class="flex flex-col min-h-svh bg-base-200">
    <div
        role="tablist"
        class="tabs tabs-boxed tabs-sm m-4 border border-neutral"
    >
        <!-- TODO: Add Animations -->
        {#each ROUTES as route}
            <a
                href={route.href}
                class:tab-active={activeHref === route.href}
                class="tab">{route.name}</a
            >
        {/each}
    </div>
    {@render children()}
</div>
