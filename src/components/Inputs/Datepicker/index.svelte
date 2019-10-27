<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import CaretIcon from '../../Icons/CaretIcon/index.svelte';

  export let selectedDate;

  const dispatch = createEventDispatcher();

  let dateGrid;

  $: monthYear = selectedDate.toLocaleDateString('en', {
    month: 'long',
    year: 'numeric'
  });

  $: numberOfDatesInMonth = new Date(
    selectedDate.getYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  $: dates = Array.from(Array(numberOfDatesInMonth), (_, index) => index + 1);

  $: isTodaysMonthAndYear =
    selectedDate.getMonth() === new Date().getMonth() &&
    selectedDate.getYear() === new Date().getYear();

  onMount(() => {
    dateGrid.style.setProperty(
      '--first-week-day',
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getUTCDay() + 1
    );
  });

  const increaseMonth = () => {
    const newDate = new Date(
      selectedDate.setMonth(selectedDate.getMonth() + 1)
    );

    selectedDate = newDate;
  
    dispatch('increaseMonth', newDate);

    dateGrid.style.setProperty(
      '--first-week-day',
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getUTCDay() + 1
    );
  };

  const decreaseMonth = () => {
    const newDate = new Date(
      selectedDate.setMonth(selectedDate.getMonth() - 1)
    );

    selectedDate = newDate;

    dispatch('decreaseMonth', newDate);

    dateGrid.style.setProperty(
      '--first-week-day',
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getUTCDay() + 1
    );
  };

  const changeDate = date => {
    const newDate = new Date(selectedDate.setDate(date));

    selectedDate = newDate;

    dispatch('changeDate', newDate);
  };
</script>

<style>
  .month-year {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--m-xs);
    text-align: center;
  }

  .day-of-week,
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-of-week {
    border-bottom: 1px solid var(--c-silver);
    font-size: var(--fs-s);
    padding-bottom: var(--p-xxs);
    text-align: center;
  }

  button {
    box-shadow: none;
    height: 32px;
    min-width: 32px;
  }

  button:disabled {
    background-color: var(--c-white);
  }

  .date-grid button:first-child {
    grid-column: var(--first-week-day);
  }

  time {
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    width: 32px;
  }

  .active {
    box-shadow: none;
    color: var(--c-white);
  }

  .active time {
    background-color: var(--c-green);
  }

  .active:hover time,
  .active:focus time,
  .active:active time {
    background-color: var(--c-green-darker);
  }
</style>

<div class="month-year">
  <button
    type="button"
    class="global-button-input"
    on:click={decreaseMonth}
    disabled={isTodaysMonthAndYear}
    data-cy="previous-month-button">
    <CaretIcon left disabled={isTodaysMonthAndYear} />
  </button>

  <span data-cy="month-year">{monthYear}</span>

  <button
    class="global-button-input"
    type="button"
    on:click={increaseMonth}
    data-cy="next-month-button">
    <CaretIcon right />
  </button>
</div>

<div class="day-of-week">
  <div>Mo</div>
  <div>Tu</div>
  <div>We</div>
  <div>Th</div>
  <div>Fr</div>
  <div>Sa</div>
  <div>Su</div>
</div>

<div class="date-grid" bind:this={dateGrid}>
  {#each dates as date}
    <button
      type="button"
      class="global-button-input"
      class:active={date === selectedDate.getDate()}
      on:click={() => changeDate(date)}
      data-cy='date-button'>
      <time datetime="2019-09-01" data-cy="date-text">{date}</time>
    </button>
  {/each}
</div>
