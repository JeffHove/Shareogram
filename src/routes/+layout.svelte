<script>
  import Background from "$lib/components/Background.svelte";
  import Funding from "$lib/components/Funding.svelte";
  import { onNavigate } from "$app/navigation";

  import "../app.css";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let { children } = $props();
</script>

<Funding />

<Background />

{@render children()}
