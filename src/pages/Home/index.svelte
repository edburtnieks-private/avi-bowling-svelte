<script>
  import ReservationForm from "../../components/ReservationForm/index.svelte";
</script>

<style>
  .reservation-form-wrapper {
    margin: 0 auto;
    max-width: 320px;
    padding: var(--p-0) var(--p-mobile);
    width: 100%;
  }

  @media (min-width: 1024px) {
    .reservation-form-wrapper {
      max-width: 100%;
      width: auto;
    }
  }
</style>

<div class="reservation-form-wrapper">
  <ReservationForm />
</div>
