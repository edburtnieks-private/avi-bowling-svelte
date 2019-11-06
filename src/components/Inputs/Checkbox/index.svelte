<script>
  export let id;
  export let label;
  export let checked;
  export let disabled = false;
</script>

<style>
  .input-label {
    display: flex;
  }

  label {
    cursor: pointer;
    display: flex;
    margin-bottom: var(--m-0);
  }

  /* Checkbox */
  span {
    background-color: var(--c-white);
    border-radius: 2px;
    border: 1px solid var(--c-mine-shaft);
    display: inline-block;
    height: 12px;
    margin-left: var(--m-xxs);
    position: relative;
    width: 12px;
  }

  /* Checkbox tick mark */
  span::after {
    border-bottom: 1px solid;
    border-color: var(--c-mine-shaft);
    border-left: 1px solid;
    content: none;
    height: 4px;
    left: 1px;
    position: absolute;
    top: 2px;
    transform: rotate(-45deg);
    width: 8px;
  }

  /* Remove default checkbox style */
  input {
    appearance: none;
    outline: 0;
  }

  /* Show tick mark on checked */
  input:checked + label span:after {
    content: "";
  }

  /* Checkbox hover label style */
  input:hover:not(:disabled) + label,
  input:focus:not(:disabled) + label,
  input:active:not(:disabled) + label {
    text-decoration: underline;
  }

  /* Disabled label style */
  input:disabled + label {
    color: var(--c-silver);
    cursor: not-allowed;
  }

  /* Disabled checkbox and tick mark style */
  input:disabled + label span,
  input:disabled + label span::after {
    border-color: var(--c-silver);
  }
</style>

<div class="input-label">
  <input
    type="checkbox"
    bind:checked
    {id}
    {disabled}
    data-cy="checkbox-input" />
  <label for={id}>
    <div data-cy="checkbox-label">{label}</div>
    <span data-cy="custom-checkbox" />
  </label>
</div>
