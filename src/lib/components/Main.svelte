<script lang="ts">
  import { isMoveSelected, tableScale, sidebarOn, colors } from "$lib/refs.svelte";
  import { type PinchCustomEvent, pinch } from "svelte-gestures";
  import Options from "$lib/components/options/Options.svelte";
  import Shareogram from "$lib/components/Shareogram.svelte";
  import { MAX_SCALE, MIN_SCALE } from "$lib/shared.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { dragscroll } from "$lib/dragscroll";

  let scale = $state(MIN_SCALE);

  const onwheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0 && tableScale.v < MAX_SCALE) tableScale.v += 0.05;
    else if (e.deltaY > 0 && tableScale.v > MIN_SCALE) tableScale.v -= 0.05;
  };

  const onpinch = (e: PinchCustomEvent) => {
    if (!isMoveSelected.v) return;
    const _scale = scale;
    scale = e.detail.scale;
    const isZoomOut = scale < _scale;
    if (isZoomOut && tableScale.v > MIN_SCALE) tableScale.v -= 0.025;
    else if (!isZoomOut && tableScale.v < MAX_SCALE) tableScale.v += 0.025;
  };

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
    return "";
  };

  $effect(() => { document.body.style.color = colors.v[0]; });
</script>

<!-- Can't just do {onwheel} because e.preventDefault shows a warning:
Ignoring ‘preventDefault()’ call on event of type ‘wheel’ from a listener registered as ‘passive’. -->
<svelte:window on:wheel|nonpassive={onwheel} oncontextmenu={e => e.preventDefault()} {onload} onbeforeunload={(e) => { handleBeforeUnload(e); }} />

<svelte:body use:pinch={() => ({})} {onpinch} />

<Header />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<main
  style:touch-action={isMoveSelected.v ? "auto" : "none"}
  onclick={ () => { sidebarOn.v = false; } }
  class="m-3 flex flex-1 overflow-auto"
  use:dragscroll
>
  <Shareogram />
</main>

<Footer />

<Options />

<style>
  main {
    align-items: safe center;
    justify-content: safe center;

    /* Hide scrollbars */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
  }
</style>
