<script>
  import { createEventDispatcher } from 'svelte';

  export let value;
  export let disabled = false;

  const dispatch = createEventDispatcher();

  let isActive = false;

  const toggleLane = event => {
    isActive = !isActive;
    dispatch('toggleLane', event.target.value);
  };
</script>

<style>
  button {
    height: 32px;
  }

  .active {
    background-color: var(--c-green);
    box-shadow: none;
    color: var(--c-white);
  }

  .active:hover,
  .active:focus,
  .active:active {
    background-color: var(--c-green-darker);
  }
</style>

<button
  type="button"
  class="global-button-input"
  class:active={isActive}
  on:click={toggleLane}
  {value}
  {disabled}>
  <slot />
</button>
