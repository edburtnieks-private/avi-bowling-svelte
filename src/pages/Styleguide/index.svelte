<script>
  import Input from "../../components/Inputs/Input/index.svelte";
  import IncrementInput from "../../components/Inputs/IncrementInput/index.svelte";
  import Select from "../../components/Inputs/Select/index.svelte";
  import Checkbox from "../../components/Inputs/Checkbox/index.svelte";

  let textInputValue = "";

  let incrementInputValue = 0;
  let incrementInputMinValue = 0;
  let incrementInputMaxValue = 3;

  let incrementInputCustomValueTextValue = 0;
  let incrementInputCustomValueTextMinValue = 0;
  let incrementInputCustomValueTextMaxValue = 3;

  let incrementInputLabelCheckbox = false
  let incrementInputCustomLabelValue = 0;
  let incrementInputCustomLabelMinValue = 0;
  let incrementInputCustomLabelMaxValue = 3;

  let selectOptions = [1, 2, 3, 4, 5];
  let selectSelectedOption = selectOptions[0];

  let checkboxUnchecked = false;
  let checkboxChecked = true;
  let checkboxDisabledUnchecked = false;
  let checkboxDisabledChecked = true;
</script>

<style>
  .styleguide-wrapper {
    margin: var(--m-0) auto;
    max-width: var(--bp-desktop-xl);
    padding: var(--p-0) var(--p-mobile);
    width: 100%;
  }

  h1 {
    margin: var(--m-0) var(--m-0) var(--m-l);
  }

  .component-group {
    align-items: flex-start;
    display: flex;
    margin-bottom: var(--m-m);
  }

  .component-group .component:not(:last-of-type) {
    margin-right: var(--m-m);
  }

  .component {
    display: inline-block;
  }

  .title {
    font-weight: var(--fw-bold);
    margin-bottom: var(--m-xs);
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

  <div class="component-wrapper">
    <div class="title">Text Input</div>

    <div class="component-group">
      <div class="component">
        <Input
          id="text-input-regular"
          label="Regular"
          placeholder="Placeholder"
          bind:value={textInputValue} />

        <pre>
          <code>
&lt;Input
  id="text-input-id"
  label="Label"
  placeholder="Placeholder"
  bind:value /&gt;
          </code>
        </pre>
      </div>

      <div class="component">
        <Input
          id="text-input-disabled"
          label="Disabled"
          placeholder="Placeholder"
          bind:value={textInputValue}
          disabled />

        <pre class="common">
          <code>
&lt;Input
  id="text-input-id"
  label="Label"
  placeholder="Placeholder"
  bind:value
  <span class="difference">disabled</span> /&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div class="component-wrapper">
    <div class="title">Increment Input</div>

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
  bind:value
  minValue=0
  maxValue=3 /&gt;
          </code>
        </pre>
      </div>

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
  bind:value
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
          valueText={`${incrementInputCustomValueTextValue} additional text`}
          minValue={incrementInputCustomValueTextMinValue}
          maxValue={incrementInputCustomValueTextMaxValue} />

        <pre class="common">
          <code>
&lt;IncrementInput
  id="increment-input-id"
  label="Label"
  bind:value
  <span class="difference">valueText=&#123;`&&#123;value&#125; additional text`&#125;</span>
  minValue=0
  maxValue=3 /&gt;
          </code>
        </pre>
      </div>

      <div class="component">
        <IncrementInput
          id="increment-input-custom-label"
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
  bind:value
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
  </div>

  <div class="component-wrapper">
    <div class="title">Select</div>

    <div class="component-group">
      <div class="component">
        <Select
          id="select-input-regular"
          label="Regular"
          options={selectOptions}
          selectedOption={selectSelectedOption} />

        <pre>
          <code>
&lt;Select
  id="select-id"
  label="Label"
  options=&#91;1, 2, 3, 4, 5&#93;
  selectedOption=options[0] /&gt;
          </code>
        </pre>
      </div>

      <div class="component">
        <Select
          id="select-input-disabled"
          label="Disabled"
          options={selectOptions}
          selectedOption={selectSelectedOption}
          disabled />

        <pre class="common">
          <code>
&lt;Select
  id="select-id"
  label="Label"
  options=&#91;1, 2, 3, 4, 5&#93;
  selectedOption=options[0]
  <span class="difference">disabled</span> /&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div class="component-wrapper">
    <div class="title">Checkbox</div>

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
  bind:checked /&gt;
          </code>
        </pre>
      </div>

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
  bind:checked /&gt;
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
  bind:checked
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
  bind:checked
  <span class="difference">disabled</span> /&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>
</div>
