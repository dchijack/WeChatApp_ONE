// component/articleList/articleList.js
let {
  article_unit_id
} = require('../../config.js');
const {
  debug
} = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: []
    }
  },
  data: {
    article_unit_id,
    debug
  }
})