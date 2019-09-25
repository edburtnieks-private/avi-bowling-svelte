<script>
  import CaretIcon from "../../Icons/CaretIcon/index.svelte";

  let value = "";
  $: active = false;

  const toggleSelect = () => {
    active = !active;
  };

  const closeSelect = () => {
    active = false;
  };

  export let selectedOption = "";
  export let id = "";
  export let label = "";
  export let options = [];
  export let disabled = false;
</script>

<style>
  select {
    appearance: none;
    border-radius: var(--br-base);
    border: 2px solid var(--c-white);
    box-shadow: var(--bs-input);
    color: var(--c-mine-shaft);
    display: block;
    font-size: var(--fs-base);
    padding: var(--p-xxs) var(--p-xs);
    width: 100%;
    outline: 0;
  }

  select:hover,
  select:active,
  select:focus {
    border-color: var(--c-silver);
  }

  select:disabled {
    background-color: var(--c-mercury);
    border-color: var(--c-mercury);
    color: var(--c-silver);
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
    bind:value={selectedOption}
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
