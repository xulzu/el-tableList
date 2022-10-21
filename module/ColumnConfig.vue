<!-- 控制表格列的显示与否与显示顺序
特性1：超过两个月的缓存会失效
特性2：当外部的列配置（columns）改变时会重置
 -->
<template>
  <div>
    <el-dialog
      title="设置需展示的列"
      @open="opened()"
      :visible.sync="dialogVisible"
      width="800px"
      append-to-body
    >
      <div>
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox
        >
        <el-button
          type="text"
          style="text-decoration: underline;color: red;"
          @click="$refs.SortColumn.open()"
        >手动排序</el-button
        >
        <el-button
          type="text"
          style="text-decoration: underline;color: red;"
          @click="reset"
        >重置配置</el-button
        >

        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="checkboxSelectBuff"
          @change="handleCheckedCitiesChange"
        >
          <el-col
            :span="8"
            v-for="item in __column"
            class="colCheckbox"
            :key="item.columnUUkey"
          >
            <el-checkbox :title="item.label" :label="item.columnUUkey">{{ item.label }} </el-checkbox>
          </el-col>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small"  @click="dialogVisible = false"
        >取 消</el-button
        >
        <el-button size="small" type="primary" @click="confirm"
        >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 排序 -->
    <SortColumn
      ref="SortColumn"  
      :column="__column"
      @close="clsoeSort"
    ></SortColumn>
  </div>
</template>

<script>
import SortColumn from './SortColumn.vue';
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      require: true,
      default: false,
    },
    selectColumn: {
      type: Array,
      default: () => [],
    },
    _uuEditKey: {
      type: String,
      default: '',
    },
  },
  components: { SortColumn },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      },
    },
    checkboxSelect: {
      get() {
        return this.selectColumn;
      },
      set(val) {
        this.$emit('update:selectColumn', val);
      },
    },
    // 组件内部使用 ， 避免错误修改了父组件的数据,同时返回的是经过了排序的数据
    __column() {
      return this.columns
        .map((item) => {
          return {
            label: item.label,
            columnUUkey: item.prop || item.slot,
          };
        })
        .sort(
          (a, b) =>
            (this.__sortWeight[a.columnUUkey] || 0) -
            (this.__sortWeight[b.columnUUkey] || 0)
        );
    },
    //排序权重
    __sortWeight() {
      const ans = {};
      for (let i = 0; i < this.sortColumnList.length; i++) {
        ans[this.sortColumnList[i]] = i;
      }
      return ans;
    },
  },
  data() {
    return {
      sortColumnList: [],
      checkAll: false,
      isIndeterminate: false,
      checkboxSelectBuff: [],
      oldColumns: []
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkboxSelectBuff = val
        ? this.__column.map((item) => item.columnUUkey)
        : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      this.checkboxSelectBuff = value;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.__column.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.__column.length;
    },
    opened() {
      const diffColumns = this.__column.filter(item => !this.oldColumns.includes(item.columnUUkey)).map(item => item.columnUUkey);
      this.checkboxSelectBuff = this.checkboxSelectBuff.concat(diffColumns).sort(
        (a, b) =>
          (this.__sortWeight[a] || 0) -
            (this.__sortWeight[b] || 0)
      );
      this.oldColumns = this.__column.map(item => item.columnUUkey);
      this.checkAll = this.checkboxSelectBuff.length === this.__column.length;
      this.isIndeterminate =
        this.checkboxSelectBuff.length > 0 &&
        this.checkboxSelectBuff.length < this.__column.length;
    },
 
    clsoeSort(val) {
      this.sortColumnList = this.oldColumns = val || [];
      this.checkboxSelectBuff = this.checkboxSelectBuff.sort(
        (a, b) =>
          (this.__sortWeight[a] || 0) -
            (this.__sortWeight[b] || 0)
      );

    },
    reset() {
      this.sortColumnList = [];
      this.checkboxSelectBuff = this.__column.map((item) => item.columnUUkey);
    },
    confirm() {
      this.checkboxSelect = this.checkboxSelectBuff;
      this.sortColumnList = this.oldColumns;
      this.dialogVisible = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.colCheckbox ::v-deep .el-checkbox {
  display: flex;
  flex-direction: row;
  .el-checkbox__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    flex-wrap: nowrap;
  }
}
</style>
