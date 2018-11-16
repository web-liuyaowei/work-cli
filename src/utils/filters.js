export default {
  status(status) {
    let result = ""
    switch (status) {
      case 1:
        result = "状态一"
        break;
      case 2:
        result = "状态二"
        break;
      default:
        result = "状态三"
    }
    return result;
  }
};
