<template>
	<el-cascader
		:options="obj.options"
		:props="obj.props"
		ref="cascaderAddr"
		v-model="obj.selectedOptions"
		@change="handleChange">
 	</el-cascader>
</template>

<script lang="ts">
let pcas = require('../common/js/map/pca.json')
import { ref, toRefs, reactive, onMounted, getCurrentInstance, watch } from "vue";
export default {
  name: 'receiveAddress',
  props: {
    model: {
      type: Array,
      default: () => []
    }
  },
  emits: ['change'],
  setup(props: any, context: any) {
    let obj: any = reactive({
        options: pcas,
        props: {
            value: 'code',
            label: 'name'
        },
        selectedOptions: [],
    })
    const cascaderAddr = ref<any>({})

    const changeOption = (options: any[]) => {
      return options.map((changeItem: any) => changeItem.regionCode);
    }
    // 获取省市区地址级联
    const handleChange = (e: any, form: any, thsAreaCode: any) => {
        const values = cascaderAddr.value.getCheckedNodes()[0]
        thsAreaCode = values.pathLabels.map((laber: string, laberIndex: number) => {
          return {
            regionName: laber,
            regionCode: values.pathValues[laberIndex]
          }
        })
        context.emit('change', thsAreaCode);
    }
    watch(() => props.model, (changeVal) => {
      if(JSON.stringify(changeVal) !== JSON.stringify(obj.selectedOptions)) {
        obj.selectedOptions = changeOption(changeVal)
        console.log('obj.selectedOptions', obj.selectedOptions);
      }
    }, { immediate: true })
    onMounted(() => {
    })
    return {
    obj,
    cascaderAddr,
    handleChange
    }
  }
}
</script>