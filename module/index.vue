<!--  
使用示例可参考上级目录的readme.md
支持element-table的Table Attributes和event

+ Attributes
index： false | true 是否显示序号列

selection： false | true 是否显示选择列
_uuEditKey: 唯一字符串，设置了后会展示列表配置按钮，该唯一name用来使用缓存
_isRefresh:是否显示右上角刷新按钮
checkedData.sync:[] 被勾选的数据
columns：列定义
selectable: 某一列是否可选的判断函数  Function(row, index)

data：必须 要显示的数据
columns: 必须 控制各列的情况,其中每个项能设置的属性为element表格中Table-column的 Attributes
    [
        {
          prop: "name",
          align: "center",
          label: "姓名",
        },
        {
          prop: "sex",
          slot: true,
          label: "性别",
        },]

每一项中prop和slot必须要设置其中一个，设置了slot表示该列是通过插槽显示


pagination:必须 分页信息
pagination: {
        pageIndex: 1,
        pageSize: 15,
        total: 1000,
        pageSizes: [15, 30, 50],
        layout: "total, sizes, prev, pager, next",
      },

+ event
loadData:当切换分页组件或者排序这些需要查询参数时就需要重新通知父组件去查询数据，这个事件起到这个作用


-->
<template>
  <div style="width: 100%">
    <div class="tableHead">
      <div style="flex: 1; margin-right: 5px">
        <slot name="right_top_btn"> </slot>
      </div>
      <span class="icon">
        <i
          class="el-icon-refresh"
          title="重加载数据"
          v-if="_isRefresh"
          @click="loadData"
        ></i>
        <i
          class="el-icon-setting"
          title="编辑表格"
          v-if="_uuEditKey"
          @click="dialogVisible = true"
        ></i>
      </span>
    </div>

    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      ref="table"
      :data="showData"
      :stripe="stripe"
      style="width: 100%"
      @selection-change="selectionChange"
    >
      <el-table-column
        :selectable="selectable"
        type="selection"
        v-if="selection"
      >
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        v-if="index"
        align="center"
        fixed="left"
      >
      </el-table-column>
      <template v-for="(item,idx) in showColumn">
        <el-table-column
          :key="idx"
          :prop="item && item.prop"
          :label="item && item.label"
          :width="item && item.width"
          :min-width="item && item['min-width']"
          :fixed="item && item.fixed"
          :formatter="item && item.formatter"
          :show-overflow-tooltip="
            (item && item['show-overflow-tooltip']) || false
          "
          :sortable="item && item.sortable"
          :sort-method="item && item['sort-method']"
          :sort-by="item && item['sort-by']"
          :align="(item && item.align) || 'center'"
          :sort-orders="item && item['sort-orders']"
          :class-name="item && item['class-name']"
        >
          <template v-if="item && item.slotHeader" v-slot:header="scoped">
            <slot
              :name="item && item.slotHeader"
              :row="scoped.row"
              :$index="scoped.$index"
            ></slot>
          </template>
          <template v-if="item && item.slot" v-slot="scoped">
            <slot
              :name="item && item.slot"
              :row="scoped.row"
              :$index="scoped.$index"
            ></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div :style="paginationStyle" v-if="needPagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination.pageIndex"
        :page-sizes="pagination.pageSizes"
        :page-size.sync="pagination.pageSize"
        :layout="pagination.layout"
        :total="pagination.total"
      >
      </el-pagination>
    </div>
   
    <ColumnConfig
      :columns="filterColumns"
      :visible.sync="dialogVisible"
      :_uuEditKey="_uuEditKey"
      :selectColumn.sync="selectedColumn"
    >
    </ColumnConfig>
  </div>
</template>

<script>
import ColumnConfig from './ColumnConfig.vue';
export default {
  name: 'mtfe_table_list',
  components: {
    ColumnConfig,
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          pageIndex: 1,
          pageSize: 15,
          total: 0,
          pageSizes: [15, 30, 50],
          layout: 'total, sizes, prev, pager, next',
        };
      },
    },
    //开启本地分页
    localPaginate: {
      type: Boolean,
      default: false,
    },
    needPagination: {
      type: Boolean,
      default: true,
    },
    columns: {
      required: true,
      type: Array,
      default: () => [],
    },
    index: {
      type: Boolean,
      default: false,
    },
    selection: {
      type: Boolean,
      default: false,
    },
    selectable: {
      type: Function,
      default: () => {
        return () => {};
      },
    },
    //控制能够勾选的最大数量，同理能够用来实现单选
    selectCountLimit: {
      type: Number,
      default: 1000000,
    },
    checkedData: {
      type: Array,
      default: () => [],
    },
    // 主要作用是用来本地缓存某一个表个实例的配置。如需要显示哪些列
    _uuEditKey: {
      type: [String,Boolean],
      default: false,
    },
    _isRefresh: {
      type: Boolean,
      default: false,
    },

    stripe: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    paginationStyle() {
      return {
        display: 'flex',
        'padding-top': '10px',
        'flex-direction': 'row',
        'justify-content':
          this.pagination.align === 'left' ? 'flex-start' : 'flex-end',
      };
    },
    // 根据columns中的hidden字段控制某一列筛选出那些列默认情况应该展示
    filterColumns() {
      return this.columns.filter(item => {
        if (item.hidden && typeof item.hidden === 'function') return !item.hidden();
        return !item.hidden;
      });
    },

    //再更具用户点击小齿轮的选项二次筛选出应该具体显示哪些列
    showColumn() {
      let data = this.filterColumns;
      if (this.selectedColumn.length) {
        // selectedColumn: ['id','name']这种形式
        data = this.selectedColumn.map((item) => {
          return this.filterColumns.find(
            (each) => each.prop === item || each.slot === item
          );
        })
          .filter(item => !!item)
        ;
      }
      return data.map(item => ({
        ...item,
        columnUUkey: item.prop || item.slot
      }));
    },
    showData() {
      if (!this.data || !this.data.length) return [];
      if (!this.needPagination) return this.data;
      const left = Math.max(
        this.pagination.pageSize * (this.pagination.pageIndex - 1),
        0
      );
      const right = Math.min(this.data.length, left + this.pagination.pageSize);
      return this.data.length === this.pagination.total
        ? this.data.slice(left, right)
        : this.data;
    },

    //组件内部使用，当前选择了的数据
    _checkedData: {
      get() {
        return this.checkedData;
      },
      set(selection) {
        this.$emit('update:checkedData', selection);
      },
    },
  },
  data() {
    return {
      selectedColumn: [],
      dialogVisible: false,
    };
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.resetSelect();
        if (this.localPaginate) {
          this.pagination.total = this.data && this.data.length || 0;
        }
      },
      immediate: true,
    },
    filterColumns() {
      this.selectedColumn = [];
    }
  },
  mounted() {
    this.resetSelect(); //满足有默认选择项的情况
  },
  methods: {
    loadData() {
      this.$emit('loadData');
    },
    reload() {
      this.pagination.pageIndex = 1;
      this._checkedData = [];
      this.$emit('loadData');
    },
    selectionChange(selection, row) {
      if (selection && selection.length > this.selectCountLimit) {
        this.$refs.table.clearSelection();
        for (let i = 0; i < this.selectCountLimit; i++) {
          this.$refs.table.toggleRowSelection(
            selection[selection.length - i - 1],
            true
          );
        }
      } else {
        this._checkedData = selection;
      }
    },
    //当表格中的数据变动时，需要重新确定哪些行需要选择
    resetSelect() {
      if (!this.$refs.table) return;
      this.$refs.table.clearSelection();
      for (let item of this.data) {
        for (let selected of this._checkedData) {
          if (JSON.stringify(item) === JSON.stringify(selected)) {
            this.$refs.table.toggleRowSelection(item, true);
          }
        }
      }
    },
    handleSizeChange() {
      this.pagination.pageIndex = 1;
      this.loadData();
    },
    handleCurrentChange() {
      !this.localPaginate && this.loadData();
    },
  },
};
</script>

<style lang="scss" scoped>
.tableHead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5px;
}
.icon {
  color: #409eff;
  font-size: 23px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  i + i {
    margin-left: 4px;
  }
}
</style>
