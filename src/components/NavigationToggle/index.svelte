<script>
  import { createEventDispatcher } from 'svelte';
  import NavigationToggleIcon from '../Icons/NavigationToggleIcon/index.svelte';

  export let isOpen;

  const dispatch = createEventDispatcher();
</script>

<style>
  button {
    background-color: var(--c-white);
    border: 0;
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
