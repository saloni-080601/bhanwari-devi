(this["webpackJsonpmeraki-web"]=this["webpackJsonpmeraki-web"]||[]).push([[0],{131:function(e,t,a){e.exports=a(354)},199:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),l=a(31),i=a(6),o=a(21),u=a(128),d="/",m="/login",E="/class",f="/course",p="/course/:courseId",b="/exercise/:exerciseId",v="ON_USER_SIGN_INTENT",x="ON_USER_SIGN_INTENT_RESOLVED",h="ON_USER_SIGN_INTENT_REJECTED",g="ON_LOGOUT_INTENT",O=function(e){return{type:v,data:e}},N=function(e){return{type:x,data:e}},j=function(e){return{type:h,error:e}},C=function(){return{type:g}};var _=function(e){return function(t){return function(a){if(a.type===x){var n=t(a),r=e.getState().User;return localStorage.setItem("__AUTH__",JSON.stringify(r)),n}if(a.type===g){var c=t(a);return localStorage.removeItem("__AUTH__"),c}return t(a)}}},k=a(10),S=a.n(k),T=a(9),w=a(4),y=a(20),I=a.n(y),L="GET",A="POST",D="DELETE",U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=new Headers;if(!e)return a;var n={"Content-Type":"application/json",Authorization:e};return t?Object(w.a)(Object(w.a)({},n),t):n};var R=function(e,t){return I()({url:"".concat("https://dev-api.merakilearn.org","/users/auth/google"),method:A,headers:U(t),data:{idToken:e.idToken,mode:"web"}})},F=S.a.mark(q),G=S.a.mark(Y),H=S.a.mark(B);function q(e){var t,a,n;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.data,r.next=3,Object(T.b)(R,t);case 3:if(200!==(a=r.sent).status){r.next=10;break}return n=Object(w.a)(Object(w.a)({},a.data),{},{isAuthenticated:!0}),r.next=8,Object(T.d)(N(n));case 8:r.next=12;break;case 10:return r.next=12,Object(T.d)(j(a));case 12:case"end":return r.stop()}}),F)}function Y(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.location.pathname=m;case 2:case"end":return e.stop()}}),G)}function B(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.f)(v,q);case 2:return e.next=4,Object(T.f)(g,Y);case 4:case"end":return e.stop()}}),H)}var M="GET_CLASSES_INTENT",P="GET_CLASSES_INTENT_RESOLVED",z="GET_CLASSES_INTENT_REJECTED",J="GET_CREATE_CLASS_INTENT",V="GET_CREATE_CLASS_INTENT_RESOLVED",Z="GET_CREATE_CLASS_INTENT_REJECTED",W=function(e){return{type:M,data:e}},X=function(e){return{type:P,data:e}},$=function(e){return{type:z,error:e}},K=function(e){return{type:J,data:e}},Q=function(e){return{type:V,data:e}},ee=function(e){return{type:Z,error:e}},te={UNAUTHORIZED:[401],FORBIDDEN:[403],OPERATION_FAILED:[400,404,500,502],SUCCESS:[200,201,202]},ae=S.a.mark((function e(t,a){var n,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.e)((function(e){return e.User.data.token}));case 3:n=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,Object(T.d)(C());case 10:return e.abrupt("return");case 11:return e.prev=11,e.next=14,Object(T.b)(t,a,n);case 14:if(r=e.sent,!te.SUCCESS.includes(r.status)){e.next=17;break}return e.abrupt("return",r);case 17:e.next=31;break;case 19:if(e.prev=19,e.t1=e.catch(11),c=e.t1.response,!te.OPERATION_FAILED.includes(c.status)){e.next=26;break}return e.abrupt("return",c);case 26:if(!te.FORBIDDEN.includes(c.status)){e.next=30;break}return e.next=29,Object(T.d)(C());case 29:return e.abrupt("return",e.sent);case 30:return e.abrupt("return",{status:503,message:"Something went wrong"});case 31:case"end":return e.stop()}}),e,null,[[0,6],[11,19]])})),ne=function(e,t){return I()({url:"".concat("https://dev-api.merakilearn.org","/classes"),method:L,headers:U(t,{platform:"web"})})},re=function(e,t){return I()({url:"".concat("https://dev-api.merakilearn.org","/classes"),method:A,headers:U(t),data:Object(w.a)({},e)})},ce=a(28),se=S.a.mark(oe),le=S.a.mark(ue),ie=S.a.mark(de);function oe(e){var t,a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.data,n.next=3,Object(T.b)(ae,re,t);case 3:if(!(a=n.sent)||!te.SUCCESS.includes(a.status)){n.next=10;break}return n.next=7,Object(T.d)(Q(a.data));case 7:ce.a.success("You successfully created a class.",{position:ce.a.POSITION.BOTTOM_RIGHT}),n.next=13;break;case 10:return n.next=12,Object(T.d)(ee(a));case 12:alert("Something went wrong with error status: ".concat(a.status," ").concat(a.message));case 13:case"end":return n.stop()}}),se)}function ue(e){var t,a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.data,n.next=3,Object(T.b)(ae,ne,t);case 3:if(!(a=n.sent)||!te.SUCCESS.includes(a.status)){n.next=9;break}return n.next=7,Object(T.d)(X(a.data));case 7:n.next=11;break;case 9:return n.next=11,Object(T.d)($(a));case 11:case"end":return n.stop()}}),le)}function de(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.f)(M,ue);case 2:return e.next=4,Object(T.f)(J,oe);case 4:case"end":return e.stop()}}),ie)}var me="GET_COURSES_INTENT",Ee="GET_COURSES_INTENT_RESOLVED",fe="GET_COURSES_INTENT_REJECTED",pe="GET_COURSE_CONTENT_INTENT",be="GET_COURSE_CONTENT_INTENT_RESOLVED",ve="GET_COURSE_CONTENT_INTENT_REJECTED",xe="UPDATE_SELECTED_EXERCISE",he=function(e){return{type:me,data:e}},ge=function(e){return{type:Ee,data:e}},Oe=function(e){return{type:fe,error:e}},Ne=function(e){return{type:pe,data:e}},je=function(e){return{type:be,data:e}},Ce=function(e){return{type:ve,error:e}},_e=function(e){return{type:xe,data:e}},ke=a(7),Se=a.n(ke),Te=function(e){var t=Se()(e,"course",{}).exercises;return{exerciseList:(void 0===t?[]:t).map((function(e){var t=null;return e.childExercises&&(t=e.childExercises.map((function(t){return"string"===typeof t.content&&(t.content=[{type:"markdown",value:e.content}]),{content:t.content,githubLink:t.github_link,id:t.id,name:t.name,slug:t.slug}}))),"string"===typeof e.content&&(e.content=[{type:"markdown",value:e.content}]),{content:e.content,githubLink:e.github_link,id:e.id,name:e.name,slug:e.slug,childExercises:t}}))}},we=function(){return I()({url:"".concat("https://dev-api.merakilearn.org","/courses"),method:L})},ye=function(e){var t=e.courseId;return I()({url:"".concat("https://dev-api.merakilearn.org","/courses/").concat(t,"/exercises"),method:L})},Ie=S.a.mark(De),Le=S.a.mark(Ue),Ae=S.a.mark(Re);function De(e){var t,a,n;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.data,r.next=3,Object(T.b)(we,t);case 3:if(!(a=r.sent)||!te.SUCCESS.includes(a.status)){r.next=10;break}return c=a.data,n={allCourses:c.map((function(e){return{id:e.id,name:e.name,logo:e.logo,description:e.short_description}}))},r.next=8,Object(T.d)(ge(n));case 8:r.next=13;break;case 10:return r.next=12,Object(T.d)(Oe(a));case 12:alert("Something went wrong with error status: ".concat(a.status," ").concat(a.message));case 13:case"end":return r.stop()}var c}),Ie)}function Ue(e){var t,a,n;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.data,r.next=3,Object(T.b)(ye,t);case 3:if(!(a=r.sent)||!te.SUCCESS.includes(a.status)){r.next=10;break}return n=Te(a.data),r.next=8,Object(T.d)(je(n));case 8:r.next=13;break;case 10:return r.next=12,Object(T.d)(Ce(a));case 12:alert("Something went wrong with error status: ".concat(a.status," ").concat(a.message));case 13:case"end":return r.stop()}}),Le)}function Re(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.f)(me,De);case 2:return e.next=4,Object(T.f)(pe,Ue);case 4:case"end":return e.stop()}}),Ae)}var Fe=S.a.mark(Ge);function Ge(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.c)(B),Object(T.c)(de),Object(T.c)(Re)]);case 2:case"end":return e.stop()}}),Fe)}var He=a(127),qe=a(120),Ye="RESET_APP",Be={loading:!1,error:!1,data:null},Me={loading:!1,error:!1,data:null,allClasses:{loading:!1,error:!1,data:null}},Pe={loading:!1,error:!1,data:null,courseContent:{loading:!1,error:!1,data:null},selectedExercise:{exercise:null,parentExercise:null,index:null,subExerciseIndex:null}},ze=Object(qe.a)(),Je=Object(o.c)({User:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(w.a)(Object(w.a)({},e),{},{loading:!0,error:!1,data:null});case x:return Object(w.a)(Object(w.a)({},e),{},{loading:!1,error:!1,data:t.data});case h:return Object(w.a)(Object(w.a)({},e),{},{loading:!1,error:t.error,data:null});default:return e}},Class:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(w.a)(Object(w.a)({},e),{},{allClasses:{loading:!0,error:!1,data:null}});case P:return Object(w.a)(Object(w.a)({},e),{},{allClasses:{loading:!1,error:!1,data:t.data}});case z:return Object(w.a)(Object(w.a)({},e),{},{allClasses:{loading:!1,error:t.error,data:null}});case J:return Object(w.a)(Object(w.a)({},e),{},{loading:!0,error:!1,data:null});case V:return Object(w.a)(Object(w.a)({},e),{},{loading:!1,error:!1,data:t.data});case Z:return Object(w.a)(Object(w.a)({},e),{},{loading:!1,error:t.error,data:null});default:return e}},Course:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(w.a)(Object(w.a)({},e),{},{loading:!0,error:!1,data:null});case Ee:return Object(w.a)(Object(w.a)({},e),{},{loading:!1,error:!1,data:t.data});case fe:return Object(w.a)(Object(w.a)({},e),{},{loading:!1,error:t.error,data:null});case pe:return Object(w.a)(Object(w.a)({},e),{},{courseContent:{loading:!0,error:!1,data:null}});case be:return Object(w.a)(Object(w.a)({},e),{},{courseContent:{loading:!1,error:!1,data:t.data}});case ve:return Object(w.a)(Object(w.a)({},e),{},{courseContent:{loading:!1,error:t.error,data:null}});case xe:return Object(w.a)(Object(w.a)({},e),{},{selectedExercise:t.data});default:return e}},router:Object(He.a)(ze)}),Ve=function(e,t){return t.type===Ye&&(e=void 0),Je(e,t)},Ze=o.d,We=function(){var e=Object(u.a)(),t=Object(o.e)(Ve,function(){var e=localStorage.getItem("__AUTH__");if(!e)return{};try{return{User:JSON.parse(e)}}catch(t){return{}}}(),Ze(Object(o.a)(e,_)));return e.run(Ge),t},Xe=(a(199),a(11)),$e=a(129),Ke=function(e){var t=e.user,a=void 0===t?{}:t,n=e.component,c=Object($e.a)(e,["user","component"]);return r.a.createElement(Xe.b,Object.assign({},c,{render:function(e){return a&&a.isAuthenticated?r.a.createElement(n,e):r.a.createElement(Xe.a,{to:{pathname:m,state:{from:e.location}}})}}))},Qe=Object(Xe.i)(Object(i.c)((function(e){return{user:e.User.data}}))(Ke)),et=a(121),tt=a.n(et);a(200);var at=function(){var e=Object(i.d)(),t=Object(i.e)((function(e){return e.User})),a=t.loading,n=t.data;return n&&n.isAuthenticated?r.a.createElement(Xe.a,{to:f}):r.a.createElement("div",{className:"ng-login"},r.a.createElement("div",{className:"logo"}),a?"...":r.a.createElement(tt.a,{clientId:"34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com",buttonText:"Login/Sign Up",onSuccess:function(t){var a=t.getBasicProfile(),n=t.getAuthResponse().id_token,r={id:a.getId(),name:a.getName(),imageUrl:a.getImageUrl(),email:a.getEmail(),idToken:n};e(O(r))},onFailure:function(e){console.log("onGoogle login fail",e)},cookiePolicy:"single_host_origin",className:"google-login"}))},nt=a(16),rt=a(122),ct=a(22),st=a.n(ct),lt="start_time",it="end_time",ot="class_start_time",ut="class_end_time",dt=(a(202),function(e){var t=e.className,a=void 0===t?"":t,n=e.pageLoader,c=void 0!==n&&n;return r.a.createElement("div",{className:"".concat(a," ").concat(c?"ng-page-loader":"loader")},r.a.createElement("div",{className:"idsEllipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))});a(203);var mt=function(){var e=Object(i.d)(),t=Object(i.e)((function(e){return e.User})),a=Object(n.useState)(st()().format("YYYY-MM-DD")),c=Object(nt.a)(a,2),s=c[0],l=c[1],o=Object(i.e)((function(e){return e.Class})).loading,u=t.data.user.rolesList,d=u.indexOf("classAdmin")>-1||u.indexOf("dumbeldore")>-1,m=Object(n.useState)([]),E=Object(nt.a)(m,2),f=E[0],p=E[1];return Object(n.useEffect)((function(){I()({method:L,url:"".concat("https://dev-api.merakilearn.org","/apiDocs/pathways/courses"),headers:{accept:"application/json",Authorization:t.data.token}}).then((function(e){p(e.data.courses)}))}),[]),r.a.createElement("div",{className:"ng-create-class"},r.a.createElement("h2",{className:"title"},"Create A Class "),r.a.createElement("form",{className:"form",onSubmit:function(t){t&&t.preventDefault();var a,n=new FormData(t.target),r={category_id:3},c=Object(rt.a)(n.entries());try{for(c.s();!(a=c.n()).done;){var s=Object(nt.a)(a.value,2),l=s[0],i=s[1];i&&(r[l]=i)}}catch(o){c.e(o)}finally{c.f()}!function(t){var a=st()("".concat(t[lt]," ").concat(t[ot])),n=st()("".concat(t[lt]," ").concat(t[ut]));if(a.valueOf()>n.valueOf())return alert("Class end time must be later than class start time."),document.getElementById(ut).focus();delete t[ut],delete t[ot],t[lt]="".concat(st()(a).format("YYYY-MM-DDTHH:mm:ss"),"Z"),t[it]="".concat(st()(n).format("YYYY-MM-DDTHH:mm:ss"),"Z"),e(K(t))}(r)}},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{className:"input-field",type:"text",name:"title",id:"title",required:!0,"aria-required":!0}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",rows:"10",id:"description",className:"textarea-field",required:!0,"aria-required":!0}),d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"facilitator_name"},"Facilitator Name"),r.a.createElement("input",{className:"input-field",type:"text",name:"facilitator_name",id:"facilitator_name",required:!0,"aria-required":!0}),r.a.createElement("label",{htmlFor:"facilitator_email"},"Facilitator Email"),r.a.createElement("input",{className:"input-field",type:"email",name:"facilitator_email",id:"facilitator_email",required:!0,"aria-required":!0})),r.a.createElement("label",{htmlFor:"start_time"},"Date"),r.a.createElement("input",{className:"input-field input-field--short",type:"date",name:"start_time",value:s,onChange:function(e){l(e.target.value)},id:"start_time",required:!0,"aria-required":!0}),r.a.createElement("label",{htmlFor:"class_start_time"},"Start Time"),r.a.createElement("input",{className:"input-field input-field--short",type:"time",name:"class_start_time",id:"class_start_time",required:!0,"aria-required":!0}),r.a.createElement("label",{htmlFor:"class_end_time"},"End Time"),r.a.createElement("input",{className:"input-field input-field--short",type:"time",name:"class_end_time",id:"class_end_time",required:!0,"aria-required":!0}),r.a.createElement("label",{htmlFor:"lang"},"Select Language"),r.a.createElement("select",{className:"create-class-select",name:"lang",id:"name",required:!0,"aria-required":!0},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"hi",selected:!0},"Hindi"),r.a.createElement("option",{value:"te"},"Telugu"),r.a.createElement("option",{value:"ta"},"Tamil")),r.a.createElement("label",{htmlFor:"type"},"Select Class Type"),r.a.createElement("select",{className:"create-class-select",name:"type",id:"type",required:!0,"aria-required":!0},r.a.createElement("option",{value:"workshop"},"Workshop"),r.a.createElement("option",{value:"doubt_class",selected:!0},"Doubt Class")),r.a.createElement("label",{htmlFor:"course_id"},"Select Course"),r.a.createElement("select",{className:"create-class-select",name:"course_id",id:"course_id"},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select a course from options below"),f.map((function(e,t){return r.a.createElement("option",{key:t,value:e.id},e.name)}))),r.a.createElement("button",{type:"submit",className:"submit",disabled:o},o?r.a.createElement(dt,null):"CREATE CLASS")))},Et=(a(204),a(205),a(206),function(e){var t=Object(n.useRef)(null),a=e.onClose;return Object(n.useEffect)((function(){var e=function(e){document.getElementById("main-modal").contains(e.target)||a&&a()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[a]),r.a.createElement("div",{className:"modalBackground ".concat(e.backGroundClassName)},r.a.createElement("div",{id:"main-modal",className:"modal ".concat(e.className),ref:t},r.a.createElement("i",{className:"zmdi zmdi-close close ".concat(e.closeStyle),onClick:function(){a&&a()}}),e.children))});Et.defaultProps={className:"",backGroundClassName:"",closeStyle:""};var ft=Et;ce.a.configure();var pt=function(e){var t=r.a.useState(!1),a=Object(nt.a)(t,2),n=a[0],c=a[1],s=r.a.useState(0),l=Object(nt.a)(s,2),o=l[0],u=l[1],d=Object(i.e)((function(e){return e.User})),m=e.item,E=e.index,f=m.start_time&&m.start_time.replace("Z",""),p=m.end_time&&m.end_time.replace("Z",""),b={hi:"Hindi",te:"Telugu",en:"English",ta:"Tamil",doubt_class:"Doubt Class",workshop:"Workshop"},v=function(e){u(e),c(!n)},x=d.data.user.rolesList,h=!1;x.map((function(e){h="classAdmin"===e||"dumbeldore"===e}));var g=function(t){return c(!n),I()({method:D,url:"".concat("https://dev-api.merakilearn.org","/apiDocs/classes/").concat(t),headers:{accept:"application/json",Authorization:d.data.token}}).then((function(){ce.a.success(" Deleted the class successfully",{position:ce.a.POSITION.BOTTOM_RIGHT,autoClose:5e3}),e.deleteItemIDFunction(t)}))};return r.a.createElement("div",{key:E,className:"class-card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-heading"},r.a.createElement("div",{className:"title"},m.title),r.a.createElement("div",{className:"class-type"},b[m.type])),r.a.createElement("div",{className:"class-detail"},r.a.createElement("p",null,"Facilitator Name : ",m.facilitator.name," "),r.a.createElement("p",null,"Language : ",b[m.lang]," "),r.a.createElement("p",null,"Date:",st()(f).format("DD-MM-YYYY")," "),r.a.createElement("p",null,"Time:",st()(f).format("hh:mm a")," -"," ",st()(p).format("hh:mm a"))),m.facilitator.email===d.data.user.email||h?r.a.createElement("button",{className:"delete-button",onClick:function(){v(m.id)}},"Delete"):null,n?r.a.createElement(ft,{onClose:function(){return v()},className:"confirmation-massage"},r.a.createElement("h2",null,"Are you sure you want to delete this class?"),r.a.createElement("div",{className:"wrap"},r.a.createElement("button",{onClick:function(){return g(o)},className:"delete-btn"},"Yes"),r.a.createElement("button",{onClick:function(){c(!1)},className:"cancel-btn"},"Cancel"))):null))};a(89);var bt=function(e){var t=Object(i.d)(),a=Object(i.e)((function(e){return e.Class.allClasses})),c=a.loading,s=a.data,l=void 0===s?[]:s,o=Object(n.useState)(0),u=Object(nt.a)(o,2),d=u[0],m=u[1];if(Object(n.useEffect)((function(){t(W())}),[t,e.isShow,d]),c)return r.a.createElement(dt,{pageLoader:!0});var E=function(e){m(e)};return r.a.createElement("div",null,r.a.createElement("div",{className:"ng-upcoming-class"},l&&l.length>0?l.map((function(e,t){return r.a.createElement(pt,{item:e,key:t,deleteItemIDFunction:E})})):r.a.createElement("div",{className:"message"},r.a.createElement("h2",null,"No Classes Today"))))};var vt=function(){var e=r.a.useState(!1),t=Object(nt.a)(e,2),a=t[0],n=t[1],c=function(){n(!a)};return r.a.createElement("div",null,r.a.createElement("button",{className:"create-class-button",onClick:c},"CREATE A CLASS"),r.a.createElement(bt,{isShow:a}),a?r.a.createElement(ft,{onClose:function(){return c()}},r.a.createElement(mt,null)):null)},xt=["#FFA4A4","#A4C5FF","#CBE0C4","#B7A4FF","#A4C5EE","#CBE0B4","#FFA4C4","#B7A4GG"];a(207);var ht=function(e){var t=e.course,a=e.index,n=xt[a%7];return r.a.createElement("a",{className:"ng-course-card",href:"".concat(f,"/").concat(t.id,"?name=").concat(t.name),key:a},r.a.createElement("div",{className:"upper-section",style:{background:n}},r.a.createElement("img",{src:t.logo,alt:"",className:"logo"})),r.a.createElement("div",{className:"bottom-section"},r.a.createElement("div",{className:"title"},t.name)))},gt=(a(208),function(e){var t=e.list,a=e.title;return t&&t.length?r.a.createElement("div",{className:"ng-course-list"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"cards"},t.map((function(e,t){return r.a.createElement(ht,{key:"".concat(e.id,"-").concat(t),course:e,index:t})})))):""});a(209);var Ot=function(e){return r.a.createElement("div",{className:"ng-search"},r.a.createElement("input",{type:"text",placeholder:"Search for a course",onChange:e.onChange,value:e.value}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-search"})))};a(210);var Nt=function(){var e,t=Object(i.d)(),a=Object(i.e)((function(e){return e.Course})),c=a.loading,s=a.data,l=Object(n.useState)(""),o=Object(nt.a)(l,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){t(he())}),[t]),c?r.a.createElement(dt,{pageLoader:!0}):(s&&(e=s.allCourses.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}))),r.a.createElement("div",null,r.a.createElement(Ot,{onChange:function(e){e.preventDefault(),d(e.target.value)},value:u}),u.length>0?r.a.createElement("h1",{className:"ng-course"},r.a.createElement(gt,{list:e,title:"Aap inn courses ko search kiya hai"})):r.a.createElement("h1",{className:"ng-course"},r.a.createElement(gt,{list:Se()(s,"enrolledCourses"),title:"Aap in courses mein enrolled hai"}),r.a.createElement(gt,{list:Se()(s,"allCourses"),title:"Aap yeh courses mein enroll kar sakte hai"}))))},jt=(a(211),window.localStorage.getItem("lastExerciseUrl")),Ct=window.localStorage.getItem("exerciseName");var _t=function(){return jt&&Ct?r.a.createElement("div",{className:"stored-exercise"},"Continue where you left off..",r.a.createElement("span",null,r.a.createElement("a",{className:"exercise-url",href:jt},Ct))):null};a(212);var kt=function(){return r.a.createElement("div",{className:"ng-course-container"},r.a.createElement("h2",null,"Hello, There"),r.a.createElement(_t,null),r.a.createElement(Nt,null))},St=(a(213),function(e){var t=e.className,a=void 0===t?"":t,n=e.left,c=e.onClick;return r.a.createElement("div",{className:"ng-arrow ".concat(a," ").concat(n&&"ng-left"),onClick:c})}),Tt=function(){var e=Object(i.d)(),t=Object(i.e)((function(e){return e.Course})),a=t.courseContent.data,n=t.selectedExercise,c=Se()(n,"index")===Se()(a,"exerciseList.length")-1,s=Se()(n,"parentExercise.childExercises.length")||Se()(n,"exercise.childExercises.length"),l=(0===n.subExerciseIndex||n.subExerciseIndex)&&n.subExerciseIndex===Se()(n,"parentExercise.childExercises.length")-1;if(c&&!s||c&&s&&l)return r.a.createElement("div",null);return r.a.createElement(St,{onClick:function(){var t=n.exercise,r=n.index,c=n.subExerciseIndex;if(0!==c&&!c||l)if(!c&&t.childExercises){var s=Se()(a,"exerciseList[".concat(r,"]")),i=s.childExercises[0];e(_e({exercise:i,parentExercise:s,index:r,subExerciseIndex:0}))}else{var o=r+1,u=Se()(a,"exerciseList[".concat(o,"]"));e(_e({exercise:u,index:o}))}else{var d=Se()(a,"exerciseList[".concat(r,"]")),m=c+1,E=d.childExercises[m];e(_e({exercise:E,parentExercise:d,index:r,subExerciseIndex:m}))}}})},wt=a(123),yt=a.n(wt),It=a(124),Lt=a.n(It),At=a(76),Dt=(a(347),Lt()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[]})),Ut=function(e){var t=e.data;return"markdown"===t.type?r.a.createElement(yt.a,{source:t.value,escapeHtml:!1,astPlugins:[Dt]}):"python"===t.type?r.a.createElement("code",{className:"language-python code-block"}," ",r.a.createElement("br",null),Se()(t,"value.code")," ",r.a.createElement("br",null)):"bash"===t.type?r.a.createElement("code",{className:"language-bash code-block"}," ",Se()(t,"value.code")," "):"image"===t.type?r.a.createElement("img",{className:"image",src:Se()(t,"value.url"),alt:"content"}):"video"===t.type||"youtube"===t.type?r.a.createElement(At.a,{className:"youtube-video",videoId:t.value}):""};var Rt=function(e){var t=e.content,a=void 0===t?[]:t;return a?r.a.createElement("div",{className:"ng-exercise-content"},a.map((function(e,t){return r.a.createElement(Ut,{data:e,key:t})}))):""},Ft=function(e){return r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"github-link"},"Edit on Github")},Gt=function(e){var t=e.selectedExercise;return r.a.createElement("div",null,r.a.createElement("h2",null,Se()(t,"exercise.name")),r.a.createElement(Rt,{content:Se()(t,"exercise.content")}),r.a.createElement(Ft,{link:"".concat(Se()(t,"exercise.githubLink"))}))},Ht=(a(348),function(e){var t=e.haveChildExercises,a=e.showChildExercise,n=e.onClick;return t?r.a.createElement("div",{className:"ng-collapse-arrow",onClick:n},a?r.a.createElement("span",null,"\u2228"):r.a.createElement("span",null,"\u2227")):""}),qt=(a(349),function(e){var t=e.selected;return r.a.createElement("div",{className:"logo"},r.a.createElement("svg",{className:t?"selected":"",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.a.createElement("g",null,r.a.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}))))}),Yt=function(e){var t=e.selected;return r.a.createElement("div",{className:"logo child-exercise-logo"},r.a.createElement("svg",{className:t?"selected":"",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.a.createElement("g",null,r.a.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}))))},Bt=function(e){var t=e.isChildExercise,a=e.selected,n=e.exercise;return r.a.createElement("div",{className:"content ".concat(t&&"child-exercise"),onClick:e.onClick},t?r.a.createElement(Yt,{selected:a}):r.a.createElement(qt,{selected:a}),r.a.createElement("div",{className:"title"},n.name))};var Mt=function(e){var t=e.exercise,a=e.selectedExercise,c=e.index,s=e.onClick,l=t.childExercises,i=a.index===c,o=i&&l,u=Object(n.useState)(o),d=Object(nt.a)(u,2),m=d[0],E=d[1];Object(n.useEffect)((function(){E(o)}),[o]);var f=function(e,t){s&&s({index:e,subExerciseIndex:t})},p=i&&!l?"ng-exercise-selected":"";return r.a.createElement("div",{className:"ng-exercise  ".concat(p," ").concat(m&&"ng-exercise-child"),key:c},r.a.createElement(Bt,{selected:i,exercise:t,onClick:function(){f(c),l&&E(!m)}}),r.a.createElement(Ht,{haveChildExercises:l,onClick:function(){return E(!m)},showChildExercise:m}),m&&t.childExercises.map((function(e,t){return r.a.createElement(Bt,{isChildExercise:l,exercise:e,selected:t===a.subExerciseIndex,onClick:function(){return f(c,t)},key:t})})))};a(350);var Pt=function(e){var t=e.list,a=void 0===t?[]:t,c=Object(i.d)(),s=Object(i.e)((function(e){return e.Course})),l=s.courseContent.data,o=s.selectedExercise,u=Object(n.useCallback)((function(e){var t=e.index,a=e.subExerciseIndex,n=Se()(l,"exerciseList[".concat(t,"]"));if(0===a||a){var r=n.childExercises[a];c(_e({exercise:r,parentExercise:n,index:t,subExerciseIndex:a}))}else{c(_e({exercise:n,index:t}))}}),[l,c]);return r.a.createElement("div",{className:"ng-exercise-list"},a.map((function(e,t){return r.a.createElement(Mt,{exercise:e,index:t,selectedExercise:o,onClick:u,key:t})})))},zt=function(){var e=Object(i.d)(),t=Object(i.e)((function(e){return e.Course})),a=t.courseContent.data,n=t.selectedExercise,c=0===n.subExerciseIndex||n.subExerciseIndex,s=0===Se()(n,"index"),l=0===Se()(n,"subExerciseIndex");if(s&&!c)return r.a.createElement("div",null);return r.a.createElement(St,{left:!0,onClick:function(){var t=n.parentExercise,r=n.index,c=n.subExerciseIndex;if(l)e(_e({exercise:t,index:r}));else if(c){var s=Se()(a,"exerciseList[".concat(r,"]")),i=c-1,o=s.childExercises[i];e(_e({exercise:o,parentExercise:s,index:r,subExerciseIndex:i}))}else{var u=r-1,d=Se()(a,"exerciseList[".concat(u,"]")),m={},E=d.childExercises||[];if(E.length){var f=E.length-1;m={exercise:E[f],parentExercise:d,index:u,subExerciseIndex:f}}else m={exercise:d,index:u};e(_e(m))}}})};a(351);var Jt=function(e){var t=Object(Xe.g)(),a=Object(Xe.h)(),c=a.url,s=a.path,l=Object(i.d)(),o=Object(i.e)((function(e){return e.Course})),u=o.courseContent,d=u.loading,m=u.data,E=o.selectedExercise;Object(n.useEffect)((function(){var e=Se()(E,"exercise.id"),t=window.location.href;window.localStorage.setItem("lastExerciseUrl","".concat(t,"/exercise/").concat(e));var a=Se()(E,"exercise.name");window.localStorage.setItem("exerciseName",a)}),[E]);var f=Se()(e,"location.search"),p=new URLSearchParams(f).get("name"),v=Se()(e,"match.params.courseId");return Object(n.useEffect)((function(){l(Ne({courseId:v}))}),[l,v]),Object(n.useEffect)((function(){var e=function(){var e;return window.location.href.includes("exercise")&&(e=window.location.href.split("/").pop()),e}(),t=Se()(m,"exerciseList[0]"),a=t,n=0;if(t){if(e){var r=m.exerciseList.findIndex((function(t){return t.id===e}));-1!==r&&(a=m.exerciseList[r],n=r)}l(_e({exercise:a,index:n}))}}),[l,m]),Object(n.useEffect)((function(){var e=Se()(E,"exercise.id");e&&t.push("".concat(c,"/exercise/").concat(e))}),[E,t,c]),d?r.a.createElement(dt,{pageLoader:!0}):r.a.createElement("div",{className:"ng-course-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,p),r.a.createElement(Xe.d,null,r.a.createElement(Xe.b,{path:"".concat(s).concat(b)},r.a.createElement(Gt,{data:m,selectedExercise:E}))),r.a.createElement("div",{className:"arrow-row"},r.a.createElement(zt,null),r.a.createElement(Tt,null))),r.a.createElement(Pt,{list:Se()(m,"exerciseList")}))},Vt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe.b,{exact:!0,path:d,component:kt}),r.a.createElement(Xe.b,{exact:!0,path:f,component:kt}),r.a.createElement(Xe.b,{path:p,component:Jt}),r.a.createElement(Xe.b,{exact:!0,path:m,component:at}),r.a.createElement(Qe,{exact:!0,path:E,component:vt}))},Zt=(a(352),function(){var e=Object(i.d)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"link",href:f},"Courses"),r.a.createElement("a",{className:"link",href:E},"Classes"),r.a.createElement("div",{className:"logout",onClick:function(){return e(C())}},"Logout"))}),Wt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"link",href:f},"Courses"),r.a.createElement("a",{className:"login",href:m},"Login/Signup"))};var Xt=function(){var e=Object(i.e)((function(e){return e.User})).data,t=e&&e.isAuthenticated;return r.a.createElement("div",{className:"ng-header"},r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"logo"})),r.a.createElement("div",{className:"option"},t?r.a.createElement(Zt,null):r.a.createElement(Wt,null)))};a(353);var $t=function(){return r.a.createElement("div",null,r.a.createElement(Xt,null),r.a.createElement(Vt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:We()},r.a.createElement(l.a,null,r.a.createElement($t,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.43721636.chunk.js.map