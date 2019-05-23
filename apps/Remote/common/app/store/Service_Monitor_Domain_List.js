/*
 * File: app/store/Service_Monitor_Domain_List.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.store.Service_Monitor_Domain_List', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Service_Monitor_Domain_List',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                idProperty: 'agree_num',
                rootProperty: 'data'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreBeforeLoad',
                event: 'beforeload'
            }
        ],
        fields: [
            {
                name: 'account_name'
            },
            {
                name: 'domain_name'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/rmonitor/getDomainListByBranch.do';
        if(this.parm!=='') {
            url = url + '?company=' + this.parm;
        }
        store.getProxy().setUrl(url);
        console.log(url);
    },

    loadDat: function(onSuccess, onFailure, parm) {
        // 售后->实时监控->区域->分公司->楼盘+合同
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            this.setData([
                {agree_num:'AH000001', domain_name:'广东省技监局'},
                {agree_num:'AH000002', domain_name:'广东省技监局'},
                {agree_num:'AH999999', domain_name:'逸翠湾'},
            ]);
            onSuccess();
        }
    }

});