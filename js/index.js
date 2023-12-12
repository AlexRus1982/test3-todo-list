console.debug('Hello');
fetch('api/index.php')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });