(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c49c22a"],{5651:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-bordered my-4"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(t._f("date")(a.paid_date)))]),e("td",[t._v(t._s(a.id))]),e("td",[e("ul",t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.product.num)+" ")])})),0)]),e("td",{class:a.is_paid?"green":"red"},[t._v(" "+t._s(a.is_paid?"已付款":"尚未付款")+" ")]),e("td",[t._v(t._s(a.message))]),e("td",{staticClass:"text-center"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"Second group"}},[e("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.openModal(a)}}},[t._v("編輯 ")])])])])})),0)]),e("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col text-left"},[e("label",{attrs:{for:"message"}},[t._v("留言")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.message,expression:"tempOrder.message"}],staticClass:"form-control",attrs:{type:"string",id:"message",placeholder:"請輸入留言"},domProps:{value:t.tempOrder.message},on:{input:function(a){a.target.composing||t.$set(t.tempOrder,"message",a.target.value)}}})])]),t._l(t.tempOrder.products,(function(a){return e("div",{key:a.id,staticClass:"form-row"},[e("div",{staticClass:"form-group col text-left"},[e("label",{attrs:{for:"num"}},[t._v(t._s(a.product.title))]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.product.num,expression:"item.product.num"}],staticClass:"form-control",attrs:{type:"number",id:"num",placeholder:"請輸入更改數量"},domProps:{value:a.product.num},on:{input:function(e){e.target.composing||t.$set(a.product,"num",e.target.value)}}})])])}))],2)])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消 ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateOrder}},[t._v("確認 ")])])])])])]),e("Page",{attrs:{pagination:t.pagination},on:{changePage:t.getOrders}})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"150px"}},[t._v("購買日期")]),e("th",{attrs:{width:"230px"}},[t._v("訂單編號")]),e("th",{attrs:{width:"300px"}},[t._v("訂單內容")]),e("th",{attrs:{width:"150px"}},[t._v("付款狀態")]),e("th",{attrs:{width:"100px"}},[t._v("留言內容")]),e("th",{attrs:{width:"150px"}},[t._v("操作訂單")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("修改訂單")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=e("1157"),n=e.n(r),o=e("9973"),d={name:"Orders",components:{Page:o["a"]},data:function(){return{orders:[],pagination:{},tempOrder:{products:{}},isLoading:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="https://vue-course-api.hexschool.io/api/fan630/admin/orders?page=".concat(a);this.isLoading=!0,this.$http.get(e).then((function(a){t.isLoading=!1,t.orders=a.data.orders,t.pagination=a.data.pagination}))},openModal:function(t){this.tempOrder=JSON.parse(JSON.stringify(t)),n()("#orderModal").modal("show")},updateOrder:function(){var t=this,a="https://vue-course-api.hexschool.io/api/fan630/admin/order/".concat(this.tempOrder.id);this.$http.put(a,{data:this.tempOrder}).then((function(a){a.data.success?(n()("#orderModal").modal("hide"),t.getOrders()):(n()("#orderModal").modal("hide"),t.getOrders(),console.log("新增失敗"))}))}}},l=d,c=e("2877"),u=Object(c["a"])(l,s,i,!1,null,"21881358",null);a["default"]=u.exports},9973:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],r={name:"Page",data:function(){return{}},props:{pagination:Object},methods:{changePage:function(t){this.$emit("changePage",t)}}},n=r,o=e("2877"),d=Object(o["a"])(n,s,i,!1,null,"574d84de",null);a["a"]=d.exports}}]);
//# sourceMappingURL=chunk-7c49c22a.c0c06bd4.js.map