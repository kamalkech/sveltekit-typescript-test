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

<h2>Store</h2>
<button on:click={increment}> + </button>
<button on:click={decrement}> - </button>
<hr />
<span>Count: {count}</span>
