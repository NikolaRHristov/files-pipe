var f=async(...[o,r,t])=>{for(const[e,p]of r)for(const a of await(await import("fast-glob")).default(o,{cwd:e??s(),onlyFiles:!0}))t.set(`${p}${a}`,`${e}${a}`);return t};const{cwd:s}=await import("process");export{s as cwd,f as default};
