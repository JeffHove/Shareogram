<script lang="ts">
  import { tilesSolution, editorHeight, editorWidth, isGame, tiles } from "$lib/refs.svelte";
  import { resetHistory, newEditor } from "$lib/shared.svelte";

  const sanitizeNumberInput = (n: number) => Math.max(0, Number(String(n).replace(/[^0-9]/g, "")));
</script>

{#if isGame.v}
  <button onclick={() => { isGame.v = false; tiles.v = tilesSolution.v; resetHistory(); }}>Edit</button>
{:else}
  <div class="flex">
    <input
      oninput={() => { editorWidth.v = sanitizeNumberInput(editorWidth.v); newEditor(); }}
      class="min-w-0 p-2.5 text-center text-black"
      bind:value={editorWidth.v}
      type="text"
      inputmode="numeric"
    />
    <input
      oninput={() => { editorHeight.v = sanitizeNumberInput(editorHeight.v); newEditor(); }}
      class="min-w-0 p-2.5 text-center text-black"
      bind:value={editorHeight.v}
      type="text"
      inputmode="numeric"
    />
  </div>
{/if}
