import Button from "../Button";
import {shallowMount} from "@vue/test-utils";


function createComponentWrapper() {
    return shallowMount( Button, {
        props: {
            type: 'submit'
        }
    })
}

test('render HomePageView', () => {
    const wrapper = createComponentWrapper()
    expect(wrapper.find('.tt-button').exists()).toBe(true)
    wrapper.find('.tt-button').trigger('click')
})
