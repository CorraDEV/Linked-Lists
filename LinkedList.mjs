import Node from "./Node.mjs";

export default function LinkedList(head = null){
    return {
        head,
        tail: head,
        append: function(value){
            const node = new Node(value);
            
            if(this.head === null){
                this.head = node;
            }
            else{                
                let currentNode = this.head;                
                while(currentNode.nextNode){
                    currentNode = currentNode.nextNode;                    
                }                
                currentNode.nextNode = node;                                
            }

            this.tail = node;
        },
        prepend: function(value){
            const node = new Node(value);
            
            if(this.tail === null){
                this.tail = node;
            }
            else{                
                node.nextNode = this.head;                
            }            
            
            this.head = node;
        },
        size: function(){
            let size = 0;
            let currentNode = this.head;
            
            while(currentNode){
                currentNode = currentNode.nextNode;
                size++;
            }

            return size;            
        },
        getHead: function(){
            return this.head;
        },
        getTail: function(){
            return this.tail;
        },
        at: function(index){
            let i = 0;
            let currentNode = this.head;            

            while(currentNode && i < index){
                currentNode = currentNode.nextNode;
                i++;                
            }

            return currentNode;
        },
        pop: function(){
            let currentNode = this.head;
                
            while(currentNode.nextNode !== this.tail){
                currentNode = currentNode.nextNode;                
            }

            currentNode.nextNode = null;
            this.tail = currentNode;
        },
        contains: function(value){
            let currentNode = this.head;
                
            while(currentNode){
                if(currentNode.value === value){
                    return true;
                }
                currentNode = currentNode.nextNode;                
            }

            return false;
        },
        find: function(value){
            let currentNode = this.head;
            let index = 0;

            while(currentNode){
                if(currentNode.value === value){
                    return index;
                }
                currentNode = currentNode.nextNode;                
                index++;
            }

            return null;
        },
        toString: function(){
            let str = '';
            let currentNode = this.head;

            while(currentNode){
                str += `( ${currentNode.value} ) -> `
                currentNode = currentNode.nextNode;                
            }

            str += currentNode;
            return str;
        },
        insertAt: function(value, index){
            if(index < 0 || index >= this.size()){
                return;
            }
            else if(index === 0){
                this.prepend(value);
            }
            else if(index === this.size() - 1){
                this.append(value);
            }
            else{
                let currentNode = this.head;

                for(let i = 0; i < index; i++){
                    currentNode = currentNode.nextNode;                
                }

                const node = new Node();
                const nextNode = currentNode.nextNode;
                currentNode.nextNode = node;
                const nodeInserted = currentNode.nextNode;
                nodeInserted.nextNode = nextNode;
            }
        },
        removeAt: function(index){
            if(index < 0 || index >= this.size()){
                return;
            }
            else if(index === 0){
                this.head = this.head.nextNode;
            }
            else if(index === this.size() - 1){
                this.pop();
            }
            else{
                let currentNode = this.head;

                for(let i = 0; i < index - 1; i++){
                    currentNode = currentNode.nextNode;                
                }

                const deletedNode = currentNode.nextNode;
                currentNode.nextNode = deletedNode.nextNode;
            }
        }
    }
}