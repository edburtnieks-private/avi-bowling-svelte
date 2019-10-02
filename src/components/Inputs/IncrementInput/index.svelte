<script>
  import Input from "../Input/index.svelte";
  import MinusIcon from "../../Icons/MinusIcon/index.svelte";
  import PlusIcon from "../../Icons/PlusIcon/index.svelte";
  import Checkbox from "../Checkbox/index.svelte";

  const decrement = () => {
    if (value > minValue) {
      value -= 1;
    }
  };

  const increment = () => {
    if (value < maxValue) {
      value += 1;
    }
  };

  export let id;
  export let label;
  export let value;
  export let minValue;
  export let maxValue;
  export let valueText = "";
  export let disabled = false;
</script>

<style>
  .label {
    margin-bottom: var(--m-xxs);
  }

  button {
    box-shadow: none;
    padding: 15px 11px;
  }

  .disabled-value {
    background-color: var(--c-white);
  }

  .disabled-input {
    background-color: var(--c-mercury);
  }
</style>

{#if !label}
  <div class="label">
    <slot name="label" />
  </div>
{/if}

<Input {label} {value} {id} incrementInput {valueText} {disabled}>
  <button
    slot="decrement-button"
    type="button"
    class="global-button-input"
    class:disabled-value={value === minValue}
    class:disabled-input={disabled}
    on:click={decrement}
    disabled={disabled || value === minValue}>
    <MinusIcon disabled={disabled || value === minValue} />
  </button>

  <button
    slot="increment-button"
    type="button"
    class="global-button-input"
    class:disabled-value={value === maxValue}
    class:disabled-input={disabled}
    on:click={increment}
    disabled={disabled || value === maxValue}>
    <PlusIcon disabled={disabled || value === maxValue} />
  </button>
</Input>
