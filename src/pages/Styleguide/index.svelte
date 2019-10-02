<script>
  import Checkbox from "../../components/Inputs/Checkbox/index.svelte";
  import Datepicker from "../../components/Inputs/Datepicker/index.svelte";
  import DropdownContent from "../../components/DropdownContent/index.svelte";
  import DropdownToggle from "../../components/DropdownToggle/index.svelte";
  import IncrementInput from "../../components/Inputs/IncrementInput/index.svelte";
  import Input from "../../components/Inputs/Input/index.svelte";
  import Select from "../../components/Inputs/Select/index.svelte";

  let textInputValue = "";
  let textInputPlaceholderValue = "";
  let textInputTypeValue = "info@avibowling.com";
  let textInputDisabledValue = "Disabled";

  let incrementInputValue = 0;
  let incrementInputMinValue = 0;
  let incrementInputMaxValue = 3;

  let incrementInputCustomValueTextValue = 0;
  let incrementInputCustomValueTextMinValue = 0;
  let incrementInputCustomValueTextMaxValue = 3;

  let incrementInputLabelCheckbox = false;
  let incrementInputCustomLabelValue = 0;
  let incrementInputCustomLabelMinValue = 0;
  let incrementInputCustomLabelMaxValue = 3;

  let selectOptions = [1, 2, 3, 4, 5];
  let selectSelectedOption = selectOptions[0];

  let checkboxUnchecked = false;
  let checkboxChecked = true;
  let checkboxDisabledUnchecked = false;
  let checkboxDisabledChecked = true;

  let datepickerSelectedDate = new Date();

  let isDropdownContentVisible = false;
  let isDropdownDisabledContentVisible = false;

  let inputDropdownValue = "";
  let isInputDropdownContentVisible = false;

  const datepickerIncreaseMonth = event => {
    datepickerSelectedDate = event.detail;
  };

  const datepickerDecreaseMonth = event => {
    datepickerSelectedDate = event.detail;
  };

  const datepickerChangeDate = event => {
    datepickerSelectedDate = event.detail;
  };

  const toggleDropdownContent = () => {
    isDropdownContentVisible = !isDropdownContentVisible;
  }

  const toggleDropdownDisabledContent = () => {
    isDropdownDisabledContentVisible = !isDropdownDisabledContentVisible;
  }

  const toggleInputDropdownContent = () => {
    isInputDropdownContentVisible = !isInputDropdownContentVisible;
  }
</script>

<style>
  .styleguide-wrapper {
    margin: var(--m-xxl) auto;
    max-width: var(--bp-desktop-xl);
    padding: var(--p-0) var(--p-mobile);
  }

  h1 {
    margin: var(--m-0) var(--m-0) var(--m-l);
  }

  .component-group {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
  }

  .component-group .component:not(:last-of-type) {
    margin-right: var(--m-m);
  }

  .variations {
    margin-top: var(--m-s);
  }

  .component-details {
    max-width: 600px;
  }

  li {
    line-height: 1.5;
  }

  li:not(:last-of-type) {
    margin-bottom: var(--m-xs);
  }

  .required {
    font-weight: var(--fw-bold);
  }

  h2 {
    margin: var(--m-0) var(--m-0) var(--m-xs);
  }

  h2:not(:first-of-type) {
    margin-top: var(--m-xxl);
  }

  h3 {
    font-size: var(--fs-m);
    font-weight: var(--fw-bold);
  }

  .component {
    display: inline-block;
  }

  pre {
    background-color: var(--c-gallery);
    margin: var(--m-xs) var(--m-0) var(--m-0);
    padding: var(--p-xs);
  }

  .common {
    color: var(--c-silver);
  }

  .difference {
    color: var(--c-mine-shaft);
    font-weight: var(--fw-bold);
  }
</style>

<div class="styleguide-wrapper">
  <h1>Styleguide</h1>

  <h2>Checkbox</h2>

  <div class="component-group">
    <div class="component">
      <Checkbox
        id="checkbox-unchecked"
        label="Unchecked"
        bind:checked={checkboxUnchecked} />

      <pre>
        <code>
&lt;Checkbox
  id="checkbox-id"
  label="Label"
  bind:checked=&#123;isChecked&#125; /&gt;
        </code>
      </pre>
    </div>

    <div class="component-details">
      <h3>Props</h3>

      <ul>
        <li>
          <span class="required">id</span> - String
        </li>

        <li>
          <span class="required">label</span> - String
        </li>

        <li>
          disabled - Boolean (default = false)
        </li>
      </ul>

      <h3>Bindings</h3>

      <ul>
        <li>
          <span class="required">bind:checked</span> - Variable with boolean value
        </li>
      </ul>
    </div>
  </div>

  <div class="component-group variations">
    <div class="component">
      <Checkbox
        id="checkbox-checked"
        label="Checked"
        bind:checked={checkboxChecked} />

      <pre class="common">
        <code>
&lt;Checkbox
  id="checkbox-id"
  label="Label"
  bind:checked=&#123;isChecked&#125; /&gt;
        </code>
      </pre>
    </div>

    <div class="component">
      <Checkbox
        id="checkbox-disabled-unchecked"
        label="Disabled Unchecked"
        bind:checked={checkboxDisabledUnchecked}
        disabled />

      <pre class="common">
        <code>
&lt;Checkbox
  id="checkbox-id"
  label="Label"
  bind:checked=&#123;isChecked&#125;
  <span class="difference">disabled</span> /&gt;
        </code>
      </pre>
    </div>

    <div class="component">
      <Checkbox
        id="checkbox-disabled-checked"
        label="Disabled Checked"
        bind:checked={checkboxDisabledChecked}
        disabled />

      <pre class="common">
        <code>
&lt;Checkbox
  id="checkbox-id"
  label="Label"
  bind:checked=&#123;isChecked&#125;
  <span class="difference">disabled</span> /&gt;
        </code>
      </pre>
    </div>
  </div>

  <h2>Datepicker</h2>

  <div class="component-group">
    <div class="component">
      <Datepicker
        selectedDate={datepickerSelectedDate}
        on:increaseMonth={datepickerIncreaseMonth}
        on:decreaseMonth={datepickerDecreaseMonth}
        on:changeDate={datepickerChangeDate} />

      <pre>
        <code>
&lt;Datepicker
  selectedDate=&#123;date&#125;
  on:increaseMonth=&#123;event => date = event.detail&#125;
  on:decreaseMonth=&#123;event => date = event.detail&#125;
  on:changeDate=&#123;event => date = event.detail&#125; /&gt;
        </code>
      </pre>
    </div>

    <div class="component-details">
      <h3>Props</h3>

      <ul>
        <li>
          <span class="required">selectedDate</span> -
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Syntax"
            target="_blank">
            Date object
          </a>
        </li>
      </ul>

      <h3>Events</h3>

      <ul>
        <li>
          <span class="required">on:increaseMonth</span> - Function to handle event that is called after changing to next month where event.detail has the changed month value
        </li>

        <li>
          <span class="required">on:decreaseMonth</span> - Function to handle event that is called after changing to previous month where event.detail has the changed month value
        </li>

        <li>
          <span class="required">on:changeDate</span> - Function to handle event that is called after changing date where event.detail has the changed date value
        </li>
      </ul>
    </div>
  </div>

  <h2>Dropdown</h2>

  <div class="component-group">
    <div class="component">
      <DropdownToggle
        id="dropdown-toggle-link"
        on:toggleDropdown={toggleDropdownContent}>
        Dropdown toggle
      </DropdownToggle>

      <DropdownContent isContentVisible={isDropdownContentVisible}>
        Dropdown content
      </DropdownContent>

      <pre>
        <code>
&lt;DropdownToggle
  id="dropdown-toggle-id"
  on:toggleDropdown=&#123;() =&gt; isDropdownContentVisible = !isDropdownContentVisible&#125;&gt;
  Dropdown toggle
&lt;/DropdownToggle&gt;

&lt;DropdownContent isContentVisible=&#123;isDropdownContentVisible&#125;&gt;
  Dropdown content
&lt;/DropdownContent&gt;
        </code>
      </pre>
    </div>

    <div class="component-details">
      <h3>Toggle Props</h3>

      <ul>
        <li>
          <span class="required">id</span> - String
        </li>

        <li>
          disabled - Boolean (default = false)
        </li>
      </ul>

      <h3>Toggle Events</h3>

      <ul>
        <li>
          <span class="required">on:toggleDropdown</span> - Function to handle event that is called after toggling dropdown
        </li>
      </ul>

      <h3>Content Props</h3>

      <ul>
        <li>
          <span class="required">isContentVisible</span> - Variable with boolean value
        </li>
      </ul>
    </div>

    <div class="component-group variations">
      <div class="component">
        <DropdownToggle
          id="dropdown-toggle-link-disabled"
          on:toggleDropdown={toggleDropdownDisabledContent}
          disabled>
          Dropdown toggle
        </DropdownToggle>

        <DropdownContent isContentVisible={isDropdownDisabledContentVisible}>
          Dropdown content
        </DropdownContent>

        <pre class="common">
          <code>
&lt;DropdownToggle
  id="dropdown-toggle-id"
  on:toggleDropdown=&#123;() =&gt; isDropdownContentVisible = !isDropdownContentVisible&#125;
  <span class="difference">disabled</span>&gt;
  Dropdown toggle
&lt;/DropdownToggle&gt;

&lt;DropdownContent isContentVisible=&#123;isDropdownContentVisible&#125;&gt;
  Dropdown content
&lt;/DropdownContent&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>

  <h2>Increment Input</h2>

  <div class="component-group">
    <div class="component">
      <IncrementInput
        id="increment-input-regular"
        label="Regular"
        bind:value={incrementInputValue}
        minValue={incrementInputMinValue}
        maxValue={incrementInputMaxValue} />

      <pre>
        <code>
&lt;IncrementInput
  id="increment-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  minValue=0
  maxValue=3 /&gt;
        </code>
      </pre>
    </div>

    <div class="component-details">
      <h3>Props</h3>

      <ul>
        <li>
          <span class="required">id</span> - String
        </li>

        <li>
          <span class="required">label</span> - String
        </li>

        <li>
          <span class="required">minValue</span> - Whole number
        </li>

        <li>
          <span class="required">maxValue</span> - Whole number
        </li>

        <li>
          disabled - Boolean (default = false)
        </li>

        <li>
          valueText - String (default = "")
        </li>
      </ul>

      <h3>Bindings</h3>

      <ul>
        <li>
          <span class="required">bind:value</span> - Variable with whole number value
        </li>
      </ul>

      <h3>Slots</h3>

      <ul>
        <li>
          label - Custom label
        </li>
      </ul>
    </div>
  </div>

  <div class="component-group variations">
    <div class="component">
      <IncrementInput
        id="increment-input-disabled"
        label="Disabled"
        bind:value={incrementInputValue}
        minValue={incrementInputMinValue}
        maxValue={incrementInputMaxValue}
        disabled />

      <pre class="common">
        <code>
&lt;IncrementInput
  id="increment-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  minValue=0
  maxValue=3
  <span class="difference">disabled</span> /&gt;
        </code>
      </pre>
    </div>

    <div class="component">
      <IncrementInput
        id="increment-input-custom-value-text"
        label="Custom Value Text"
        bind:value={incrementInputCustomValueTextValue}
        minValue={incrementInputCustomValueTextMinValue}
        maxValue={incrementInputCustomValueTextMaxValue}
        valueText={`${incrementInputCustomValueTextValue} additional text`} />

      <pre class="common">
        <code>
&lt;IncrementInput
  id="increment-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  minValue=0
  maxValue=3
  <span class="difference">valueText=&#123;`&&#123;value&#125; additional text`&#125;</span> /&gt;
        </code>
      </pre>
    </div>

    <div class="component">
      <IncrementInput
        id="increment-input-custom-label"
        label=""
        bind:value={incrementInputCustomLabelValue}
        minValue={incrementInputCustomLabelMinValue}
        maxValue={incrementInputCustomLabelMaxValue}>
        <div slot="label">
          <Checkbox
            id="increment-input-label-checkbox"
            label="Custom Label"
            bind:checked={incrementInputLabelCheckbox} />
        </div>
      </IncrementInput>

      <pre class="common">
        <code>
&lt;IncrementInput
  id="increment-input-id"
  label=""
  bind:value=&#123;value&#125;
  minValue=0
  maxValue=3&gt;
  <span class="difference">&lt;div slot="label"&gt;
    &lt;Checkbox
      id="checkbox-id"
      label="Label"
      bind:checked /&gt;
  &lt;/div&gt;</span>
&lt;/IncrementInput&gt;
        </code>
      </pre>
    </div>
  </div>

  <h2>Select</h2>

  <div class="component-group">
    <div class="component">
      <Select
        id="select-input-regular"
        label="Regular"
        options={selectOptions}
        bind:value={selectSelectedOption} />

      <pre>
        <code>
&lt;Select
  id="select-id"
  label="Label"
  options=&#91;1, 2, 3, 4, 5&#93;
  bind:value=&#123;value&#125; /&gt;
        </code>
      </pre>
    </div>

    <div class="component-details">
      <h3>Props</h3>

      <ul>
        <li>
          <span class="required">id</span> - String
        </li>

        <li>
          <span class="required">label</span> - String
        </li>

        <li>
          <span class="required">options</span> - Array
        </li>

        <li>
          disabled - Boolean (default = false)
        </li>
      </ul>

      <h3>Bindings</h3>

      <ul>
        <li>
          <span class="required">bind:value</span> - Variable with value inside options array
        </li>
      </ul>
    </div>
  </div>

  <div class="component-group variations">
    <div class="component">
      <Select
        id="select-input-disabled"
        label="Disabled"
        options={selectOptions}
        bind:value={selectSelectedOption}
        disabled />

      <pre class="common">
        <code>
&lt;Select
  id="select-id"
  label="Label"
  options=&#91;1, 2, 3, 4, 5&#93;
  bind:value=&#123;value&#125;
  <span class="difference">disabled</span> /&gt;
        </code>
      </pre>
    </div>
  </div>

  <h2>Text Input</h2>

  <div class="component-group">
    <div class="component">
      <Input
        id="text-input-regular"
        label="Regular"
        bind:value={textInputValue} />

      <pre>
        <code>
&lt;Input
  id="text-input-id"
  label="Label"
  bind:value=&#123;value&#125;
        </code>
      </pre>
    </div>

    <div class="component-details">
      <h3>Props</h3>

      <ul>
        <li>
          <span class="required">id</span> - String
        </li>

        <li>
          <span class="required">label</span> - String
        </li>

        <li>
          placeholder - String (default = "")
        </li>

        <li>
          type - String (default = text)
        </li>

        <li>
          disabled - Boolean (default = false)
        </li>
      </ul>

      <h3>Bindings</h3>

      <ul>
        <li>
          <span class="required">bind:value</span> - Variable with string value
        </li>
      </ul>
    </div>
  </div>

  <div class="component-group variations">
    <div class="component">
      <Input
        id="text-input-placeholder"
        label="With Placeholder"
        bind:value={textInputPlaceholderValue}
        placeholder="Placeholder" />

      <pre class="common">
        <code>
&lt;Input
  id="text-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  <span class="difference">placeholder="Placeholder"</span> /&gt;
        </code>
      </pre>
    </div>

    <div class="component">
      <Input
        id="text-input-email"
        label="Type Email"
        bind:value={textInputTypeValue}
        type="email" />

      <pre class="common">
        <code>
&lt;Input
  id="text-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  <span class="difference">type="email"</span> /&gt;
        </code>
      </pre>
    </div>

    <div class="component">
      <Input
        id="text-input-disabled"
        label="Disabled"
        bind:value={textInputDisabledValue}
        disabled />

      <pre class="common">
        <code>
&lt;Input
  id="text-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  <span class="difference">disabled</span> /&gt;
        </code>
      </pre>
    </div>
  </div>
</div>
