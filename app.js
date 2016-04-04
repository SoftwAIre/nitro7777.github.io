Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: [
                        '',
                        'Welcome to Sencha Touch',
                        "We're creating the Getting Started app, which demonstrates how ",
                        "to use tabs, lists, and forms to create a simple app.",
                        'Sencha Touch'
                    ].join("")
                }
            ]
        });
    }
});
