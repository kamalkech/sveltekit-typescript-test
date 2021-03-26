<script lang="ts">
  import { get } from 'svelte/store';
  import { valuesForm, Field } from 'svelte-formly';
  import type DataSvelteFormly from '$lib/type/form';

  const fields = [
    {
      prefix: {
        class: [
          'h-full w-full border border-red-600 transition-all rounded-sm p-5 mb-5',
        ],
      },
      type: 'color',
      name: 'color',
      id: 'color',
      label: 'Color Form',
    },
    {
      prefix: {
        class: [
          'h-full w-full border border-red-600 transition-all rounded-sm p-5 mb-5',
        ],
      },
      type: 'text',
      name: 'firstname',
      value: '',
      id: 'firstname',
      class: [
        'h-full w-full border border-indigo-600 px-2 transition-all rounded-sm p-4',
      ],
      placeholder: 'Tap your first name',
      validation: ['required', 'min:6'],
      messages: {
        required: 'Firstname field is required!',
        min: 'First name field must have more that 6 caracters!',
      },
    },
    {
      prefix: {
        class: [
          'h-full w-full border border-red-600 transition-all rounded-sm p-5 mb-5',
        ],
      },
      type: 'text',
      name: 'lastname',
      value: '',
      id: 'lastname',
      class: [
        'h-full w-full border border-indigo-600 px-2 transition-all rounded-sm p-4',
      ],
      placeholder: 'Tap your lastname',
      description: {
        class: ['custom-class-desc'],
        text: 'Custom text for description',
      },
    },
    {
      prefix: {
        class: [
          'h-full w-full border border-red-600 transition-all rounded-sm p-5 mb-5',
        ],
      },
      type: 'email',
      name: 'email',
      value: '',
      id: 'email',
      class: [
        'h-full w-full border border-indigo-600 px-2 transition-all rounded-sm p-4',
      ],
      placeholder: 'Tap your email',
      validation: ['required', 'email'],
    },
    {
      prefix: {
        class: [
          'h-full w-full border border-red-600 transition-all rounded-sm p-5 mb-5',
        ],
      },
      type: 'radio',
      name: 'gender',
      items: [
        {
          id: 'female',
          value: 'female',
          title: 'Female',
        },
        {
          id: 'male',
          value: 'male',
          title: 'Male',
        },
      ],
    },
    {
      prefix: {
        class: [
          'h-full w-full border border-red-600 transition-all rounded-sm p-5 mb-5',
        ],
      },
      type: 'select',
      name: 'city',
      id: 'city',
      class: [
        'h-full w-full border border-indigo-600 px-2 transition-all rounded-sm p-4',
      ],
      label: 'City',
      validation: ['required'],
      options: [
        {
          value: 1,
          title: 'Agadir',
        },
        {
          value: 2,
          title: 'Casablanca',
        },
      ],
    },
  ];

  let message = '';
  let values;
  let color = '#ff3e00';

  function onSubmit() {
    const data: DataSvelteFormly = get(valuesForm);
    if (data.isValidForm) {
      values = data.values;
      color = values.color ? values.color : color;
      message = 'Congratulation! now your form is valid';
    } else {
      message = 'Your form is not valid!';
    }
  }
</script>

<h1 style="--theme-color: {color}" class="mb-10">Svelte Formly</h1>
<h3>{message}</h3>
<form
  on:submit|preventDefault={onSubmit}
  class="custom-form"
  style="--theme-color: {color}"
>
  <Field {fields} />
  <button
    class="border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg md:px-5"
    type="submit">Submit</button
  >
</form>

<style>
  * {
    color: var(--theme-color);
  }
  .custom-form :global(.form-group) {
    padding: 10px;
    /* border: solid 1px var(--theme-color); */
    margin-bottom: 10px;
  }
  .custom-form :global(.custom-form-group) {
    padding: 10px;
    background: var(--theme-color);
    color: white;
    margin-bottom: 10px;
  }
  .custom-form :global(.class-description) {
    color: var(--theme-color);
  }
</style>
