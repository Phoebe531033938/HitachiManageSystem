
/* JavaScript content from app/view/OpportunityManagement/Project_New/ProjectInfo.js in folder common */
/*
 * File: app/view/ProjectInfo.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcAgent.view.OpportunityManagement.Project_New.ProjectInfo', {
    extend: 'Ext.form.Panel',
    id:'projectinfo_new_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Checkbox',
        'Ext.field.TextArea'
    ],

    config: {
        items: [
            {
            	id:'header',
                xtype: 'toolbar',
                docked: 'top',
                title: '商机资料',
                cls:'textf',
                items: [
                    {
                    	id:'projectinfo_new_id_FH',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        text: '批核'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        text: '汇报'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        text: '邀请关注人'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        text: '跟进情况'
                    },
                    {
                    	id:'buttonMenu',
                    	text:'商机操作',
                    	xtype:'button',
                    	handler:function(button,e){
                    		var opportunity = Ext.getCmp('opportunity').getData();
                    		var ExamAble = true,loseAble = true,readAble = true;
                    		if((opportunity.OpptyStatus=='新建'||opportunity.OpptyStatus=='拒绝')&&object.getController('OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorMainCtrl').operationProfile!='Manager'){
                    			ExamAble = false;
                    			loseAble = true;
                    		}else if((opportunity.OpptyStatus!='流失'&&opportunity.OpptyStatus!='完成'&&opportunity.OpptyStatus!='申请流失')&&object.getController('OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorMainCtrl').operationProfile!='Manager'){
                    			ExamAble = true;
                    			loseAble = false;
                    		}
                    		if((opportunity.OpptyStatus=='报价'||opportunity.OpptyStatus=='跟进')&&object.getController('OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorMainCtrl').operationProfile!='Manager')
                    			readAble = false;
                    		else
                    			readAble = true;
                    		var menu = Ext.create('Ext.Menu',{
                    			minWidth:'50%',
                    			items:[{
                    				id:'opportunityExamine',
                    				xtype:'button',
                    				text:'提交商机审核',
                    				hidden:ExamAble
                    			},{
                    				xtype:'spacer'
                    			},{
                    				id:'saveOppty',
                    				xtype:'button',
                    				text:'保存商机',
                    				hidden:readAble
                    			},{
                    				xtype:'spacer'
                    			},{
                    				xtype:'button',
                    				text:'返回',
                    				handler:function(b,e){
                    					Ext.Viewport.hideMenu('right');
                    					menu.destroy();
                    				}
                    			}]
                    		});
                    		Ext.Viewport.setMenu(menu, {
                                side: 'right',
                                reveal: false
                            });
                    		Ext.Viewport.showMenu('right');
                    	}
                    },
                    {
                    	xtype:'button',
                    	id:'submitOppty',
                    	text:'提交商机信息',
                    	
                    },
                    {
                    	xtype:'hiddenfield',
                    	id:'projectinfo_new_id_XZ'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '商机资料',
                cls:'textf',
                items: [
                    {
                    	id:'Name',
                    	name:'Name',
                        xtype: 'textfield',
                        label: '商机名称',
                        labelWidth:'40%',
                        placeHolder: '请输入商机名称',
                        required:true,
                        
                    },
                    {
                        xtype: 'selectfield',
                        label: '商机类型',
                        id:'opptyCategory',
                        name:'OpptyCategory',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择商机类型',
                        required:true
                    },
                    {
                        xtype: 'selectfield',
                        label: '商机子类型',
                        id:'opptySubCategory',
                        name:'OpptySubCategory',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择商机子类型',
                        required:true
                    },
                    {
                        xtype: 'selectfield',
                        label: '商机属性',
                        id:'opptyAttribute',
                        name:'EquipmentOpptyAttribute',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择商机属性',
                        required:true
                    },
                    {
                        xtype: 'selectfield',
                        label: '合同类型',
                        id:'businessType',
                        name:'BusinessType',
                        required:true,
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择合同类型'
                    },
                    {
                        xtype: 'selectfield',
                        label: '合同属性',
                        id:'opptyContractType',
                        name:'OpptyContractType',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择合同属性',
                    },
                    {
                        xtype: 'selectfield',
                        label: '土建进度',
                        id:'opptyBuildingPhase',
                        name:'OpptyBuildingPhase',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择土建进度',
                    },
                    {
                        xtype: 'textfield',
                        label: '客户',
                        id:'account',
                        name:'Account',
                        width:'80%',
                        style:'float:left',
                        labelWidth:'50%',
                        required:true,
                        placeHolder: '请选择客户'
                    },
                    {
                    	id:'toAccount',
                    	xtype: 'button',
                    	text:'选择',
                    	margin: '9 0 0 0',
                    	style:'float:left',
                    	width:'20%',
                    },
                    {
                    	id:'accountId',
                    	name:'AccountId',
                    	xtype:'hiddenfield',
                    },
                    {
                        xtype: 'selectfield',
                        label: '客户类型',
                        id:'accountType',
                        name:'AccountType',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择客户类型',
                        required:true,
                    },
                    {
                        xtype: 'selectfield',
                        label: '客户子类型',
                        id:'accountSubType',
                        name:'AccountSubType',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择客户户子类型',
                        required:true,
                    },
                    {
                        xtype: 'selectfield',
                        label: '信息渠道',
                        id:'opptyInfoChannel',
                        name:'OpptyInfoChannel',
                        required:true,
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择信息渠道',
                        
                    },
                    {
                    	id:'organization',
                    	name:'Organization',
                        xtype: 'textfield',
                        label: '跟单组织',
                        style:'float:left',
                        labelWidth:'40%',
                        value:'当前用户部门',
                        placeHolder: '用户部门',
                        readOnly:true,
                        width:'100%',
                        required:true,
                    },
                    /*{
                    	id:'toOrganization',
                    	xtype:'button',
                    	text:'查询',
                    	margin: '9 0 0 0',
                    	style:'float:left',
                    	width:'20%'
                    },*/
                    {
                        xtype: 'textfield',
                        label: '使用单位',
                        id:'opptyFinalUser',
                        name:'OpptyFinalUser',
                        required:true,
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '选择客户后自动填充'
                    },
                    {
                        xtype: 'textfield',
                        label: '预计签约时间',
                        id:'predictSign',
                        name:'PredictSign',
                        required:true,
                        style:'float:left',
                        inputCls:'cusInfo_test',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请输入预计签约时间',
                        readOnly:true,
                        listeners:{
                        	focus:function(){
                        			initDate1('predictSign','预计签约时间');
                        	}
                        }
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '商机信息',
                cls:'textf',
                items: [
                    {
                        xtype: 'selectfield',
                        label: '商机状态',
                        labelWidth:'40%',
                        id:'opptyStatus',
                        name:'OpptyStatus',
                        placeHolder: '请选择商机状态'
                    },
                    {
                        xtype: 'selectfield',
                        label: '商机阶段',
                        labelWidth:'40%',
                        id:'opptyPhase',
                        name:'OpptyPhase',
                        placeHolder: '请选择商机阶段',
                    },
                    {
                    	id:'opptyBusinessPreapproveStatus',
                    	name:'OpptyBusinessPreapproveStatus',
                        xtype: 'selectfield',
                        label: '商务预审状态',
                        labelWidth:'40%',
                        placeHolder: '请选择商机预审状态'
                    },
                    {
                    	id:'evaluateElevatorQuantity',
                    	name:'EvaluateElevatorQuantity',
                    	xtype:'numberfield',
                    	label:'预估直梯数量',
                    	labelWidth:'40%',
                    	placeHolder:'请输入预估的直梯数量',
                    	required:true,
                    	
                    },{
                    	id:'evaluateEscalatorQuantity',
                    	name:'EvaluateEscalatorQuantity',
                    	xtype:'numberfield',
                    	label:'预估扶梯台量',
                    	labelWidth:'40%',
                    	placeHolder:'请输入预估的扶梯数量',
                    	required:true,
                    	
                    },{
                    	id:'buildingHeight',
                    	name:'BuildingHeight',
                    	xtype:'numberfield',
                    	label:'建筑高度',
                    	labelWidth:'40%',
                    	placeHolder:'请输入建筑高度',
                    	required:true,
                    	
                    },{
                    	id:'buildingLayer',
                    	name:'BuildingLayer',
                    	xtype:'numberfield',
                    	label:'建筑层数',
                    	labelWidth:'40%',
                    	placeHolder:'请输入建筑层数',
                    	required:true,
                    	
                    },
                    
                    {
                    	id:'salesRep',
                    	name:'SalesRep',
                        xtype: 'textfield',
                        label: '跟踪人员',
                        labelWidth:'40%',
                        style:'float:left',
                        width:'100%',
                        placeHolder: '请选择跟踪人员'
                    },
                    {
                    	id:'toSalesRep',
                    	xtype:'button',
                    	margin: '9 0 0 0',
                    	style:'float:left',
                    	text:'详情',
                    	hidden:true
                    },
                    {
                    	id:'salesRepId',
                    	name:'SalesRepId',
                    	xtype:'hiddenfield',
                    },
                    {
                    	id:'HQSalesRepFullName',
                    	name:'HQSalesRepFullName',
                        xtype: 'textfield',
                        label: '总部跟踪人员',                        
                        labelWidth:'50%',
                        style:'float:left',
                        width:'80%',
                        placeHolder:'请选择总部跟踪人员'
                    },
                    {
                    	id:'toHQSalesRep',
                    	xtype:'button',
                    	width:'20%',
                    	margin: '9 0 0 0',
                    	style:'float:left',
                    	text:'详情'
                    },
                    {
                    	id:'HQSalesRepId',
                    	name:'HQSalesRepId',
                    	xtype:'hiddenfield'
                    },
                    {
                    	id:'primaryRevenueAmount',
                    	name:'PrimaryRevenueAmount',
                        xtype: 'numberfield',
                        label: '项目资金(万)',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请输入项目资金(万元)',
                    },
                    {
                    	id:'frameProtocolNum',
                    	name:'FrameProtocolNum',
                        xtype: 'textfield',
                        label: '框架协议编号',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请输入框架协议编号',
                    },
                    {
                    	id:'biding',
                    	name:'Biding',
                        xtype: 'selectfield',
                        label: '是否招标',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        options:[
                                 //{text:'是',value:'是'},
                                 {text:'否',value:'否'}
                        ]
                    },{
                    	id:'agentPerformanceStatus',
                    	name:'AgentPerformanceStatus',
                    	xtype:'textfield',
                    	label:'代理商业绩状态',
                    	style:'float:left',
                    	width:'100%',
                    	labelWidth:'40%',
                    	hidden:true,
                    	readOnly:true
                    },{
                    	id:'agentPerformanceConDate',
                    	name:'AgentPerformanceConDate',
                    	xtype:'datepickerfield',
                    	label:'代理商业绩确认时间',
                    	style:'float:left',
                    	width:'100%',
                    	labelWidth:'40%',
                    	hidden:true,
                    	readOnly:true
                    },{
                    	id:'agentPerformanceSubDate',
                    	name:'AgentPerformanceSubDate',
                    	xtype:'datepickerfield',
                    	label:'代理商业绩提交时间',
                    	style:'float:left',
                    	width:'100%',
                    	labelWidth:'40%',
                    	hidden:true,
                    	readOnly:true
                    },{
                    	id:'agentPerformanceConPerson',
                    	name:'AgentPerformanceConPerson',
                    	xtype:'textfield',
                    	label:'代理商业绩确认人',
                    	style:'float:left',
                    	width:'100%',
                    	labelWidth:'40%',
                    	hidden:true,
                    	readOnly:true
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '联系人信息',
                cls:'textf',
                items: [
                    {
                    	id:'keyContactLastName',
                    	name:'KeyContactLastName',
                        xtype: 'textfield',
                        label: '姓氏',
                        width:'80%',
                        style:'float:left',
                        labelWidth:'50%',
                        placeHolder: '请选择联系人信息'
                    },
                    {
                    	id:'keyContact',
                    	xtype:'button',
                    	width:'20%',
                    	margin: '9 0 0 0',
                    	style:'float:left',
                    	text:'详细',
                    },
                    {
                    	id:'keyContactId',
                    	name:'KeyContactId',
                    	xtype:'hiddenfield'
                    },
                    {
                    	id:'keyContactFirstName',
                    	name:'KeyContactFirstName',
                        xtype: 'textfield',
                        label: '名字',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '这里显示名字'
                    },
                    {
                    	id:'keyContactDepartment',
                    	name:'KeyContactDepartment',
                        xtype: 'textfield',
                        label: '部门',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请填写部门'
                    },
                    {
                    	id:'keyContactPosition',
                    	name:'KeyContactPosition',
                        xtype: 'textfield',
                        label: '职位',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请填写职位'
                    },
                    {
                    	
                    	id:'keyContactWorkPhone',
                    	name:'KeyContactWorkPhone',
                        xtype: 'textfield',
                        label: '办公电话号码',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请填写办公电话号码'
                    },
                    {
                    	id:'keyCellularPhone',
                    	name:'KeyCellularPhone',
                        xtype: 'textfield',
                        label: '移动电话号码',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请填写移动电话号码'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '项目地址信息',
                cls:'textf',
                items: [ {
                		//具体地址XX省XX市XX区
	                    xtype: 'textfield',
	                    label: '安装地点',
	                    id:'opptyInstallSite',
	                    name:'OpptyInstallSite',
	                    required:true,
	                    labelWidth:'50%',
	                    width:'80%',
	                    style:'float:left',
	                    placeHolder: '请选择安装地点',
	                    	
                	},
                    {
                    	id:'toOpptyInstallSite',
                    	xtype:'button',
                    	text:'选择',
                    	style:'float:left',
                    	margin: '9 0 0 0',
                    	width:'20%',
                    	
                    },{
                    	id:'opptyInstallSiteObject',
                    	xtype:'hiddenfield'
                    },
                    {
                    	id:'opptyInstallSiteId',
                    	name:'OpptyInstallSiteId',
                    	xtype:'hiddenfield'
                    },
                    {
                    	id:'installSiteCompany',
                    	name:'InstallSiteCompany',
                        xtype: 'textfield',
                        label: '安装地分公司',
                        labelWidth:'50%',
                        width:'80%',
                        style:'float:left',
                        placeHolder: '请选择安装所在地分公司'
                    },
                    {
                    	id:'toInstallSiteCompany',
                    	xtype:'button',
                    	text:'详细',
                    	margin:'9 0 0 0',
                    	style:'float:left',
                    	width:'20%'
                    },
                    {
                    	id:'installSiteCompanyId',
                    	name:'InstallSiteCompanyId',
                    	xtype:'hiddenfield'
                    },
                    {
                    	id:'siteState',
                    	name:'SiteState',
                        xtype: 'textfield',
                        label: '省/直辖市',
                        style:'float:left',
                        width:'100%',
                        labelWidth:'40%',
                        placeHolder: '请选择省/直辖市',
                    },
                    {
                    	id:'siteCity',
                    	name:'SiteCity',
                        xtype: 'textfield',
                        label: '市',
                        width:'100%',
                        style:'float:left',
                        labelWidth:'40%',
                        placeHolder: '请选择市',
                    },
                    {
                    	id:'siteCounty',
                    	name:'SiteCounty',
                        xtype: 'textfield',
                        label: '区/县',
                        width:'100%',
                        style:'float:left',
                        labelWidth:'40%',
                        placeHolder: '请选择区/县',
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '日期信息',
                cls:'textf',
                items: [
                    {
                    	id:'created',
                        xtype: 'datepickerfield',
                        label: '创建日期',
                        readOnly:true,
                        labelWidth:'40%',
                        placeHolder: '创建日期',
                        value:new Date(),
                        dateFormat:'Y-m-d h:i:s',
                    },
                    {
                    	id:'opptyCloseDate',
                    	name:'OpptyCloseDate',
                        xtype: 'textfield',
                        label: '关闭日期',
                        labelWidth:'40%',
                        inputCls:'cusInfo_test',
                        placeHolder: '请选择关闭日期',
                        listeners:{
                        	focus:function(){
                        			initDate1('opptyCloseDate','关闭日期');
                        	}
                        }
                    }
                ]
            },
            {
            	id:'checkboxSet',
                xtype: 'fieldset',
                title: '大项目关注',
                cls:'textf',
                items: [
                    {
                    	id:'FDKContractFlag',
                    	name:'FDKContractFlag',
                    	xtype:'checkboxfield',
                    	label:'菲迪克合同标识',
                    	valye:'Y',
                    	labelWidth:170
                    	
                    },
                    {
                    	id:'largeCompositeProject',
                    	name:'LargeCompositeProject',
                        xtype: 'checkboxfield',
                        label: '大型综合体项目',
                        value:'Y',
                        labelWidth: 170
                    },
                    {
                    	id:'opptyInternationalHotel',
                    	name:'OpptyInternationalHotel',
                        xtype: 'checkboxfield',
                        label: '五星级酒店',
                        value:'Y',
                        labelWidth: 170
                    },
                    {
                    	id:'topBDC',
                    	name:'TopBDC',
                        xtype: 'checkboxfield',
                        label: '甲级写字楼',
                        value:'Y',
                        labelWidth: 170
                    },
                    {
                    	id:'symbolicBuilding',
                    	name:'SymbolicBuilding',
                        xtype: 'checkboxfield',
                        label: '地标性建筑',
                        value:'Y',
                        labelWidth: 170
                    },
                    {
                    	id:'luxuriousResidence',
                    	name:'LuxuriousResidence',
                        xtype: 'checkboxfield',
                        label: '高档住宅',
                        value:'Y',
                        labelWidth: 170
                    },
                    {
                    	id:'opptyImportDemand',
                    	name:'OpptyImportDemand',
                        xtype: 'checkboxfield',
                        label: '进口大部件需求',
                        value:'Y',
                        labelWidth: 170
                    },{
                    	id:'importMainEngine',
                    	name:'ImportMainEngine',
                    	xtype:'checkboxfield',
                    	label:'进口主机',
                    	value:'Y',
                    	labelWidth:170
                    },{
                    	id:'importControllingMachine',
                    	name:'ImportControllingMachine',
                    	xtype:'checkboxfield',
                    	label:'进口控制柜',
                    	value:'Y',
                    	labelWidth:170
                    },{
                    	id:'importDoorMachine',
                    	name:'ImportDoorMachine',
                    	xtype:'checkboxfield',
                    	label:'进口门机',
                    	value:'Y',
                    	labelWidth:170
                    },
                    {
                    	id:'opptyMajorProject',
                    	name:'OpptyMajorProject',
                        xtype: 'checkboxfield',
                        label: '其它',
                        value:'Y',
                        labelWidth: 170
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '客户信息',
                cls:'textf',
                items: [
                    {
                    	id:'accountKANumber',
                    	name:'AccountKANumber',
                        xtype: 'textfield',
                        label: '大客户编号',
                        
                        labelWidth:'40%',
                        placeHolder: '请输入大客户编号'
                    },
                    {
                    	id:'accountProperty',
                    	name:'AccountProperty',
                        xtype: 'selectfield',
                        label: '客户性质',
                        labelWidth:'40%',
                        placeHolder: '请选择客户性质',
                    },
                    {
                    	id:'accountAttribute',
                    	name:'AccountAttribute',
                        xtype: 'selectfield',
                        label: '客户属性',
                        labelWidth:'40%',
                        placeHolder: '请选择客户属性',
                    },
                    /*{
                    	id:'supplierOpportunity',
                        xtype: 'selectfield',
                        label: '代理商商机状态',
                        labelWidth:'40%',
                        style: 'float:left',
                        width:'100%',
                        placeHolder: '请选择代理商商机状态',
                        options:[
                                 {text:'新建',value:'新建'},
                                 {text:'已提交',value:'已提交'},
                                 {text:'已通过',value:'已通过'},
                                 {text:'已拒绝',value:'已拒绝'}
                        ]
                    },*/
                    {
                    	id:'InstallMapMark',
                    	name:'mapAddress',
                        xtype: 'textfield',
                        label: '安装地图标示',
                        style: 'float:left',
                        labelWidth: '50%',
                        width:'80%',
                        //placeHolder: '这里显示安装地点地图标示'
                    },
                    {
                    	id:'projectinfo_new_id_KHXX_AZDDDTBS',
                        xtype: 'button',
                        margin: '9 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细'
                    },
                    {
                    	id:'projectinfo_new_id_KHXX_ATJCZ_TF',
                        xtype: 'textfield',
                        label: '按条件查找',
                        style: 'float:left',
                        labelWidth: '50%',
                        width:'80%',
                        hidden: true,
                    },
                    {
                    	id:'toSameFound',
                        xtype: 'button',
                        margin: '9 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细',
                        hidden: true,
                    }
                ]
            },
            {
            	id:'loseAndExamine',
                xtype: 'fieldset',
                title: '其他信息',
                cls:'textf',
                items: [
                    {
                    	id:'opptyAgent',
                        xtype: 'textfield',
                        style: 'float:left',
                        label: '代理商',
                   	 	width:'80%',
                        labelWidth:'50%'
                    },
                    {
                    	id:'projectinfo_new_id_QTXX_DLS',
                        xtype: 'button',
                        margin: '9 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细'
                    },
                    {
                    	id:'opptyDemand',
                        xtype: 'textfield',
                        style: 'float:left',
                        label: '客户需求分析',
                        width:'80%',
                        labelWidth:'50%'
                    },
                    {
                    	id:'projectinfo_new_id_QTXX_KHXQFX',
                        xtype: 'button',
                        margin: '7 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细'
                    },
                    {
                    	id:'opptyCompetitor',
                        xtype: 'textfield',
                        style: 'float:left',
                        label: '竞争对手分析',
                        width:'80%',
                        labelWidth: '50%',
                    },
                    {
                    	id:'projectinfo_new_id_QTXX_JZDSFX',
                        xtype: 'button',
                        margin: '7 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细'
                    },
                    {
                    	id:'opptyLoseReason',
                        xtype: 'textfield',
                        style: 'float:left',
                        label: '流失原因分析',
                        width:'80%',
                        labelWidth: '50%',
                    },
                    {
                    	id:'opportunity',
                    	xtype:'hiddenfield',
                    },
                    {
                    	id:'projectinfo_new_id_QTXX_SJLSYYFX',
                        xtype: 'button',
                        margin: '7 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细'
                    },
                    {
                    	id:'opptyFile',
                        xtype: 'textfield',
                        style: 'float:left',
                        label: '附件',
                        width:'80%',
                        labelWidth: '50%',
                    },
                    {
                    	id:'projectinfo_new_id_QTXX_FJ',
                        xtype: 'button',
                        margin: '7 0 0 0',
                        padding: 0,
                        style: 'float:left',
                        width:'20%',
                        text: '详细'
                    },
                    {
                    	id:'managerSuggestion',
                        xtype: 'textareafield',
                        style: 'float:left',
                        width: '100%',
                        labelWidth: '40%',
                        label: '主管意见',
                        
                    }
                ]
            }
        ]
    }

});