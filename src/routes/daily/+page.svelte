<script lang="ts">
  import Main from "$lib/components/Main.svelte";
  import { dailyNonogram } from "$lib/nonograms";
  import { loadPNG } from "$lib/shared.svelte";

  const loadImageFile = async (url: string): Promise<File> => {
    const res = await fetch(url);
    const blob = await res.blob();
    return new File([blob], "image.png", { type: "image/png" });
  };

  $effect(() => {
    loadImageFile(dailyNonogram.img).then((file) => {
      loadPNG(file, 0);
    });
  });
</script>

<Main />
