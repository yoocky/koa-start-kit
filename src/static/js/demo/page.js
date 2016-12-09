import $ from 'jquery';
const year = new Date().getYear();
$(() => {
  $('#text').text(`hello ${year}!`);
});
