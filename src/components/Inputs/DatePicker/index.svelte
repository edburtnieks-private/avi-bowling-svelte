<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import CaretIcon from "../../Icons/CaretIcon/index.svelte";

  export let selectedDate;

  const dispatch = createEventDispatcher();

  let dateGrid;

  $: monthYear = selectedDate.toLocaleDateString("en", {
    month: "long",
    year: "numeric"
  });

  $: numberOfDatesInMonth = new Date(
    selectedDate.getYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  $: dates = Array.from(Array(numberOfDatesInMonth), (_, index) => index + 1);

  $: activeDate =
    selectedDate.getMonth() === new Date().getMonth() &&
    selectedDate.getYear() === new Date().getYear();

  onMount(() => {
    dateGrid.style.setProperty(
      "--first-week-day",
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getUTCDay() + 1
    );
  });

  const increaseMonth = () => {
    dispatch("increaseMonth");

    dateGrid.style.setProperty(
      "--first-week-day",
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getUTCDay() + 1
    );
  };

  const decreaseMonth = () => {
    dispatch("decreaseMonth");

    dateGrid.style.setProperty(
      "--first-week-day",
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getUTCDay() + 1
    );
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
    background-color: var(--c-white);
    border: 0;
    color: var(--c-mine-shaft);
    cursor: pointer;
    height: 32px;
    min-width: 32px;
    padding: 0;
  }

  .date-grid button:first-child {
    grid-column: var(--first-week-day);
  }

  time {
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    height: 32px;
    justify-content: center;
    width: 32px;
  }

  .active {
    color: var(--c-white);
  }

  .active time {
    background-color: var(--c-green);
  }
</style>

<div class="month-year">
  <button type="button" on:click={decreaseMonth}>
    <CaretIcon left />
  </button>
  {monthYear}
  <button type="button" on:click={increaseMonth}>
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
      class:active={date === selectedDate.getDate() && activeDate}>
      <time datetime="2019-09-01">{date}</time>
    </button>
  {/each}
</div>
