import { isFunction, isArray } from '@/assets/lib/utils';

export const lineItemRecursion = (ydata, options, lineTitleName, color) => {
  const { lineTitle, colors } = options;
  const series = [];
  ydata.map((ydataItem, ydataIndex) => {
    if (isFunction(ydataItem)) {
      series.push({
        ...ydataItem
      })
    } else if (isArray(ydataItem) && (ydataItem.some(item => item instanceof Array))) {
      const obj = [ ...lineItemRecursion(ydataItem, options, lineTitle[ydataIndex], colors[ydataIndex])];
      series.push(...obj)
    } else {
      series.push({
        name: lineTitleName || lineTitle[ydataIndex],
        type: "line",
        symbol: "circle", //拐点设置为实心
        symbolSize: 6,
        yAxisIndex: 0,
        smooth: false,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              color: color || colors[ydataIndex] //改变折线颜色
            }
          }
        },
        itemStyle: {
          normal: {
            color: color || colors[ydataIndex], //拐点颜色
            borderColor: "#FFFFFF", //拐点边框颜色
            borderWidth: 2 //拐点边框大小
          }
        },
        data: ydataItem
      })
    }
  });
  return series
}