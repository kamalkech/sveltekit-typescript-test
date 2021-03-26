<script lang="ts">
  import { Counter } from '$lib/store/counter';

  let count;
  Counter.subscribe((value) => (count = value));
</script>

<h1>Hello world!</h1>
<hr />
Counter: {count}
<hr />

<button
  class="border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg md:px-5">
  Button
</button>
