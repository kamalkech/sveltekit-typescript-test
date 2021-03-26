<script lang="ts">
  import { Counter } from '$lib/store/counter';

  let count;
  Counter.subscribe((value) => (count = value));
</script>

<main>
  <h1>Hello world!</h1>
  <hr />
  Counter: {count}
  <hr />
  <p>
    Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
  <button class="text-2xl bg-gray-200 text-white py-6 px-4">Btn</button>
</main>
