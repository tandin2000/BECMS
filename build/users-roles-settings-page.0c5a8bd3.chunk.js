(self.webpackChunkproject=self.webpackChunkproject||[]).push([[8853],{20400:(h,f,t)=>{"use strict";t.r(f),t.d(f,{default:()=>Lt});var e=t(67294),a=t(16550),n=t(86597),r=t(31498),l=t(81912),g=t(14087),u=t(17034),p=t(185),y=t(53979),T=t(29728),O=t(36989),L=t(49066),b=t(38939),c=t(8060),R=t(79031),v=t(37909),d=t(75515),U=t(63237),S=t(96315),B=t(86896),k=t(88767),j=t(90233),N=t(89031);const K=async(s,i)=>{try{const{get:o}=(0,n.tg)(),{data:m}=await o((0,N.Gc)("roles"));return i("The roles have loaded successfully"),m}catch{throw s({type:"warning",message:{id:"notification.error"}}),new Error("error")}},ee=async(s,i)=>{try{const{del:o}=(0,n.tg)();await o(`${(0,N.Gc)("roles")}/${s}`)}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var Y=t(45697),$=t.n(Y),se=t(15234),W=t(11047),Q=t(12028),ae=t(4585),ue=t(20022);const te=({sortedRoles:s,canDelete:i,permissions:o,setRoleToDelete:m,onDelete:P})=>{const{formatMessage:E}=(0,B.Z)(),{push:A}=(0,a.k6)(),[D,M]=P,C=x=>i&&!["public","authenticated"].includes(x.type),Z=x=>{m(x),M(!D)},I=x=>{A(`/settings/${r.Z}/roles/${x}`)};return e.createElement(se.p,null,s?.map(x=>e.createElement(R.Tr,{key:x.name,...(0,n.X7)({fn:()=>I(x.id)})},e.createElement(v.Td,{width:"20%"},e.createElement(d.Z,null,x.name)),e.createElement(v.Td,{width:"50%"},e.createElement(d.Z,null,x.description)),e.createElement(v.Td,{width:"30%"},e.createElement(d.Z,null,`${x.nb_users} ${E({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(v.Td,null,e.createElement(W.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:o.updateRole},e.createElement(Q.h,{onClick:()=>I(x.id),noBorder:!0,icon:e.createElement(ae.Z,null),label:E({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${x.name}`})})),C(x)&&e.createElement(n.jW,{permissions:o.deleteRole},e.createElement(Q.h,{onClick:()=>Z(x.id),noBorder:!0,icon:e.createElement(ue.Z,null),label:E({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${x.name}`})})))))))},me=te;te.defaultProps={canDelete:!1},te.propTypes={onDelete:$().array.isRequired,permissions:$().object.isRequired,setRoleToDelete:$().func.isRequired,sortedRoles:$().array.isRequired,canDelete:$().bool};const re=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:i}=(0,B.Z)(),{push:o}=(0,a.k6)(),m=(0,n.lm)(),{notifyStatus:P}=(0,g.G)(),[{query:E}]=(0,n.Kx)(),A=E?._q||"",[D,M]=(0,e.useState)(!1),[C,Z]=(0,e.useState)(!1),[I,x]=(0,e.useState)();(0,n.go)();const F=(0,k.useQueryClient)(),H=(0,e.useMemo)(()=>({create:l.Z.createRole,read:l.Z.readRoles,update:l.Z.updateRole,delete:l.Z.deleteRole}),[]),{isLoading:G,allowedActions:{canRead:w,canDelete:V}}=(0,n.ss)(H),{isLoading:_,data:{roles:Se},isFetching:Ot}=(0,k.useQuery)("get-roles",()=>K(m,P),{initialData:{},enabled:w}),Ue=_||Ot,Bt=()=>{s("willCreateRole"),o(`/settings/${r.Z}/roles/new`)},Zt=()=>{M(!D)},St={roles:{id:(0,N.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,N.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Ut=i({id:"global.roles",defaultMessage:"Roles"}),It=(0,k.useMutation)(Nt=>ee(Nt,m),{async onSuccess(){await F.invalidateQueries("get-roles")}}),$t=async()=>{Z(!0),await It.mutateAsync(I),M(!D),Z(!1)},de=(0,j.Z)(Se||[],A,{keys:["name","description"]}),jt=A&&!de.length?"search":"roles",Wt=4,kt=(Se?.length||0)+1;return e.createElement(u.A,null,e.createElement(n.SL,{name:Ut}),e.createElement(p.o,{"aria-busy":Ue},e.createElement(y.T,{title:i({id:"global.roles",defaultMessage:"Roles"}),subtitle:i({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:l.Z.createRole},e.createElement(T.z,{onClick:Bt,startIcon:e.createElement(S.Z,null),size:"S"},i({id:(0,N.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(O.Z,{startActions:e.createElement(n.m,{label:i({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(L.D,null,!w&&e.createElement(n.ZF,null),(Ue||G)&&e.createElement(n.dO,null),w&&de&&de?.length?e.createElement(b.i,{colCount:Wt,rowCount:kt},e.createElement(c.h,null,e.createElement(R.Tr,null,e.createElement(v.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(v.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.description",defaultMessage:"Description"}))),e.createElement(v.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.users",defaultMessage:"Users"}))),e.createElement(v.Th,null,e.createElement(U.T,null,i({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(me,{sortedRoles:de,canDelete:V,permissions:l.Z,setRoleToDelete:x,onDelete:[D,M]})):e.createElement(n.x7,{content:St[jt]})),e.createElement(n.QH,{isConfirmButtonLoading:C,onConfirm:$t,onToggleDialog:Zt,isOpen:D})))},oe=()=>e.createElement(n.O4,{permissions:l.Z.accessRoles},e.createElement(re,null));var fe=t(41054),z=t(41580),ie=t(11276),X=t(74571),ve=t(16364),ye=t(64256),Re=t(85018),Ie=t(67109),J=t(84757),$e=t(27361),ne=t.n($e),je=t(41609),We=t.n(je),ke=t(82569),Ne=t.n(ke);const xe=(0,e.createContext)({}),Pe=({children:s,value:i})=>e.createElement(xe.Provider,{value:i},s),pe=()=>(0,e.useContext)(xe);Pe.propTypes={children:$().node.isRequired,value:$().object.isRequired};var le=t(88972),Ge=t(35161),Fe=t.n(Ge),we=t(13217),Ke=t.n(we);const ze=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},He=(0,le.ZP)(z.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function Ee({route:s}){const{formatMessage:i}=(0,B.Z)(),{method:o,handler:m,path:P}=s,E=P?Ke()(P.split("/")):[],[A="",D=""]=m?m.split("."):[],M=ze(s.method);return e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(d.Z,{variant:"delta",as:"h3"},i({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,A),e.createElement(d.Z,{variant:"delta",textColor:"primary600"},".",D)),e.createElement(W.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(He,{background:M.background,borderColor:M.border,padding:2},e.createElement(d.Z,{fontWeight:"bold",textColor:M.text},o)),e.createElement(z.x,{paddingLeft:2,paddingRight:2},Fe()(E,C=>e.createElement(d.Z,{key:C,textColor:C.includes(":")?"neutral600":"neutral900"},"/",C)))))}Ee.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},Ee.propTypes={route:$().shape({handler:$().string,method:$().string,path:$().string})};const Ve=Ee,Ye=()=>{const{formatMessage:s}=(0,B.Z)(),{selectedAction:i,routes:o}=pe(),m=Ne()(i.split("."),"controllers"),P=ne()(o,m[0]),E=m.slice(1).join("."),A=We()(P)?[]:P.filter(D=>D.handler.endsWith(E));return e.createElement(X.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},i?e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:2},A.map((D,M)=>e.createElement(Ve,{key:M,route:D}))):e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(d.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(d.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var Qe=t(48734),Xe=t(74756),Je=t(63081),qe=t(11700),_e=t.n(qe);function et(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return _e()(s.replace("api::","").replace("plugin::",""))}}const tt=et;var nt=t(89734),Ae=t.n(nt),Ce=t(36213),st=t(78114);const Te=le.iv`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,at=(0,le.ZP)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&Te}
  &:hover {
    ${Te}
  }
`,rt=le.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,De=({subCategory:s})=>{const{formatMessage:i}=(0,B.Z)(),{onChange:o,onChangeSelectAll:m,onSelectedAction:P,selectedAction:E,modifiedData:A}=pe(),D=(0,e.useMemo)(()=>ne()(A,s.name,{}),[A,s]),M=(0,e.useMemo)(()=>Object.values(D).every(x=>x.enabled===!0),[D]),C=(0,e.useMemo)(()=>Object.values(D).some(x=>x.enabled===!0)&&!M,[D,M]),Z=(0,e.useCallback)(({target:{name:x}})=>{m({target:{name:x,value:!M}})},[M,m]),I=(0,e.useCallback)(x=>E===x,[E]);return e.createElement(z.x,null,e.createElement(W.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(z.x,{paddingRight:4},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(rt,null),e.createElement(z.x,{paddingLeft:4},e.createElement(Ce.X,{name:s.name,value:M,onValueChange:x=>Z({target:{name:s.name,value:x}}),indeterminate:C},i({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(W.k,{paddingTop:6,paddingBottom:6},e.createElement(ie.r,{gap:2,style:{flex:1}},s.actions.map(x=>{const F=`${x.name}.enabled`;return e.createElement(X.P,{col:6,key:x.name},e.createElement(at,{isActive:I(x.name),padding:2,hasRadius:!0},e.createElement(Ce.X,{value:ne()(A,F,!1),name:F,onValueChange:H=>o({target:{name:F,value:H}})},x.label),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>P(x.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(st.Z,null))))}))))};De.propTypes={subCategory:$().object.isRequired};const ot=De,Me=({name:s,permissions:i})=>{const o=(0,e.useMemo)(()=>Ae()(Object.values(i.controllers).reduce((m,P,E)=>{const A=`${s}.controllers.${Object.keys(i.controllers)[E]}`,D=Ae()(Object.keys(P).reduce((M,C)=>[...M,{...P[C],label:C,name:`${A}.${C}`}],[]),"label");return[...m,{actions:D,label:Object.keys(i.controllers)[E],name:A}]},[]),"label"),[s,i]);return e.createElement(z.x,{padding:6},o.map(m=>e.createElement(ot,{key:m.name,subCategory:m})))};Me.propTypes={name:$().string.isRequired,permissions:$().object.isRequired};const it=Me,lt=(s,i)=>{const o=Object.keys(i).sort().map(m=>({name:m,isOpen:!1}));return{...s,collapses:o}};var ce=t(18172);const ct={collapses:[]},dt=(s,i)=>(0,ce.ZP)(s,o=>{switch(i.type){case"TOGGLE_COLLAPSE":{o.collapses=s.collapses.map((m,P)=>P===i.index?{...m,isOpen:!m.isOpen}:{...m,isOpen:!1});break}default:return o}}),ut=()=>{const{modifiedData:s}=pe(),{formatMessage:i}=(0,B.Z)(),[{collapses:o},m]=(0,e.useReducer)(dt,ct,E=>lt(E,s)),P=E=>m({type:"TOGGLE_COLLAPSE",index:E});return e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:1},o.map((E,A)=>e.createElement(Qe.U,{expanded:E.isOpen,onToggle:()=>P(A),key:E.name,variant:A%2===0?"secondary":void 0},e.createElement(Xe.B,{title:tt(E.name),description:i({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:E.name}),variant:A%2?"primary":"secondary"}),e.createElement(Je.v,null,e.createElement(z.x,null,e.createElement(it,{permissions:s[E.name],name:E.name}))))))};var mt=t(36968),be=t.n(mt),gt=t(69572),pt=t.n(gt);const Et={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},ht=(s,i)=>(0,ce.ZP)(s,o=>{switch(i.type){case"ON_CHANGE":{const m=i.keys.length,P=i.keys[m-1]==="enabled";if(i.value&&P){const E=pt()(i.keys,m-1).join(".");o.selectedAction=E}be()(o,["modifiedData",...i.keys],i.value);break}case"ON_CHANGE_SELECT_ALL":{const m=["modifiedData",...i.keys],P=ne()(s,m,{}),E=Object.keys(P).reduce((A,D)=>(A[D]={...P[D],enabled:i.value},A),{});be()(o,m,E);break}case"ON_RESET":{o.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{o.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:m}=i;o.selectedAction=m===s.selectedAction?"":m;break}default:return o}}),ft=(s,i,o)=>({...s,initialData:i,modifiedData:i,routes:o}),Le=(0,e.forwardRef)(({permissions:s,routes:i},o)=>{const{formatMessage:m}=(0,B.Z)(),[P,E]=(0,e.useReducer)(ht,Et,Z=>ft(Z,s,i));(0,e.useImperativeHandle)(o,()=>({getPermissions(){return{permissions:P.modifiedData}},resetForm(){E({type:"ON_RESET"})},setFormAfterSubmit(){E({type:"ON_SUBMIT_SUCCEEDED"})}}));const C={...P,onChange:({target:{name:Z,value:I}})=>E({type:"ON_CHANGE",keys:Z.split("."),value:I==="empty__string_value"?"":I}),onChangeSelectAll:({target:{name:Z,value:I}})=>E({type:"ON_CHANGE_SELECT_ALL",keys:Z.split("."),value:I}),onSelectedAction:Z=>E({type:"SELECT_ACTION",actionToSelect:Z})};return e.createElement(Pe,{value:C},e.createElement(ie.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(X.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(d.Z,{variant:"delta",as:"h2"},m({id:(0,J.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(d.Z,{as:"p",textColor:"neutral600"},m({id:(0,J.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(ut,null))),e.createElement(Ye,null)))});Le.propTypes={permissions:$().object.isRequired,routes:$().object.isRequired};const Oe=(0,e.memo)(Le),Yt={isLoading:!0,modifiedData:{}},Qt=(s,i)=>produce(s,o=>{switch(i.type){case"GET_DATA":{o.isLoading=!0,o.modifiedData={};break}case"GET_DATA_SUCCEEDED":{o.isLoading=!1,o.modifiedData=i.data;break}case"GET_DATA_ERROR":{o.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{o.modifiedData=i.data;break}default:return o}}),Xt=null,Jt=(s,i)=>{const{isLoading:o,allowedActions:m}=useRBAC(i),[{isLoading:P,modifiedData:E},A]=useReducer(reducer,initialState),D=useNotification(),M=useRef(!0),C=new AbortController,{signal:Z}=C;useEffect(()=>(o||(async()=>{try{A({type:"GET_DATA"});const F=await request(getRequestURL(s),{method:"GET",signal:Z});A({type:"GET_DATA_SUCCEEDED",data:F})}catch(F){M.current&&(A({type:"GET_DATA_ERROR"}),console.error(F),D({type:"warning",message:{id:"notification.error"}}))}})(),()=>{C.abort(),M.current=!1}),[o,s]);const I=useCallback(x=>{A({type:"ON_SUBMIT_SUCCEEDED",data:x})},[]);return{allowedActions:m,dispatchSubmitSucceeded:I,isLoading:P,isLoadingForPermissions:o,modifiedData:E}},qt=null,_t={roles:[],isLoading:!0},en=(s,i)=>produce(s,o=>{switch(i.type){case"GET_DATA":{o.isLoading=!0,o.roles=[];break}case"GET_DATA_SUCCEEDED":{o.roles=i.data,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1;break}default:return o}}),tn=null,nn=(s=!0)=>{const[{roles:i,isLoading:o},m]=useReducer(reducer,initialState,()=>init(initialState,s)),P=useNotification(),E=useRef(!0),A=new AbortController,{signal:D}=A;useEffect(()=>(s&&M(),()=>{A.abort(),E.current=!1}),[s]);const M=async()=>{try{m({type:"GET_DATA"});const{roles:C}=await request(`/${pluginId}/roles`,{method:"GET",signal:D});m({type:"GET_DATA_SUCCEEDED",data:C})}catch(C){const Z=get(C,["response","payload","message"],"An error occured");E.current&&(m({type:"GET_DATA_ERROR"}),Z!=="Forbidden"&&P({type:"warning",message:Z}))}};return{roles:i,isLoading:o,getData:M}},sn=null,vt=(s,i)=>({...s,isLoading:i}),Be={permissions:{},routes:{},isLoading:!0},yt=(s,i)=>(0,ce.ZP)(s,o=>{switch(i.type){case"GET_DATA":{o.isLoading=!0,o.permissions={},o.routes={};break}case"GET_DATA_SUCCEEDED":{o.permissions=i.permissions,o.routes=i.routes,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1;break}default:return o}}),Ze=(s=!0)=>{const i=(0,n.lm)(),[{permissions:o,routes:m,isLoading:P},E]=(0,e.useReducer)(yt,Be,()=>vt(Be,s)),A=(0,n.kY)(),D=(0,e.useCallback)(async()=>{try{E({type:"GET_DATA"});const[{permissions:M},{routes:C}]=await Promise.all([`/${r.Z}/permissions`,`/${r.Z}/routes`].map(async Z=>(await A.get(Z)).data));E({type:"GET_DATA_SUCCEEDED",permissions:(0,N.YX)(M),routes:C})}catch(M){const C=ne()(M,["response","payload","message"],"An error occured");E({type:"GET_DATA_ERROR"}),C!=="Forbidden"&&i({type:"warning",message:C})}},[i]);return(0,e.useEffect)(()=>{s&&D()},[D,s]),{permissions:o,routes:m,getData:D,isLoading:P}},Rt={role:{},isLoading:!0},xt=(s,i)=>(0,ce.ZP)(s,o=>{switch(i.type){case"GET_DATA_SUCCEEDED":{o.role=i.role,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{o.role.name=i.name,o.role.description=i.description;break}default:return o}}),Pt=s=>{const[i,o]=(0,e.useReducer)(xt,Rt),m=(0,n.lm)(),P=(0,e.useRef)(null),{get:E}=(0,n.kY)();(0,e.useEffect)(()=>(P.current=!0,s?A(s):o({type:"GET_DATA_SUCCEEDED",role:{}}),()=>P.current=!1),[s]);const A=async M=>{try{const{data:{role:C}}=await E(`/${r.Z}/roles/${M}`);P.current&&o({type:"GET_DATA_SUCCEEDED",role:C})}catch(C){console.error(C),o({type:"GET_DATA_ERROR"}),m({type:"warning",message:{id:"notification.error"}})}},D=(0,e.useCallback)(M=>{o({type:"ON_SUBMIT_SUCCEEDED",...M})},[]);return{...i,onSubmitSucceeded:D}};var q=t(87561);const At=q.Ry().shape({name:q.Z_().required(n.I0.required),description:q.Z_().required(n.I0.required)}),Ct=()=>{const{formatMessage:s}=(0,B.Z)(),[i,o]=(0,e.useState)(!1),m=(0,n.lm)(),{lockApp:P,unlockApp:E}=(0,n.o1)(),{params:{id:A}}=(0,a.$B)(`/settings/${r.Z}/roles/:id`),{isLoading:D,routes:M}=Ze(),{role:C,onSubmitSucceeded:Z,isLoading:I}=Pt(A),x=(0,e.useRef)(),{put:F}=(0,n.kY)(),H=async G=>{P(),o(!0);try{const w=x.current.getPermissions();await F(`/${r.Z}/roles/${A}`,{...G,...w,users:[]}),Z({name:G.name,description:G.description}),m({type:"success",message:{id:(0,J.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(w){console.error(w),m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}o(!1),E()};return I?e.createElement(n.dO,null):e.createElement(p.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(fe.J9,{enableReinitialize:!0,initialValues:{name:C.name,description:C.description},onSubmit:H,validationSchema:At},({handleSubmit:G,values:w,handleChange:V,errors:_})=>e.createElement(n.l0,{noValidate:!0,onSubmit:G},e.createElement(y.T,{primaryAction:!D&&e.createElement(T.z,{disabled:C.code==="strapi-super-admin",type:"submit",loading:i,startIcon:e.createElement(Re.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:C.name,subtitle:C.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(Ie.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(L.D,null,e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(d.Z,{variant:"delta",as:"h2"},s({id:(0,J.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(X.P,{col:6},e.createElement(ve.o,{name:"name",value:w.name||"",onChange:V,label:s({id:"global.name",defaultMessage:"Name"}),error:_.name?s({id:_.name,defaultMessage:"Invalid value"}):null})),e.createElement(X.P,{col:6},e.createElement(ye.g,{name:"description",value:w.description||"",onChange:V,label:s({id:"global.description",defaultMessage:"Description"}),error:_.description?s({id:_.description,defaultMessage:"Invalid value"}):null}))))),!D&&e.createElement(Oe,{ref:x,permissions:C.permissions,routes:M}))))))},Tt=()=>e.createElement(n.O4,{permissions:l.Z.updateRole},e.createElement(Ct,null)),Dt=q.Ry().shape({name:q.Z_().required(n.I0.required),description:q.Z_().required(n.I0.required)}),Mt=()=>{const{formatMessage:s}=(0,B.Z)(),[i,o]=(0,e.useState)(!1),m=(0,n.lm)(),{goBack:P}=(0,a.k6)(),{lockApp:E,unlockApp:A}=(0,n.o1)(),{isLoading:D,permissions:M,routes:C}=Ze(),{trackUsage:Z}=(0,n.rS)(),I=(0,e.useRef)(),{post:x}=(0,n.kY)(),F=async H=>{E(),o(!0);try{const G=I.current.getPermissions();await x(`/${r.Z}/roles`,{...H,...G,users:[]}),Z("didCreateRole"),m({type:"success",message:{id:(0,J.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),P()}catch(G){console.error(G),m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}o(!1),A()};return e.createElement(p.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(fe.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:F,validationSchema:Dt},({handleSubmit:H,values:G,handleChange:w,errors:V})=>e.createElement(n.l0,{noValidate:!0,onSubmit:H},e.createElement(y.T,{primaryAction:!D&&e.createElement(T.z,{type:"submit",loading:i,startIcon:e.createElement(Re.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(L.D,null,e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(W.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(d.Z,{variant:"delta",as:"h2"},s({id:(0,J.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(X.P,{col:6},e.createElement(ve.o,{name:"name",value:G.name||"",onChange:w,label:s({id:"global.name",defaultMessage:"Name"}),error:V.name?s({id:V.name,defaultMessage:"Invalid value"}):null})),e.createElement(X.P,{col:6},e.createElement(ye.g,{name:"description",value:G.description||"",onChange:w,label:s({id:"global.description",defaultMessage:"Description"}),error:V.description?s({id:V.description,defaultMessage:"Invalid value"}):null}))))),!D&&e.createElement(Oe,{ref:I,permissions:M,routes:C}))))))},bt=()=>e.createElement(n.O4,{permissions:l.Z.createRole},e.createElement(Mt,null)),Lt=()=>e.createElement(n.O4,{permissions:l.Z.accessRoles},e.createElement(a.rs,null,e.createElement(a.AW,{path:`/settings/${r.Z}/roles/new`,component:bt,exact:!0}),e.createElement(a.AW,{path:`/settings/${r.Z}/roles/:id`,component:Tt,exact:!0}),e.createElement(a.AW,{path:`/settings/${r.Z}/roles`,component:oe,exact:!0}),e.createElement(a.AW,{path:"",component:n.NotFound})))},89031:(h,f,t)=>{"use strict";t.d(f,{YX:()=>r,Gc:()=>u,OB:()=>p.Z});var e=t(41609),a=t.n(e);const r=y=>Object.keys(y).reduce((T,O)=>{const L=y[O].controllers,b=Object.keys(L).reduce((c,R)=>(a()(L[R])||(c[R]=L[R]),c),{});return a()(b)||(T[O]={controllers:b}),T},{});var l=t(31498);const u=y=>`/${l.Z}/${y}`;var p=t(84757)},47443:(h,f,t)=>{var e=t(42118);function a(n,r){var l=n==null?0:n.length;return!!l&&e(n,r,0)>-1}h.exports=a},1196:h=>{function f(t,e,a){for(var n=-1,r=t==null?0:t.length;++n<r;)if(a(e,t[n]))return!0;return!1}h.exports=f},20731:(h,f,t)=>{var e=t(88668),a=t(47443),n=t(1196),r=t(29932),l=t(7518),g=t(74757),u=200;function p(y,T,O,L){var b=-1,c=a,R=!0,v=y.length,d=[],U=T.length;if(!v)return d;O&&(T=r(T,l(O))),L?(c=n,R=!1):T.length>=u&&(c=g,R=!1,T=new e(T));e:for(;++b<v;){var S=y[b],B=O==null?S:O(S);if(S=L||S!==0?S:0,R&&B===B){for(var k=U;k--;)if(T[k]===B)continue e;d.push(S)}else c(T,B,L)||d.push(S)}return d}h.exports=p},89881:(h,f,t)=>{var e=t(47816),a=t(99291),n=a(e);h.exports=n},41848:h=>{function f(t,e,a,n){for(var r=t.length,l=a+(n?1:-1);n?l--:++l<r;)if(e(t[l],l,t))return l;return-1}h.exports=f},42118:(h,f,t)=>{var e=t(41848),a=t(62722),n=t(42351);function r(l,g,u){return g===g?n(l,g,u):e(l,a,u)}h.exports=r},62722:h=>{function f(t){return t!==t}h.exports=f},69199:(h,f,t)=>{var e=t(89881),a=t(98612);function n(r,l){var g=-1,u=a(r)?Array(r.length):[];return e(r,function(p,y,T){u[++g]=l(p,y,T)}),u}h.exports=n},82689:(h,f,t)=>{var e=t(29932),a=t(97786),n=t(67206),r=t(69199),l=t(71131),g=t(7518),u=t(85022),p=t(6557),y=t(1469);function T(O,L,b){L.length?L=e(L,function(v){return y(v)?function(d){return a(d,v.length===1?v[0]:v)}:v}):L=[p];var c=-1;L=e(L,g(n));var R=r(O,function(v,d,U){var S=e(L,function(B){return B(v)});return{criteria:S,index:++c,value:v}});return l(R,function(v,d){return u(v,d,b)})}h.exports=T},71131:h=>{function f(t,e){var a=t.length;for(t.sort(e);a--;)t[a]=t[a].value;return t}h.exports=f},26393:(h,f,t)=>{var e=t(33448);function a(n,r){if(n!==r){var l=n!==void 0,g=n===null,u=n===n,p=e(n),y=r!==void 0,T=r===null,O=r===r,L=e(r);if(!T&&!L&&!p&&n>r||p&&y&&O&&!T&&!L||g&&y&&O||!l&&O||!u)return 1;if(!g&&!p&&!L&&n<r||L&&l&&u&&!g&&!p||T&&l&&u||!y&&u||!O)return-1}return 0}h.exports=a},85022:(h,f,t)=>{var e=t(26393);function a(n,r,l){for(var g=-1,u=n.criteria,p=r.criteria,y=u.length,T=l.length;++g<y;){var O=e(u[g],p[g]);if(O){if(g>=T)return O;var L=l[g];return O*(L=="desc"?-1:1)}}return n.index-r.index}h.exports=a},99291:(h,f,t)=>{var e=t(98612);function a(n,r){return function(l,g){if(l==null)return l;if(!e(l))return n(l,g);for(var u=l.length,p=r?u:-1,y=Object(l);(r?p--:++p<u)&&g(y[p],p,y)!==!1;);return l}}h.exports=a},42351:h=>{function f(t,e,a){for(var n=a-1,r=t.length;++n<r;)if(t[n]===e)return n;return-1}h.exports=f},35161:(h,f,t)=>{var e=t(29932),a=t(67206),n=t(69199),r=t(1469);function l(g,u){var p=r(g)?e:n;return p(g,a(u,3))}h.exports=l},89734:(h,f,t)=>{var e=t(21078),a=t(82689),n=t(5976),r=t(16612),l=n(function(g,u){if(g==null)return[];var p=u.length;return p>1&&r(g,u[0],u[1])?u=[]:p>2&&r(u[0],u[1],u[2])&&(u=[u[0]]),a(g,e(u,1),[])});h.exports=l},13217:(h,f,t)=>{var e=t(14259);function a(n){var r=n==null?0:n.length;return r?e(n,1,r):[]}h.exports=a},69572:(h,f,t)=>{var e=t(14259),a=t(40554);function n(r,l,g){return r&&r.length?(l=g||l===void 0?1:a(l),e(r,0,l<0?0:l)):[]}h.exports=n},82569:(h,f,t)=>{var e=t(20731),a=t(5976),n=t(29246),r=a(function(l,g){return n(l)?e(l,g):[]});h.exports=r},48734:(h,f,t)=>{"use strict";t.d(f,{U:()=>L,y:()=>T});var e=t(85893),a=t(67294),n=t(88972),r=t(13819),l=t(41580),g=t(11047),u=t(2504),p=t(75515);const y=({theme:b,expanded:c,variant:R,disabled:v,error:d})=>d?`1px solid ${b.colors.danger600} !important`:v?`1px solid ${b.colors.neutral150}`:c?`1px solid ${b.colors.primary600}`:R==="primary"?`1px solid ${b.colors.neutral0}`:`1px solid ${b.colors.neutral100}`,T=(0,n.ZP)(p.Z)``,O=(0,n.ZP)(l.x)`
  border: ${y};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:b})=>b.colors.primary600};

    ${T} {
      color: ${({theme:b,expanded:c})=>c?void 0:b.colors.primary700};
    }

    ${p.Z} {
      color: ${({theme:b,expanded:c})=>c?void 0:b.colors.primary600};
    }

    & > ${g.k} {
      background: ${({theme:b})=>b.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:b})=>b.colors.primary200};
    }
  }
`,L=({children:b,disabled:c=!1,error:R,expanded:v=!1,hasErrorMessage:d=!0,id:U,onToggle:S,toggle:B,size:k="M",variant:j="primary",shadow:N})=>{const K=(0,u.M)(U),ee=a.useMemo(()=>({expanded:v,onToggle:S,toggle:B,id:K,size:k,variant:j,disabled:c}),[c,v,K,S,k,B,j]);return(0,e.jsxs)(r.S.Provider,{value:ee,children:[(0,e.jsx)(O,{"data-strapi-expanded":v,disabled:c,"aria-disabled":c,expanded:v,hasRadius:!0,variant:j,error:R,shadow:N,children:b}),R&&d&&(0,e.jsx)(l.x,{paddingTop:1,children:(0,e.jsx)(p.Z,{variant:"pi",textColor:"danger600",children:R})})]})}},63081:(h,f,t)=>{"use strict";t.d(f,{v:()=>r});var e=t(85893),a=t(13819),n=t(41580);const r=({children:l,...g})=>{const{expanded:u,id:p}=(0,a.A)();if(!u)return null;const y=`accordion-content-${p}`,T=`accordion-label-${p}`,O=`accordion-desc-${p}`;return(0,e.jsx)(n.x,{role:"region",id:y,"aria-labelledby":T,"aria-describedby":O,...g,children:l})}},13819:(h,f,t)=>{"use strict";t.d(f,{A:()=>n,S:()=>a});var e=t(67294);const a=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,e.useContext)(a)},74756:(h,f,t)=>{"use strict";t.d(f,{B:()=>b});var e=t(85893),a=t(12645),n=t(88972),r=t(48734),l=t(13819);const g=({expanded:c,disabled:R,variant:v})=>{let d="neutral100";return c?d="primary100":R?d="neutral150":v==="primary"&&(d="neutral0"),d};var u=t(11047),p=t(52624),y=t(39785),T=t(75515);const O=(0,n.ZP)(y.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:c,expanded:R})=>R?c.colors.primary600:c.colors.neutral500};
    }
  }
`,L=(0,n.ZP)(u.k)`
  min-height: ${({theme:c,size:R})=>c.sizes.accordions[R]};
  border-radius: ${({theme:c,expanded:R})=>R?`${c.borderRadius} ${c.borderRadius} 0 0`:c.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:c})=>c.colors.primary600};
      }
    }
  }
`,b=({title:c,description:R,as:v="span",togglePosition:d="right",action:U,...S})=>{const{onToggle:B,toggle:k,expanded:j,id:N,size:K,variant:ee,disabled:Y}=(0,l.A)(),$=`accordion-content-${N}`,se=`accordion-label-${N}`,W=`accordion-desc-${N}`,Q=K==="M"?6:4,ae=K==="M"?Q:Q-2,ue=g({expanded:j,disabled:Y,variant:ee}),te={as:v,fontWeight:K==="S"?"bold":void 0,id:se,textColor:j?"primary600":"neutral700",ellipsis:!0,variant:K==="M"?"delta":void 0},me=j?"primary600":"neutral600",he=j?"primary200":"neutral200",re=K==="M"?`${32/16}rem`:`${24/16}rem`,ge=()=>{Y||(k&&!B?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),k()):B&&B())},oe=(0,e.jsx)(u.k,{justifyContent:"center",borderRadius:"50%",height:re,width:re,transform:j?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:he,cursor:Y?"not-allowed":"pointer",onClick:ge,shrink:0,children:(0,e.jsx)(p.J,{as:a.Z,width:K==="M"?`${11/16}rem`:`${8/16}rem`,color:j?"primary600":"neutral600"})});return(0,e.jsx)(L,{paddingBottom:ae,paddingLeft:Q,paddingRight:Q,paddingTop:ae,background:ue,expanded:j,size:K,justifyContent:"space-between",cursor:Y?"not-allowed":"",children:(0,e.jsxs)(u.k,{gap:3,flex:1,maxWidth:"100%",children:[d==="left"&&oe,(0,e.jsx)(O,{onClick:ge,"aria-disabled":Y,"aria-expanded":j,"aria-controls":$,"aria-labelledby":se,"data-strapi-accordion-toggle":!0,expanded:j,type:"button",flex:1,minWidth:0,...S,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.y,{...te,children:c}),R&&(0,e.jsx)(T.Z,{as:"p",id:W,textColor:me,children:R})]})}),d==="right"&&(0,e.jsxs)(u.k,{gap:3,children:[oe,U]}),d==="left"&&U]})})}},36989:(h,f,t)=>{"use strict";t.d(f,{Z:()=>p});var e=t(67294),a=t(45697),n=t(88972),r=t(41580),l=t(11047);const g=(0,n.ZP)(l.k)`
  & > * + * {
    margin-left: ${({theme:y})=>y.spaces[2]};
  }

  margin-left: ${({pullRight:y})=>y?"auto":void 0};
`,u=(0,n.ZP)(g)`
  flex-shrink: 0;
`,p=({startActions:y,endActions:T})=>y||T?e.createElement(r.x,{paddingLeft:10,paddingRight:10},e.createElement(r.x,{paddingBottom:4},e.createElement(l.k,{justifyContent:"space-between",alignItems:"flex-start"},y&&e.createElement(g,{wrap:"wrap"},y),T&&e.createElement(u,{pullRight:!0},T)))):null;p.defaultProps={endActions:void 0,startActions:void 0},p.propTypes={endActions:a.node,startActions:a.node}},49066:(h,f,t)=>{"use strict";t.d(f,{D:()=>r});var e=t(67294),a=t(45697),n=t(41580);const r=({children:l})=>e.createElement(n.x,{paddingLeft:10,paddingRight:10},l);r.propTypes={children:a.node.isRequired}},53979:(h,f,t)=>{"use strict";t.d(f,{T:()=>O});var e=t(67294),a=t(45697),n=t(88972),r=t(41580),l=t(11047);const g=c=>{const R=(0,e.useRef)(null),[v,d]=(0,e.useState)(!0),U=([S])=>{d(S.isIntersecting)};return(0,e.useEffect)(()=>{const S=R.current,B=new IntersectionObserver(U,c);return S&&B.observe(R.current),()=>{S&&B.disconnect()}},[R,c]),[R,v]};var u=t(95355);const p=(c,R)=>{const v=(0,u.W)(R);(0,e.useLayoutEffect)(()=>{const d=new ResizeObserver(v);return Array.isArray(c)?c.forEach(U=>{U.current&&d.observe(U.current)}):c.current&&d.observe(c.current),()=>{d.disconnect()}},[c,v])};var y=t(75515);const T=()=>{const c=(0,e.useRef)(null),[R,v]=(0,e.useState)(null),[d,U]=g({root:null,rootMargin:"0px",threshold:0});return p(d,()=>{d.current&&v(d.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{c.current&&v(c.current.getBoundingClientRect())},[c]),{containerRef:d,isVisible:U,baseHeaderLayoutRef:c,headerSize:R}},O=c=>{const{containerRef:R,isVisible:v,baseHeaderLayoutRef:d,headerSize:U}=T();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:U?.height},ref:R},v&&e.createElement(b,{ref:d,...c})),!v&&e.createElement(b,{...c,sticky:!0,width:U?.width}))};O.displayName="HeaderLayout";const L=(0,n.ZP)(r.x)`
  width: ${c=>c.width}px;
`,b=e.forwardRef(({navigationAction:c,primaryAction:R,secondaryAction:v,subtitle:d,title:U,sticky:S,width:B,...k},j)=>{const N=typeof d=="string";return S?e.createElement(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:B,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(l.k,{justifyContent:"space-between"},e.createElement(l.k,null,c&&e.createElement(r.x,{paddingRight:3},c),e.createElement(r.x,null,e.createElement(y.Z,{variant:"beta",as:"h1",...k},U),N?e.createElement(y.Z,{variant:"pi",textColor:"neutral600"},d):d),v?e.createElement(r.x,{paddingLeft:4},v):null),e.createElement(l.k,null,R?e.createElement(r.x,{paddingLeft:2},R):void 0))):e.createElement(r.x,{ref:j,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0},c?e.createElement(r.x,{paddingBottom:2},c):null,e.createElement(l.k,{justifyContent:"space-between"},e.createElement(l.k,{minWidth:0},e.createElement(y.Z,{as:"h1",variant:"alpha",...k},U),v?e.createElement(r.x,{paddingLeft:4},v):null),R),N?e.createElement(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},d):d)});b.displayName="BaseHeaderLayout",b.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},b.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},O.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},O.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(h,f,t)=>{"use strict";t.d(f,{A:()=>u});var e=t(67294),a=t(45697),n=t(88972),r=t(41580);const l=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:p})=>p?"auto 1fr":"1fr"};
`,g=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,u=({sideNav:p,children:y})=>e.createElement(l,{hasSideNav:Boolean(p)},p,e.createElement(g,{paddingBottom:10},y));u.defaultProps={sideNav:void 0},u.propTypes={children:a.node.isRequired,sideNav:a.node}},185:(h,f,t)=>{"use strict";t.d(f,{o:()=>l});var e=t(67294),a=t(45697),n=t(88972);const r=n.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:g,...u})=>{const p=g||"main-content-title";return e.createElement(r,{"aria-labelledby":p,id:"main-content",tabIndex:-1,...u})};l.defaultProps={labelledBy:void 0},l.propTypes={labelledBy:a.string}},67109:(h,f,t)=>{"use strict";t.d(f,{Z:()=>n});var e=t(85893);const a=r=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),n=a},78114:(h,f,t)=>{"use strict";t.d(f,{Z:()=>n});var e=t(85893);const a=r=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",fill:"#212134"})}),n=a}}]);
