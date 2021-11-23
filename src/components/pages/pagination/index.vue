<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      title="分页一"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption('paginationStyle1')">  
      <pagination-style-1
        ref="paginationStyle1"
        @current-change="onCurrentChange"
        :pageSize="page.pageSize"
        :currentPage="page.current"
        :total="page.total">
      </pagination-style-1>
      <pagination-style-2
        @current-change="onCurrentChange2"
        :pageSize="page2.pageSize"
        :pagerCount="page2.count"
        :currentPage="page2.current"
        :total="page2.total">
      </pagination-style-2>
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow2"
      title="分页二"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption('paginationStyle3')">  
      <pagination-style-3
        ref="paginationStyle3"
        @current-change="onCurrentChange3"
        @size-change="onPageSizeChange3"
        :pageSize="page3.pageSize"
        :pagerCount="page3.count"
        :currentPage="page3.current"
        :total="page3.total">
      </pagination-style-3>
      <pagination-style-4
        @current-change="onCurrentChange4"
        @size-change="onPageSizeChange4"
        :pageSize="page4.pageSize"
        :currentPage="page4.current"
        :total="page4.total">
      </pagination-style-4>
    </box-container>
  </div>
</template>

<script>
import boxContainer from '../common/box-container-2';
import paginationStyle1 from '../../cell/pagination/pagination-style-1.vue';
import paginationStyle2 from '../../cell/pagination/pagination-style-2.vue';
import paginationStyle3 from '../../cell/pagination/pagination-style-3.vue';
import paginationStyle4 from '../../cell/pagination/pagination-style-4.vue';

export default {
  name: 'pagination',
  data() {
    return {
      spinShow1: true,
      spinShow2: true,
      page: {
        current: 1,
        pageSize: 10,
        total: 70,
      },
      page2: {
        current: 1,
        pageSize: 10,
        count: 5,
        total: 230,
      },
      page3: {
        current: 1,
        pageSize: 10,
        count: 5,
        total: 230,
      },
      page4: {
        current: 1,
        pageSize: 20,
        total: 100,
      },
    }
  },
  created() {
    this.spinShow1 = false;
    this.spinShow2 = false;
  },
  components: {
    boxContainer,
    paginationStyle1,
    paginationStyle2,
    paginationStyle3,
    paginationStyle4,
  },
  methods: {
     // 分页切换页面
      onCurrentChange(val) {
        this.page.current = val;
      },
      onCurrentChange2(val) {
        this.page2.current = val;
      },
      onCurrentChange3(val) {
        this.page3.current = val;
      },
      onPageSizeChange3(val) {
        this.page3.pageSize = val;
      },
      onCurrentChange4(val) {
        this.page4.current = val;
      },
      onPageSizeChange4(val) {
        this.page4.pageSize = val;
      },
      showOption(ref) {
       this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
    },
  }
}
</script>

<style lang="scss" scoped>
@import './pagination.scss'
</style>