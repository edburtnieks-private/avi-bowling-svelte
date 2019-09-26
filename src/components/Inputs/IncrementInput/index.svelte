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
    box-shadow: none;
    padding: 15px 11px;
  }

  button:disabled {
    background-color: var(--c-white);
  }
</style>

<Input {label} {value} {id} incrementInput {valueText}>
  <button
    slot="decrement-button"
    type="button"
    class="global-button-input"
    on:click={decrement}
    disabled={value === minValue}>
    <MinusIcon disabled={value === minValue} />
  </button>

  <button
    slot="increment-button"
    type="button"
    class="global-button-input"
    on:click={increment}
    disabled={value === maxValue}>
    <PlusIcon disabled={value === maxValue} />
  </button>
</Input>
