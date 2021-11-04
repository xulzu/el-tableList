<!-- 控制表格列的显示与否与显示顺序
特性1：超过两个月的缓存会失效
特性2：当外部的列配置（columns）改变时会重置
 -->
<template>
  <div>
    <el-dialog
      title="设置需展示的列"
      @open="opened"
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
          @click="openSort"
        >手动排序</el-button
        >
        <el-button
          type="text"
          style="text-decoration: underline;color: red;"
          @click="reset"
        >重置配置</el-button
        >
        <el-input type="textarea" @input="testHnadle" v-model="test"></el-input>

        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="checkboxSelect"
          @change="handleCheckedCitiesChange"
        >
          <el-col
            :span="8"
            v-for="item in __column"
            class="colCheckbox"
            :key="item.columnUUkey"
          >
            <el-checkbox :title="item.label" :label="item.columnUUkey"
            >{{ item.label }}
            </el-checkbox>
          </el-col>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="dialogVisible = false"
        >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 排序 -->
    <SortColumn
      v-if="isOpenSort"
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
        this.setCache(this.cacheKey, val || []);
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
      test: '',
      isOpenSort: false,
      sortColumnList: [],
      checkAll: false,
      isIndeterminate: false,
      cacheKey:
        window.location.href.split('?')[0] + this._uuEditKey + '/preSelected/', //当前选择的结果key
      oldCheckboxCacheKey:
        window.location.href.split('?')[0] +
        this._uuEditKey +
        '/preAllColumns/', //上一次的所有列的结果key
      //存储排序结果的key
      sortKey:
        window.location.href.split('?')[0] + this._uuEditKey + '/sortColumns/',
    };
  },
  created() {
    this.opened();
  },
  methods: {
    testHnadle(val) {
      console.log(
        val
          .replace(/\"/g, '\\"')
          .replace(/\t/g, '\\t')
          .split(/\n/)
          .map((item) => '"' + item + '"')
          .join(',')
      );
    },
    handleCheckAllChange(val) {
      this.checkboxSelect = val
        ? this.__column.map((item) => item.columnUUkey)
        : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      this.checkboxSelect = value;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.__column.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.__column.length;
    },
    getCache(key) {
      if (this._uuEditKey && window.localStorage) {
        const preData = JSON.parse(localStorage.getItem(key));
        // 如果上次打开的时间过了两个月，那么清空缓存
        if (preData && Date.now() - preData.time > 60 * 24 * 60 * 60 * 10000) {
          localStorage.removeItem(key);
          return;
        }
        return preData && preData.content;
      }
    },
    setCache(key, val) {
      if (this._uuEditKey && window.localStorage) {
        localStorage.setItem(
          key,
          JSON.stringify({
            time: Date.now(),
            content: val,
          })
        );
      }
    },
    removeCache(key) {
      if (window.localStorage) {
        localStorage.removeItem(key);
      }
    },
    opened() {
      const oldCheckbox = this.getCache(this.oldCheckboxCacheKey) || [];
      this.sortColumnList = this.getCache(this.sortKey) || []; //每次打开时拿出上次排序结果
      // 如果本次的列表列定义和上一次打开时不一样，那就全部展示。这样可以避免当需求变动导致显示的列变动时不会更新的问题
      if (
        this.__column.map((item) => item.columnUUkey).join(',') !==
        oldCheckbox.join(',')
      ) {
        const arr = this.__column.map((item) => item.columnUUkey);
        this.checkboxSelect = arr;
        this.setCache(this.oldCheckboxCacheKey, arr);
      } else {
        this.checkboxSelect = this.getCache(this.cacheKey) || [];
      }
      this.checkAll = this.checkboxSelect.length === this.__column.length;
      this.isIndeterminate =
        this.checkboxSelect.length > 0 &&
        this.checkboxSelect.length < this.__column.length;
    },
    openSort() {
      this.isOpenSort = true;
      this.dialogVisible = false;
    },
    clsoeSort(val) {
      this.isOpenSort = false;
      this.setCache(this.sortKey, val);
      this.dialogVisible = true;
    },
    reset() {
      this.removeCache(this.sortKey);
      this.sortColumnList = [];
      this.checkboxSelect = this.__column.map((item) => item.columnUUkey);
    },
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
