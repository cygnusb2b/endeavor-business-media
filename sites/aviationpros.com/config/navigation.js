const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/aircraft', label: 'Aircraft' },
      { href: '/engines-components', label: 'Engines & Components' },
      { href: '/tools-equipment', label: 'Tools & Equipment' },
      { href: '/education-training', label: 'Education & Training' },
      { href: '/airports', label: 'Airports' },
      { href: '/aviation-security', label: 'Aviation Security' },
      { href: '/aoa', label: 'AOA' },
      { href: '/fbos-tenants', label: 'FBOs & Tenants' },
      { href: '/airlines', label: 'Airlines' },
      { href: '/ground-handling', label: 'Ground Handling' },
      { href: '/gse', label: 'GSE' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazines' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://jobs.aviationpros.com', label: 'Careers', target: '_blank' },
      { href: '/directory', label: 'Buyers Guide' },
      { href: 'http://www.gseexpo.com', label: 'GSE Expo', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/aircraft', label: 'Aircraft' },
        { href: '/engines-components', label: 'Engines & Components' },
        { href: '/tools-equipment', label: 'Tools & Equipment' },
        { href: '/education-training', label: 'Education & Training' },
        { href: '/airports', label: 'Airports' },
        { href: '/aviation-security', label: 'Aviation Security' },
        { href: '/aoa', label: 'AOA' },
        { href: '/fbos-tenants', label: 'FBOs & Tenants' },
        { href: '/airlines', label: 'Airlines' },
        { href: '/ground-handling', label: 'Ground Handling' },
        { href: '/gse', label: 'GSE' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/directory', label: 'Buyers Guide' },
        { href: '/podcasts', label: 'Podcasts' },
        { href: 'https://jobs.aviationpros.com', label: 'Careers', target: '_blank' },
        { href: '/classified-rfp', label: 'Classifieds & RFPs' },
        { href: '/magazine', label: 'Magazines' },
        { href: '/events', label: 'Events' },
        { href: '/opinions', label: 'Opinions' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Paper/Case Study' },
        { href: 'http://www.gseexpo.com/', label: 'GSE Expo', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
