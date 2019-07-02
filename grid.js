Ext.application({
    name : 'Fiddle',

    launch : function() {

        Ext.define('User', {
extend: 'Ext.data.Model',
fields: [{
name: 'firstName',
type: 'string'
}, {
name: 'lastName',
type: 'string'
},
{
    name:'address',
    type:'string'
}]
});
var user = Ext.create('Ext.data.Store', {
storeId: 'user',
model: 'User',
autoLoad: 'true',
data : [
{firstName: 'Ed', lastName: 'Spencer',address:'Haripur lal Mani'},
{firstName: 'Tommy', lastName: 'Maintz',address:'Delhi'},
{firstName: 'Aaron', lastName: 'Conran',address:'West vinod nagar'},
{firstName: 'Jamie', lastName: 'Avins',address:'A21 Noida sector 60'}
]
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
header: 'FirstName',
dataIndex: 'firstName'
}, {
header: 'LastName',
dataIndex: 'lastName'
},
{
header:'Address',
dataIndex:'address'
}
],
minHeight: 300,
width: 'auto',
renderTo:document.body
});
    }
});