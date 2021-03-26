<script context="module">
  import UrqlClient from '$lib/gql/urqlClient';

  import { Counter } from '$lib/store/counter';

  let limit;

  export async function load({ page, fetch, session, context }) {
    const client = UrqlClient(fetch);

    const QUERY_GET_ALL_ARTICLES = `
      query ($limit: Int) {
        articles(limit: $limit) {
          _id
          title
          article_categories {
            _id
            name
          }
        }
      }
    `;

    let articles;
    await Counter.subscribe(async (value) => {
      limit = value;
    });

    articles = await client
      .query(QUERY_GET_ALL_ARTICLES, { limit })
      .toPromise();

    return {
      props: {
        articles: articles.data.articles,
        limit,
      },
    };
  }
</script>

<script lang="ts">
  type Article = {
    _id: string;
    title: string;
  };

  export let articles: Article[];
  export let limit;
</script>

<h2>Urql</h2>

Limit: {limit}
<br />
<ul>
  {#each articles as article}
    <li>
      <a href="/articles/{article._id}">{article.title}</a>
    </li>
  {/each}
</ul>
