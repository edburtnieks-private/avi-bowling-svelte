<script>
  import DropdownToggle from "../../DropdownToggle/index.svelte";
  import CaretIcon from "../../Icons/CaretIcon/index.svelte";

  const handleChange = event => {
    value = event.target.value;
  };

  export let id;
  export let incrementInput = false;
  export let label = "Label";
  export let placeholder = "";
  export let type = "text";
  export let value = "";
  export let isDropdownToggle = false;
  export let dropdownToggleText = "";
  export let isDropdownActive = "";
  export let valueText = "";
</script>

<style>
  .input-label {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .input-label {
      max-width: 176px;
    }

    .increment-input-label {
      max-width: 104px;
    }
  }

  .dropdown-toggle-input-label {
    max-width: 100%;
  }

  .input-wrapper {
    border-radius: var(--br-base);
    box-shadow: var(--bs-input);
  }

  input,
  .dropdown-toggle-input {
    background-color: var(--c-white);
    border-radius: inherit;
    border: 0;
    color: var(--c-mine-shaft);
    font-size: 1rem;
    padding: var(--p-xxs) var(--p-xs);
    width: 100%;
  }

  .dropdown-toggle-input {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .caret-icon-wrapper {
    margin-left: var(--m-xxs);
    z-index: var(--zi-select-caret);
  }

  input::placeholder {
    color: var(--c-silver);
  }

  .increment-input-wrapper {
    display: flex;
  }

  .increment-input-wrapper input {
    padding: var(--p-xxs);
    text-align: center;
  }
</style>

<div
  class="input-label"
  class:increment-input-label={incrementInput}
  class:dropdown-toggle-input-label={isDropdownToggle}>
  <label for={id}>{label}</label>

  {#if isDropdownToggle}
    <DropdownToggle {id} on:toggleDropdown isInput={isDropdownToggle}>
      <div class="input-wrapper dropdown-toggle-input">
        <span>{dropdownToggleText}</span>
        <div class="caret-icon-wrapper">
          <CaretIcon active={isDropdownActive} />
        </div>
      </div>
    </DropdownToggle>

    <slot name="dropdown-content" />
  {:else}
    <div class="input-wrapper" class:increment-input-wrapper={incrementInput}>
      <slot name="decrement-button" />

      <input
        {type}
        {placeholder}
        {id}
        value={valueText || value}
        disabled={incrementInput}
        on:change={handleChange} />

      <slot name="increment-button" />
    </div>
  {/if}
</div>
