const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'DE' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('job-postings', [
    { name: 'lb1', templateName: 'LB1', path: 'job-postings/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'job-postings/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'job-postings/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'job-postings/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'job-postings/load-more' },
    { name: 'reskin', path: 'job-postings/reskin' },
  ]);

module.exports = config;
