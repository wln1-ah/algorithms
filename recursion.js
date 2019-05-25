/*

PROBLEM: Convert singly-linked list to doubly-linked list

*/

const exampleLinkedList = {
    a: {
        id: 'a',
        next: 'e',
    },
    b: {
        id: 'b',
        next: 'f',
    },
    c: {
        id: 'c',
        next: null,
    },
    d: {
        id: 'd',
        next: 'a', // start!
    },
    e: {
        id: 'e',
        next: 'b',
    },
    f: {
        id: 'f',
        next: 'c',
    },
};

// ^^^^ This part isn't something we're messing with. ^^^^

// Input: linked list, starting node

// Output: doubly-linked list

function singlyToDoubly(parentNode) {
    // meta. iterate through list:

    // 1. get reference for child in the list
    const childNode = exampleLinkedList[parentNode.next];

    // 2. check to see if there is a child
    // 2a. stop iteration here
    if (!childNode) {
        return;
    }

    // 3. create reference on the child to the parent
    childNode.previous = parentNode.id;

    // 4. make the child the new parent and start from step 1
    singlyToDoubly(childNode);
}

console.log(exampleLinkedList);

console.log(singlyToDoubly(exampleLinkedList.d));
