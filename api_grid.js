Ext.application({
    name : 'Fiddle',

    launch : function() {

        Ext.define('User', {
extend: 'Ext.data.Model',
fields: [{
name: 'login',
type: 'string'
}, {
name: 'id',
type: 'string'
},
{
    name:'url',
    type:'string'
}]
});
var user = Ext.create('Ext.data.Store', {
storeId: 'user',
model: 'User',
autoLoad: 'true',
proxy: {
            type: 'ajax',
            url : 'https://api.github.com/users/hadley/orgs',
            reader: {type: 'json', root: 'users_data'}
        }
});

// Ext.create('Ext.form.Panel', {
//     fullscreen: true,
//     items: [
//         {
//             xtype: 'fieldset',
//             layout:'hbox',
//             items: [
//                 {
//                     xtype: 'searchfield',
//                     label: 'First Name',
//                     name: 'firstName',
//                     flex:1
//                 },
//                 {
//                     xtype: 'searchfield',
//                     label: 'Last Name',
//                     name: 'lastName',
//                     flex:1
//                 }
//             ]
//         }
//     ]
// });

Ext.create('Ext.grid.Panel', {
store: user,
id: 'user',
title: 'Users',
columns: [{
header: 'Login',
dataIndex: 'login'
}, {
header: 'ID',
dataIndex: 'id'
},
{
header:'URL',
dataIndex:'url'
}
],
minHeight: 300,
width: 'auto',
renderTo:document.body
});
    }
});