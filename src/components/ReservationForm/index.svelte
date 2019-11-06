<script context="module">
  export const formatDateAndTime = (date, startTime) => {
    return `${date.toLocaleDateString('en', {
      month: 'long',
      day: 'numeric'
    })}, ${startTime}:00`;
  };
</script>

<script>
  import Input from '../Inputs/Input/index.svelte';
  import IncrementInput from '../Inputs/IncrementInput/index.svelte';
  import Dropdown from '../Dropdown/index.svelte';
  import DropdownInput from '../DropdownInput/index.svelte';
  import Datepicker from '../Inputs/Datepicker/index.svelte';
  import LaneButton from './LaneButton/index.svelte';
  import Select from '../Inputs/Select/index.svelte';
  import Checkbox from '../Inputs/Checkbox/index.svelte';
  import Button from '../Button/index.svelte';

  const startHour = 11;
  const nextHour = new Date().getHours() + 1;
  const isWorkingHours = nextHour >= startHour && nextHour <= 23
  const isOverWorkingHours = nextHour > 23;
  const maxDuration = 4;

  let laneCount = 1;
  let playerCount = 2;
  let shoeCount = 2;
  let name = '';
  let contact = '';
  let laneNumbers = [];
  let playerNames = Array(playerCount).fill('');
  let duration = 2;
  let maxAvailableDuration = maxDuration;
  let startTime = isWorkingHours ? nextHour : startHour;
  let isShoesChecked = true;

  let selectedDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    isOverWorkingHours ? new Date().getDate() + 1 : new Date().getDate()
  );

  // When selecting start time add it to date
  $: if (startTime) {
    selectedDate.setHours(startTime);

    // Dynamically change maximum duration depending on start time
    const availableDuration = 24 - selectedDate.getHours();

    if (availableDuration < maxDuration) {
      maxAvailableDuration = availableDuration;

      if (duration > maxAvailableDuration) {
        duration = maxAvailableDuration;
      }
    } else {
      maxAvailableDuration = maxDuration;
    }
  }

  $: dateAndTime = formatDateAndTime(selectedDate, startTime);

  let isMoreDetailsFormVisible = false;
  let isDateTimeFormVisible = false;

  const minLaneCount = 1;
  const minPlayerCount = 1;
  const minShoeCount = 1;
  const minDuration = 1;

  const maxLaneCount = 10;
  const maxPlayerCount = 6;
  $: maxShoeCount = playerCount;

  const lanes = Array.from(Array(maxLaneCount), (_, index) => index + 1);
  $: players = Array.from(Array(playerCount), (_, index) => index + 1);

  $: isLaneButtonDisabled = lane => laneNumbers.length >= laneCount && !laneNumbers.includes(lane);

  let lastSelectedLanes = [];
  let lastPlayerNames = [];

  const availableTimes = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  const handleSubmit = () => {
    const reservation = {
      name,
      contact,
      date: selectedDate,
      duration,
      shoeCount,
      players: playerNames,
      lanes: laneNumbers
    };

    console.log(reservation);
  };

  const toggleDateTimeForm = () => {
    isDateTimeFormVisible = !isDateTimeFormVisible;
  };

  const toggleMoreDetailsForm = () => {
    isMoreDetailsFormVisible = !isMoreDetailsFormVisible;
  };

  const toggleLane = event => {
    const lane = +event.detail;

    if (laneNumbers.includes(lane)) {
      // Remove if lane exists
      const index = laneNumbers.indexOf(lane);

      laneNumbers = [
        ...laneNumbers.slice(0, index),
        ...laneNumbers.slice(index + 1)
      ];
    } else {
      // Add if lane doesn't exists
      laneNumbers = [...laneNumbers, lane];
    }
  };

  const handleLaneCountDecrement = event => {
    // Removed last selected lane
    if (laneNumbers.length > event.detail) {
      const lastIndex = laneNumbers.length - 1;

      lastSelectedLanes = [...lastSelectedLanes, laneNumbers[lastIndex]];

      laneNumbers = [
        ...laneNumbers.slice(0, lastIndex),
        ...laneNumbers.slice(lastIndex + 1)
      ];
    }
  };

  const handleLaneCountIncrement = event => {
    // Add last removed lane to selected lanes
    if (laneNumbers.length && lastSelectedLanes.length && laneNumbers.length < event.detail) {
      const lastIndex = lastSelectedLanes.length - 1;

      laneNumbers = [...laneNumbers, lastSelectedLanes[lastIndex]];

      lastSelectedLanes = [
        ...lastSelectedLanes.slice(0, lastIndex),
        ...lastSelectedLanes.slice(lastIndex + 1)
      ];
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

  const handlePlayerCountDecrement = () => {
    // Remove last player name
    const lastIndex = playerNames.length - 1;

    if (playerNames[lastIndex]) {
      lastPlayerNames = [...lastPlayerNames, playerNames[lastIndex]];
    }

    playerNames = [
      ...playerNames.slice(0, lastIndex),
      ...playerNames.slice(lastIndex + 1)
    ];

    // Set shoe count to player count
    if (shoeCount === playerCount) shoeCount -= 1;
  };

  const handlePlayerCountIncrement = () => {
    if (lastPlayerNames.length) {
      // If there is saved last player name, add last removed player name
      const lastIndex = lastPlayerNames.length - 1;

      playerNames = [...playerNames, lastPlayerNames[lastIndex]];

      lastPlayerNames = [
        ...lastPlayerNames.slice(0, lastIndex),
        ...lastPlayerNames.slice(lastIndex + 1)
      ];

    } else {
      // If there is no saved last player name, add empty value
      playerNames = [...playerNames, ''];
    }

    // Set shoe count to player count
    if (shoeCount === playerCount) shoeCount += 1;
  };
</script>

<style>
  .reservation-form-inner-wrapper {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    .more-details-form-dropdown-wrapper {
      margin-bottom: var(--m-0);
    }
  }

  @media (min-width: 768px) {
    .more-details-form {
      display: flex;
    }
  }

  .lane-information-wrapper {
    margin-bottom: var(--m-m);
  }

  @media (min-width: 768px) {
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

  .player-count-input-wrapper {
    margin-right: var(--m-xs);
  }

  .date-time-wrapper {
    min-width: 200px;
  }

  @media (min-width: 768px) {
    .datepicker-time-wrapper {
      display: flex;
    }
  }

  .datepicker-wrapper {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 768px) {
    .datepicker-wrapper {
      margin-bottom: var(--m-0);
      margin-right: var(--m-s);
    }
  }

  .time-duration-wrapper {
    display: flex;
  }

  @media (min-width: 768px) {
    .time-duration-wrapper {
      display: block;
    }
  }

  .start-time-wrapper {
    position: relative;
  }

  .player-count-input-wrapper,
  .shoe-count-input-wrapper {
    width: 100%;
  }

  @media (min-width: 768px) {
    .time-duration-wrapper,
    .player-count-input-wrapper,
    .shoe-count-input-wrapper,
    .lane-count-input-wrapper {
      width: 104px;
    }

    .name-input-wrapper,
    .contact-input-wrapper,
    .player-name-input-wrapper {
      width: 176px;
    }
  }

  @media (min-width: 768px) {
    .form-footer {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="reservation-form-inner-wrapper">
    <div class="input-label-wrapper date-time-wrapper" data-cy="date-and-time-dropdown">
      <DropdownInput
        id="date-and-time"
        label="Date and Time"
        value={dateAndTime}
        isContentVisible={isDateTimeFormVisible}
        on:toggleDropdown={toggleDateTimeForm}>
        <div slot="content">
          <div class="datepicker-time-wrapper">
            <div class="datepicker-wrapper" data-cy="datepicker">
              <Datepicker
                {selectedDate}
                on:increaseMonth={increaseMonth}
                on:decreaseMonth={decreaseMonth}
                on:changeDate={changeDate} />
            </div>

            <div class="time-duration-wrapper">
              <div class="input-label-wrapper-reverse start-time-wrapper" data-cy="start-time-select">
                <Select
                  id="start-time"
                  label="Start time"
                  options={availableTimes}
                  bind:value={startTime}
                  customOptionTextEnd=':00' />
              </div>

              <div class="input-label-wrapper-reverse" data-cy="duration-increment-input">
                <IncrementInput
                  id="duration"
                  label="Duration"
                  bind:value={duration}
                  minValue={minDuration}
                  maxValue={maxAvailableDuration}
                  valueText={`${duration}h`} />
              </div>
            </div>
          </div>
        </div>
      </DropdownInput>
    </div>

    <div class="input-label-wrapper lane-count-input-wrapper" data-cy="lane-count-increment-input">
      <IncrementInput
        id="lane-count"
        label="Lane count"
        bind:value={laneCount}
        minValue={minLaneCount}
        maxValue={maxLaneCount}
        on:decrement={handleLaneCountDecrement}
        on:increment={handleLaneCountIncrement} />
    </div>

    <div class="input-label-wrapper name-input-wrapper" data-cy="name-input">
      <Input
        id="name"
        label="Name"
        bind:value={name}
        placeholder="John Smith" />
    </div>

    <div class="input-label-wrapper contact-input-wrapper" data-cy="contact-input">
      <Input
        id="contact"
        label="Phone or Email"
        bind:value={contact}
        placeholder="+371 22 222 222" />
    </div>
  </div>

  <div class="form-footer">
    <div class="more-details-form-dropdown-wrapper" data-cy="more-details-dropdown">
      <Dropdown
        isContentVisible={isMoreDetailsFormVisible}
        on:toggleDropdown={toggleMoreDetailsForm}>
        <div slot="toggle">More details</div>

        <div slot="content">
          <div class="more-details-form">
            <div class="lane-information-wrapper">
              <div class="more-details-input-label-wrapper">
                <label data-cy="lane-button-label">Lane numbers</label>

                <div class="lane-button-wrapper">
                  {#each lanes as lane}
                    <LaneButton
                      value={lane}
                      isActive={laneNumbers.includes(lane)}
                      on:toggleLane={toggleLane}
                      disabled={isLaneButtonDisabled(lane)} />
                  {/each}
                </div>
              </div>

              <div class="player-shoe-wrapper">
                <div class="player-count-input-wrapper" data-cy="player-count-increment-input">
                  <IncrementInput
                    id="player-count"
                    label="Players"
                    bind:value={playerCount}
                    minValue={minPlayerCount}
                    maxValue={maxPlayerCount}
                    on:decrement={handlePlayerCountDecrement}
                    on:increment={handlePlayerCountIncrement} />
                </div>

                <div class="shoe-count-input-wrapper" data-cy="shoe-count-increment-input">
                  <IncrementInput
                    id="shoe-count"
                    label=""
                    bind:value={shoeCount}
                    minValue={minShoeCount}
                    maxValue={maxShoeCount}
                    disabled={!isShoesChecked}>
                    <div slot="label" data-cy="shoe-checkbox">
                      <Checkbox
                        id="shoe-checkbox"
                        label="Shoes"
                        bind:checked={isShoesChecked} />
                    </div>
                  </IncrementInput>
                </div>
              </div>
            </div>

            <div class="player-name-input-wrapper" data-cy="player-name-input">
              {#each players as player}
                <div class="more-details-input-label-wrapper">
                  <Input
                    id={`player-${player}`}
                    label={`Player ${player}`}
                    bind:value={playerNames[player - 1]}
                    placeholder="Name" />
                </div>
              {/each}
            </div>
          </div>
        </div>
      </Dropdown>  
    </div>

    <Button type="submit">Make reservation</Button>
  </div>
</form>
