<script>
  import Input from "../Input/index.svelte";
  import MinusIcon from "../../Icons/MinusIcon/index.svelte";
  import PlusIcon from "../../Icons/PlusIcon/index.svelte";

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
</script>

<style>
  button {
    background-color: var(--c-white);
    border-radius: var(--br-base);
    border: 2px solid var(--c-white);
    padding: 15px 11px;
    outline: 0;
  }

  button:hover,
  button:active,
  button:focus {
    border-color: var(--c-silver);
  }

  button:disabled {
    border-color: var(--c-white);
  }
</style>

<Input {label} {value} {id} incrementInput {valueText}>
  <button
    slot="decrement-button"
    type="button"
    on:click={decrement}
    disabled={value === minValue}>
    <MinusIcon disabled={value === minValue} />
  </button>

  <button
    slot="increment-button"
    type="button"
    on:click={increment}
    disabled={value === maxValue}>
    <PlusIcon disabled={value === maxValue} />
  </button>
</Input>
