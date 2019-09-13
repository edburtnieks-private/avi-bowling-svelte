<script>
  import { createEventDispatcher } from "svelte";
  import NavigationToggleIcon from "../Icon/NavigationToggleIcon/index.svelte";

  const dispatch = createEventDispatcher();

  export let isOpen;
</script>

<style>
  button {
    background-color: var(--c-white);
    border: 0;
    cursor: pointer;
    padding: 15px 8px;
    z-index: var(--zi-navigation-toggle);
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }
  }
</style>

<button on:click={() => dispatch('toggleNavigation')}>
  <NavigationToggleIcon {isOpen} />
</button>
