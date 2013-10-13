Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'BL',

    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items:[
                {
                    xtype:'panel',
                    title:'test',
                    html:'Hello, Bars Library'
                }
            ]
        });
    }
});