<script context="module">
  import UrqlClient from '$lib/gql/urqlClient';

  export async function load({ page, fetch, session, context }) {
    const client = UrqlClient(fetch);

    const QUERY_GET_ARTICLE_BY_ID = `
      query($id: ID!) {
        article(id: $id) {
          _id
          title
          article_categories {
            _id
            name
          }
        }
      }
    `;

    const article = await client
      .query(QUERY_GET_ARTICLE_BY_ID, { id: page.params.id })
      .toPromise();

    return {
      props: {
        article: article.data.article,
      },
    };
  }
</script>

<script lang="ts">
  type Article = {
    _id: string;
    title: string;
  };
  export let article: Article;
</script>

<h2>Details</h2>
{#if article}
  {article._id} / {article.title}
{/if}
