<script>
  import { createEventDispatcher } from 'svelte';
  import Button from '../Button/index.svelte';

  export let submitButtonText = 'Submit';

  const dispatch = createEventDispatcher();
</script>

<form on:submit|preventDefault={() => dispatch('handleSubmit')}>
  <slot />

  <Button type="submit">{submitButtonText}</Button>
</form>
