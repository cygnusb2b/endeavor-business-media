<template>
  <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
    <ais-search-box />
    <ais-hits>
      <div slot="item" slot-scope="{ item }">
        <h2>{{ item.name }}</h2>
      </div>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        '80YJALCHBD',
        'd42ca2c6a54c76735bf0110ecb138de6',
      ),
      routing: {
        router: historyRouter(),
        stateMapping: simpleMapping(),
      },
    };
  },
};
</script>

<style>
body {
  padding: 1em;
  font-family: sans-serif;
}
</style>
