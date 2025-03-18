<script lang="ts">
  import GameSettings from "$lib/components/options/GameSettings.svelte";
  import SavePNG from "$lib/components/options/SavePNG.svelte";
  import LoadPNG from "$lib/components/options/LoadPNG.svelte";
  import Palette from "$lib/components/options/Palette.svelte";
  import Sticky from "$lib/components/options/Sticky.svelte";
  import Scale from "$lib/components/options/Scale.svelte";
  import { sidebarOn, isGame } from "$lib/refs.svelte";
  import { fly } from "svelte/transition";
  import { page } from "$app/state";

  const onkeydown = (e: KeyboardEvent) => { if (e.key === "o") sidebarOn.v = !sidebarOn.v; };
</script>

<svelte:window {onkeydown} />

{#if sidebarOn.v}
  <div
    class="fixed inset-y-0 right-0 z-50 flex w-40 max-w-[75%] flex-col overflow-hidden rounded-l-3xl bg-white"
    transition:fly={{ x: 80 }}
  >
    {#if !isGame.v}
      <SavePNG />
      <LoadPNG />
    {/if}
    {#if page.route.id !== "/daily"}
      <GameSettings />
    {/if}
    <Palette />
    <Scale />
    {#if isGame.v}
      <Sticky />
    {/if}
  </div>
{/if}
