const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');
const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const diagnosticNetworkFeed = require('../templates/website-section/diagnostic-network-feed');
const videos = require('../templates/website-section/videos');
const blogs = require('../templates/website-section/blogs');
const trainingResourcesChannel = require('../templates/website-section/channel/training-and-resources');
const distributionChannel = require('../templates/website-section/channel/distribution');
const shopOperationsChannel = require('../templates/website-section/channel/shop-operations');
const collisionRepairChannel = require('../templates/website-section/channel/collision-repair');
const industryNewsChannel = require('../templates/website-section/channel/industry-news');
const serviceRepairChannel = require('../templates/website-section/channel/service-repair');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(in-the-bay)', withWebsiteSection({
    template: diagnosticNetworkFeed,
    queryFragment,
  }));
  app.get('/:alias(covid-19)', withWebsiteSection({
    template: diagnosticNetworkFeed,
    queryFragment,
  }));
  app.get('/:alias(blogs)', withWebsiteSection({
    template: blogs,
    queryFragment,
  }));
  app.get('/:alias(videos)', withWebsiteSection({
    template: videos,
    queryFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(training-and-resources)', withWebsiteSection({
    template: trainingResourcesChannel,
    queryFragment,
  }));
  app.get('/:alias(distribution)', withWebsiteSection({
    template: distributionChannel,
    queryFragment,
  }));
  app.get('/:alias(shop-operations)', withWebsiteSection({
    template: shopOperationsChannel,
    queryFragment,
  }));
  app.get('/:alias(collision-repair)', withWebsiteSection({
    template: collisionRepairChannel,
    queryFragment,
  }));
  app.get('/:alias(industry-news)', withWebsiteSection({
    template: industryNewsChannel,
    queryFragment,
  }));
  app.get('/:alias(service-repair)', withWebsiteSection({
    template: serviceRepairChannel,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
