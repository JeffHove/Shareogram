<script lang="ts">
  import { tilesHistoryIndexer, tilesHistory, editorHeight, clickedTile, editorWidth, tiles } from "$lib/refs.svelte";
  import { checkTileColors, saveTiles } from "$lib/shared.svelte";

  const onpointerup = () => {
    if (clickedTile.v.row !== -1) saveTiles();
    clickedTile.reset();
  };

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === "z") undo();
    else if (e.key === "y") redo();
  };

  const checkWidthAndHeight = () => {
    if (tiles.numRows !== editorHeight.v) editorHeight.v = tiles.numRows;
    if (tiles.numColumns !== editorWidth.v) editorWidth.v = tiles.numColumns;
  };

  const browseHistory = () => {
    tiles.v = $state.snapshot(tilesHistory.v[tilesHistoryIndexer.v]);
    checkTileColors();
    checkWidthAndHeight();
  };

  const undo = () => {
    if (tilesHistoryIndexer.v !== 0) {
      tilesHistoryIndexer.v--;
      browseHistory();
    }
  };

  const redo = () => {
    if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) {
      tilesHistoryIndexer.v++;
      browseHistory();
    }
  };
</script>

<svelte:window {onkeydown} {onpointerup} />

<div class="flex">
  <button class="flex-1" onclick={undo}>Undo</button>
  <button class="flex-1" onclick={redo}>Redo</button>
</div>
