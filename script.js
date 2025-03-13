var fileNameInput = document.getElementById("file-name");
var saveBtn = document.getElementById("save-btn");

require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs" } });

require(["vs/editor/editor.main"], function () {
    var editor = monaco.editor.create(document.getElementById("editor"), {
        value: "// Start typing your code here...",
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true,
        fontSize: 16,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: "on",
        autoClosingBrackets: "always",
        quickSuggestions: true,
        suggestOnTriggerCharacters: true,
        autoIndent: "full",
    });

    saveBtn.addEventListener("click", function () {
        var filename = fileNameInput.value.trim() || "Untitled.txt";
        var text = editor.getValue();
        var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    });
});
