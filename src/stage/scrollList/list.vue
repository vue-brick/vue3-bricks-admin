<template>
  <!--   style="width: 500px ; height:400px "-->
  <div class="sales-list">
    <scroll-list :config="config"
    ></scroll-list>
  </div>

</template>

<script>
import {ref, onMounted, watch, watchEffect} from 'vue'

export default {
  name: 'List',
  props: {
    data: Array,
    restProps: Object
  },
  setup(props) {
    const {dataList, ...rest} = props.restProps
    const restRef = ref(rest)
    console.log(".>>>>>>>>>>>>>>>", rest)
    const config = ref({})
    const update = () => {
      const data = []
      const headerIndexData = []  //行序号的内容
      for (let i = 0; i < props.data.length - 1; i++) {
        data[i] = []
        if (i % 2 === 0) {
          headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        } else {
          headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        }
        for (let j = 0; j < 5; j++) {
          let text = ''
          switch (j) {
            case 0:
              text = props.data[i].order
              break
            case 1:
              text = props.data[i].shop
              break
            case 2:
              text = props.data[i].rider
              break
            case 3:
              text = props.data[i].newShop
              break
            case 4:
              text = props.data[i].avgOrder
              break
            default:

          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`)
          } else {
            data[i].push(text)
          }
        }
      }
      config.value = []
      const configObj = {
        data,
        headerData: ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'],
        headerHeight: '55',
        headerFontSize: '24',
        headerColor: '#fff',      //标题背景颜色
        headerIndexContent: '',   //标题序号列内容
        headerIndex: true,
        headerBg: 'rgb(80,80,80)',
        headerIndexData,
        //希望显示多少行数据
        rowNum: 10,
        rowBg: ['rgb(40,40,40)', 'rgb(55,55,55)'],
        rowStyle: [{color: 'blue'}],
        aligns: ['center', 'center', 'center', 'center', 'center'],
        rowFontSize: 24,
        rowColor: '#fff',

      }
      config.value = Object.assign(configObj, {...restRef.value});
      console.log("data----------_>", rest)
    }
    onMounted(() => {
      update()
      console.log('config--->', config.value)
    })
    watch(() => props, () => {
      console.log("uodate")
      update()
    })
    watchEffect(() => {
          const {dataList, ...rest} = props.restProps
          restRef.value = rest
          update()
        }
    )
    return {config}

  }
}

</script>
<style lang="scss" scoped>
.sales-list {
  width: 100%;
  height: 100%;
}
</style>
