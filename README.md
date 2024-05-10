# Excel-upload

1.The use of html forms allowed me to build input field that accepts only CSV or XLSX.

2.button element for submitting the uploaded file,and given it a default styling using bootstrap(btn btn-primary)

3.Bootsrap use allowed styling fonts and backgroundcolors of the page,this was done by including bootstrap links on the on code,
4.togther with CSS. 


5.an event listener is added to the form element. It listens for the 'submit' event and executes a function when that event occurs. 

6.`event.preventDefault();`: This line prevents the default behavior of the form submission, which is to reload the page. This is done to handle the form submission asynchronously using JavaScript.

7.`const fileInput = document.getElementById('Input');`: This line gets the file input element from the DOM and stores it in the `fileInput` variable.

8.`const file = fileInput.files[0];`: This line retrieves the first file selected by the user from the file input element and stores it in the `file` variable.

9.`if (file) {`: This line checks if a file has been selected by the user.

10.`const fileName = file.name;`: This line retrieves the name of the selected file and stores it in the `fileName` variable.

11.`const extension = fileName.split('.').pop().toLowerCase();`: This line extracts the file extension from the file name, converts it to lowercase, and stores it in the `extension` variable.

12.`readFile(file);`: If the file has a valid extension, this line calls the `readFile` function with the selected file as an argument. This function is not defined in the provided code snippet.
.......

# Difficulties

1 the file handling of XLSX is giving a problem
