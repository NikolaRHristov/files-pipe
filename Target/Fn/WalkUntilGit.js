const{R_OK:s,W_OK:o}=(await import("fs")).constants,n=async(r,a)=>{const t=(await import("path")).dirname(r),i=a||t;if(t===r)return i;try{return await(await import("fs/promises")).access(`${t}/.git`,s|o),t}catch{return await n(t,i)}};var e=n;export{s as R_OK,o as W_OK,e as default};
