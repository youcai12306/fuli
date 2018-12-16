function padding(s, len) {
  var len = len - (s + '').length;
  for (var i = 0; i < len; i++) {
    s = '0' + s;
  }
  return s;
};

export default { 
  isEmpty(s) {
    return s == null || s == "" || s == "undefined" ? true : false;
  },
  formatData(date, pattern) {
    let newDate;
    switch (typeof (date)) {
      case 'string':
        newDate = new Date(date);
        break; //字符串格式
      case 'number':
        newDate = new Date();
        newDate.setTime(date * 1000);
        break; //时间戳格式
      case 'object':
        newDate = date;
        break;
      default:
        return date;
    }
    if (!newDate) {
      return '-';
    } else {
      pattern = pattern || 'yyyy-MM-dd';
      return pattern.replace(/([yMdhsmw])(\1*)/g, function ($0) {
        switch ($0.charAt(0)) {
          case 'y':
            return padding(newDate.getFullYear(), $0.length);
          case 'M':
            return padding(newDate.getMonth() + 1, $0.length);
          case 'd':
            return padding(newDate.getDate(), $0.length);
          case 'w':
            return newDate.getDay();
          case 'h':
            return padding(newDate.getHours(), $0.length);
          case 'm':
            return padding(newDate.getMinutes(), $0.length);
          case 's':
            return padding(newDate.getSeconds(), $0.length);
        }
      });
    }
  },
  getQueryString(name) {
    //获取链接参数
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  },
  formatDatas(data) {
    //格式化参数
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }
};
