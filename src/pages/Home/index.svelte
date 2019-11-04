<script>
  import ReservationForm from '../../components/ReservationForm/index.svelte';
</script>

<style>
  .reservation-form-wrapper {
    margin: var(--m-m) auto var(--m-0);
    max-width: 320px;
    padding: var(--p-0) var(--p-mobile);
  }

  @media (min-width: 1024px) {
    .reservation-form-wrapper {
      display: flex;
      justify-content: center;
      margin-top: var(--m-l);
      max-width: 100%;
    }
  }
</style>

<div class="reservation-form-wrapper" data-cy="reservation-form">
  <ReservationForm />
</div>
