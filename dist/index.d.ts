export default function vueRobot<C>(machine: any): {
    context: import("@vue/composition-api").Ref<import("@vue/composition-api/dist/types/basic").HasDefined<C> extends true ? C : unknown>;
    send: import("robot3").SendFunction<string>;
    state: import("@vue/composition-api").Ref<string>;
};
