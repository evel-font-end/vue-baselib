<template>
  <div class="date-container">
     <div class="selectTime">
        <span class="demonstration">选择时间：</span>
          <el-date-picker
            v-model="month"
            type="month"
            @change="dateChange"
            placeholder="选择年月">
          </el-date-picker>
      </div>
  </div>
</template>

<script>
export default {
  name: 'date-style-2',
  data() {
    return {
      month: '',
    }
  },
  methods: {
    dateChange(e) {
      console.log('month e', e);
      console.log('month', this.month);
    }
  }
}
</script>

<style lang="scss" scoped>
.date-container {
  width: 100%;
  height: 100%;
  position: relative;
  .selectTime {
    span {
      color: #fff;
    }
    /deep/ .el-input--suffix .el-input__inner {
      padding: 0;
      padding-left: 30px;
      padding-right: 30px;
    }
    /deep/ .el-input {
      width: 210px;
    }
    /deep/ .el-input--suffix .el-input__inner {
      padding-left: 30px;
    }
    /deep/ .el-input__inner {
      background: rgba(13, 44, 70, 0.19);
      border: 2px solid;
      border-image: linear-gradient(
          270deg,
          rgba(0, 136, 175, 0.98) 1%,
          #0088af
        )
        2 2;
      color: #fff;
    }
    /deep/ .el-input__prefix,
     .el-input__suffix {
       color: #bdeaff;
    }
  }
} 
//日期组件样式 end
</style>
<style lang="scss">
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: #0cdfe6;
}
$fontColor:#3F87B6;

// 日期组件样式 start
.el-picker-panel {
  background: linear-gradient(180deg,rgba(4,73,116,0.86) 0%, rgba(2,61,99,0.94))!important;
  box-shadow: 0px 2px 8px 0px #042a46!important; 
  border: none !important;
  .el-picker-panel__body-wrapper{
    .el-date-range-picker__time-header{
      border-bottom: 1px solid$fontColor;
      .el-date-range-picker__editors-wrap .el-input__inner{
        color: #fff;
        border: 1px solid #00acd0;
        background-color: transparent;
      }
      .el-time-panel.el-popper{
        background: linear-gradient(180deg,rgba(4,73,116,0.86) 0%, rgba(2,61,99,0.94));
        box-shadow: 0px 2px 8px 0px #042a46; 
        border: 0;
        .el-time-spinner__item{
          color: #fff;
        }
        .cancel{
          color: #fff;
        }
        .el-time-panel__footer{
          border-top: 1px solid$fontColor;
        }
      }

    }
    .el-picker-panel__body{

      .el-picker-panel__content.el-date-range-picker__content {
        // background-color: #6cfc;
        .prev-month,.next-month{
          color: #3F87B6;
        }
        .available{
          color: #fff;
        }
        .el-date-range-picker__header{
          .el-icon-d-arrow-left{
            color: #73B6E2;
          }
        }

        .el-date-table th{
          color: #fff;
        }
        
      }
      .is-left{
        border-right: 1px solid$fontColor;
        .el-icon-arrow-left:before{
          color:#3F87B6 ;
        }
      }
      .is-right{
        border-right: 1px solid$fontColor;
        .el-icon-arrow-right:before{
          color:#3F87B6 ;
        }
        .el-icon-d-arrow-right:before{
          color:#3F87B6 ;

        }
      }
      .is-left{
        border-right: 1px solid$fontColor;
        .el-icon-arrow-left:before{
          color:#3F87B6 ;
        }
      }
      .el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div {
        background-color: #237c9f!important;
    }

      // 年--start
      .el-date-picker__header--bordered {
        border-bottom: none;
      }
      .el-date-picker__header-label {
        color: #ffffff;
      }
      .el-picker-panel__icon-btn {
        color: #73b6e2;
      }
      .el-year-table td .cell:hover,
      .el-year-table td.current:not(.disabled) .cell {
        background: #00cbd8;
        border-radius: 2px;
        color: #fff;
      }
      .el-year-table td.today .cell {
        border: 1px solid #17e0ec;
        color: #fff;
      }
      .el-year-table td .cell {
        color: #fff;
      }
    }
    // 年--end

    // 年月--start
    .el-month-table td.end-date a,
    .el-month-table td.start-date a {
      background-color: #0cdfe6;
    }
    .el-month-table td.in-range div,
    .el-month-table td.in-range div:hover {
      background-color: #237c9f !important;
    }
    // 年月--end

    // 月--start
    .el-month-table td.current:not(.disabled) .cell {
      background: #00cbd8;
      border-radius: 2px;
      color: #fff;
    }
    .el-month-table td .cell {
      color: #fff;
      border-radius: none;
    }
    // 月--end

    // 月日--start
    .el-year-table td .cell:hover,
    .el-year-table td.current:not(.disabled) .cell {
      background: #00cbd8;
      border-radius: 2px;
      color: #fff;
    }
    .el-year-table td.today .cell {
      border: 1px solid #17e0ec;
      color: #fff;
    }
    .el-date-table th {
      color: #fff;
      border-bottom: none;
    }
    .el-date-table td span {
      border-radius: 0;
    }
    .el-date-table td.current:not(.disabled) span {
      background-color: #00cbd8;
    }
    .el-year-table td .cell {
      color: #fff;
    }
    // 月日--end
  }

.popper__arrow {
  border-bottom-color:$fontColor!important;
}

.el-picker-panel__footer{
  background: linear-gradient(180deg,rgba(4,73,116,0.86) 0%, rgba(2,61,99,0.94))!important;
  box-shadow: 0px 2px 8px 0px #042a46; 
  border-top: 1px solid$fontColor!important;
  .el-button{
    background-color: rgba(5, 109, 174, 0.86)!important;
    padding-left: 10px;
    padding-right: 10px;
    span{
      color: #fff;
    }
    &:hover span{
      color:#0cc9bb ;
     background-color: rgba(5, 109, 174, 0.46)!important;
    }
    }
  }
}

// 日期组件样式 end
</style>