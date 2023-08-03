import { mount } from '@vue/test-utils';
import Input from '../Input';

describe('component Input.tsx', () => {
    const wrapper = mount(Input, {
        props: {
            modelValue: '',
            type: 'text'
        }
    });

    it('the presence of a input', () => {
        expect(wrapper.find('.tt-input').exists()).toBe(true);
    });

    it('emit input', () => {
        wrapper.vm.$emit('update', '1');
        expect(wrapper.emitted().update).toBeTruthy();
        expect(wrapper.emitted().update.length).toBe(1);
        expect(wrapper.emitted().update).toEqual([['1']]);
    });
});
