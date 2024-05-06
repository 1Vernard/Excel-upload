document.getElementById("uploadForm").addEventListener('submit',function(event){
    event.preventDefault();
const fileInput =document.getElementById('Input');
const file = fileInput.files[0];

if(file){
    const fileName= file.name;
    const extension =fileName.split(',').pop().toLowerCase();

    if(extension=== 'csv' || extension === 'xlsx')
        {readFile(file);

        }
    else{
    alert("Please upload a CSV or Excel file.");
      }
}else {
    alert("Please select a file.")
}


});

function readFile(file){
    const reader = new FileReader();
    reader.onload = function(event){
        const result = event.target.result;
        displayFileContent(result);
    };
    reader.readAsText(file);
}

function displayFileContent(content){
    const lines = content.split('\n');
    const headerRow =lines[0].split(',').map(cell=>`<th>${cell}</th>`);


    const bodyRows = lines.slice(1).map(line => {
        const cells = line.split(',').map(cell => `<td>${cell}</td>`).join('');
        return `<tr>${cells}</tr>`;
    }).join('');

    document.getElementById('tableHeader').innerHTML = headerRow;
    document.getElementById('tableBody').innerHTML = bodyRows;
}

