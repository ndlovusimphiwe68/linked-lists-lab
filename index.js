class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Function to add a new node in the beginning of the linked list
function pushNode(head_ref, data_val) {
    let new_node = new Node(data_val);
    new_node.next = head_ref[0];
    head_ref[0] = new_node;
}
