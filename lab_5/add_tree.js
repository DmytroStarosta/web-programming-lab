function addTree(treeData) {
    return fetch('http://localhost:3000/trees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(treeData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form").reset();
        alert('Tree added successfully!');
        console.log(data);
        
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error adding tree.');
    });
}


export { addTree };