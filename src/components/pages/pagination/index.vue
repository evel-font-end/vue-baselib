<template>
  <div class="content">
    <div class="show-item  bg-black">
      <p class="title">分页一</p>
      <div class="item-content">
        <pagination1
          @current-change="onCurrentChange"
          :pageSize="page.pageSize"
          :pageCurrent="page.current"
          :total="page.total"
        ></pagination1>
      </div>
      <div class="item-content">
        <pagination2
          @current-change="onCurrentChange2"
          :pageSize="page2.pageSize"
          :pagerCount="page2.count"
          :pageCurrent="page2.current"
          :total="page2.total"
        ></pagination2>
      </div>
    </div>
    <div class="show-item  bg-black">
      <p class="title">分页二</p>
      <div class="item-content">
         <pagination5
          @current-change="onCurrentChange5"
          @size-change="onPageSizeChange5"
          :pageSize="page5.pageSize"
          :pagerCount="page5.count"
          :pageCurrent="page5.current"
          :total="page5.total"
        ></pagination5>
      </div>
      <div class="item-content">
        <pagination7
          @current-change="onCurrentChange7"
          @size-change="onPageSizeChange7"
          :pageSize="page7.pageSize"
          :pageCurrent="page7.current"
          :total="page7.total"
        ></pagination7>
      </div>
    </div>
  </div>
</template>

<script>
import boxContainer from '../common/box-container';
import pagination1 from '../../cell/pagination/pagination-style-1.vue';
import pagination2 from '../../cell/pagination/pagination-style-2.vue';
import pagination3 from '../../cell/pagination/pagination-style-3.vue';
import pagination4 from '../../cell/pagination/pagination-style-4.vue';
import pagination5 from '../../cell/pagination/pagination-style-5.vue';
import pagination6 from '../../cell/pagination/pagination-style-6.vue';
import pagination7 from '../../cell/pagination/pagination-style-7.vue';
import pagination8 from '../../cell/pagination/pagination-style-8.vue';

export default {
  name: 'pagination',
  data() {
    return {
      page: {
        current: 1,
        pageSize: 10,
        total: 70,
      },
      page2: {
        current: 1,
        pageSize: 10,
        count: 5,// 设置最大页码按钮数
        total: 230,
      },
      page3: {
        current: 1,
        pageSize: 10,
        count: 5,// 设置最大页码按钮数
        total: 230,
      },
      page5: {
        current: 1,
        pageSize: 10,
        count: 5,// 设置最大页码按钮数
        total: 70,
      },
      page6: {
        pageNo: 1, // 当前所在页数
        total: 20, // 一共多少条
        totalPageNo: 4, // 一共多少页
        pageSize: 5 // 每页显示条数
      },
      page7: {
        current: 1,
        pageSize: 20,
        // count: 5,// 设置最大页码按钮数
        total: 100,
      },
    }
  },
  watch: {
    totol(val) {
      console.log('val', val);
    }
  },
  components: {
    boxContainer,
    pagination1,
    pagination2,
    pagination3,
    pagination4,
    pagination5,
    pagination6,
    pagination7,
    pagination8,
  },
  methods: {
     // 分页切换页面
      onCurrentChange(val) {
        console.log('this.page', val);
        this.page.current = val;
      },
      onCurrentChange2(val) {
        console.log('this.page', val);
        this.page2.current = val;
      },
      onCurrentChange3(val) {
        console.log('this.page', val);
        this.page3.current = val;
      },
      onCurrentChange5(val) {
        console.log('this.page', val);
        this.page5.current = val;
      },
      onPageSizeChange5(val) {
        this.page5.pageSize = val;
      },
      onCurrentChange6(val) {
        this.page6.pageNo = val;
    },
    onPageSizeChange6(val) {
      this.page6.pageSize = val;
    },
    onCurrentChange7(val) {
        console.log('this.page', val);
        this.page7.current = val;
      },
  onPageSizeChange7(val) {
        this.page7.pageSize = val;
      },
  }
}
</script>

<style lang="scss" scoped>
@import './pagination.scss'
</style>