<template>
  <ais-instant-search
    index-name="prod_base_content"
    :search-client="searchClient"
    :routing="routing"
  >
    <div class="row algolia-search">
      <div class="col-12">
        <ais-search-box />
        <br>
        <br>
      </div>
      <div class="col-3">
        <ais-clear-refinements />
        <div
          slot="showMoreLabel"
          slot-scope="{ isShowingMore }"
        >
          {{ isShowingMore ? 'Less' : 'More' }}
        </div>
        <h2>Type</h2>
        <ais-refinement-list attribute="Type" />
        <h2>Categories</h2>
        <ais-hierarchical-menu
          :attributes="[
            'Topics.lev0',
            'Topics.lev1',
            'Topics.lev2',
            'Topics.lev3',
            'Topics.lev4',
          ]"
          show-more
          :show-more-limit="40"
          :sort-by="['count:desc']"
          :show-parent-level="false"
        />
        // eslint-disable-next-line vue/attribute-hyphenation
        <ais-configure :hitsPerPage="24" />
      </div>
      <div class="col-9">
        <ais-hits
          :class-names="{
            'ais-Hits-list': 'card-deck-flow card-deck-flow--3-cols',
            'ais-Hits-item': 'card-deck-flow__node',
          }"
        >
          <div slot="item" slot-scope="{ item }">
            <div class="node__contents">
              <div v-if="item.primaryimage" class="node__image-wrapper">
                <a
                  class="node__image-inner-wrapper node__image-inner-wrapper--fluid-16by9"
                  :href="item.domain + item.url"
                >
                  <img
                    class="node__image"
                    :src="item.primaryimage+'?auto=format&dpr=2&fit=crop&h=191&w=340 2x'"
                  >
                </a>
              </div>
              <div class="node__body">
                <div class="node__contents node__contents--body">
                  <h5 class="node__title">
                    <a :href="item.domain + item.url">
                      {{ item.name }}
                    </a>
                  </h5>
                  <div class="node__text node__text--teaser">
                    {{ item.teaser }}
                  </div>
                </div>
                <div class="node__footer node__footer--body">
                  <div class="node__footer-right">
                    <div>{{ item.publishedDate }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ais-hits>
        <ais-pagination />
      </div>
    </div>
    <!-- Widgets -->
  </ais-instant-search>
</template>

<script>
import {
  AisInstantSearch,
  AisSearchBox,
  AisRefinementList,
  AisClearRefinements,
  AisHierarchicalMenu,
  AisConfigure,
  AisHits,
  AisPagination,
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
// eslint-disable-next-line import/no-extraneous-dependencies
import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings';

export default {
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisRefinementList,
    AisClearRefinements,
    AisHierarchicalMenu,
    AisConfigure,
    AisHits,
    AisPagination,
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

  data() {
    return {
      routing: {
        router: historyRouter(),
        stateMapping: simpleMapping(),
      },
    };
  },
  created() {
    this.searchClient = algoliasearch(
      this.applicationId,
      this.adminApiKey,
    );
  },
};
</script>
