import { mount } from '@vue/test-utils';
import HomePageBanner from '../HomePageBanner';

describe('component HomePageBanner', () => {
    const wrapper = mount(HomePageBanner, {
        global: {
            mocks: {
                $store: {
                    dispatch: jest.fn()
                }
            }
        },
        props: {
            banner: {
                title: '',
                content: '',
                style: {
                    color: ''
                },
                id: ''
            }
        }
    });

    test('the presence of elements', () => {
        expect(wrapper.find('.tt-home-page-banner').exists()).toBe(true);
        expect(wrapper.find('.tt-home-page-banner__title').exists()).toBe(true);
        expect(wrapper.find('.tt-home-page-banner__text').exists()).toBe(true);
        expect(wrapper.find('.tt-home-page-banner__background-color-product').exists()).toBe(true);
        expect(wrapper.find('.tt-home-page-banner__button--first').exists()).toBe(true);
        expect(wrapper.find('.tt-home-page-banner__button--second').exists()).toBe(true);
    });
    test('trigger buttons', () => {
        wrapper.find('.tt-home-page-banner__button--first').trigger('onClick');
        wrapper.find('.tt-home-page-banner__button--second').trigger('onClick');
    });
});
