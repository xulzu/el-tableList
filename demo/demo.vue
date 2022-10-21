<template>
	<tableList
		:data="tableData"
		:columns="columns"
		border
		:pagination="pagination"
		@loadData="loadData"
		_uuEditKey='show'
	>
		<template #right_top_btn>
			<el-button>新增</el-button>
		</template>
		<template #operate='{row,$index}'>
			<button @click="delete(row,$index)">删除</button>
		</template>
	</tableList>
</template>

<script>
import tableList from "../lib/table.common.js";
export default {
	components:{
		tableList
	},
	data() {
		return {
			tableData: [
				{ val: 1, val1: 2 },
				{ val: 2, val1: 3 },
				{ val: 3, val1: 4 },
			],
			columns: [
				{ label: "第一列", prop: "val" },
				{ label: "第二列", prop: "val1" },
				{ label: "操作", slot: "operate" },
			],
			pagination: {
				pageIndex: 1,
				pageSize: 15,
				total: 0,
				pageSizes: [15, 30, 50],
				layout: "sizes, prev, pager, next,total", //具体含义同elementUi官方分页组件
			},
		};
	},
	methods: {
		loadData() {
			this.loading = true;
			setTimeout(() => {
				this.tableData = new Array(15).fill(0).map((item) => {
					return {
						val: Math.random(),
						val1: Math.random(),
					};
				});
				this.pagination.total = 30;
				this.loading = false;
			}, 1000);
		},
		delete(row, idx) {
			console.log(row, idx);
		},
	},
};
</script>

<style>
</style>