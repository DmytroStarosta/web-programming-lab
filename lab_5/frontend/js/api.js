export async function getAllTrees() {
    try {
        const response = await fetch('http://localhost:3000/trees');
        if (!response.ok) {
            throw new Error('Failed to fetch trees');
        }
        const trees = await response.json();
        return trees;
    } catch (error) {
        console.error('Error loading trees:', error);
        return [];
    }
}

export async function postTree(body) {
    try {
        const reqParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        return await fetch('http://localhost:3000/trees', reqParams);
    } catch (error) {
        console.error('Error posting tree:', error);
    }
}

export async function putTree(id, treeData) {
    try {
        const response = await fetch(`http://localhost:3000/trees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(treeData)
        });
        if (!response.ok) {
            throw new Error('Failed to update tree');
        }
    } catch (error) {
        console.error('Error updating tree:', error);
    }
}

export async function deleteTree(id) {
    try {
        const response = await fetch(`http://localhost:3000/trees/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete tree');
        }
    } catch (error) {
        console.error('Error deleting tree:', error);
    }
}
