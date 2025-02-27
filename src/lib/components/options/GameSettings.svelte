<script lang="ts">
  import { tilesSolution, editorHeight, editorWidth, isGame, tiles } from "$lib/refs.svelte";
  import { resetHistory, newEditor, saveTiles } from "$lib/shared.svelte";

  const sanitizeNumberInput = (n: number) => Math.max(0, Number(String(n).replace(/[^0-9]/g, "")));

  const shiftTiles = (direction: "right" | "left" | "down" | "up") => {
    tiles.v = tiles.v.map((row, rowIndex, grid) => {
      switch (direction) {
        case "right": return [row.slice(-1)[0], ...row.slice(0, -1)];
        case "left": return [...row.slice(1), row[0]];
        case "down": return grid[(rowIndex - 1 + grid.length) % grid.length];
        case "up": return grid[(rowIndex + 1) % grid.length];
        default: return row;
      }
    });
    saveTiles();
  };
</script>

{#if isGame.v}
  <button onclick={() => { isGame.v = false; tiles.v = tilesSolution.v; resetHistory(); }}>Edit</button>
{:else}
  <div class="flex">
    <input
      onkeydown={(e) => { if (e.key === "Enter") { newEditor(); } }}
      oninput={() => { editorWidth.v = sanitizeNumberInput(editorWidth.v); }}
      class="min-w-0 p-2.5 text-center text-black"
      bind:value={editorWidth.v}
      type="text"
      inputmode="numeric"
    />
    <input
      onkeydown={(e) => { if (e.key === "Enter") { newEditor(); } }}
      oninput={() => { editorHeight.v = sanitizeNumberInput(editorHeight.v); }}
      class="min-w-0 p-2.5 text-center text-black"
      bind:value={editorHeight.v}
      type="text"
      inputmode="numeric"
    />
  </div>
  <button onclick={() => { newEditor(); }}>Resize</button>
  <div class="flex">
    <button aria-label="Shift Left" class="flex-1" onclick={() => shiftTiles("left")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"/>
      </svg>
    </button>
    <button aria-label="Shift Right" class="flex-1" onclick={() => shiftTiles("right")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
      </svg>
    </button>
    <button aria-label="Shift Up" class="flex-1" onclick={() => shiftTiles("up")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 8.59l4.59 4.58L18 12l-6-6l-6 6l1.41 1.41L12 8.59z"/>
      </svg>
    </button>
    <button aria-label="Shift Down" class="flex-1" onclick={() => shiftTiles("down")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 15.41L7.41 10.83L6 12l6 6l6-6l-1.41-1.41L12 15.41z"/>
      </svg>
    </button>
  </div>
{/if}
