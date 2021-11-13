<template>
  <div>
    <a-descriptions :title="description.name" layout="vertical">
      <a-descriptions-item label="组件描述" span="2">
        <div v-html="description.desc">

        </div>
      </a-descriptions-item>
    </a-descriptions>
    <a-table :columns="columns" :data-source="data" bordered :pagination="false">
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
const description = {
  desc: '这是XXX组件',
  name: 'XXX'
}
const columns = [
  {
    title: '参数名称',
    dataIndex: 'propsName',
    scopedSlots: {customRender: 'propsName'},
  },
  {
    title: '类型',
    className: 'type',
    dataIndex: 'type',
  },
  {
    title: '值',
    dataIndex: 'data',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
import {defineComponent} from 'vue'


export default defineComponent({
  name: 'propsTable',
  components: {},
  props: {

    data: {
      type: Object,
      default: data
    },
    description: {
      type: Object,
      default: description
    }

  },
  setup(props) {
    return {
      columns,
      ...props
    }
  }
})
</script>

<style scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}

.ant-table-pagination.ant-pagination {
  display: none !important;
}
</style>


<!--    "postcss": "^7.0.35" -->
