<script>
  const handleChange = event => {
    value = event.target.value;
  };

  export let id;
  export let incrementInput = false;
  export let label = "Label";
  export let placeholder = "";
  export let type = "text";
  export let value = "";
</script>

<style>
  .input-label-wrapper:not(:last-of-type) {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 1024px) {
    .input-label-wrapper:not(:last-of-type) {
      margin: var(--m-0) var(--m-xxs) var(--m-0) var(--m-0);
      max-width: 176px;
    }
  }

  label {
    display: block;
    font-size: var(--fs-s);
    margin-bottom: var(--m-xxs);
  }

  .input-wrapper {
    border-radius: var(--br-base);
    box-shadow: var(--bs-input);
  }

  input {
    background-color: var(--c-white);
    border-radius: inherit;
    border: 0;
    color: var(--c-mine-shaft);
    font-size: 1rem;
    padding: var(--p-xxs) var(--p-xs);
    width: 100%;
  }

  input::placeholder {
    color: var(--c-silver);
  }

  .increment-input-wrapper {
    display: flex;
  }

  .increment-input-wrapper input {
    text-align: center;
  }
</style>

<div class="input-label-wrapper">
  <label for={id}>{label}</label>

  <div class="input-wrapper" class:increment-input-wrapper={incrementInput}>
    <slot name="decrement-button" />

    <input
      {type}
      {placeholder}
      {id}
      {value}
      disabled={incrementInput}
      on:change={handleChange} />

    <slot name="increment-button" />
  </div>
</div>
