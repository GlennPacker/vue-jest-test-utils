import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('basic examples -', () => {
    it('props to component', () => {
        const wrapper = mount(HelloWorld, { propsData: { msg: 'Glenn' } });
        const heading = wrapper.find('h1');

        expect(heading.exists()).toBe(true);
        expect(heading.text()).toBe('Hello Glenn');
    });
});
