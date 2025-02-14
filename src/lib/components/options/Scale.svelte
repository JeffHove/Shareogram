<script lang="ts">
  import { MAX_SCALE, MIN_SCALE } from "$lib/shared.svelte";
  import { tableScale } from "$lib/refs.svelte";
</script>

<input bind:value={tableScale.v} step=".025" max={MAX_SCALE} min={MIN_SCALE} type="range" />

<style>
  input[type="range"] {
    appearance: none; /* Chrome */
    direction: rtl;
    height: 100%;
    writing-mode: vertical-lr;
    cursor: pointer;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: black;
      border: 2px solid grey;
      border-radius: 8px;
      cursor: pointer;
      height: 24px;
      width: 190px;
    }

    &::-moz-range-thumb {
      background-color: black;
      cursor: pointer;
      width: 95%;
    }
  }
</style>
