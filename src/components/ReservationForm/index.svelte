<script>
  import Form from "../Form/index.svelte";
  import Input from "../Inputs/Input/index.svelte";
  import IncrementInput from "../Inputs/IncrementInput/index.svelte";
  import DropdownToggle from "../DropdownToggle/index.svelte";
  import DropdownContent from "../DropdownContent/index.svelte";
  import Datepicker from "../Inputs/Datepicker/index.svelte";
  import LaneButton from "./LaneButton/index.svelte";
  import Select from "../Inputs/Select/index.svelte";
  import Checkbox from "../Inputs/Checkbox/index.svelte";

  let laneCount = 1;
  let playerCount = 2;
  let shoeCount = 2;
  let name = "";
  let contact = "";
  let laneNumbers = [];
  let playerNames = [];
  let duration = 1;
  let startTime = "12:00";
  let isShoesChecked = true;

  let selectedDate = new Date();

  $: dateAndTime = `${selectedDate.toLocaleDateString("en", {
    month: "long",
    day: "numeric"
  })}, ${startTime}`;

  let isMoreDetailsFormVisible = false;
  let isDateTimeFormVisible = false;
  let isStartTimeDropdownVisible = false;

  const minLaneCount = 1;
  const minPlayerCount = 1;
  const minShoeCount = 1;
  const minDuration = 1;

  const maxLaneCount = 10;
  const maxPlayerCount = 6;
  $: maxShoeCount = playerCount;
  const maxDuration = 4;

  const lanes = Array.from(Array(maxLaneCount), (_, index) => index + 1);
  $: players = Array.from(Array(playerCount), (_, index) => index + 1);

  const availableTimes = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00"
  ];

  const handleSubmit = event => {
    const reservation = {
      name,
      contact,
      date: selectedDate,
      startTime,
      duration,
      laneCount,
      playerCount,
      shoeCount,
      players: playerNames,
      lanes: laneNumbers
    };

    console.log(reservation);
  };

  const toggleMoreDetailsForm = () => {
    isMoreDetailsFormVisible = !isMoreDetailsFormVisible;
  };

  const toggleDateTimeForm = () => {
    isDateTimeFormVisible = !isDateTimeFormVisible;
  };

  const toggleStartTimeDropdown = () => {
    isStartTimeDropdownVisible = !isStartTimeDropdownVisible;
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

  const increaseMonth = event => {
    selectedDate = event.detail;
  };

  const decreaseMonth = event => {
    selectedDate = event.detail;
  };

  const changeDate = event => {
    selectedDate = event.detail;
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

  .input-label-wrapper-reverse {
    width: 100%;
  }

  .input-label-wrapper:not(:last-of-type) {
    margin-bottom: var(--m-s);
  }

  .input-label-wrapper-reverse:not(:last-of-type) {
    margin-right: var(--m-xxs);
  }

  @media (min-width: 1024px) {
    .input-label-wrapper:not(:last-of-type) {
      margin-bottom: var(--m-0);
      margin-right: var(--m-xxs);
    }

    .input-label-wrapper-reverse {
      width: auto;
    }

    .input-label-wrapper-reverse:not(:last-of-type) {
      margin-right: var(--m-0);
      margin-bottom: var(--m-s);
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
    justify-content: space-between;
  }

  .player-counter-wrapper {
    margin-right: var(--m-xxs);
  }

  .date-time-wrapper {
    min-width: 200px;
  }

  @media (min-width: 1024px) {
    .datepicker-time-wrapper {
      display: flex;
    }
  }

  .datepicker-wrapper {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 1024px) {
    .datepicker-wrapper {
      margin-bottom: var(--m-0);
      margin-right: var(--m-s);
    }
  }

  .time-duration-wrapper {
    display: flex;
  }

  @media (min-width: 1024px) {
    .time-duration-wrapper {
      display: block;
    }
  }

  .start-time-wrapper {
    position: relative;
  }
</style>

<Form on:handleSubmit={handleSubmit} submitButtonText="Make Reservation">
  <div class="reservation-form-inner-wrapper">
    <div class="input-label-wrapper date-time-wrapper">
      <Input
        label="Date and Time"
        id="date-and-time"
        isDropdownToggle
        dropdownToggleText={dateAndTime}
        on:toggleDropdown={toggleDateTimeForm}
        isDropdownActive={isDateTimeFormVisible}>
        <div slot="dropdown-content">
          <DropdownContent isContentVisible={isDateTimeFormVisible}>
            <div class="datepicker-time-wrapper">
              <div class="datepicker-wrapper">
                <Datepicker
                  {selectedDate}
                  on:increaseMonth={increaseMonth}
                  on:decreaseMonth={decreaseMonth}
                  on:changeDate={changeDate} />
              </div>

              <div class="time-duration-wrapper">
                <div class="input-label-wrapper-reverse start-time-wrapper">
                  <Select
                    label="Start time"
                    id="start-time"
                    options={availableTimes}
                    bind:value={startTime} />
                </div>

                <div class="input-label-wrapper-reverse">
                  <IncrementInput
                    label="Duration"
                    id="duration"
                    bind:value={duration}
                    minValue={minDuration}
                    maxValue={maxDuration}
                    valueText={`${duration}h`} />
                </div>
              </div>
            </div>
          </DropdownContent>
        </div>
      </Input>
    </div>

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

            <div class="shoe-counter-wrapper">
              <IncrementInput
                id="shoe-count"
                bind:value={shoeCount}
                minValue={minShoeCount}
                maxValue={maxShoeCount}
                disabled={!isShoesChecked}>
                <div slot="label">
                  <Checkbox
                    id="shoe-checkbox"
                    label="Shoes"
                    bind:checked={isShoesChecked} />
                </div>
              </IncrementInput>
            </div>
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
