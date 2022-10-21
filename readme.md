<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [简介](#%E7%AE%80%E4%BB%8B)
- [重要数据或者方法](#%E9%87%8D%E8%A6%81%E6%95%B0%E6%8D%AE%E6%88%96%E8%80%85%E6%96%B9%E6%B3%95)
- [最佳实践](#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
  - [安装](#%E5%AE%89%E8%A3%85)
  - [引入](#%E5%BC%95%E5%85%A5)
  - [基本使用](#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
  - [第一列显示数字行数](#%E7%AC%AC%E4%B8%80%E5%88%97%E6%98%BE%E7%A4%BA%E6%95%B0%E5%AD%97%E8%A1%8C%E6%95%B0)
  - [显示选择项，能够勾选某一行](#%E6%98%BE%E7%A4%BA%E9%80%89%E6%8B%A9%E9%A1%B9%E8%83%BD%E5%A4%9F%E5%8B%BE%E9%80%89%E6%9F%90%E4%B8%80%E8%A1%8C)
  - [某一列需要自定义样式，如实现按钮，输入框，或者一些其他效果等](#%E6%9F%90%E4%B8%80%E5%88%97%E9%9C%80%E8%A6%81%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F%E5%A6%82%E5%AE%9E%E7%8E%B0%E6%8C%89%E9%92%AE%E8%BE%93%E5%85%A5%E6%A1%86%E6%88%96%E8%80%85%E4%B8%80%E4%BA%9B%E5%85%B6%E4%BB%96%E6%95%88%E6%9E%9C%E7%AD%89)
  - [想根据data中的某个变量动态控制某一列是否展示，只要在columns配置中放入一个hidden字段即可。该字段一般传入一个箭头函数（方便定位this）](#%E6%83%B3%E6%A0%B9%E6%8D%AEdata%E4%B8%AD%E7%9A%84%E6%9F%90%E4%B8%AA%E5%8F%98%E9%87%8F%E5%8A%A8%E6%80%81%E6%8E%A7%E5%88%B6%E6%9F%90%E4%B8%80%E5%88%97%E6%98%AF%E5%90%A6%E5%B1%95%E7%A4%BA%E5%8F%AA%E8%A6%81%E5%9C%A8columns%E9%85%8D%E7%BD%AE%E4%B8%AD%E6%94%BE%E5%85%A5%E4%B8%80%E4%B8%AAhidden%E5%AD%97%E6%AE%B5%E5%8D%B3%E5%8F%AF%E8%AF%A5%E5%AD%97%E6%AE%B5%E4%B8%80%E8%88%AC%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E6%96%B9%E4%BE%BF%E5%AE%9A%E4%BD%8Dthis)
  - [某一列需要自定义表头样式，如需要在表头增加一些图片这类](#%E6%9F%90%E4%B8%80%E5%88%97%E9%9C%80%E8%A6%81%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A1%A8%E5%A4%B4%E6%A0%B7%E5%BC%8F%E5%A6%82%E9%9C%80%E8%A6%81%E5%9C%A8%E8%A1%A8%E5%A4%B4%E5%A2%9E%E5%8A%A0%E4%B8%80%E4%BA%9B%E5%9B%BE%E7%89%87%E8%BF%99%E7%B1%BB)
- [组件配置文档](#%E7%BB%84%E4%BB%B6%E9%85%8D%E7%BD%AE%E6%96%87%E6%A1%A3)
  - [Attributes (除以下常用属性外同时所有 element 官方的 Table Attributes 都支持)](#attributes-%E9%99%A4%E4%BB%A5%E4%B8%8B%E5%B8%B8%E7%94%A8%E5%B1%9E%E6%80%A7%E5%A4%96%E5%90%8C%E6%97%B6%E6%89%80%E6%9C%89-element-%E5%AE%98%E6%96%B9%E7%9A%84-table-attributes-%E9%83%BD%E6%94%AF%E6%8C%81)
  - [组件提供的methods](#%E7%BB%84%E4%BB%B6%E6%8F%90%E4%BE%9B%E7%9A%84methods)
  - [columnsAttributes 配置某一列的具体参数（这里支持的没有 element 官方那么多，仅仅只有官方文档中部分较为常用的属性）](#columnsattributes-%E9%85%8D%E7%BD%AE%E6%9F%90%E4%B8%80%E5%88%97%E7%9A%84%E5%85%B7%E4%BD%93%E5%8F%82%E6%95%B0%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E7%9A%84%E6%B2%A1%E6%9C%89-element-%E5%AE%98%E6%96%B9%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BB%85%E4%BB%85%E5%8F%AA%E6%9C%89%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E4%B8%AD%E9%83%A8%E5%88%86%E8%BE%83%E4%B8%BA%E5%B8%B8%E7%94%A8%E7%9A%84%E5%B1%9E%E6%80%A7)
  - [paginationAttributes （配置分页，具体可翻阅 element 的分页组件）](#paginationattributes-%E9%85%8D%E7%BD%AE%E5%88%86%E9%A1%B5%E5%85%B7%E4%BD%93%E5%8F%AF%E7%BF%BB%E9%98%85-element-%E7%9A%84%E5%88%86%E9%A1%B5%E7%BB%84%E4%BB%B6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 简介
> 基于element-table封装，把分页组件一起封装。有以下优点
> + 使用本地缓存支持自定义需要显示的列以及调整列显示顺序 。
> + 和原来的element-table用法一模一样。经测试能在写中后台业务时极大提升开发速度。
> + 节省每次书写大量<el-table-item>标签代码以及每个需要使用表格时都需要重写分页逻辑。同时还自带静态数据的分页展示功能，直接避免数据过多渲染卡顿的问题


![333FA342-5274-44BA-9A7C-EBE99566AF4F.png](https://i.loli.net/2021/11/04/3D8lPdZ9CpGogBy.jpg)
![2944191A-C295-4FCC-9B81-8ECC097EC226.png](https://i.loli.net/2021/11/04/zJsCvmXSoH2QgkD.jpg)

## 重要数据或者方法

```js
const tableData = [{ val: 1 }];//数据源
const columns = [{ label: "第一列", prop: "val" }];//定义有多少列以及每列显示什么
const pagination = {
  pageIndex: 1,
  pageSize: 15,
  total: 0,
  pageSizes: [15, 30, 50],
  layout: "sizes, prev, pager, next,total", //具体含义同elementUi官方分页组件
};
const loadData=()={}//一个更新数据tableData的方法（往往就是发起请求时处理返回数据的那个接口），方便分页发生变化时更新数据
```

## 最佳实践
### 安装
yarn add @qcsfe/table-list
### 引入
import tableList from '@qcsfe/table-list'
### 基本使用

```js
<tableList
:data="tableData"
:columns="columns"
:pagination="pagination"
@loadData="loadData"
/>
```

### 第一列显示数字行数

```js
<tableList
index
:data="tableData"
:columns="columns"
:pagination="pagination"
@loadData="loadData"
/>
```

### 显示选择项，能够勾选某一行

其中 checkedData 就是每次勾选的数据
可通过传入 selectable（具体可查看 element 官方文档关于该参数的含义）来控制某一行是否能勾选

```js
<tableList
selection
:data="tableData"
:columns="columns"
:checkedData.sync='checkedData'
:pagination="pagination"
@loadData="loadData"
/>
```

### 某一列需要自定义样式，如实现按钮，输入框，或者一些其他效果等

```js
const columns = [{ label: "第一列", slot: "operate" }];
<tableList
:data="tableData"
:columns="columns"
:pagination="pagination"
@loadData="loadData"
>
  <template v-slot:operate="{ row }">
	{{row}}自定义列
	</template>
</tableList>
```

### 想根据data中的某个变量动态控制某一列是否展示，只要在columns配置中放入一个hidden字段即可。该字段一般传入一个箭头函数（方便定位this）

```js
const columns = [
  { label: "第一列会展示", prop: "val1" },
  { label: "第二列不会展示", prop: "val2",hidden:()=>this.hide  }  //这样就能根据某个变量控制某一列是否展示
  ]
```

### 某一列需要自定义表头样式，如需要在表头增加一些图片这类

```js
const columns = [{ label: "第一列", label: "val",slotHeader:'header' }];
<tableList
:data="tableData"
:columns="columns"
:pagination="pagination"
@loadData="loadData"
>
 <template v-slot:header="{ row }">
	{{row}}自定义表头
	</template>
</tableList>
```

## 组件配置文档
### Attributes ([除以下常用属性外同时所有 element 官方的 Table Attributes 都支持](https://element.eleme.cn/#/zh-CN/component/table))

| 参数        | 说明                                                                                                                     | 类型     | 可选值 | 默认值 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ------ |
| data        | 必须，表格数据源                                                                                                         | Array    | ——     |
| columns     | 必须，定义了表格显示哪些列。详情可查看 columnsAttributes                                                                 | Array    | -      | ——     |
| pagination  | 必须，表格分页配置，具体可看 paginationAttributes                                                                        | Object   | -      | -      |
| loadData    | 必须，更新表格数据源的函数，当切换分页组件或者排序这些需要查询参数时就需要重新通知父组件去查询数据，这个事件起到这个作用 | Function | -      | —      |
| index       | 第一列是否显示行索引                                                                                                     | boolean  | --     | false  |
| selection   | 第一列是否显示选择框以允许勾选                                                                                           | boolean  | --     | false  |
| checkedData | .sync 形式传递，当 selection 为真是所勾选的数据                                                                          | Array    | -      | -      |
| selectable  | 某一列是否可勾选的判断函数 Function(row, index)                                                                          | Function | -      | -      |
| \_uuEditKey | 是否显示右上角的编辑按钮,当传了唯一值的时候就会显示                                                                      | string   | --     | ''     |
| \_isRefresh | 是否显示右上角刷新按钮                                                                                                   | boolean  | --     | false  |
|needPagination |是否需要开启分页功能，如果传入false则将数据全量展示 |boolean |-- |true|
|localPaginate|是否开启本地分页，开启后会将数据根据pagination配置自动进行分页展示|boolean|--|false|
|selectCountLimit|如果开启了表格勾选功能，那么该选项能控制能勾选的数目|number|--|100000|

### 组件提供的methods
|方法名|说明|参数|返回值|
|-|-|-|-|
|reload|调用后会重置pagination的pageIndex,并抛出$emit('loadData')事件，外部可监听进行数据重新加载|-|-|


### columnsAttributes 配置某一列的具体参数（这里支持的没有 element 官方那么多，仅仅只有官方文档中部分较为常用的属性）

| 参数                  | 说明                                                                     | 类型                                    | 可选值            | 默认值 |
| --------------------- | ------------------------------------------------------------------------ | --------------------------------------- | ----------------- | ------ |
| prop                  | 决定该显示哪个字段,该字段和 slot 必须要填写一个                          | String                                  | -                 | -      |
| label                 | 表头显示                                                                 | String                                  | -                 | -      |
| formatter             | 同 element 官方的 formatter，用来格式化单元格                            | Function(row, column, cellValue, index) | -                 | -      |
| align                 | 控制内容的显示位置                                                       | String                                  | left/center/right | center |
| width                 | 对应列的宽度                                                             | String                                  | -                 | ——     |
| min-width             | 对应列的最小宽度                                                         | String                                  | -                 | ——     |
| slot                  | 当某一列需要自定义时使用该字段插入插槽，该字段和 prop 必须填写要填写一个 | String                                  | -                 | -      |
| slotHeader            | 当某一列表头需要自定时使用该字段                                         | String                                  | -                 | -      |
| fixed                 | 列是否固定在左侧或者右侧，true 表示固定在左侧                            | string, boolean                         | true, left, right | -      |
| show-overflow-tooltip | 当内容过长被隐藏时显示省略号，注意当传了 slot 时不会生效                 | Boolean                                 | -                 | false  |
| sortable              | 同 element 官方 Table-column Attributes 属性                             | -                                       | -                 | -      |
| sort-method           | 同 element 官方 Table-column Attributes 属性                             | -                                       | -                 | -      |
| sort-by               | 同 element 官方 Table-column Attributes 属性                             | -                                       | -                 | -      |
| sort-orders           | 同 element 官方 Table-column Attributes 属性                             | -                                       | -                 | -      |
|hidden|用来控制某一列能不能展示，通常用来实现根据data中的某个变量控制某列是否展示|boolean 或者 function|-|false|


### paginationAttributes （配置分页，具体可翻阅 element 的分页组件）

示例

```
{
        pageIndex: 1,
        pageSize: 15,
        total: 1000,
        pageSizes: [15, 30, 50],
        layout: "total, sizes, prev, pager, next",
      }
```

| 参数      | 说明                         | 类型   | 可选值                                            | 默认值                            |
| --------- | ---------------------------- | ------ | ------------------------------------------------- | --------------------------------- |
| pageIndex | 当前页码                     | Number | -                                                 | 1                                 |
| pageSize  | 每页显示的数量               | Number | -                                                 | 15                                |
| total     | 总数                         | Number | -                                                 | 0                                 |
| pageSizes | 控制每页数目的下拉选项       | Array  | -                                                 | [15, 30, 50]                      |
| layout    | 组件布局，子组件名用逗号分隔 | String | sizes, prev, pager, next, jumper, ->, total, slot | "total, sizes, prev, pager, next" |
