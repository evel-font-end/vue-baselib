export function formatDate(date, fmt) {// 对传入的日期数据进行格式化
      if (!(date instanceof Date)) {
        date = new Date(date);
      }

      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      console.log('for fmt', fmt);
        }
      }

      function padLeftZero(str) {
        return ('00' + str).substr(str.length);
      }
      return fmt;
    }
