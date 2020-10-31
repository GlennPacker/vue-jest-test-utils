import { mount, shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('basic examples -', () => {
    it('renders / mount', () => {
        const wrapper = mount(HelloWorld)
        const container = wrapper.find('.container');
        expect(container.exists()).toBe(true)
    })

    it('shallow mount', () => {
        const wrapper = shallowMount(HelloWorld);

        expect(wrapper.exists());
        expect(wrapper.html()).toMatchSnapshot()
    })
})