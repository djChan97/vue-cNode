<template>
	<div class="header">
		<div class="header-logo">
			<img class="logo" :src="require('@/assets/image/cnodejs.svg')" alt />
		</div>
		<div class="header-info">
			<a class="api" href="https://cnodejs.org/api" target="_blank">API</a>
			<span class="confirm" @click="dialogVisible = true">关于</span>
		</div>
		<el-dialog
			title="关于本项目"
			width="400px"
			:visible.sync="dialogVisible"
			:show-close="false"
		>
			<section class="dialog-body">
				<div class="author">
					作者：
					<a href="https://github.com/XXIANG1997" target="_blank">XXIANG1997</a>
				</div>
				<div class="source">
					github：
					<a
						href="https://github.com/XXIANG1997/vueCNode-demo-2019-9-21"
						target="_blank"
						>Vue-CNode</a
					>
				</div>
				<div class="technologys">
					技术栈：
					<ul>
						<li>Vue 全家桶</li>
						<li>axios</li>
						<li>element-ui</li>
						<li>moment.js</li>
					</ul>
				</div>
			</section>
			<footer class="dialog-footer">
				<el-button class="closeButton" @click="dialogVisible = false" type="primary"
					>确认</el-button
				>
			</footer>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialogVisible: false
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	height: 50px;
	background-color: rgb(68, 68, 68);
	display: flex;
	align-items: center;
	justify-content: space-between;
	.header-logo {
		margin-left: 10%;
		.logo {
			width: 120px;
			height: 50px;
			cursor: pointer;
		}
	}
	.header-info {
		margin-right: 10%;
		color: #ccc;
		font-size: 14px;
		.confirm {
			cursor: pointer;
			&:hover {
				color: #fff;
			}
		}
		.api {
			margin-right: 40px;
			cursor: pointer;
			text-decoration: none;
			&:visited {
				color: #ccc;
			}
			&:focus {
				color: #fff;
			}
			&:hover {
				color: #fff;
			}
		}
	}
	.dialog-body {
		font-size: 14px;
		div {
			line-height: 1.6;
		}
		a {
			text-decoration: none;
			color: rgb(66, 185, 131);
		}
	}
	.dialog-footer {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
