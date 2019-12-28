import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Topic from '@/views/Topic'
import User from '@/views/User'

Vue.use(Router)

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/topic/:id',
		name: 'topic',
		component: Topic
	},
	{
		path: '/user/:id',
		name: 'user',
		component: User
	}
]

const router = new Router({
	routes
})

export default router
