<script>
  import ReservationForm from "../../components/ReservationForm/index.svelte";
</script>

<style>
  .reservation-form-wrapper {
    margin: var(--m-0) auto;
    max-width: 320px;
    padding: var(--p-0) var(--p-mobile);
  }

  @media (min-width: 1024px) {
    .reservation-form-wrapper {
      display: flex;
      justify-content: center;
      max-width: 100%;
    }
  }
</style>

<div class="reservation-form-wrapper">
  <ReservationForm />
</div>
