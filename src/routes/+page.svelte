<script lang="ts">
  import { base } from "$app/paths";
</script>

<div class="flex flex-col items-center justify-center h-full gap-2 text-white">
  <img src="{base}/favicon.png" alt="Logo">
  <h1 class="text-4xl font-bold">Shareogram</h1>
  <h2>Share nonograms easily.</h2>
  <div class="flex justify-around gap-2">
    <a class="bg-[ButtonFace] text-black rounded-2xl w-20 text-center p-2 hover:brightness-75 active:brightness-50" href="/custom">Custom</a>
    <!-- <a class="bg-[ButtonFace] text-black rounded-2xl w-20 text-center p-2 hover:brightness-75 active:brightness-50" href="/daily">Daily</a> -->
  </div>
</div>
