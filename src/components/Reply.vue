<template>
	<div class="reply">
		<div class="count">
			<span class="number">{{ data && data.length }} &nbsp;回复</span>
		</div>
		<div v-for="(reply, index) in data" :key="reply.id" class="detail">
			<div class="left">
				<img :src="reply.author.avatar_url" alt />
			</div>
			<div class="right">
				<div class="info">
					<span class="door">{{ index + 1 }} 楼</span>
					<router-link :to="`/user/${reply.author.loginname}`" class="author">{{
						reply.author.loginname
					}}</router-link>
					<span class="time">{{ $moment(reply.create_at).fromNow() }}</span>
				</div>
				<div class="content markdown-body" v-html="reply.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Reply',
	props: {
		data: {
			type: Array
		}
	}
}
</script>

<style lang="scss" scoped>
.reply {
	border: 1px solid #ebedf0;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.65);
	.count {
		padding: 15px 0px;
		border-bottom: 1px solid #ebedf0;
		.number {
			margin-left: 10px;
			color: rgba(0, 0, 0, 0.85);
			font-weight: bold;
		}
	}
	.detail {
		display: flex;
		&:not(:last-child) {
			border-bottom: 1px solid #ebedf0;
		}
		padding: 10px 0;
		.left {
			margin: 0 20px;
			img {
				width: 40px;
				height: 40px;
				border-radius: 4px;
			}
		}
		.right {
			.info {
				.author {
					margin: 0 10px;
					text-decoration: none;
					color: #42b983;
					font-weight: 600;
				}
			}
			.content {
				@import url(../assets/css/markdown.css);
				padding: 10px 0;
			}
		}
	}
}
</style>
