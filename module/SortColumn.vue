<template>

  <el-dialog
    title="拖动节点进行排序"
    :visible.sync="dialogVisible"
    width="500px"
    append-to-body
  >
    <el-tree
      :data="data"
      node-key="columnUUkey"
      default-expand-all
      draggable
      :allow-drop="allowDrog"
    >
    </el-tree>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" type="primary" @click="close"
      >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    column: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      data: [],
      dialogVisible: false,
    };
  },
  created() {
  },
  methods: {
    open() {
      this.dialogVisible = true;
      this.data = this.column.map((item) => {
        return {
          columnUUkey: item.columnUUkey,
          label: item.label,
        };
      });
    },
    close() {
      this.dialogVisible = false;
      this.$emit(
        'close',
        this.data.map((item) => item.columnUUkey)
      );
    },
    allowDrog(draggingNode, dropNode, type) {
      return type !== 'inner';
    },
  },
};
</script>

