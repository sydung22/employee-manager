(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a26b29b8"],{8120:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-info"},[s("v-container",{staticClass:"px-0 py-0"},[s("v-card",{staticClass:"pb-8"},[s("h1",{staticClass:"px-5 py-7 text-center"},[t._v("Thông Tin Nhân Viên")]),s("v-row",{staticClass:"pe-5",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[this.listDetail.imgUrl?s("v-avatar",{staticClass:"mb-2",attrs:{color:"grey darken-1",size:"250"}},[s("v-img",{attrs:{"aspect-ratio":"30",src:this.listDetail.imgUrl}})],1):s("v-avatar",{staticClass:"mb-2",attrs:{color:"grey darken-1",size:"250"}},[s("v-img",{attrs:{"aspect-ratio":"30",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"}})],1),this.listDetail.firstName&&this.listDetail.lastName?s("h2",{staticClass:"black--text mt-2 mb-6"},[t._v(" "+t._s(this.listDetail.lastName)+" "+t._s(this.listDetail.firstName)+" ")]):s("h2",{staticClass:"black--text mt-2 mb-6"},[t._v("Người dùng mới")]),t._l(t.linkUser,(function(e,a){return s("v-row",{key:a,staticClass:"mt-0 ms-5",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-end px-0 mb-2",attrs:{cols:"12",sm:"2"}},[s("v-avatar",{staticClass:"mb",attrs:{color:"grey darken-1",size:"30"}},[s("v-img",{attrs:{"aspect-ratio":"30",src:e.imgUrl}})],1)],1),s("v-col",{staticClass:"text-start",attrs:{cols:"12",sm:"10"}},[s("h4",{staticClass:"primary--text"},[t._v(t._s(e.titleUrl))])])],1)}))],2),s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[s("v-form",[s("v-container",[s("v-row",[s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{staticClass:"pt-1",attrs:{counter:30,label:"Họ",required:""},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{counter:30,label:"Tên",required:""},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"E-mail",value:this.listDetail.email,required:"",readonly:""}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("div",{staticClass:"input-container"},[s("v-text-field",{attrs:{label:"Password",required:"",readonly:"",value:this.dataUserInfo.password,type:t.choose}}),s("v-icon",{staticClass:"material-icons visibility",on:{click:t.showPassword}},[t._v(t._s(t.visibility))])],1)]),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"Số điện thoại",required:""},model:{value:t.user.phoneNumber,callback:function(e){t.$set(t.user,"phoneNumber",e)},expression:"user.phoneNumber"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"Địa Chỉ",required:""},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{items:this.listRole,value:this.listDetail.role,label:"Chức Vụ",required:"",readonly:""}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{items:this.listDepartment,label:"Phòng Ban","menu-props":{top:!0,offsetY:!0},required:""},model:{value:t.user.depart_name,callback:function(e){t.$set(t.user,"depart_name",e)},expression:"user.depart_name"}})],1)],1)],1)],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[s("v-form",[s("v-container",[s("v-row",[s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{staticClass:"pt-1",attrs:{label:"Ngày Sinh",required:"",type:"date"},model:{value:t.user.birthday,callback:function(e){t.$set(t.user,"birthday",e)},expression:"user.birthday"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{items:["Nam","Nữ"],label:"Giới Tính",required:""},model:{value:t.user.gender,callback:function(e){t.$set(t.user,"gender",e)},expression:"user.gender"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"Số CMND/CCCD",required:""},model:{value:t.user.numberCard,callback:function(e){t.$set(t.user,"numberCard",e)},expression:"user.numberCard"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"Quốc Tịch",required:""},model:{value:t.user.nationality,callback:function(e){t.$set(t.user,"nationality",e)},expression:"user.nationality"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"Dân Tộc",required:""},model:{value:t.user.ethnic,callback:function(e){t.$set(t.user,"ethnic",e)},expression:"user.ethnic"}})],1),s("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{label:"Tôn Giáo",required:""},model:{value:t.user.religion,callback:function(e){t.$set(t.user,"religion",e)},expression:"user.religion"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{items:["12/12"],label:"Trình Độ Văn Hóa",required:""},model:{value:t.user.educationalLevel,callback:function(e){t.$set(t.user,"educationalLevel",e)},expression:"user.educationalLevel"}})],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{items:["Cao Đẳng","Đại Học","Cao Học"],label:"Trình Độ Học Vấn","menu-props":{top:!0,offsetY:!0},required:""},model:{value:t.user.academicLevel,callback:function(e){t.$set(t.user,"academicLevel",e)},expression:"user.academicLevel"}})],1)],1)],1)],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://www.constructionplusasia.com/wp-content/uploads/2020/05/1-03.jpg"}}),s("v-card-subtitle",{staticClass:"pb-2 pt-3",staticStyle:{"font-size":"16px"}},[t._v(" Công Ty Axon Active ")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Nhân viên lập trình VueJS")]),s("div",[t._v("Thời gian làm việc: 2 năm")])])],1),s("v-card",{staticClass:"mx-auto mt-5",attrs:{"max-width":"400"}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"http://tatgreen.vn/StoreData/images/54516463_612519319234103_3432507145357099008_o%20(1).jpg"}}),s("v-card-subtitle",{staticClass:"pb-2 pt-3",staticStyle:{"font-size":"16px"}},[t._v(" Công Ty Paradox Software ")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Nhân viên lập trình NodeJS")]),s("div",[t._v("Thời gian làm việc: 2.5 năm")])])],1)],1),s("v-btn",{ref:"buttonUpdate",staticClass:"ma-2 white--text mt-8",attrs:{color:"blue-grey"},on:{click:t.updateInfo}},[t._v(" Cập nhật thông tin "),s("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-cloud-upload ")])],1)],1)],1)],1),s("popup",{attrs:{show:t.showDialogUpdateSuccess,cancel:t.cancel,confirm:t.confirm,text:"Oke ^^",title:"Thông báo!",description:"Cập nhật thông tin thành công !!!"}}),s("popup",{attrs:{show:t.showDialogDuplicateInf,cancel:t.cancel,confirm:t.confirm,text:"Oke ^^",title:"Thông báo!",description:"Không có gì để cập nhật !!!"}})],1)},i=[],l=s("5530"),r=s("1da1"),n=(s("96cf"),s("7db0"),s("d81d"),s("c740"),s("a434"),s("3905")),o=s("2f62"),c={components:{Popup:n["a"]},name:"Infomation",data:function(){return{linkUser:[{imgUrl:"https://br.atsit.in/vi/wp-content/uploads/2021/06/anh-facebook-khong-tai-hoac-khong-hien-thi-loi-khong-the-ket-noi-bat-len-ban-khong-don-doc.png",titleUrl:"https://www.facebook.com/"},{imgUrl:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/90/96/fc/9096fc60-7d7f-b8a1-f152-882c02811ddc/AppIcon_v3-85-220-4-2x.png/1200x630bb.png",titleUrl:"https://www.google.com/intl/vi/gmail/about/"},{imgUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757__480.png",titleUrl:"https://github.com/"},{imgUrl:"https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png",titleUrl:"https://www.instagram.com/"}],listRole:[],listDepartment:[],listDetail:{},user:{},showDialogUpdateSuccess:!1,showDialogDuplicateInf:!1,dataUserInfo:{}}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a,i,l,r,n,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=JSON.parse(localStorage.getItem("employee")),a=JSON.parse(localStorage.getItem("user-info")),t.dataUserInfo=a,i=a.email,l=s,r=l.find((function(t){return t.email===i})),t.listDetail=r,console.log(t.listDetail),t.user.firstName=t.listDetail.firstName,t.user.lastName=t.listDetail.lastName,t.user.address=t.listDetail.address,t.user.depart_name=t.listDetail.depart_name,t.user.phoneNumber=t.listDetail.phoneNumber,t.user.birthday=t.listDetail.birthday,t.user.gender=t.listDetail.gender,t.user.numberCard=t.listDetail.numberCard,t.user.nationality=t.listDetail.nationality,t.user.ethnic=t.listDetail.ethnic,t.user.religion=t.listDetail.religion,t.user.educationalLevel=t.listDetail.educationalLevel,t.user.academicLevel=t.listDetail.academicLevel,n=JSON.parse(localStorage.getItem("position")),o=n.map((function(t){return t.role})),t.listRole=o,c=JSON.parse(localStorage.getItem("departments")),u=c.map((function(t){return t.depart_name})),t.listDepartment=u,console.log(t.$refs.buttonUpdate);case 28:case"end":return e.stop()}}),e)})))()},methods:{updateInfo:function(){var t=JSON.parse(localStorage.getItem("user-info")),e=JSON.parse(localStorage.getItem("employee")),s=e.findIndex((function(e){return e.email===t.email})),a=e.find((function(e){return e.email===t.email}));console.log(a),e.splice(s,1,{id:a.id,emp_ID:a.emp_ID,firstName:this.user.firstName,lastName:this.user.lastName,email:a.email,password:a.password,imgUrl:a.imgUrl,role:a.role,depart_id:a.depart_id,depart_name:this.user.depart_name,position_id:a.position_id,address:this.user.address,phoneNumber:this.user.phoneNumber,birthday:this.user.birthday,gender:this.user.gender,numberCard:this.user.numberCard,nationality:this.user.nationality,ethnic:this.user.ethnic,religion:this.user.religion,educationalLevel:this.user.educationalLevel,academicLevel:this.user.academicLevel}),localStorage.setItem("employee",JSON.stringify(e)),JSON.stringify(a)===JSON.stringify(e[s])?this.showDialogDuplicateInf=!0:(localStorage.setItem("employee",JSON.stringify(e)),this.showDialogUpdateSuccess=!0)},confirm:function(){this.showDialogUpdateSuccess=!1,this.showDialogDuplicateInf=!1},cancel:function(){console.log("test")},showPassword:function(){this.$store.dispatch("actionSetShowPassword")}},computed:Object(l["a"])({},Object(o["b"])({choose:function(t){return t.choose},visibility:function(t){return t.visibility}}))},u=c,d=(s("a207"),s("2877")),m=s("6544"),p=s.n(m),v=s("8212"),h=s("8336"),b=s("b0af"),g=s("99d9"),f=s("62ad"),C=s("a523"),x=s("4bd4"),w=s("132d"),y=s("adda"),N=s("0fd9"),D=s("b974"),_=s("8654"),k=Object(d["a"])(u,a,i,!1,null,null,null);e["default"]=k.exports;p()(k,{VAvatar:v["a"],VBtn:h["a"],VCard:b["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCol:f["a"],VContainer:C["a"],VForm:x["a"],VIcon:w["a"],VImg:y["a"],VRow:N["a"],VSelect:D["a"],VTextField:_["a"]})},a207:function(t,e,s){"use strict";s("ca19")},ca19:function(t,e,s){}}]);
//# sourceMappingURL=chunk-a26b29b8.3c01e0e6.js.map