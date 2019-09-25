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
    background-color: var(--c-white);
    border-radius: var(--br-base);
    border: 2px solid var(--c-white);
    box-shadow: var(--bs-input);
    color: var(--c-mine-shaft);
    height: 32px;
    outline: 0;
    padding: var(--p-0);
    width: 100%;
  }

  button:hover,
  button:active,
  button:focus {
    border-color: var(--c-silver);
  }

  button:disabled {
    background-color: var(--c-mercury);
    border-color: var(--c-mercury);
    color: var(--c-silver);
  }

  .active {
    background-color: var(--c-green);
    border-color: var(--c-green);
    color: var(--c-white);
  }
</style>

<button
  type="button"
  class:active={isActive}
  on:click={toggleLane}
  {value}
  {disabled}>
  <slot />
</button>
