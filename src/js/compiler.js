const compile = require('google-closure-compiler-js').compile;
//const flags = {
//  jsCode: [{src: 'const x = 1 + 2;'}],
//};
//const out = compile(flags);
//console.info(out.compiledCode);
$( '#commit' ).click(function() {
  $.LoadingOverlay("show");
  setTimeout(function(){
   commit();
   $.LoadingOverlay("hide");
  }, 2000);
});

$( '#empty' ).click(function() {
  document.getElementById('inputText').value = '';
});

function commit() {
  var inputText = document.getElementById('inputText').value;
  var inputLevel = $('input[name=optimization]:checked').val();
  const flags = {
    jsCode: [{src: inputText}],
    compilationLevel: inputLevel
  };
  const out = compile(flags);
  document.getElementById('outputText').value = out.compiledCode;  
}