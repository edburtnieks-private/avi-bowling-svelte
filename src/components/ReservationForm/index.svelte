<script>
  import Input from "../Input/index.svelte";
  import Form from "../Form/index.svelte";

  const handleSubmit = event => {
    console.log(event);
  };
</script>

<style>
  .reservation-form-inner-wrapper {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 1024px) {
    .reservation-form-inner-wrapper {
      display: flex;
      margin-bottom: var(--m-xs);
    }
  }
</style>

<Form on:handleSubmit={handleSubmit} submitButtonText="Make Reservation">
  <div class="reservation-form-inner-wrapper">
    <Input label="Name" placeholder="John Smith" id="name" />
    <Input label="Phone or Email" placeholder="+371 22 222 222" id="contact" />
  </div>
</Form>
