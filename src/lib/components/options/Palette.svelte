<script lang="ts">
  import { colorsIndexer, preferences, colors, isGame } from "$lib/refs.svelte";
  import { checkTileColors } from "$lib/shared.svelte";

  const getRandomHexColor = () => {
    const characters = "0123456789abcdef";
    let result = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const isMulticolor = () => colors.v.length > 2;
</script>

<div>
  <div class="flex flex-wrap">
    {#if !isGame.v}
      {#if isMulticolor()}
        <button class="flex-1" onclick={() => { colors.v.pop(); if (colorsIndexer.v > colors.v.length - 1) colorsIndexer.v--; checkTileColors(); }}>-</button>
      {/if}
      <button class="flex-1" onclick={() => { colors.v.push(getRandomHexColor()); }}>+</button>
    {/if}
  </div>
  <div class="flex flex-wrap">
    <input bind:value={preferences.current.bgColor} type="color" class="h-8 min-w-12 flex-1 border-0" />
    {#each colors.v as _, i}
      <input bind:value={colors.v[i]} type="color" class="h-8 min-w-12 flex-1 border-0" />
    {/each}
  </div>
</div>
