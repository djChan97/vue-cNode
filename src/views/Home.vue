<template>
	<div class="home">
		<el-tabs v-model="tab" @tab-click="tabchange">
			<el-tab-pane label="全部" name="all">
				<Content :list="list" />
			</el-tab-pane>
			<el-tab-pane label="精华" name="good">
				<Content :list="list" />
			</el-tab-pane>
			<el-tab-pane label="分享" name="share">
				<Content :list="list" />
			</el-tab-pane>
			<el-tab-pane label="问答" name="ask">
				<Content :list="list" />
			</el-tab-pane>
			<el-tab-pane label="招聘" name="job">
				<Content :list="list" />
			</el-tab-pane>
		</el-tabs>
		<el-pagination
			@current-change="handleCurrentChange"
			:page-size="20"
			layout="prev, pager, next"
			:current-page.sync="currentPage"
			:total="1000"
		></el-pagination>
	</div>
</template>

<script>
import Content from '../components/Content'
import { getTopics } from '@/utils/api'

export default {
	name: 'Home',
	components: {
		Content
	},
	data() {
		return {
			page: 1,
			limit: 20,
			tab: 'all',
			list: [],
			currentPage: 1,
			tabPage: {
				all: 1,
				ask: 1,
				share: 1,
				job: 1,
				good: 1
			},
			store: {}
		}
	},
	methods: {
		tabchange() {
			const store = this.store
			if (!store[this.tab]) {
				this.page = 1
				this.list = []
				this.getTopics(this.page)
				return
			}
			this.currentPage = this.tabPage[this.tab]
			this.list = this.store[this.tab][this.tabPage[this.tab]].data
		},
		getTopics(page) {
			getTopics({
				page: page,
				limit: this.limit,
				tab: this.tab
			}).then((res) => {
				this.list = res.data
				const store = this.store
				if (!store[this.tab]) {
					store[this.tab] = {}
				}
				store[this.tab][page] = {
					data: res.data
				}
			})
		},
		handleCurrentChange(val) {
			const store = this.store
			this.tabPage[this.tab] = this.currentPage
			if (!store[this.tab][val]) {
				this.getTopics(val)
				return
			}
			this.list = store[this.tab][val].data
		}
	},
	created() {
		this.getTopics(this.page)
	}
}
</script>

<style lang="scss" scoped>
.home {
	width: 1024px;
	text-align: center;
	margin: 50px auto;
	padding: 10px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
