<script lang="ts">
  import { getDifferentTiles, tilesSolution, getIsWin, tiles } from "$lib/refs.svelte";
  import { getRandomNumberInclusive } from "$lib/utils";
  import { saveTiles } from "$lib/shared.svelte";

  const revealATile = () => {
    if (!getIsWin()) {
      const differentTiles = getDifferentTiles();
      const randomIndex = getRandomNumberInclusive(0, differentTiles.length - 1);
      const row = differentTiles[randomIndex].row;
      const column = differentTiles[randomIndex].column;
      tiles.v[row][column] = { colorIndex: tilesSolution.v[row][column].colorIndex, Xed: false };
      saveTiles();
    }
  };
</script>

<button onclick={revealATile}>Reveal Tile</button>
