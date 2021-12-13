import { isFunction, isArray } from '@/assets/lib/utils';

export const lineItemRecursion = (ydata, options) => {
  const { lineTitle, colors } = options;
  console.log('ydata', ydata);
  const series = [];
  ydata.map((ydataItem, ydataIndex) => {
    if (isFunction(ydataItem)) {
      series.push({
        ...ydataItem
      })
    } else if (isArray(ydataItem) && (ydataItem.some(item => item instanceof Array))) {
      const obj = [ ...lineItemRecursion(ydataItem, options)];
      console.log(obj)
      series.push(...obj)
    } else {
      series.push({
        name: lineTitle[ydataIndex],
        type: "line",
        symbol: "circle", //拐点设置为实心
        symbolSize: 6,
        yAxisIndex: 0,
        smooth: false,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              color: colors[ydataIndex] //改变折线颜色
            }
          }
        },
        itemStyle: {
          normal: {
            color: colors[ydataIndex], //拐点颜色
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