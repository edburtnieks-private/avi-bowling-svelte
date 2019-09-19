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
</script>

<style>
  select {
    appearance: none;
    border-radius: var(--br-base);
    border: 0;
    box-shadow: var(--bs-input);
    color: var(--c-mine-shaft);
    cursor: pointer;
    display: block;
    font-size: var(--fs-base);
    padding: var(--p-xxs) var(--p-xs);
    width: 100%;
  }

  .select-wrapper {
    position: relative;
  }

  .caret-icon-wrapper {
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
    on:blur={closeSelect}
    on:click={toggleSelect}>
    {#each options as option}
      <option value={option} on:click={closeSelect}>{option}</option>
    {/each}
  </select>

  <div class="caret-icon-wrapper">
    <CaretIcon {active} />
  </div>
</div>
