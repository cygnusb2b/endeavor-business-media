const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'DTE' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('microgrids', [
    { name: 'lb1', templateName: 'LB', path: 'microgrids/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'microgrids/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'microgrids/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'microgrids/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'microgrids/load-more' },
    { name: 'reskin', path: 'microgrids/reskin' },
    { name: 'wa', path: 'microgrids/wa' },
  ])
  .setAliasAdUnits('renewables', [
    { name: 'lb1', templateName: 'LB', path: 'renewables/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'renewables/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'renewables/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'renewables/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'renewables/load-more' },
    { name: 'reskin', path: 'renewables/reskin' },
    { name: 'wa', path: 'renewables/wa' },
  ])
  .setAliasAdUnits('storage', [
    { name: 'lb1', templateName: 'LB', path: 'storage/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'storage/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'storage/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'storage/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'storage/load-more' },
    { name: 'reskin', path: 'storage/reskin' },
    { name: 'wa', path: 'storage/wa' },
  ])
  .setAliasAdUnits('building-automation', [
    { name: 'lb1', templateName: 'LB', path: 'building-automation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'building-automation/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'building-automation/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'building-automation/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'building-automation/load-more' },
    { name: 'reskin', path: 'building-automation/reskin' },
    { name: 'wa', path: 'building-automation/wa' },
  ])
  .setAliasAdUnits('technologies', [
    { name: 'lb1', templateName: 'LB', path: 'technologies/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technologies/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'technologies/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'technologies/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'technologies/load-more' },
    { name: 'reskin', path: 'technologies/reskin' },
    { name: 'wa', path: 'technologies/wa' },
  ]);


module.exports = config;