import t from"vue";import{interpret as e}from"robot3";import{ref as n}from"@vue/composition-api";var o=function(o){var r=n(o.current),c=n(o.context()),i={setState:function(e){t.nextTick(function(){r.value=e})},state:r},u=i.setState,a=i.state,s={setContext:function(t){c.value=t},context:c},x=s.setContext;return{context:s.context,send:e(o,function(t){u(t.machine.current),x(t.context)}).send,state:a}};export{o as vueRobot};
//# sourceMappingURL=vue-robot.mjs.map
