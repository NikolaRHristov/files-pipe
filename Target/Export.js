const s=(await import("./Fn/By.js")).default,c=(await import("./Fn/Bytes.js")).default,l=(await import("./Fn/Apply.js")).default,y=(await import("./Fn/WalkUntilGit.js")).default,a=(await import("./Object/Option.js")).default,n=(await import("./Fn/In.js")).default,p=(await import("./Fn/Merge.js")).default,i=(await import("./Fn/Not.js")).default,f=(await import("./Fn/Pipe.js")).default;class u{Pipe=async t=>await f(this.Plan,p(a.Action,t));Not=async t=>(this.Plan.Results=await i(t,this.Plan.Results),this);By=async(t="**/*")=>(this.Plan.Results=await s(t,this.Plan.Paths,this.Plan.Results),this);In=async(t="./")=>{const e=await n(t,this.Plan.Paths);if(e instanceof Map)for(const[o,r]of e)this.Plan.Paths.set(o,r);return this};Plan={Cache:a.Cache,Files:0,Logger:a.Logger,Info:{},Paths:new Map,Results:new Map,On:{Buffer:"",After:0,Before:0,Input:"",Output:""}};constructor(t,e){console.log(t),this.Plan.Cache=t??this.Plan.Cache,this.Plan.Logger=e??this.Plan.Logger}}export{l as Apply,s as By,c as Bytes,a as Default,n as In,p as Merge,i as Not,f as Pipe,y as WalkUntilGit,u as default};
