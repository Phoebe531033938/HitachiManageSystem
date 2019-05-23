/*
 * File: app/view/MyPanel34.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.install.installSearch.InstallAllSerach', {
   extend: 'Ext.Panel',
   id:'installAllSerach',
   height:'100%',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Spacer'
    ],

    config: {
        margin: '0 auto',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '安装节点查询',
                items: [
                    {
                        xtype: 'button',
                        ui:'back',
                        text: '返回',
                       id:'BackSearch'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        margin: '0 auto',
                        title: '',
                        items: [
                            {
                            	xtype:'selectfield',
                            	label:'查询方式',
                            	id:'Choice_Search',
                            	labelWidth:'40%',
                            	options:[
                            	        {text:'安装数据查询',value:'安装数据查询'},
                            	        {text:'排产数据查询',value:'排产数据查询'},
                            	        {text:'箱头数据查询',value:'箱头数据查询'}
                            	        ]
                            },
                            {
                                xtype: 'textfield',
                                label: '监理姓名',
                                id:'int_user',
                                labelWidth: '40%',
                                placeHolder: '请输入监理姓名',
                                value:'',
                                listeners:{
                                	change:function(){
                                		var int_user=Ext.getCmp('int_user').getValue();
                                		var ebs_user=Ext.getCmp('ebs_user');
                                		var fac_user=Ext.getCmp('fac_user');
                                		if(int_user!=''){
                                			ebs_user.setReadOnly(true);
                                			fac_user.setReadOnly(true);
                                			ebs_user.setValue('');
                                			fac_user.setValue('');
                                		}else{
                                			ebs_user.setReadOnly(false);
                                			fac_user.setReadOnly(false);
                                		}
                                	}
                                }
                            },
                            {
                                xtype: 'textfield',
                                label: '调试员姓名',
                                id:'ebs_user',
                                labelWidth: '40%',
                                placeHolder: '请输入调试员姓名',
                                value:'',
                                listeners:{
                                	change:function(){
                                		var int_user=Ext.getCmp('int_user');
                                		var ebs_user=Ext.getCmp('ebs_user').getValue();
                                		var fac_user=Ext.getCmp('fac_user');
                                		if(ebs_user!=''){
                                			int_user.setReadOnly(true);
                                			fac_user.setReadOnly(true);
                                			int_user.setValue('');
                                			fac_user.setValue('');
                                		}else{
                                			int_user.setReadOnly(false);
                                			fac_user.setReadOnly(false);
                                		}
                                	}
                                }
                            },
							{
                                xtype: 'textfield',
                                label: '厂检员姓名',
                                id:'fac_user',
                                labelWidth: '40%',
                                placeHolder: '请输入厂检员姓名',
                                value:'',
                                listeners:{
                                	change:function(){
                                		var int_user=Ext.getCmp('int_user');
                                		var ebs_user=Ext.getCmp('ebs_user');
                                		var fac_user=Ext.getCmp('fac_user').getValue();
                                		if(fac_user!=''){
                                			int_user.setReadOnly(true);
                                			ebs_user.setReadOnly(true);
                                			int_user.setValue('');
                                			ebs_user.setValue('');
                                		}else{
                                			int_user.setReadOnly(false);
                                			ebs_user.setReadOnly(false);
                                		}
                                	}
                                }
                            },
							{
                                xtype: 'textfield',
                                label: '合同号',
                                id:'encontact_number',
                                labelWidth: '40%',
                                placeHolder: '请输入完整合同号',
                                value:''
                            },
							{
                                xtype: 'textfield',
                                label: '工号',
                                id:'elevator_number',
                                labelWidth: '40%',
                                placeHolder: '请输入完整工号',
                                value:''
                            },
                            {
                                xtype: 'textfield',
                                label: '箱头号',
                                id:'box_number',
                                hidden:true,
                                labelWidth: '40%',
                                placeHolder: '请输入箱头号',
                                value:''
                            },
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        margin: '15 0',
                                        width: '90%',
                                        text: '搜索',
                                        id:'searchAll_beginning',
                                    },
                                    {
                                        xtype: 'spacer'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});