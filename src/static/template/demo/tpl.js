define([], function() { return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (content) {
buf.push("<p>" + (jade.escape((jade_interp = content) == null ? '' : jade_interp)) + "</p>");}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined));;return buf.join("");
}; });