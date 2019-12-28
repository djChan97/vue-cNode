<template>
	<div class="user">
		<PersonPanel :loginname="$route.params.id" />
		<RecentReply :simple="false" />
		<OtherTopic :simple="false" />
	</div>
</template>

<script>
import PersonPanel from '@/components/PersonPanel'
import RecentReply from '@/components/RecentReply'
import OtherTopic from '@/components/OtherTopic'

export default {
	name: 'User',
	components: {
		PersonPanel,
		RecentReply,
		OtherTopic
	}
}
</script>

<style lang="scss" scoped>
.user {
	width: 960px;
	margin: 50px auto;
}
</style>
