<script lang="ts">
  import { tilesSolution, getIsWin, isGame, tiles } from "$lib/refs.svelte";
  import { newEditor } from "$lib/shared.svelte";

  import Funding from "./Funding.svelte";
</script>

<header class="flex items-center justify-center">
  <div class="flex flex-1 justify-start gap-1 p-1">
    <Funding />
  </div>

  <div class="flex flex-1 justify-center">
    {#if isGame.v}
      <span class="pt-2.5">{getIsWin() ? "You win!" : "Keep trying"}</span>
    {:else}
      <button class="-mt-1 rounded-b-lg" onclick={() => { isGame.v = true; tilesSolution.v = tiles.v; newEditor(); }}>Play</button>
    {/if}
  </div>

  <div class="flex flex-1 justify-end"></div>
</header>
