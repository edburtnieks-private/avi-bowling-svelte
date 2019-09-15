<script>
  import Form from "../Form/index.svelte";
  import Input from "../Inputs/Input/index.svelte";
  import IncrementInput from "../Inputs/IncrementInput/index.svelte";
  import DropdownToggle from "../DropdownToggle/index.svelte";
  import DropdownContent from "../DropdownContent/index.svelte";
  import LaneButton from "./LaneButton/index.svelte";

  let laneCount = 1;
  let playerCount = 2;
  let shoeCount = 2;
  let name = "";
  let contact = "";
  let laneNumbers = [];
  let playerNames = [];

  let isMoreDetailsFormVisible = false;

  const minLaneCount = 1;
  const minPlayerCount = 1;
  const minShoeCount = 1;

  const maxLaneCount = 10;
  const maxPlayerCount = 6;
  $: maxShoeCount = playerCount;

  const lanes = Array.from(Array(maxLaneCount), (_, index) => index + 1);
  $: players = Array.from(Array(playerCount), (_, index) => index + 1);

  const handleSubmit = event => {
    console.log(event);
  };

  const toggleMoreDetailsForm = () => {
    isMoreDetailsFormVisible = !isMoreDetailsFormVisible;
  };

  const toggleLane = event => {
    const lane = event.detail;

    if (laneNumbers.includes(lane)) {
      const index = laneNumbers.indexOf(lane);

      laneNumbers = [
        ...laneNumbers.slice(0, index),
        ...laneNumbers.slice(index + 1)
      ];
    } else {
      laneNumbers = [...laneNumbers, lane];
    }
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

  .input-label-wrapper:not(:last-of-type) {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 1024px) {
    .input-label-wrapper:not(:last-of-type) {
      margin-bottom: var(--m-0);
      margin-right: var(--m-xxs);
    }
  }

  .more-details-form-dropdown-wrapper {
    display: inline-block;
    margin-bottom: var(--m-s);
  }

  @media (min-width: 1024px) {
    .more-details-form-dropdown-wrapper {
      margin-bottom: var(--m-0);
      margin-right: var(--m-xs);
    }
  }

  @media (min-width: 1024px) {
    .more-details-form {
      display: flex;
    }
  }

  .lane-information-wrapper {
    margin-bottom: var(--m-m);
  }

  @media (min-width: 1024px) {
    .lane-information-wrapper {
      margin-bottom: var(--m-0);
      margin-right: var(--m-m);
    }
  }

  .more-details-input-label-wrapper:not(:last-of-type) {
    margin-bottom: var(--m-xs);
  }

  .lane-button-wrapper {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(5, 1fr);
  }

  .player-shoe-wrapper {
    display: flex;
  }

  .player-counter-wrapper {
    margin-right: var(--m-xxs);
  }
</style>

<Form on:handleSubmit={handleSubmit} submitButtonText="Make Reservation">
  <div class="reservation-form-inner-wrapper">
    <div class="input-label-wrapper">
      <IncrementInput
        label="Lane count"
        id="lane-count"
        bind:value={laneCount}
        minValue={minLaneCount}
        maxValue={maxLaneCount} />
    </div>

    <div class="input-label-wrapper">
      <Input
        label="Name"
        placeholder="John Smith"
        id="name"
        bind:value={name} />
    </div>

    <div class="input-label-wrapper">
      <Input
        label="Phone or Email"
        placeholder="+371 22 222 222"
        id="contact"
        bind:value={contact} />
    </div>
  </div>

  <div class="more-details-form-dropdown-wrapper">
    <DropdownToggle on:toggleDropdown={toggleMoreDetailsForm}>
      More details
    </DropdownToggle>

    <DropdownContent isContentVisible={isMoreDetailsFormVisible}>
      <div class="more-details-form">
        <div class="lane-information-wrapper">
          <div class="more-details-input-label-wrapper">
            <label>Lane number</label>

            <div class="lane-button-wrapper">
              {#each lanes as lane}
                <LaneButton on:toggleLane={toggleLane} value={lane}>
                  {lane}
                </LaneButton>
              {/each}
            </div>
          </div>

          <div class="player-shoe-wrapper">
            <div class="player-counter-wrapper">
              <IncrementInput
                label="Players"
                id="player-count"
                bind:value={playerCount}
                minValue={minPlayerCount}
                maxValue={maxPlayerCount} />
            </div>

            <IncrementInput
              label="Shoes"
              id="shoe-count"
              bind:value={shoeCount}
              minValue={minShoeCount}
              maxValue={maxShoeCount} />
          </div>
        </div>

        <div>
          {#each players as player}
            <div class="more-details-input-label-wrapper">
              <Input
                label={`Player ${player}`}
                placeholder="Name"
                id={`player-${player}`}
                bind:value={playerNames[player - 1]} />
            </div>
          {/each}
        </div>
      </div>
    </DropdownContent>
  </div>
</Form>
