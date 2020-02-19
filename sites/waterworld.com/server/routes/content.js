const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const company = require('../templates/content/company');
const whitepaper = require('../templates/content/whitepaper');
const queryFragment = require('../graphql/fragments/content-page');
const companyQueryFragment = require('../graphql/fragments/content-company');

module.exports = (app) => {
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
