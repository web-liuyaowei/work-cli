// 全局过滤器 加前缀global
export default {
  globalStatus(status) {
    let result = "";
    switch (status) {
      case 1:
        result = "状态一";
        break;
      case 2:
        result = "状态二";
        break;
      default:
        result = "状态三";
    }
    return result;
  }
};
