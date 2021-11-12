<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      title="分页一"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption1('pagination1')">  
      <pagination1
        @current-change="onCurrentChange"
        :pageSize="page.pageSize"
        :pageCurrent="page.current"
        :total="page.total">
      </pagination1>
      <pagination2
        @current-change="onCurrentChange2"
        :pageSize="page2.pageSize"
        :pagerCount="page2.count"
        :pageCurrent="page2.current"
        :total="page2.total">
      </pagination2>
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow2"
      title="分页二"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption2('pagination2')">  
      <pagination3
        @current-change="onCurrentChange3"
        @size-change="onPageSizeChange3"
        :pageSize="page3.pageSize"
        :pagerCount="page3.count"
        :pageCurrent="page3.current"
        :total="page3.total">
      </pagination3>
      <pagination4
        @current-change="onCurrentChange4"
        @size-change="onPageSizeChange4"
        :pageSize="page4.pageSize"
        :pageCurrent="page4.current"
        :total="page4.total">
      </pagination4>
    </box-container>
  </div>
</template>

<script>
import boxContainer from '../common/box-container-2';
import pagination1 from '../../cell/pagination/pagination-style-1.vue';
import pagination2 from '../../cell/pagination/pagination-style-2.vue';
import pagination3 from '../../cell/pagination/pagination-style-3.vue';
import pagination4 from '../../cell/pagination/pagination-style-4.vue';

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
  methods: {
    showOption1(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    },
    showOption2(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    },
  },
  components: {
    boxContainer,
    pagination1,
    pagination2,
    pagination3,
    pagination4,
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
      onPageSizeChange3(val) {
        this.page3.pageSize = val;
      },
      onCurrentChange4(val) {
        console.log('this.page', val);
        this.page4.current = val;
      },
      onPageSizeChange4(val) {
        this.page4.pageSize = val;
      },
  }
}
</script>

<style lang="scss" scoped>
@import './pagination.scss'
</style>