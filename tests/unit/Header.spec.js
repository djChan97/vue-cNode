import Header from '@/components/Header'
import { mount, createLocalVue } from '@vue/test-utils'
import { Dialog, Button } from 'element-ui'

describe('Header.vue', () => {
	const localVue = createLocalVue()
	localVue.use(Dialog)
	localVue.use(Button)
	const wrapper = mount(Header, {
		localVue,
		stubs: ['router-link']
	})
	it('Header has data dialogVisible', () => {
		wrapper.setData({
			dialogVisible: true
		})
		expect(wrapper.vm.dialogVisible).toBe(true)
	})
	it('click button show dialog', () => {
		const button = wrapper.find('.confirm')
		button.trigger('click')
		expect(wrapper.vm.dialogVisible).toBe(true)
	})
	it('click dialog button to close', () => {
		wrapper.setData({
			dialogVisible: true
		})
		const closeButton = wrapper.find('.closeButton')
		closeButton.trigger('click')
		expect(wrapper.vm.dialogVisible).toBe(false)
	})
})
