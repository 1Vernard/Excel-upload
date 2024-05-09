document.getElementById("uploadForm").addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('Input');
    const file = fileInput.files[0];

    if (file) {
        const fileName = file.name;
        const extension = fileName.split('.').pop().toLowerCase();

        if (extension === 'csv' || extension === 'xlsx') {
            readFile(file);
        } else {
            alert("Please upload a CSV or Excel file.");
        }
    } else {
        alert("Please select a file.");
    }
});

function readFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const result = event.target.result;
        displayFileContent(result);
    };
    reader.readAsText(file);
}
function readExcelFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet is the one you want to extract data from
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to CSV format
        const csvData = XLSX.utils.sheet_to_csv(sheet);

        // Process csvData as needed (e.g., display in table)
        displayFileContent(csvData);
    };
    reader.readAsArrayBuffer(file);
}

function displayFileContent(content) {
    const lines = content.trim().split('\n');
    if(lines.length ===0){ alert("The file is empty")
        return;
    }
    const headerRow = lines[0].split(',').map(cell => `<th>${cell}</th>`).join('');

    const bodyRows = lines.slice(1).map(line => {
        const cells = line.split(',').map(cell => `<td>${cell}</td>`).join('');
        return `<tr>${cells}</tr>`;
    }).join('');

    document.getElementById('tableHeader').innerHTML = headerRow;
    document.getElementById('tableBody').innerHTML = bodyRows;
}
