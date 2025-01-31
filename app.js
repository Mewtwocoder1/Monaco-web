// Configure Monaco loader
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' } });

require(["vs/editor/editor.main"], function () {
  // Initialize Emmet before creating any Monaco editor instance
  const disposeEmmet = emmetMonaco.emmetHTML(monaco, ['html', 'php']);

  // Now create the Monaco editor instance
  const editor = monaco.editor.create(document.getElementById('container'), {
    language: 'html',
    theme: 'vs-dark',
  });
  
  document.getElementById("preview");
  editor.addEventListener("keydown", function (e) {
    let text = editor.getValue();
    preview.contentDocument.body.innerHTML = text;
  });
  
  });
});

