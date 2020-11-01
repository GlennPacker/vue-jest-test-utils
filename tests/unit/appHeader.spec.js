import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(AppHeader);
    });

    test('basic render', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('logout button should show by default', () => {
        expect(wrapper.find('button').isVisible()).toBe(false);
    });

    test('logout button should show when loggedIn is true', async () => {
        wrapper.setData({ loggedIn: true });

        await wrapper.vm.$nextTick();
        expect(wrapper.find('button').isVisible()).toBe(true);
    });
});
