<script>
  import { beforeUpdate } from "svelte";

  export let isContentVisible = false;
  export let select = false;
</script>

<style>
  div {
    background-color: var(--c-white);
    border-radius: var(--br-base);
    box-shadow: var(--bs-input);
    margin-top: var(--m-xxs);
    max-width: 272px;
    padding: var(--p-xs);
    position: absolute;
    z-index: var(--zi-dropdown);
  }

  @media (min-width: 1024px) {
    div {
      max-width: 100%;
    }
  }

  .select {
    margin-top: var(--m-0);
    padding: var(--p-0);
    width: 100%;
  }
</style>

{#if isContentVisible}
  <div class:select>
    <slot />
  </div>
{/if}
