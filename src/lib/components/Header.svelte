<script lang="ts">
  import { getIsWin, isGame } from "$lib/refs.svelte";
  import { startGame } from "$lib/shared.svelte";
</script>

<header class="flex justify-center">
  {#if isGame.v}
    <span class="pt-2.5">{getIsWin() ? "You win!" : "Keep trying"}</span>
  {:else}
    <button class="-mt-1 rounded-b-lg" onclick={() => { startGame(); }}>Play</button>
  {/if}
</header>
