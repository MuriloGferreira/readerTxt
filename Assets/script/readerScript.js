let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

// const liwc = require('./liwc.js');
// let a = liwc.fromText("anxious");

input.addEventListener('change', () => {
    let files = input.files;

    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        console.log(file)        
        const lines = file.split(/,|\n|\.|^|/);

        textarea.value = lines.join('').toLowerCase().trim();
    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file); 
    
});