(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{157:function(e,a,r){e.exports={App:"App_App__16ZpL",container:"App_container__1MQN3",title:"App_title__-GfWs",contacts__title:"App_contacts__title__3a-ik",add__btn:"App_add__btn__1cn98",filter__add__container:"App_filter__add__container__2iOpB",main__title:"App_main__title__15qBx",login__container:"App_login__container__1CoUi",reg__container:"App_reg__container__1clPi",addContact__container:"App_addContact__container__3Rk0R"}},217:function(e,a,r){e.exports={main:"RegisterForm_main__O14wr",form:"RegisterForm_form__cGQtP",button:"RegisterForm_button__2Hqn8",register__title:"RegisterForm_register__title__NMotA"}},345:function(e,a,r){"use strict";r.r(a);r(0);var t=r(341),n=r(217),o=r.n(n),i=r(15),s=r(208),l=r(209),_=r(342),m=r(344),c=r(9),d=r(2),p=l.a({name:l.b("Please enter your name").min(1,"Name should be of minimum 1 characters length").required("Please enter your name"),email:l.b("Enter your email").email("Enter a valid email").required("Enter your email"),password:l.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Enter your password")});var u={addUserToDb:c.b.registerNewUser},h=Object(i.b)(null,u)((function(e){var a=e.addUserToDb,r=Object(s.a)({initialValues:{name:"",email:"",password:""},validationSchema:p,onSubmit:function(e,r){!function(e,r){var t={name:e.name,email:e.email,password:e.password};a(t),r()}(e,r.resetForm)}});return Object(d.jsxs)("div",{className:o.a.main,children:[Object(d.jsx)("h2",{className:o.a.register__title,children:"New user"}),Object(d.jsxs)("form",{className:o.a.form,onSubmit:r.handleSubmit,children:[Object(d.jsx)(_.a,{fullWidth:!0,id:"name",style:{marginBottom:10},name:"name",label:"Name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),Object(d.jsx)(_.a,{fullWidth:!0,id:"email",style:{marginBottom:10},name:"email",label:"Email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email}),Object(d.jsx)(_.a,{style:{marginBottom:20},fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password}),Object(d.jsx)(m.a,{disableRipple:!0,className:o.a.button,color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Registration"})]})]})})),b=r(157),g=r.n(b);a.default=function(){return Object(d.jsx)(t.a,{elevation:3,className:g.a.reg__container,children:Object(d.jsx)(h,{})})}}}]);
//# sourceMappingURL=register-page.beee39c3.chunk.js.map