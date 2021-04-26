(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{12:function(t,e,n){"use strict";n.r(e),n.d(e,"addContactRequest",(function(){return a})),n.d(e,"addContactSuccess",(function(){return s})),n.d(e,"addContactError",(function(){return i})),n.d(e,"deleteContactRequest",(function(){return b})),n.d(e,"deleteContactSuccess",(function(){return j})),n.d(e,"deleteContactError",(function(){return l})),n.d(e,"initContactsRequest",(function(){return c})),n.d(e,"initContactsSuccess",(function(){return u})),n.d(e,"initContactsError",(function(){return o})),n.d(e,"filterContacts",(function(){return d}));var r=n(3),c=Object(r.b)("contacts/initContactsRequest"),u=Object(r.b)("contacts/initContactsSuccess"),o=Object(r.b)("contacts/initContactsError"),a=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contact/filter")},129:function(t,e,n){},135:function(t,e,n){"use strict";n.r(e);var r,c,u=n(0),o=n.n(u),a=n(29),s=n.n(a),i=n(15),b=n(11),j=n(3),l=n(4),d=n(60),O=n(5),f=n(12),g=Object(j.c)([],(r={},Object(l.a)(r,f.initContactsSuccess,(function(t,e){return e.payload})),Object(l.a)(r,f.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(d.a)(t),[n])})),Object(l.a)(r,f.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),p=Object(j.c)(!1,(c={},Object(l.a)(c,f.addContactRequest,(function(){return!0})),Object(l.a)(c,f.addContactSuccess,(function(){return!1})),Object(l.a)(c,f.addContactError,(function(){return!1})),Object(l.a)(c,f.deleteContactRequest,(function(){return!0})),Object(l.a)(c,f.deleteContactSuccess,(function(){return!1})),Object(l.a)(c,f.deleteContactError,(function(){return!1})),Object(l.a)(c,f.initContactsRequest,(function(){return!0})),Object(l.a)(c,f.initContactsSuccess,(function(){return!1})),Object(l.a)(c,f.initContactsError,(function(){return!1})),Object(l.a)(c,O.getCurrentUserRequest,(function(){return!0})),Object(l.a)(c,O.getCurrentUserSuccess,(function(){return!1})),Object(l.a)(c,O.gentCurrentUserError,(function(){return!1})),c)),h={itemsReducers:g,filterReducer:Object(j.c)("",Object(l.a)({},f.filterContacts,(function(t,e){return e.payload}))),loading:p,addContactReducer:Object(j.c)(!1,Object(l.a)({},f.addContactSuccess,(function(){return!1})))},_=n(23),v=n(86),C=n.n(v),m=n(9),k={key:"token",storage:C.a,whitelist:["token"]},x=Object(b.c)({items:h.itemsReducers,filter:h.filterReducer,loading:h.loading,addContact:h.addContactReducer}),S=Object(j.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}}),R=Object(_.g)(k,m.d),y=Object(j.a)({reducer:{auth:R,contacts:x},middleware:S}),L=Object(_.h)(y),E=(n(129),n(37)),U=n(38),q=n(39),N=n(40),z=n(6),A=n(152),w=n(25),B=n(50),T=n(2),D={noAuthenticated:m.a.getCurrentUserError},F=Object(i.b)((function(t){return{token:m.c.getToken(t)}}),D)((function(t){var e=t.component,n=t.token,r=(t.noAuthenticated,Object(B.a)(t,["component","token","noAuthenticated"]));return Object(T.jsx)(z.b,Object(w.a)(Object(w.a)({},r),{},{render:function(t){return Boolean(n)?Object(T.jsx)(e,Object(w.a)({},t)):Object(T.jsx)(z.a,{to:"/login"})}}))})),P=Object(i.b)((function(t){return{token:m.c.getToken(t)}}))((function(t){var e=t.component,n=t.token,r=Object(B.a)(t,["component","token"]);return Object(T.jsx)(z.b,Object(w.a)(Object(w.a)({},r),{},{render:function(t){return Boolean(n)&&r.restricted?Object(T.jsx)(z.a,{to:"/contacts"}):Object(T.jsx)(e,Object(w.a)({},t))}}))})),I=n(21),J=n(28),M=n.n(J),V=n(51),W=n.n(V),K=n(92),Q=n.n(K),Y=n(88),G=n.n(Y),H=Object(i.b)((function(t){return{token:m.c.getToken(t)}}))((function(t){var e=t.token;return Object(T.jsxs)("div",{className:W.a.app__nav,children:[Object(T.jsx)(I.b,{to:"/",className:W.a.nav__link,children:Object(T.jsx)(G.a,{htmlColor:"#45B39D",style:{fontSize:30}})}),Boolean(e)&&Object(T.jsx)(I.b,{to:"/contacts",className:W.a.nav__contacts,children:Object(T.jsx)(Q.a,{htmlColor:"#45B39D",style:{fontSize:30}})})]})})),X=n(94),Z=n.n(X),$=n(93),tt=n.n($),et=function(t){Object(q.a)(n,t);var e=Object(N.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var t=this.props,e=t.token,n=t.userName,r=t.onLogout,c=t.isAutorized;return Object(T.jsxs)("div",{className:M.a.navigation,children:[Object(T.jsx)(H,{}),Boolean(e)?Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:M.a.user__nav,children:[Object(T.jsx)(tt.a,{fontSize:"large",htmlColor:"#45B39D",style:{fontSize:30}}),c&&Object(T.jsxs)("p",{className:M.a.user__name,children:["Welcome, ",n]}),Object(T.jsx)("button",{onClick:r,className:M.a.logout__button,children:Object(T.jsx)(Z.a,{fontSize:"large",htmlColor:"#45B39D",style:{fontSize:30}})})]})}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(I.b,{to:"/login",className:M.a.nav__link,children:"Login"}),Object(T.jsx)(I.b,{to:"/register",className:M.a.nav__link,children:"Registration"})]})]})}}]),n}(u.Component),nt={onLogout:m.b.logoutUser},rt=Object(i.b)((function(t){return{token:m.c.getToken(t),userName:t.auth.user.name,isAutorized:m.c.isAutorizedUser(t)}}),nt)(et),ct=Object(u.lazy)((function(){return n.e(3).then(n.bind(null,340))})),ut=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,343))})),ot=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,345))})),at=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,346))})),st=function(t){Object(q.a)(n,t);var e=Object(N.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return console.log(Boolean(this.props.token)),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(A.a,{maxWidth:"md",children:[Object(T.jsx)(rt,{}),Object(T.jsx)(u.Suspense,{fallback:"loading",children:Object(T.jsxs)(z.d,{children:[Object(T.jsx)(z.b,{path:"/",exact:!0,component:ct}),Object(T.jsx)(F,{path:"/contacts",exact:!0,component:ut}),Object(T.jsx)(P,{path:"/login",restricted:!0,exact:!0,component:at}),Object(T.jsx)(P,{path:"/register",restricted:!0,exact:!0,component:ot})]})})]})})}}]),n}(u.Component),it={getCurrentUser:m.b.getCurrentUser},bt=Object(i.b)((function(t){return{token:m.c.getToken(t)}}),it)(st),jt=n(95);s.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(i.a,{store:y,children:Object(T.jsx)(jt.a,{loading:null,persistor:L,children:Object(T.jsx)(I.a,{children:Object(T.jsx)(bt,{})})})})}),document.getElementById("root"))},28:function(t,e,n){t.exports={navigation:"Navigation_navigation__1VtLy",user__nav:"Navigation_user__nav__1sYAA",logout__button:"Navigation_logout__button__cb9hl",nav__link:"Navigation_nav__link__3bFyi",user__name:"Navigation_user__name__2k4I-",user__circle:"Navigation_user__circle__3hlqF",user__avatar:"Navigation_user__avatar__29NKV"}},5:function(t,e,n){"use strict";n.r(e),n.d(e,"getCurrentUserRequest",(function(){return c})),n.d(e,"getCurrentUserSuccess",(function(){return u})),n.d(e,"gentCurrentUserError",(function(){return o})),n.d(e,"userLoginRequest",(function(){return b})),n.d(e,"userLoginSuccess",(function(){return j})),n.d(e,"userLoginError",(function(){return l})),n.d(e,"userRegisterRequest",(function(){return a})),n.d(e,"userRegisterSuccess",(function(){return s})),n.d(e,"userRegisterError",(function(){return i})),n.d(e,"userLogoutRequest",(function(){return d})),n.d(e,"userLogoutSuccess",(function(){return O})),n.d(e,"userLogoutError",(function(){return f}));var r=n(3),c=Object(r.b)("auth/getCurrentUserRequest"),u=Object(r.b)("auth/getCurrentUserSuccess"),o=Object(r.b)("auth/getCurrentUserError"),a=Object(r.b)("auth/userRegisterRequest"),s=Object(r.b)("auth/userRegisterSuccess"),i=Object(r.b)("auth/userRegisterError"),b=Object(r.b)("auth/userLoginRequest"),j=Object(r.b)("auth/userLoginSuccess"),l=Object(r.b)("auth/userLoginError"),d=Object(r.b)("auth/userLogoutRequest"),O=Object(r.b)("auth/userLogoutSuccess"),f=Object(r.b)("auth/userLogoutError")},51:function(t,e,n){t.exports={app__nav:"AppNav_app__nav__m1Qe7",nav__contacts:"AppNav_nav__contacts__165Pl",nav__link:"AppNav_nav__link__sp8y_"}},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return c}));var r={};n.r(r),n.d(r,"getCurrentUser",(function(){return g})),n.d(r,"registerNewUser",(function(){return p})),n.d(r,"loginUser",(function(){return h})),n.d(r,"logoutUser",(function(){return _}));var c={};n.r(c),n.d(c,"isAutorizedUser",(function(){return L})),n.d(c,"getToken",(function(){return E}));var u=n(22),o=n.n(u),a=n(33),s=n(24),i=n.n(s),b=n(5);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var j,l,d,O=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},f=function(){i.a.defaults.headers.common.Authorization=""},g=function(){return function(){var t=Object(a.a)(o.a.mark((function t(e,n){var r,c,u,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return O(c),e(Object(b.getCurrentUserRequest)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:u=t.sent,a=u.data,e(Object(b.getCurrentUserSuccess)(a)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(Object(b.gentCurrentUserError)(t.t0));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(a.a)(o.a.mark((function e(n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(b.userRegisterRequest)()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:r=e.sent,c=r.data,O(c.token),n(Object(b.userRegisterSuccess)(c)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("registration error"),n(Object(b.userRegisterError)(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(a.a)(o.a.mark((function e(n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(b.userLoginRequest)()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:r=e.sent,c=r.data,O(c.token),n(Object(b.userLoginSuccess)(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(Object(b.userLoginError)(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},_=function(){return function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(b.userLogoutRequest)());try{i.a.post("/users/logout"),f(),e(Object(b.userLogoutSuccess)())}catch(n){e(Object(b.userLogoutError)(n.message))}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=n(4),C=n(3),m=n(11),k={email:null,name:null},x=Object(C.c)(k,(j={},Object(v.a)(j,b.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(v.a)(j,b.userRegisterSuccess,(function(t,e){return e.payload.user})),Object(v.a)(j,b.userLoginSuccess,(function(t,e){return e.payload.user})),Object(v.a)(j,b.userLogoutSuccess,(function(t,e){return k})),j)),S=Object(C.c)(null,(l={},Object(v.a)(l,b.userRegisterSuccess,(function(t,e){return e.payload.token})),Object(v.a)(l,b.userLoginSuccess,(function(t,e){return e.payload.token})),Object(v.a)(l,b.userLogoutSuccess,(function(t,e){return null})),Object(v.a)(l,b.gentCurrentUserError,(function(){return null})),l)),R=Object(C.c)(!1,(d={},Object(v.a)(d,b.userRegisterSuccess,(function(){return!0})),Object(v.a)(d,b.getCurrentUserSuccess,(function(){return!0})),Object(v.a)(d,b.userLoginSuccess,(function(){return!0})),Object(v.a)(d,b.userLoginError,(function(){return!1})),Object(v.a)(d,b.userLogoutSuccess,(function(){return!1})),Object(v.a)(d,b.userRegisterError,(function(){return!1})),Object(v.a)(d,b.gentCurrentUserError,(function(){return!1})),d)),y=Object(m.c)({user:x,token:S,isAutorized:R}),L=function(t){return t.auth.isAutorized},E=function(t){return t.auth.token}}},[[135,7,8]]]);
//# sourceMappingURL=main.6434666c.chunk.js.map