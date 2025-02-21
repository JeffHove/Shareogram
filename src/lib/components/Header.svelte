<script lang="ts">
  import { tilesSolution, getIsWin, isGame, tiles } from "$lib/refs.svelte";
  import GitHub from "$lib/components/GitHub.svelte";
  import { newEditor } from "$lib/shared.svelte";
</script>

<header class="flex items-center justify-center">
  <GitHub />

  {#if isGame.v}
    <span class="pt-2.5">{getIsWin() ? "You win!" : "Keep trying"}</span>
  {:else}
    <button class="-mt-1 rounded-b-lg" onclick={() => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Play</button>
  {/if}
</header>
