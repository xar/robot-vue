import Vue from 'vue';
import {interpret} from "robot3";
import {ref} from "@vue/composition-api";

export const vueRobot = (machine: any) => {
    const _state = ref(machine.current);
    const _context = ref((machine as any).context());

    const { setState, state } = {
        setState(newState: any) {
            Vue.nextTick(() => {
                _state.value = newState;
            });
        },
        state: _state
    };
    const { setContext, context } = {
        setContext(newContext: any) {
            _context.value = newContext;
        },
        context: _context
    };

    const { send } = interpret(machine, service => {
        setState(service.machine.current);
        setContext(service.context);
    });

    return { context, send, state };
};
