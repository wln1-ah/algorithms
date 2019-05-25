/*

PROBLEM: Convert singly-linked list to doubly-linked list

*/

const exampleLinkedList = {
    a: {
        next: 'e',
    },
    b: {
        next: 'f',
    },
    c: {
        next: null,
    },
    d: {
        next: 'a', // start!
    },
    e: {
        next: 'b',
    },
    f: {
        next: 'c',
    },
};

// ^^^^ This part isn't something we're messing with. ^^^^

// Input: linked list, starting node

// Output: doubly-linked list

function singlyToDoubly(linkedList, start) {
    // meta. iterate through list:
    let parent = start;

    // 1. get reference for child in the list
    let child = linkedList[parent].next;
    
    while(true){
        // 2. check to see if there is a child
        // 2a. stop iteration here
        if (!child) {
            break;
        }
        
        // 3. create reference on the child to the parent
        linkedList[child].previous = parent; 
        
        // 4. make the child the new parent and start from step 1
        parent = child;
        
        // 1. get reference for child in the list
        child = linkedList[parent].next;
    }

    // return: doubly linked list
    return(linkedList);
}

console.log(exampleLinkedList);

console.log(singlyToDoubly(exampleLinkedList, 'd'));
