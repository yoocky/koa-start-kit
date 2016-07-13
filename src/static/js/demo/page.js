import tpl from '../../template/demo/tpl';
import $ from 'jquery';
const html = tpl({
  content: 'hello jade template'
});
$('.container').append(html);
