<template>
  <ais-instant-search
    index-name="prod_base_content"
    :search-client="searchClient"
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
                <a :href="item.domain + item.url">
                  <img :src="item.primaryimage+'?crop=focalpoint&fit=crop&fp-x=0.37&fp-y=0.56&w=250&h=100'" />
                </a>
              </div>
              <div class="node__body">
                <div class="node__contents node__contents--body">
                  <h5 class="node__title">
                    <a href="http://earprolive.com/view/mail?iID=G82RtSzGP65tLzsmQnRH">
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
  AisHierarchicalMenu,
  AisConfigure,
  AisHits,
  AisPagination,
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

export default {
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisRefinementList,
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

  created() {
    this.searchClient = algoliasearch(
      this.applicationId,
      this.adminApiKey,
    );
  },
};
</script>
