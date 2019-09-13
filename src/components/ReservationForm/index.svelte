<script>
  import Form from "../Form/index.svelte";
  import Input from "../Input/index.svelte";
  import IncrementInput from "../IncrementInput/index.svelte";

  let laneCount = 1;
  let name = "";
  let contact = "";

  const minLaneCount = 1;
  const maxLaneCount = 6;

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
    <IncrementInput
      label="Lane count"
      id="lane-count"
      bind:value={laneCount}
      minValue={minLaneCount}
      maxValue={maxLaneCount} />
    <Input label="Name" placeholder="John Smith" id="name" bind:value={name} />
    <Input
      label="Phone or Email"
      placeholder="+371 22 222 222"
      id="contact"
      bind:value={contact} />
  </div>
</Form>
