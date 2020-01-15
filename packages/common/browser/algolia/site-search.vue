<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="index-name-here"
  />
</template>

<script>
import { AisInstantSearch } from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

export default {
  components: {
    AisInstantSearch,
  },

  props: {
    applicationId: {
      type: String,
      required: true,
    },
    adminApiKey: {
      type: String,
      required: true,
    },
  },

  created() {
    this.searchClient = algoliasearch(
      this.applicationId,
      this.adminApiKey,
    );
  },
};
</script>
