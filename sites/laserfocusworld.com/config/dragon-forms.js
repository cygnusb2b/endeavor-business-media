const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSignup', { omedasite: 'LFWNewPref' })
  .addForm('newsletterSubscribe', { omedasite: 'LFWnewpref', query: { pk: 'ARTWEB' } })
  .addForm('newsletterLFWSubscribe', { omedasite: 'LFWnewpref' })
  .addForm('newsletterBOWSubscribe', { omedasite: 'BOWnewpref', query: { pk: 'ARTWEB' } })
  .addForm('newsletterManage', { omedasite: 'LFWPrefPage' });

module.exports = config;
