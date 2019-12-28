import Content from '@/components/Content.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import moment from 'moment'
import VueRouter from 'vue-router'
import { Tag } from 'element-ui'

describe('Content.vue', () => {
	const localVue = createLocalVue()
	const router = new VueRouter()
	localVue.prototype.$moment = moment
	localVue.use(VueRouter)
	localVue.use(Tag)

	it('Content has list props', () => {
		const test = [
			{
				author: {
					loginname: 'test',
					avatar_url: 'test_url'
				},
				reply_count: 1,
				reply_visit: 1,
				top: true,
				tab: 'share',
				id: 123456,
				title: 'test',
				last_reply_at: Date.now()
			}
		]
		const wrapper = mount(Content, {
			propsData: {
				list: test
			},
			localVue,
			router
		})
		expect(wrapper.props('list')).toBe(test)
	})
})
