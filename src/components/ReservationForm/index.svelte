<script>
  import Form from "../Form/index.svelte";
  import Input from "../Inputs/Input/index.svelte";
  import IncrementInput from "../Inputs/IncrementInput/index.svelte";
  import DropdownToggle from "../DropdownToggle/index.svelte";
  import DropdownContent from "../DropdownContent/index.svelte";

  let laneCount = 1;
  let name = "";
  let contact = "";

  let isMoreDetailsFormVisible = false;

  const minLaneCount = 1;
  const maxLaneCount = 10;

  const handleSubmit = event => {
    console.log(event);
  };

  const toggleMoreDetailsForm = () => {
    isMoreDetailsFormVisible = !isMoreDetailsFormVisible;
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

  .more-details-form-dropdown-wrapper {
    display: inline-block;
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

  <div class="more-details-form-dropdown-wrapper">
    <DropdownToggle on:toggleDropdown={toggleMoreDetailsForm}>
      More details
    </DropdownToggle>

    <DropdownContent isContentVisible={isMoreDetailsFormVisible}>
      More details form here
    </DropdownContent>
  </div>
</Form>
