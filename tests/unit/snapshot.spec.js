import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('snapshot examples -', () => {
    it('snapshot basic test', () => {
        const wrapper = mount(HelloWorld);

        expect(wrapper.html()).toMatchSnapshot();
    });
});
