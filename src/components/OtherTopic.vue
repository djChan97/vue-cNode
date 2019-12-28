<template>
	<div class="otherTopic">
		<header>最近创建的话题</header>
		<Divider />
		<div class="simple" v-if="simple">
			<div class="title" v-for="item in topic" :key="item.id">
				<router-link v-if="simple" :to="`/topic/${item.id}`">
					{{ item.title }}
				</router-link>
			</div>
		</div>
		<div class="detail" v-else>
			<div v-for="item in topic" :key="item.id">
				<div class="wrapper">
					<router-link :to="`/topic/${item.id}`">
						<img :src="item.author.avatar_url" alt />
					</router-link>
					<div class="content">
						<router-link class="title" :to="`/topic/${item.id}`">
							{{ item.title }}
						</router-link>
					</div>
					<div class="time">{{ $moment(item.last_reply_at).fromNow() }}</div>
				</div>
				<Divider />
			</div>
		</div>
	</div>
</template>

<script>
import Divider from '@/components/Divider'

export default {
	name: 'OtherTopic',
	components: {
		Divider
	},
	props: {
		simple: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		topic() {
			return this.$store.state.recentTopics
		}
	}
}
</script>

<style lang="scss" scoped>
.otherTopic {
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	margin-top: 30px;
	padding: 10px;
	header {
		margin-bottom: 10px;
	}
	.simple {
		.title {
			a {
				display: block;
				font-size: 14px;
				margin: 8px 0;
				color: #42b983;
				font-weight: bold;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
	.detail {
		.wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10px 0;
			img {
				width: 40px;
				height: 40px;
				border-radius: 4px;
				margin-right: 10px;
			}
			.content {
				a {
					display: block;
					width: 800px;
					font-size: 14px;
					margin: 8px 0;
					color: #42b983;
					font-weight: bold;
					text-decoration: none;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			.time {
				color: #777;
				width: 80px;
				text-align: right;
				font-size: 11px;
			}
		}
	}
}
</style>
