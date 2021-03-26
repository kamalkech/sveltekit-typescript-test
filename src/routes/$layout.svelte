<script context="module">
  export async function load({ page, fetch, session, context }) {
    return {
      props: {
        page,
      },
    };

    // return {
    //   status: res.status,
    //   error: new Error(`Could not load ${url}`)
    // };
  }
</script>

<script lang="ts">
  import { getStores, navigating, page, session } from '$app/stores';
  import '../global.css';

  const link: string = 'text-gray-300 hover:bg-gray-700 hover:text-white';
  const link_active: string = 'bg-gray-900 text-white';
</script>

<nav class="bg-red-500">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-20 w-20"
            src="https://svelte.dev/svelte-logo-horizontal.svg"
            alt="Workflow"
          />
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              href="."
              class="{$page.path === '/'
                ? link_active
                : link} px-3 py-2 rounded-md text-sm font-medium">Home</a
            >

            <a
              href="/store"
              class="{$page.path === '/store'
                ? link_active
                : link} px-3 py-2 rounded-md text-sm font-medium">Store</a
            >

            <a
              href="/articles"
              class="{$page.path === '/articles'
                ? link_active
                : link} px-3 py-2 rounded-md text-sm font-medium">Articles</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="md:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a
        href="."
        class="{$page.path === '/'
          ? link_active
          : link} block px-3 py-2 rounded-md text-base font-medium">Home</a
      >

      <a
        href="/store"
        class="{$page.path === '/store'
          ? link_active
          : link} block px-3 py-2 rounded-md text-base font-medium">Store</a
      >

      <a
        href="/articles"
        class="{$page.path === '/articles'
          ? link_active
          : link} block px-3 py-2 rounded-md text-base font-medium">Articles</a
      >
    </div>
  </div>
</nav>

<main>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- Replace with your content -->
    <div class="px-4 py-6 sm:px-0">
      <slot />
      <!-- <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> -->
    </div>
    <!-- /End replace -->
  </div>
</main>
