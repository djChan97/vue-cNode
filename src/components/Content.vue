<template>
	<div class="content">
		<div class="topic" v-for="item in list" :key="item.id">
			<router-link :to="`/user/${item.author.loginname}`">
				<img class="topic-img" :src="item.author.avatar_url" alt="用户头像" />
			</router-link>
			<div class="topic-count">
				<span>{{ item.reply_count }}</span> /
				<span>{{ item.visit_count }}</span>
			</div>
			<div class="topic-type">
				<el-tag v-if="item.top">置顶</el-tag>
				<el-tag v-else-if="!item.tab" color="#f4f4f4">其他</el-tag>
				<el-tag v-else :type="$tab[item.tab] && $tab[item.tab].type">{{
					$tab[item.tab].name
				}}</el-tag>
			</div>
			<router-link class="topic-title" :to="{ path: '/topic/' + item.id }">{{
				item.title
			}}</router-link>
			<div class="topic-time">{{ $moment(item.last_reply_at).fromNow() }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Content',
	props: {
		list: {
			type: Array
		}
	}
}
</script>

<style lang="scss" scoped>
.topic {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
	.topic-img {
		width: 40px;
		height: 40px;
		border-radius: 6px;
	}
	.topic-count {
		width: 115px;
		margin: 0px 10px;
		font-size: 12px;
		span:first-child {
			color: #9e78c0;
		}
		span:last-child {
			color: #b4b4b4;
		}
	}
	.topic-type {
		width: 50px;
	}
	.topic-title {
		text-align: left;
		color: #42b983;
		font-weight: 600;
		font-size: 14px;
		text-decoration: none;
		width: 60%;
		margin: 0px 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.topic-time {
		width: 100px;
		color: #778087;
		font-size: 12px;
		text-align: right;
	}
}
</style>
