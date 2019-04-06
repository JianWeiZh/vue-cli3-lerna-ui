(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0455f8c"],{"2bdc":function(e,a,c){"use strict";var t=function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("h-table",{attrs:{data:e.data,stripe:!0,border:!0,caption:e.caption,shadow:!0,"head-style":"default"}},[c("h-table-column",{attrs:{prop:"para",label:"参数",width:80}}),c("h-table-column",{attrs:{prop:"native",label:"是否是原生属性",width:120}}),c("h-table-column",{attrs:{prop:"desc",label:"描述",width:450}}),c("h-table-column",{attrs:{prop:"type",label:"类型",width:100}}),c("h-table-column",{attrs:{prop:"option",label:"可选值",width:300}}),c("h-table-column",{attrs:{prop:"default",label:"默认值",width:100}})],1)},o=[],n={name:"propsTable",props:{data:Array,caption:String}},l=n,i=c("2877"),s=Object(i["a"])(l,t,o,!1,null,null,null);a["a"]=s.exports},"85cf":function(e,a,c){"use strict";c.r(a);var t=function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("div",[c("h3",[e._v("基础类型")]),c("h-checkbox",{attrs:{"native-value":"One",disabled:!0},model:{value:e.checkboxBase,callback:function(a){e.checkboxBase=a},expression:"checkboxBase"}}),c("h-checkbox",{attrs:{"native-value":"Two"},model:{value:e.checkboxBase,callback:function(a){e.checkboxBase=a},expression:"checkboxBase"}}),c("h-checkbox",{attrs:{"native-value":"Three"},model:{value:e.checkboxBase,callback:function(a){e.checkboxBase=a},expression:"checkboxBase"}}),c("h3",[e._v("多选框组")]),c("h-checkbox-group",{attrs:{disabled:!0},model:{value:e.checkboxGroup,callback:function(a){e.checkboxGroup=a},expression:"checkboxGroup"}},[c("h-checkbox",{attrs:{"native-value":"One",disabled:!0}}),c("h-checkbox",{attrs:{"native-value":"Two"}}),c("h-checkbox",{attrs:{"native-value":"Three"}})],1),c("h3",[e._v("按钮式多选框组")]),c("h5",[e._v("基础样式")]),c("h-checkbox-group",{model:{value:e.checkboxBtn,callback:function(a){e.checkboxBtn=a},expression:"checkboxBtn"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Disabled",disabled:!0}})],1),c("h5",[e._v("阴影")]),c("h-checkbox-group",{attrs:{shadow:!0},model:{value:e.checkboxBtn,callback:function(a){e.checkboxBtn=a},expression:"checkboxBtn"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Disabled",disabled:!0}})],1),c("h5",[e._v("圆角类型")]),c("h-checkbox-group",{attrs:{radius:"small"},model:{value:e.checkboxRadius,callback:function(a){e.checkboxRadius=a},expression:"checkboxRadius"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Three"}})],1),c("h-checkbox-group",{attrs:{radius:"large"},model:{value:e.checkboxRadius,callback:function(a){e.checkboxRadius=a},expression:"checkboxRadius"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Three"}})],1),c("h-checkbox-group",{attrs:{radius:"circle"},model:{value:e.checkboxRadius,callback:function(a){e.checkboxRadius=a},expression:"checkboxRadius"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Three"}})],1),c("h5",[e._v("大小")]),c("h-checkbox-group",{attrs:{size:"large"},model:{value:e.checkboxSize,callback:function(a){e.checkboxSize=a},expression:"checkboxSize"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Three"}})],1),c("h-checkbox-group",{model:{value:e.checkboxSize,callback:function(a){e.checkboxSize=a},expression:"checkboxSize"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Three"}})],1),c("h-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxSize,callback:function(a){e.checkboxSize=a},expression:"checkboxSize"}},[c("h-checkbox-btn",{attrs:{"native-value":"One"}}),c("h-checkbox-btn",{attrs:{"native-value":"Two"}}),c("h-checkbox-btn",{attrs:{"native-value":"Three"}})],1),c("h3",[e._v("语义类型")]),c("h5",[e._v("基础类型")]),c("h-checkbox",{attrs:{"native-value":"Default"},model:{value:e.checkboxSemantic,callback:function(a){e.checkboxSemantic=a},expression:"checkboxSemantic"}}),c("h-checkbox",{attrs:{"native-value":"Primary",semantic:"primary"},model:{value:e.checkboxSemantic,callback:function(a){e.checkboxSemantic=a},expression:"checkboxSemantic"}}),c("h-checkbox",{attrs:{"native-value":"Success",semantic:"success"},model:{value:e.checkboxSemantic,callback:function(a){e.checkboxSemantic=a},expression:"checkboxSemantic"}}),c("h-checkbox",{attrs:{"native-value":"Info",semantic:"info"},model:{value:e.checkboxSemantic,callback:function(a){e.checkboxSemantic=a},expression:"checkboxSemantic"}}),c("h-checkbox",{attrs:{"native-value":"Warning",semantic:"warning"},model:{value:e.checkboxSemantic,callback:function(a){e.checkboxSemantic=a},expression:"checkboxSemantic"}}),c("h-checkbox",{attrs:{"native-value":"Danger",semantic:"danger"},model:{value:e.checkboxSemantic,callback:function(a){e.checkboxSemantic=a},expression:"checkboxSemantic"}}),c("h5",[e._v("按钮类型")]),c("h-checkbox-group",{model:{value:e.checkboxBtnGroup,callback:function(a){e.checkboxBtnGroup=a},expression:"checkboxBtnGroup"}},[c("h-checkbox-btn",{attrs:{"native-value":"Default"}}),c("h-checkbox-btn",{attrs:{"native-value":"Primary",semantic:"primary"}}),c("h-checkbox-btn",{attrs:{"native-value":"Info",semantic:"info"}}),c("h-checkbox-btn",{attrs:{"native-value":"Success",semantic:"success"}}),c("h-checkbox-btn",{attrs:{"native-value":"Warning",semantic:"warning"}}),c("h-checkbox-btn",{attrs:{"native-value":"Danger",semantic:"danger",icon:"fa fa-spinner fa-spin"}})],1),c("h3",[e._v("参数示例")]),c("props-table",{attrs:{data:e.props,caption:"多选框参数"}}),c("props-table",{attrs:{data:e.groupProps,caption:"多选框组参数"}}),c("props-table",{attrs:{data:e.groupEvents,caption:"多选框组事件"}})],1)},o=[],n=c("2bdc"),l={name:"checkbox",components:{propsTable:n["a"]},data:function(){return{checkboxBase:["One"],checkboxGroup:["One"],checkboxBtn:["One"],checkboxRadius:["One"],checkboxSize:["One"],checkboxSemantic:["Default"],checkboxBtnGroup:["Default"],props:[{para:"v-model",native:"false",desc:"Checkbox的绑定值",type:"Array",option:"-",default:"-"},{para:"native-value",native:"true",desc:" Checkbox的原生value属性",type:"String/Number/Boolean",option:"-",default:"-"},{para:"disabled",native:"true",desc:"Checkbox的原生disabled属性",type:"Boolean",option:"false、true",default:"false"},{para:"semantic",native:"false",desc:"语义类型",type:"String",option:"primary、success、info、warning、danger、text",default:"-"},{para:"icon",native:"false",desc:"图标(推荐使用font-awesome的图标库)",type:"String",option:"-",default:"-"}],groupProps:[{para:"v-model",native:"false",desc:"Checkbox的绑定值",type:"Array",option:"-",default:"-"},{para:"disabled",native:"true",desc:"Checkbox的原生disabled属性",type:"Boolean",option:"false、true",default:"false"},{para:"radius",native:"false",desc:"圆角(按钮式单选框组有效)",type:"String",option:"small、large、circle",default:"-"},{para:"size",native:"false",desc:"尺寸(按钮式单选框组有效)",type:"String",option:"small、large",default:"-"},{para:"shadow",native:"false",desc:"阴影",type:"Boolean",option:"false、true",default:"false"}],groupEvents:[{para:"change",native:"false",desc:"v-model值变化监听事件",type:"Function(newValue)",option:"-",default:"-"}]}}},i=l,s=c("2877"),h=Object(s["a"])(i,t,o,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-a0455f8c.58ba5072.js.map