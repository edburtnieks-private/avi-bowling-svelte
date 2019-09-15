<script>
  export let isContentVisible = false;
</script>

<style>
  div {
    background-color: var(--c-white);
    border-radius: var(--br-base);
    box-shadow: var(--bs-input);
    margin-top: var(--m-xxs);
    padding: var(--p-xs);
    position: absolute;
  }
</style>

{#if isContentVisible}
  <div>
    <slot />
  </div>
{/if}
