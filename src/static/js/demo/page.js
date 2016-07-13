import tpl from '../../template/demo/tpl';
import runtime from 'jade/runtime.js';
import $ from 'jquery';
// 引入jade runtime
window.jade = runtime;
const html = tpl({
  content: 'hello jade template'
});
$('.container').append(html);
