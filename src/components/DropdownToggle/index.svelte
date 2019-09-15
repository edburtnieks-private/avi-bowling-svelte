<script>
  import { createEventDispatcher } from "svelte";
  import CaretIcon from "../Icons/CaretIcon/index.svelte";

  const dispatch = createEventDispatcher();

  let isActive = false;

  const toggleDropdown = () => {
    isActive = !isActive;
    dispatch("toggleDropdown");
  };
</script>

<style>
  button {
    align-items: center;
    background-color: var(--c-white);
    border: 0;
    color: var(--c-blue);
    cursor: pointer;
    display: flex;
    font-size: var(--fs-s);
    padding: var(--p-0);
  }

  .caret-icon-wrapper {
    margin-left: var(--m-xxs);
  }
</style>

<button type="button" on:click={toggleDropdown}>
  <slot />

  <div class="caret-icon-wrapper">
    <CaretIcon {isActive} />
  </div>
</button>
