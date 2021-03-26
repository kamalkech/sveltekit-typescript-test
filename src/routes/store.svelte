<script lang="ts">
  import { Counter } from '$lib/store/counter';

  function increment() {
    Counter.update((n) => n + 1);
  }

  function decrement() {
    Counter.update((n) => n - 1);
  }

  let count;

  Counter.subscribe((value) => (count = value));
</script>

<h2 class="mb-5">Store</h2>

<div class="buttons mb-5">
  <button
    class="outline-none border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg md:px-5"
    on:click={increment}> + </button>
  <button
    class="outline-none border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg md:px-5"
    on:click={decrement}> - </button>
</div>

<span>Count: {count}</span>
