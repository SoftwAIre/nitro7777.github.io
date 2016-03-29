Ext.application({
   name:'HelloWorld',
   appFolder: 'app',
   profiles: ['Phone','Tablet', 'Desktop'],
   icon: {
      57: 'img/Icon.png',
      72: 'img/Icon-iPad.png',
      114: 'img/Icon@2x.png',
      144: 'img/Icon-iPad@2x.png'
   },
   startupImage: {
      '320x460': 'img/Default.png',
      '640x920': 'img/Default@2x.png', // Retina iPhone
      '768x1004': 'img/Default-Portrait.png',
      '748x1024': 'img/Default-Landscape.png',
      '1536x2008': 'img/Default-Portrait@2x.png', // Retina iPad, Portrait '1496x2048': 'img/Default-Landscape@2x.png' // Retina iPad, Landscape 
   },
   
   models: [],
   views: [],
   controllers: [],
   
   fullscreen:true,
   isIconPrecomposed: true,
   statusBarStyle: 'black',
   launch:function() {
      Ext.Msg.alert("Application Launched.");
   }
});
