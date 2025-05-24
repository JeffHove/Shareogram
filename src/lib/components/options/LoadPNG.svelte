<script lang="ts">
  import { loadPNG } from "$lib/shared.svelte";

  let tolerance = $state(10);
  let files: undefined | FileList = $state();

  $effect(() => {
    if (files !== undefined && files.length >= 1) {
      loadPNG(files[0], tolerance);
    }
  });
</script>

<input class="hidden" accept="image/png" id="file-upload" type="file" bind:files />
<label class="w-full cursor-pointer bg-[ButtonFace] p-2.5 text-center font-sans text-black hover:brightness-75 active:brightness-50" for="file-upload">Load PNG</label>
{#if files !== undefined && files.length >= 1}
  <input class="mx-2" bind:value={tolerance} type="range" max="442" min="10" />
{/if}
