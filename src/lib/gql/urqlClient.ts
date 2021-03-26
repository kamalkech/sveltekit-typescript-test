import { createClient } from "@urql/svelte";

const UrqlClient = (fetch) => {
  return createClient({
    url: 'http://localhost:4000/graphql',
    fetch,
  });
}

export default UrqlClient;
