class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
    printList(){
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
    }

    add(data){
        let newNode = new LinkedListItem(data);
        if(this.size !== 0){
            let node = this.head;
            for(let i = 0; i< this.size-1; i++){
                node = node.next;
            }
            node.next = newNode;
        }else{
            this.head = newNode;
        }
        this.size++;
    }

    remove(){
        if(this.size !== 0){
            let node = this.head;
            for(let i = 0; i< this.size-2; i++){
                node = node.next;
            }
            node.next = null;
            this.size--;
        }   
    }

    insertAt(data, location){
        let newNode = new LinkedListItem(data);
        if(this.size !== 0){
            let node = this.head;
            for(let i = 0; i< this.size-location-1; i++){
                node = node.next;
            }
            newNode.next = node.next;
            node.next = newNode;

            this.size++;
        }   
    }
    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 
class LinkedListItem{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.add("I am first");
myLinkedList.add("I am second");
myLinkedList.printList();
myLinkedList.remove();
myLinkedList.printList()
