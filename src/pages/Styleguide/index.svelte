<script>
  import Checkbox from '../../components/Inputs/Checkbox/index.svelte';
  import Datepicker from '../../components/Inputs/Datepicker/index.svelte';
  import Dropdown from '../../components/Dropdown/index.svelte';
  import DropdownInput from '../../components/DropdownInput/index.svelte';
  import IncrementInput from '../../components/Inputs/IncrementInput/index.svelte';
  import Input from '../../components/Inputs/Input/index.svelte';
  import Select from '../../components/Inputs/Select/index.svelte';
  import Button from '../../components/Button/index.svelte';

  let textInputValue = '';
  let textInputPlaceholderValue = '';
  let textInputTypeValue = 'info@avibowling.com';
  let textInputDisabledValue = 'Disabled';

  let incrementInputValue = 0;
  const incrementInputMinValue = 0;
  const incrementInputMaxValue = 3;

  let incrementInputCustomValueTextValue = 0;
  const incrementInputCustomValueTextMinValue = 0;
  const incrementInputCustomValueTextMaxValue = 3;

  let incrementInputLabelCheckbox = false;
  let incrementInputCustomLabelValue = 0;
  const incrementInputCustomLabelMinValue = 0;
  const incrementInputCustomLabelMaxValue = 3;

  const selectOptions = [1, 2, 3, 4, 5];
  let selectSelectedOption = selectOptions[0];

  let checkboxUnchecked = false;
  let checkboxChecked = true;
  let checkboxDisabledUnchecked = false;
  let checkboxDisabledChecked = true;

  let datepickerSelectedDate = new Date();

  let isDropdownContentVisible = false;
  let isDropdownDisabledContentVisible = false;

  let dropdownInputValue = 'Dropdown input value';
  let isDropdownInputContentVisible = false;

  let dropdownInputDisabledValue = 'Disabled';
  let isDropdownInputDisabledContentVisible = false;

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

  const toggleDropdownInputContent = () => {
    isDropdownInputContentVisible = !isDropdownInputContentVisible;
  }

  const toggleDropdownInputDisabledContent = () => {
    isDropdownInputDisabledContentVisible = !isDropdownInputDisabledContentVisible;
  }
</script>

<style>
  .page-wrapper {
    display: flex;
    margin: var(--m-xxl) auto;
    padding: var(--p-0) var(--p-mobile);
  }

  nav {
    background-color: var(--c-white);
    left: 24px;
    position: fixed;
    width: 140px;
  }

  nav ul {
    margin: var(--m-0);
  }

  nav li:first-of-type {
    font-weight: var(--fw-bold);
  }

  nav li:not(:first-of-type) {
    padding-left: var(--p-xs);
  }

  nav li:last-of-type {
    margin-bottom: var(--m-s);
  }

  nav a {
    color: var(--c-mine-shaft);
    text-decoration: none;
  }

  .styleguide-wrapper {
    padding-left: 164px;
  }

  .section-title {
    font-size: 2em;
    font-weight: var(--fw-bold);
  }

  .section-title:not(:first-of-type) {
    padding-top: var(--p-xxl);
  }

  .component-group {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
  }

  .component-group .component:not(:last-of-type) {
    margin-right: var(--m-m);
    margin-bottom: var(--m-m);
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
    padding-top: var(--m-xxl);
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

<div class="page-wrapper">
  <nav>
    <ul>
      <li>
        <a href="#inputs-section">Inputs</a>
      </li>

      <li>
        <a href="#checkbox">Checkbox</a>
      </li>

      <li>
        <a href="#datepicker">Datepicker</a>
      </li>

      <li>
        <a href="#dropdown">Dropdown</a>
      </li>

      <li>
        <a href="#dropdown-as-input">Dropdown as Input</a>
      </li>

      <li>
        <a href="#increment-input">Increment Input</a>
      </li>

      <li>
        <a href="#select">Select</a>
      </li>

      <li>
        <a href="#text-input">Text Input</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="#buttons-section">Buttons</a>
      </li>

      <li>
        <a href="#cta-button">CTA Button</a>
      </li>
    </ul>
  </nav>

  <div class="styleguide-wrapper">
    <div id="inputs-section" class="section-title">Styleguide - Inputs</div>

    <h2 id="checkbox">Checkbox</h2>

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

    <h2 id="datepicker">Datepicker</h2>

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

    <h2 id="dropdown">Dropdown</h2>

    <div class="component-group">
      <div class="component">
        <Dropdown
          isContentVisible={isDropdownContentVisible}
          on:toggleDropdown={toggleDropdownContent}>
          <div slot="toggle">
            Dropdown toggle
          </div>

          <div slot="content">
            Dropdown content
          </div>
        </Dropdown>

        <pre>
          <code>
&lt;Dropdown
  isContentVisible=&#123;isDropdownContentVisible&#125;
  on:toggleDropdown=&#123;() =&gt; isDropdownContentVisible = !isDropdownContentVisible&#125;&gt;
  &lt;div slot="toggle"&gt;
    Dropdown toggle
  &lt;/div&gt;

  &lt;div slot="content"&gt;
    Dropdown content
  &lt;/div&gt;
&lt;/Dropdown&gt;
          </code>
        </pre>
      </div>

      <div class="component-details">
        <h3>Props</h3>

        <ul>
          <li>
            <span class="required">isContentVisible</span> - Variable with boolean value
          </li>

          <li>
            disabled - Boolean (default = false)
          </li>
        </ul>

        <h3>Events</h3>

        <ul>
          <li>
            <span class="required">on:toggleDropdown</span> - Function to handle event that is called after toggling dropdown
          </li>
        </ul>

        <h3>Slots</h3>

        <ul>
          <li>
            <span class="required">toggle</span> - Dropdown toggle
          </li>

          <li>
            <span class="required">content</span> - Dropdown content
          </li>
        </ul>
      </div>

      <div class="component-group variations">
        <div class="component">
          <Dropdown
            isContentVisible={isDropdownDisabledContentVisible}
            on:toggleDropdown={toggleDropdownDisabledContent}
            disabled>
            <div slot="toggle">
              Dropdown toggle
            </div>

            <div slot="content">
              Dropdown content
            </div>
          </Dropdown>

          <pre class="common">
            <code>
&lt;Dropdown
  isContentVisible=&#123;isDropdownContentVisible&#125;
  on:toggleDropdown=&#123;() =&gt; isDropdownContentVisible = !isDropdownContentVisible&#125;
  <span class="difference">disabled</span>&gt;
  &lt;div slot="toggle"&gt;
    Dropdown toggle
  &lt;/div&gt;

  &lt;div slot="content"&gt;
    Dropdown content
  &lt;/div&gt;
&lt;/Dropdown&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>

    <h2 id="dropdown-as-input">Dropdown as Input</h2>

    <div class="component-group">
      <div class="component">
        <DropdownInput
          id="dropdown-input-regular"
          label="Regular"
          value={dropdownInputValue}
          isContentVisible={isDropdownInputContentVisible}
          on:toggleDropdown={toggleDropdownInputContent}>
          <div slot="content">
            <Input
              id="dropdown-input-text-input"
              label="Label"
              bind:value={dropdownInputValue} />
          </div>
        </DropdownInput>

        <pre>
          <code>
&lt;DropdownInput
  id="dropdown-input-id"
  label="Label"
  value=&#123;dropdownInputValue&#125;
  isContentVisible=&#123;isDropdownInputContentVisible&#125;
  on:toggleDropdown=&#123;() =&gt; isDropdownInputContentVisible = !isDropdownInputContentVisible&#125;&gt;
  &lt;div slot="content"&gt;
    &lt;Input
      id="dropdown-input-text-input-id"
      label="Label"
      bind:value=&#123;dropdownInputValue&#125; /&gt;
  &lt;/div&gt;
&lt;/DropdownInput&gt;
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
            <span class="required">value</span> - Variable with string value
          </li>

          <li>
            <span class="required">isContentVisible</span> - Variable with boolean value
          </li>

          <li>
            disabled - Boolean (default = false)
          </li>
        </ul>

        <h3>Events</h3>

        <ul>
          <li>
            <span class="required">on:toggleDropdown</span> - Function to handle event that is called after toggling dropdown
          </li>
        </ul>

        <h3>Slots</h3>

        <ul>
          <li>
            <span class="required">content</span> - Dropdown content
          </li>
        </ul>
      </div>

      <div class="component-group variations">
        <div class="component">
          <DropdownInput
            id="dropdown-input-disabled"
            label="Disabled"
            value={dropdownInputDisabledValue}
            isContentVisible={isDropdownInputDisabledContentVisible}
            on:toggleDropdown={toggleDropdownInputDisabledContent}
            disabled>
            <div slot="content">
              <Input
                id="dropdown-input-text-input-disabled"
                label="Label"
                bind:value={dropdownInputDisabledValue} />
            </div>
          </DropdownInput>

          <pre class="common">
            <code>
&lt;DropdownInput
  id="dropdown-input-id"
  label="Label"
  value=&#123;dropdownInputValue&#125;
  isContentVisible=&#123;isDropdownInputContentVisible&#125;
  on:toggleDropdown=&#123;() =&gt; isDropdownInputContentVisible = !isDropdownInputContentVisible&#125;
  <span class="difference">disabled</span>&gt;
  &lt;div slot="content"&gt;
    &lt;Input
      id="dropdown-input-text-input-id"
      label="Label"
      bind:value=&#123;dropdownInputValue&#125; /&gt;
  &lt;/div&gt;
&lt;/DropdownInput&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>

    <h2 id="increment-input">Increment Input</h2>

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

        <h3>Events</h3>

        <ul>
          <li>
            on:decrement - Function to handle event that is called after decrement button is pressed
          </li>

          <li>
            on:increment - Function to handle event that is called after increment button is pressed
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

      <div class="component">
        <IncrementInput
          id="increment-input-events"
          label="With events"
          bind:value={incrementInputValue}
          minValue={incrementInputMinValue}
          maxValue={incrementInputMaxValue}
          on:decrement={event => console.log('Decremented value: ', event.detail)}
          on:increment={event => console.log('Incremented value: ', event.detail)} />

        <pre class="common">
          <code>
&lt;IncrementInput
  id="increment-input-id"
  label="Label"
  bind:value=&#123;value&#125;
  minValue=0
  maxValue=3
  <span class="difference">on:decrement=&#123;event =&gt; decrementedValue = event.detail&#125;</span>
  <span class="difference">on:increment=&#123;event =&gt; incrementedValue = event.detail&#125;</span> /&gt;
          </code>
        </pre>
      </div>
    </div>

    <h2 id="select">Select</h2>

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

    <h2 id="text-input">Text Input</h2>

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

    <div id="buttons-section" class="section-title">Styleguide - Buttons</div>

    <h2 id="cta-button">CTA Button</h2>

    <div class="component-group">
      <div class="component">
        <Button>Primary (default)</Button>

        <pre>
          <code>
&lt;Button&gt;Text&lt;/Button&gt;
          </code>
        </pre>
      </div>

      <div class="component-details">
        <h3>Props</h3>

        <ul>
          <li>
            type - String (default = "button")
          </li>

          <li>
            buttonType ("primary" | "secondary") - String (default = "primary")
          </li>

          <li>
            disabled - Boolean (default = false)
          </li>
        </ul>
      </div>
    </div>

    <div class="component-group variations">
      <div class="component">
        <Button buttonType="secondary">Secondary</Button>

        <pre class="common">
          <code>
&lt;Button <span class="difference">buttonType="secondary"</span>&gt;Text&lt;/Button&gt;
          </code>
        </pre>
      </div>

      <div class="component">
        <Button disabled>Primary disabled</Button>

        <pre class="common">
          <code>
&lt;Button <span class="difference">disabled</span>&gt;Text&lt;/Button&gt;
          </code>
        </pre>
      </div>

      <div class="component">
        <Button buttonType="secondary" disabled>Secondary disabled</Button>

        <pre class="common">
          <code>
&lt;Button <span class="difference">buttonType="secondary" disabled</span>&gt;Text&lt;/Button&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>
</div>
