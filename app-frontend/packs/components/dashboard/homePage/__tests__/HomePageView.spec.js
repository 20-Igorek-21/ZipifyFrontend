import { mount } from '@vue/test-utils';
import HomePageView from '../HomePageView';

describe(' component HomePageView', () => {
    const wrapper = mount(HomePageView, {
        global: {
            mocks: {
                $store: {
                    state: {
                        isLoader: false,
                        isEmpty: true
                    },
                    dispatch: jest.fn()
                }
            }
        }
    });

    test('display the main content using the directive v-if', () => {
        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.find('LoaderPage').exists()).toBe(false);
    });
    test('display home page content using the directive v-if', () => {
        expect(wrapper.find('.tt-home-page-empty-state').exists()).toBe(true);
        expect(wrapper.find('.tt-home-page-with-banners').exists()).toBe(false);
    });
});
