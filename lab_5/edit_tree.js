function editTree(id, treeData) {
    return fetch(`http://localhost:3000/trees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(treeData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update tree');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("form").reset();
        alert('Tree updated successfully!');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error updating tree.');
    });
}

export { editTree };