const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@brand-primary': '#78CDD1',
      '@brand-primary-tap': '#50B7C1'
    }
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    //style: 'css',
    style: true // use less for customized theme
  })
);
