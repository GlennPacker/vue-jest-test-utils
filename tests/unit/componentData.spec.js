import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Component Data -', () => {
    it('reading component data props', () => {
        // Arrange
        const wrapper = mount(HelloWorld)

        // Act
        const foo = wrapper.vm.foo

        // Assert
        expect(!!foo).toBe(true)
        expect(foo).toBe('hi')
    })


    it('setting component data props', async () => {
        // Arrange
        const wrapper = mount(HelloWorld);

        // Act
        wrapper.setData({ foo: 'bye'})

        // Assert
        await wrapper.vm.$nextTick()
        expect(wrapper.html()).toMatchSnapshot();

        const foo = wrapper.vm.foo;
        expect(!!foo).toBe(true)
        expect(foo).toBe('bye')
    })
})