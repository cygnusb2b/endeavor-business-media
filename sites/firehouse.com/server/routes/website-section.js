const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const leaders = require('../templates/website-section/leaders');
const queryFragment = require('../graphql/fragments/website-section-page');
const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const whitePapers = require('../templates/website-section/white-papers');
const channel = require('../templates/website-section/channel');
const runSurveys = require('../templates/website-section/run-surveys');
const anniversary = require('../templates/website-section/anniversary');
const valorAwards = require('../templates/website-section/valor-awards');
const jobs = require('../templates/website-section/jobs/index');
const jobsSubmit = require('../templates/website-section/jobs/submit');

const channelAliases = [
  'leadership',
  'apparatus',
  'rescue',
  'safety-health',
  'operations-training',
  'careers-education',
  'prevention-investigation',
  'stations',
];

module.exports = (app) => {
  app.get('/:alias(careers-education/jobs)', withWebsiteSection({
    template: jobs,
    queryFragment,
  }));
  app.get('/:alias(careers-education/jobs/submit)', withWebsiteSection({
    aliasResolver: () => 'jobs',
    redirectOnPathMismatch: false,
    template: jobsSubmit,
    queryFragment,
  }));
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
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
  app.get(`/:alias(${channelAliases.join('|')})`, withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(white-papers)', withWebsiteSection({
    template: whitePapers,
    queryFragment,
  }));
  app.get('/:alias(run-surveys)', withWebsiteSection({
    template: runSurveys,
    queryFragment,
  }));
  app.get('/:alias(40th-anniversary)', withWebsiteSection({
    template: anniversary,
    queryFragment,
  }));
  app.get('/:alias(valor-awards)', withWebsiteSection({
    template: valorAwards,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
