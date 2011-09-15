new Ext.Application({
  launch: function() {
    new Ext.Panel({
      fullscreen: true,
      dockedItems: [{xtype: 'toolbar', title: 'Hello World App'}],
      layout: 'fit',
      styleHtmlContent: true,
      html: '<h2>Hello Sencha</h2>Hello World App'
    });
  }
});
