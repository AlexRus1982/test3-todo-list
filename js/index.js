console.debug('Hello');
fetch('api/todos/index.php?limit=5')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });


console.log(new Date().toISOString());

$( "#dialog" ).dialog();