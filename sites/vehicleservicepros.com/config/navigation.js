const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/service-repair', label: 'Service Repair' },
      { href: '/collision-repair', label: 'Collision Repair' },
      { href: '/shop-operations', label: 'Shop Operations' },
      { href: '/distribution', label: 'Distribution' },
      { href: '/training-and-resources', label: 'Training and Resources' },
      { href: '/industry-news', label: 'Industry News' },
      { href: '/directory', label: 'Product Guide' },
    ],
  },
  secondary: {
    items: [
      { href: '/magazine/53cd1d791784f8066eb2ca77', label: 'PTEN' },
      { href: '/magazine/5fd243a354604646568b4699', label: 'Motor Age' },
      { href: '/magazine/5fd24441f33eacc64f8b46ea', label: 'ABRN' },
      { href: '/magazine/53cd1d791784f8066eb2ca78', label: 'Professional Distributor' },
      { href: '/distribution', label: 'AMBW' },
      { href: 'https://passthease.motoragetraining.com/content/Motor-Age-Training.aspx', label: 'Motor Age Training', target: '_blank' },
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
      { href: '/page/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { label: 'Service Repair', href: '/service-repair' },
        { label: 'Diagnostics and Drivability', href: '/service-repair/diagnostics-and-drivability' },
        { label: 'Underhood', href: '/service-repair/underhood' },
        { label: 'Undercar', href: '/service-repair/undercar' },
        { label: 'Battery and Electrical', href: '/service-repair/battery-and-electrical' },
        { label: 'The Garage', href: '/service-repair/the-garage' },
        { label: 'Collision Repair', href: '/collision-repair' },
        { label: 'Paint and Refinish', href: '/collision-repair/paint-and-refinish' },
        { label: 'ADAS/Calibration/Programming', href: '/directory/tools/adas-calibration-and-programming' },
        { label: 'Shop Operations', href: '/shop-operations' },
        { label: 'Distribution', href: '/distribution' },
        { label: 'Industry News', href: '/industry-news' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { label: 'Product Guide', href: '/directory' },
        { label: 'Training', href: '/training-and-resources' },
        { label: 'Webinars', href: '/training-and-resources/webinars' },
        { label: 'Motor Age Training', href: 'https://motoragetraining.com/', target: '_blank' },
        { label: 'Multimedia', href: '/service-repair/video-network' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { label: 'In Print', href: '/magazine' },
        { label: 'Advertise', href: 'https://vehiclerepair.endeavorb2b.com/', target: '_blank' },
        { label: 'PTEN E-Inquiry', href: 'http://protoolequipment.hotims.com', target: '_blank' },
        { label: 'PD E-Inquiry', href: 'http://prodistributor.hotims.com', target: '_blank' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Subscribe', href: '/subscribe' },
        { label: 'Job Board', href: 'https://vehicleservicepros.jobboard.io/', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
