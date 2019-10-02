<script>
  import CaretIcon from "../../Icons/CaretIcon/index.svelte";

  let active = false;

  const toggleSelect = () => {
    active = !active;
  };

  const closeSelect = () => {
    active = false;
  };

  export let value;
  export let id;
  export let label;
  export let options;
  export let disabled = false;
</script>

<style>
  select {
    appearance: none;
  }

  .select-wrapper {
    position: relative;
  }

  .caret-icon-wrapper {
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: calc(50% - 6px);
  }
</style>

<label for={id}>{label}</label>

<div class="select-wrapper">
  <select
    class="global-input"
    bind:value
    {id}
    {disabled}
    on:blur={closeSelect}
    on:click={toggleSelect}>
    {#each options as option}
      <option value={option} on:click={closeSelect}>{option}</option>
    {/each}
  </select>

  <div class="caret-icon-wrapper">
    <CaretIcon {disabled} {active} />
  </div>
</div>
