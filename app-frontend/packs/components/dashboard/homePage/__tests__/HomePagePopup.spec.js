import { mount } from '@vue/test-utils';
import HomePagePopup from '../HomePagePopup';

describe('component HomePagePopup', () => {
    const wrapper = mount(HomePagePopup, {
        global: {
            mocks: {
                $store: {
                    dispatch: jest.fn()
                }
            }
        }
    });

    test('the presence of elements', () => {
        expect(wrapper.find('.tt-page__button--second').exists()).toBe(true);
        expect(wrapper.find('.tt-confirm__button-close').exists()).toBe(true);
        expect(wrapper.find('.tt-confirm__title').exists()).toBe(true);
    });
    test('trigger buttons', () => {
        wrapper.find('.tt-page__button--second').trigger('onClick');
        wrapper.find('.tt-confirm__button-close').trigger('onClick');
    });
    it('emit button', () => {
        wrapper.vm.$emit('onClosePopup');
        expect(wrapper.emitted().onClosePopup).toBeTruthy();
        expect(wrapper.emitted().onClosePopup.length).toBe(1);
    });
});
