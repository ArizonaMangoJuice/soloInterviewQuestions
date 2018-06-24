'use strict';
 
 class _Node{
   constructor(data, next){
     this.data = data;
     this.next = next;
   }
 }

 class Stack{
   constructor(){
     this.top = null
   }

   push(data){
     if(this.top === null) {
       this.top = new _Node(data, null);
     }else{
       this.top = new _Node(data, this.top);
     }
   }

   pop(){
    if(this.top === null){
      return null
    }else{
      let node = this.top;
      this.top = this.top.next;
      return node.data;
    }
   }
 }

 function display(stack){
   let currNode = stack.top;
   while(currNode){
     console.log(currNode.data);
     currNode = currNode.next;
   }
 }

 let newStack = new Stack();

 newStack.push(1);
 newStack.push(2);
 display(newStack);
//  console.log(newStack.pop());
 newStack.pop()
 display(newStack);