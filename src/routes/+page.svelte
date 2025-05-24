<script lang="ts">
  import { editorHeight, editorWidth, colors } from "$lib/refs.svelte";
  import { startEditor, newEditor } from "$lib/shared.svelte";
  import { dailyNonogram } from "$lib/nonograms";
  import { base } from "$app/paths";

  const today = new Date().toLocaleDateString("en-US", { year: "numeric", day: "numeric", month: "long" });

  const onclick = () => {
    editorWidth.reset();
    editorHeight.reset();
    colors.reset();
    startEditor();
    newEditor();
  };
</script>

<div class="flex h-full flex-col items-center justify-center gap-2 text-white">
  <img src="{base}/favicon/android-chrome-192x192.png" alt="Logo">
  <h1 class="text-4xl font-bold">Shareogram</h1>
  <h2>Share nonograms easily.</h2>
  <div class="flex justify-around gap-2">
    <a class="w-20 rounded-2xl bg-[ButtonFace] p-2 text-center text-black hover:brightness-75 active:brightness-50" href="{base}/custom" {onclick}>Custom</a>
    <a class="w-20 rounded-2xl bg-[ButtonFace] p-2 text-center text-black hover:brightness-75 active:brightness-50" href="{base}/daily">Daily</a>
  </div>
  <div class="text-center text-xs">
    <h3 class="font-bold">{today}</h3>
    <p>No. {dailyNonogram.id}</p>
    <p>Art By {dailyNonogram.artist}</p>
    {#if dailyNonogram.donate}
      <br>
      <p>Support the artist:</p>
      <a href="{dailyNonogram.donate}" target="_blank" rel="noopener">Donate</a>
    {/if}
  </div>
</div>
