<template>
	<div class="personPanel">
		<div class="user">
			<router-link :to="`/user/${user.loginname}`">
				<img :src="user.avatar_url" alt />
			</router-link>
			<router-link class="loginname" :to="`/user/${user.loginname}`">{{
				user.loginname
			}}</router-link>
		</div>
		<div class="score">积分：{{ user.score }}</div>
		<div class="github">
			Github:
			<a :href="`https://github.com/${user.githubUsername}`" target="_blank">{{
				user.githubUsername
			}}</a>
		</div>
		<div class="registerTime">注册时间：{{ $moment(user.create_at).fromNow() }}</div>
	</div>
</template>

<script>
import { getUserByName } from '@/utils/api'

export default {
	name: 'PersonPanel',
	props: {
		loginname: {
			type: String
		}
	},
	data() {
		return {
			user: {}
		}
	},
	methods: {
		fetchData(loginname) {
			getUserByName(loginname).then((res) => {
				this.user = res.data
				this.$store.commit('setTopics', {
					data: res.data.recent_topics
				})
				this.$store.commit('setReplies', {
					data: res.data.recent_replies
				})
			})
		}
	},
	created() {
		if (!this.loginname) {
			return
		}
		this.fetchData(this.loginname)
	},
	watch: {
		loginname() {
			if (!this.loginname) {
				return
			}
			this.fetchData(this.loginname)
		}
	}
}
</script>

<style lang="scss" scoped>
.personPanel {
	padding: 10px;
	font-size: 14px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	.user {
		display: flex;
		align-items: center;
		img {
			width: 50px;
			height: 50px;
			border-radius: 4px;
		}
		.loginname {
			text-decoration: none;
			margin-left: 15px;
			color: #42b983;
			font-weight: bold;
		}
	}
	div:not(first-child) {
		margin: 10px 0;
	}
	.github {
		a {
			text-decoration: none;
			color: #42b983;
			font-weight: bold;
		}
	}
}
</style>
