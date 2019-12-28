<template>
	<div class="topic">
		<section class="left">
			<div class="left-title">{{ topic.title }}</div>
			<div class="left-info">
				<span class="time">发布于 {{ $moment(topic.create_at).fromNow() }} 🎄</span>
				<span class="author">
					&nbsp;作者
					<router-link :to="`/user/${topic.author.loginname}`">
						{{ topic.author && topic.author.loginname }} </router-link
					>&nbsp;🎃
				</span>
				<span class="visit">&nbsp;{{ topic.visit_count }} 次浏览 💀</span>
				<span class="from">&nbsp;来自 {{ topic.tab }}</span>
			</div>
			<Divider />
			<div class="left-content markdown-body" v-html="topic.content"></div>
			<Reply :data="topic.replies && topic.replies" />
		</section>
		<section class="right">
			<PersonPanel :loginname="topic.loginname" />
			<RecentReply />
			<OtherTopic />
		</section>
	</div>
</template>

<script>
import { getTopicById } from '@/utils/api'
import Divider from '@/components/Divider'
import Reply from '@/components/Reply'
import PersonPanel from '@/components/PersonPanel'
import RecentReply from '@/components/RecentReply'
import OtherTopic from '@/components/OtherTopic'

export default {
	name: 'Topic',
	components: {
		Divider,
		Reply,
		PersonPanel,
		RecentReply,
		OtherTopic
	},
	data() {
		return {
			topic: {}
		}
	},
	methods: {
		fetchData(id) {
			getTopicById(id).then((res) => {
				this.topic = {
					...res.data,
					...res.data.author
				}
			})
		}
	},
	created() {
		this.fetchData(this.$route.params.id)
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchData(to.params.id)
		next()
	}
}
</script>

<style lang="scss" scoped>
.topic {
	width: 1250px;
	margin: 50px auto;
	display: flex;
	justify-content: space-between;
	.left {
		width: 900px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		padding: 10px;
		.left-title {
			font-size: 25px;
			font-weight: bold;
			color: #3a3535;
		}
		.left-info {
			color: #838383;
			font-size: 13px;
			margin: 12px 0px;
			.author {
				a {
					text-decoration: none;
					color: #838383;
				}
			}
		}
		.left-content {
			margin-top: 20px;
			@import url(../assets/css/markdown.css);
		}
	}
	.right {
		width: 300px;
	}
}
</style>
