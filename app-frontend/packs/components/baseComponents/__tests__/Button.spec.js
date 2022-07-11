import { mount } from '@vue/test-utils';
import Button from '../Button';

describe('component Button', () => {
    const wrapper = mount(Button, {
        props: {
            type: 'button'
        }
    });

    it('the presence of a button', () => {
        expect(wrapper.find('.tt-button').exists()).toBe(true);
    });

    it('trigger button', () => {
        wrapper.find('.tt-button').trigger('click');
    });

    it('emit button', () => {
        wrapper.vm.$emit('onClick');
        expect(wrapper.emitted().onClick).toBeTruthy();
        expect(wrapper.emitted().onClick.length).toBe(1);
    });
});
