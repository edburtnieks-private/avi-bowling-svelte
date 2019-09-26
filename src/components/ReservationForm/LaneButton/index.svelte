<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let isActive = false;

  const toggleLane = event => {
    isActive = !isActive;
    dispatch("toggleLane", event.target.value);
  };

  export let value;
  export let disabled = false;
</script>

<style>
  button {
    height: 32px;
  }

  .active {
    background-color: var(--c-green);
    border-color: var(--c-green);
    color: var(--c-white);
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
