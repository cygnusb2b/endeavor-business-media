const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'VehicleServicePros' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('service-repair', [
    { name: 'lb1', templateName: 'LB1', path: 'service-repair/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'service-repair/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'service-repair/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'service-repair/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'service-repair/load-more' },
    { name: 'reskin', path: 'service-repair/reskin' },
  ])
  .setAliasAdUnits('collision-repair', [
    { name: 'lb1', templateName: 'LB1', path: 'collision-repair/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'collision-repair/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'collision-repair/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'collision-repair/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'collision-repair/load-more' },
    { name: 'reskin', path: 'collision-repair/reskin' },
  ])
  .setAliasAdUnits('shop-operations', [
    { name: 'lb1', templateName: 'LB1', path: 'shop-operations/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'shop-operations/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'shop-operations/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'shop-operations/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'shop-operations/load-more' },
    { name: 'reskin', path: 'shop-operations/reskin' },
  ])
  .setAliasAdUnits('distribution', [
    { name: 'lb1', templateName: 'LB1', path: 'distribution/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'distribution/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'distribution/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'distribution/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'distribution/load-more' },
    { name: 'reskin', path: 'distribution/reskin' },
  ])
  .setAliasAdUnits('training-and-resources', [
    { name: 'lb1', templateName: 'LB1', path: 'training-and-resources/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-and-resources/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'training-and-resources/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'training-and-resources/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'training-and-resources/load-more' },
    { name: 'reskin', path: 'training-and-resources/reskin' },
  ])
  .setAliasAdUnits('industry-news', [
    { name: 'lb1', templateName: 'LB1', path: 'industry-news/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'industry-news/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'industry-news/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'industry-news/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'industry-news/load-more' },
    { name: 'reskin', path: 'industry-news/reskin' },
  ])
  .setAliasAdUnits('directory', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/load-more' },
    { name: 'reskin', path: 'directory/reskin' },
  ])
  .setAliasAdUnits('directory/tools/adas-calibration-and-programming', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/adas-calibration-and-programming/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/adas-calibration-and-programming/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/adas-calibration-and-programming/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/adas-calibration-and-programming/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/adas-calibration-and-programming/load-more' },
    { name: 'reskin', path: 'directory/tools/adas-calibration-and-programming/reskin' },
  ])
  .setAliasAdUnits('directory/tools/air-conditioning-a-c-service-and-repair', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/air-conditioning-a-c-service-and-repair/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/air-conditioning-a-c-service-and-repair/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/air-conditioning-a-c-service-and-repair/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/air-conditioning-a-c-service-and-repair/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/air-conditioning-a-c-service-and-repair/load-more' },
    { name: 'reskin', path: 'directory/tools/air-conditioning-a-c-service-and-repair/reskin' },
  ])
  .setAliasAdUnits('directory/tools/air-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/air-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/air-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/air-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/air-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/air-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/air-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/body-shop-and-repair', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/body-shop-and-repair/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/body-shop-and-repair/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/body-shop-and-repair/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/body-shop-and-repair/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/body-shop-and-repair/load-more' },
    { name: 'reskin', path: 'directory/tools/body-shop-and-repair/reskin' },
  ])
  .setAliasAdUnits('directory/tools/brake-service-and-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/brake-service-and-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/brake-service-and-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/brake-service-and-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/brake-service-and-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/brake-service-and-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/brake-service-and-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/chemicals', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/chemicals/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/chemicals/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/chemicals/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/chemicals/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/chemicals/load-more' },
    { name: 'reskin', path: 'directory/tools/chemicals/reskin' },
  ])
  .setAliasAdUnits('directory/tools/computers-and-tablets', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/computers-and-tablets/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/computers-and-tablets/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/computers-and-tablets/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/computers-and-tablets/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/computers-and-tablets/load-more' },
    { name: 'reskin', path: 'directory/tools/computers-and-tablets/reskin' },
  ])
  .setAliasAdUnits('directory/tools/cordless-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/cordless-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/cordless-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/cordless-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/cordless-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/cordless-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/cordless-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/diagnostic-test-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/diagnostic-test-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/diagnostic-test-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/diagnostic-test-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/diagnostic-test-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/diagnostic-test-equipment/load-more' },
    { name: 'reskin', path: 'directory/tools/diagnostic-test-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/tools/electrical-system-tools-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/electrical-system-tools-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/electrical-system-tools-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/electrical-system-tools-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/electrical-system-tools-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/electrical-system-tools-equipment/load-more' },
    { name: 'reskin', path: 'directory/tools/electrical-system-tools-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/tools/emissions-system-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/emissions-system-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/emissions-system-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/emissions-system-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/emissions-system-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/emissions-system-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/emissions-system-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/engine-service-and-repair-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/engine-service-and-repair-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/engine-service-and-repair-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/engine-service-and-repair-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/engine-service-and-repair-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/engine-service-and-repair-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/engine-service-and-repair-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/hand-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/hand-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/hand-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/hand-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/hand-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/hand-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/hand-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/hybrid-and-ev-service-and-repairs', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/hybrid-and-ev-service-and-repairs/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/hybrid-and-ev-service-and-repairs/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/hybrid-and-ev-service-and-repairs/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/hybrid-and-ev-service-and-repairs/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/hybrid-and-ev-service-and-repairs/load-more' },
    { name: 'reskin', path: 'directory/tools/hybrid-and-ev-service-and-repairs/reskin' },
  ])
  .setAliasAdUnits('directory/tools/inspection-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/inspection-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/inspection-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/inspection-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/inspection-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/inspection-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/inspection-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/leak-detection', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/leak-detection/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/leak-detection/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/leak-detection/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/leak-detection/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/leak-detection/load-more' },
    { name: 'reskin', path: 'directory/tools/leak-detection/reskin' },
  ])
  .setAliasAdUnits('directory/tools/lighting', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/lighting/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/lighting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/lighting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/lighting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/lighting/load-more' },
    { name: 'reskin', path: 'directory/tools/lighting/reskin' },
  ])
  .setAliasAdUnits('directory/tools/repair-information-sources', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/repair-information-sources/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/repair-information-sources/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/repair-information-sources/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/repair-information-sources/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/repair-information-sources/load-more' },
    { name: 'reskin', path: 'directory/tools/repair-information-sources/reskin' },
  ])
  .setAliasAdUnits('directory/tools/safety-equipment-personal-gear', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/safety-equipment-personal-gear/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/safety-equipment-personal-gear/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/safety-equipment-personal-gear/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/safety-equipment-personal-gear/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/safety-equipment-personal-gear/load-more' },
    { name: 'reskin', path: 'directory/tools/safety-equipment-personal-gear/reskin' },
  ])
  .setAliasAdUnits('directory/tools/scan-tools-and-scan-tool-accessories', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/scan-tools-and-scan-tool-accessories/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/scan-tools-and-scan-tool-accessories/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/scan-tools-and-scan-tool-accessories/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/scan-tools-and-scan-tool-accessories/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/scan-tools-and-scan-tool-accessories/load-more' },
    { name: 'reskin', path: 'directory/tools/scan-tools-and-scan-tool-accessories/reskin' },
  ])
  .setAliasAdUnits('directory/tools/shop-management-and-point-of-sale', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/shop-management-and-point-of-sale/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/shop-management-and-point-of-sale/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/shop-management-and-point-of-sale/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/shop-management-and-point-of-sale/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/shop-management-and-point-of-sale/load-more' },
    { name: 'reskin', path: 'directory/tools/shop-management-and-point-of-sale/reskin' },
  ])
  .setAliasAdUnits('directory/tools/specialty-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/specialty-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/specialty-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/specialty-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/specialty-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/specialty-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/specialty-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/suspension-and-steering-service-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/suspension-and-steering-service-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/suspension-and-steering-service-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/suspension-and-steering-service-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/suspension-and-steering-service-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/suspension-and-steering-service-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/suspension-and-steering-service-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/tire-and-wheel-service-small-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/tire-and-wheel-service-small-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/tire-and-wheel-service-small-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/tire-and-wheel-service-small-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/tire-and-wheel-service-small-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/tire-and-wheel-service-small-tools/load-more' },
    { name: 'reskin', path: 'directory/tools/tire-and-wheel-service-small-tools/reskin' },
  ])
  .setAliasAdUnits('directory/tools/tool-accessories', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/tool-accessories/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/tool-accessories/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/tool-accessories/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/tool-accessories/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/tool-accessories/load-more' },
    { name: 'reskin', path: 'directory/tools/tool-accessories/reskin' },
  ])
  .setAliasAdUnits('directory/tools/welding-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/welding-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/welding-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/welding-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/welding-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/welding-equipment/load-more' },
    { name: 'reskin', path: 'directory/tools/welding-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/tools/top-100-most-wanted-products', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/tools/top-100-most-wanted-products/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/tools/top-100-most-wanted-products/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/tools/top-100-most-wanted-products/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/tools/top-100-most-wanted-products/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/tools/top-100-most-wanted-products/load-more' },
    { name: 'reskin', path: 'directory/tools/top-100-most-wanted-products/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/compressed-air-systems', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/compressed-air-systems/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/compressed-air-systems/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/compressed-air-systems/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/compressed-air-systems/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/compressed-air-systems/load-more' },
    { name: 'reskin', path: 'directory/equipment/compressed-air-systems/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/lifts-and-lifting-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/lifts-and-lifting-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/lifts-and-lifting-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/lifts-and-lifting-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/lifts-and-lifting-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/lifts-and-lifting-equipment/load-more' },
    { name: 'reskin', path: 'directory/equipment/lifts-and-lifting-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/jacks-stands-and-hoists', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/jacks-stands-and-hoists/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/jacks-stands-and-hoists/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/jacks-stands-and-hoists/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/jacks-stands-and-hoists/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/jacks-stands-and-hoists/load-more' },
    { name: 'reskin', path: 'directory/equipment/jacks-stands-and-hoists/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/oil-lube-and-fluid-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/oil-lube-and-fluid-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/oil-lube-and-fluid-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/oil-lube-and-fluid-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/oil-lube-and-fluid-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/oil-lube-and-fluid-equipment/load-more' },
    { name: 'reskin', path: 'directory/equipment/oil-lube-and-fluid-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/painting-and-refinish', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/painting-and-refinish/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/painting-and-refinish/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/painting-and-refinish/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/painting-and-refinish/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/painting-and-refinish/load-more' },
    { name: 'reskin', path: 'directory/equipment/painting-and-refinish/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/shop-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/shop-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/shop-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/shop-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/shop-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/shop-equipment/load-more' },
    { name: 'reskin', path: 'directory/equipment/shop-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/tire-and-wheel-large-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/tire-and-wheel-large-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/tire-and-wheel-large-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/tire-and-wheel-large-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/tire-and-wheel-large-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/tire-and-wheel-large-equipment/load-more' },
    { name: 'reskin', path: 'directory/equipment/tire-and-wheel-large-equipment/reskin' },
  ])
  .setAliasAdUnits('directory/equipment/tool-storage', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/equipment/tool-storage/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/equipment/tool-storage/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/equipment/tool-storage/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/equipment/tool-storage/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/equipment/tool-storage/load-more' },
    { name: 'reskin', path: 'directory/equipment/tool-storage/reskin' },
  ])
  .setAliasAdUnits('directory/parts/battery-starting-charging-systems', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/parts/battery-starting-charging-systems/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/parts/battery-starting-charging-systems/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/parts/battery-starting-charging-systems/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/parts/battery-starting-charging-systems/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/parts/battery-starting-charging-systems/load-more' },
    { name: 'reskin', path: 'directory/parts/battery-starting-charging-systems/reskin' },
  ])
  .setAliasAdUnits('directory/parts/chassis-suspension-steering', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/parts/chassis-suspension-steering/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/parts/chassis-suspension-steering/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/parts/chassis-suspension-steering/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/parts/chassis-suspension-steering/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/parts/chassis-suspension-steering/load-more' },
    { name: 'reskin', path: 'directory/parts/chassis-suspension-steering/reskin' },
  ])
  .setAliasAdUnits('directory/parts/engine-and-powertrain', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/parts/engine-and-powertrain/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/parts/engine-and-powertrain/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/parts/engine-and-powertrain/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/parts/engine-and-powertrain/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/parts/engine-and-powertrain/load-more' },
    { name: 'reskin', path: 'directory/parts/engine-and-powertrain/reskin' },
  ])
  .setAliasAdUnits('directory/parts/hybrid-and-ev-service-and-repairs', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/parts/hybrid-and-ev-service-and-repairs/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/parts/hybrid-and-ev-service-and-repairs/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/parts/hybrid-and-ev-service-and-repairs/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/parts/hybrid-and-ev-service-and-repairs/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/parts/hybrid-and-ev-service-and-repairs/load-more' },
    { name: 'reskin', path: 'directory/parts/hybrid-and-ev-service-and-repairs/reskin' },
  ])
  .setAliasAdUnits('directory/parts/general-service', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/parts/general-service/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/parts/general-service/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/parts/general-service/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/parts/general-service/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/parts/general-service/load-more' },
    { name: 'reskin', path: 'directory/parts/general-service/reskin' },
  ])
  .setAliasAdUnits('directory/parts/hvac', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/parts/hvac/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/parts/hvac/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/parts/hvac/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/parts/hvac/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/parts/hvac/load-more' },
    { name: 'reskin', path: 'directory/parts/hvac/reskin' },
  ])
  .setAliasAdUnits('directory/training/ase-study-and-training-products', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/training/ase-study-and-training-products/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/training/ase-study-and-training-products/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/training/ase-study-and-training-products/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/training/ase-study-and-training-products/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/training/ase-study-and-training-products/load-more' },
    { name: 'reskin', path: 'directory/training/ase-study-and-training-products/reskin' },
  ])
  .setAliasAdUnits('directory/training/training-products-and-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'directory/training/training-products-and-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'directory/training/training-products-and-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/training/training-products-and-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/training/training-products-and-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/training/training-products-and-tools/load-more' },
    { name: 'reskin', path: 'directory/training/training-products-and-tools/reskin' },
  ]);

module.exports = config;
