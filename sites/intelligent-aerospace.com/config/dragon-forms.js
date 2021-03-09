const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSignup', { omedasite: 'IANewPref', query: { pk: 'ARTWEB' } })
  .addForm('newsletterSubscribe', { omedasite: 'IANewPref' })
  .addForm('newsletterManage', { omedasite: 'IAPrefPage' });

module.exports = config;
