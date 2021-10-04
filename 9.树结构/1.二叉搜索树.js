function BinarySearchTree() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.root = null;

    BinarySearchTree.prototype.insert = function(key) {
        let newNode = new Node(key);
        if(this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    BinarySearchTree.prototype.insertNode = function(node, newNode) {
        if(newNode.key < node.key) { //向左查找
            if(node.left==null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else { //向右查找
            if(node.right==null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    BinarySearchTree.prototype.preOderTraversal = function(handler) {
        this.preOderTraversalNode(this.root, handler);
    }
    BinarySearchTree.prototype.preOderTraversalNode = function(node,handler) {
        if(node!=null) {
            handler(node.key);
            this.preOderTraversalNode(node.left, handler);
            this.preOderTraversalNode(node.right, handler);
        }
    }


    BinarySearchTree.prototype.midOrderTraversal = function(handler) {
        this.midOrderTraversalNode(this.root, handler);

    }
    BinarySearchTree.prototype.midOrderTraversalNode = function(node,handler) {
        if(node != null) {
            this.midOrderTraversalNode(node.left, handler);
            handler(node.key)
            this.midOrderTraversalNode(node.right, handler);
        }
        
    }

    BinarySearchTree.prototype.postOrderTraversal = function(handler) {
        this.postOrderTraversalNode(this.root, handler);

    }
    BinarySearchTree.prototype.postOrderTraversalNode = function(node,handler) {
        if(node != null) {
            this.postOrderTraversalNode(node.left, handler);
            this.postOrderTraversalNode(node.right, handler);
            handler(node.key);
        }
        
    }

    BinarySearchTree.prototype.max = function() {
        let node= this.root;
        while(node.right != null) {
            node = node.right;
        }
        return node.key;
    }
    BinarySearchTree.prototype.min = function() {
        let node= this.root;
        while(node.left != null) {
            node = node.left;
        }
        return node.key;
    }

    BinarySearchTree.prototype.search = function(key) {
        let node = this.root;
        while(node != null) {
            if(key < node.key) {
                node = node.left;
            } else if(key> node.key) {
                node = node.right;
            } else {
                return node.key;
            }
        }
        return false;

    }

    BinarySearchTree.prototype.remove = function(key) {
        //1.寻找要删除的节点
        let current = this.root;
        //2.根据对于情况删除
        let parent =null;
        var isLeftChild = true;
        while(current.key != key) {
            parent = current;
            if(key < current.key) {
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }
            if(current == null) return false;
        }
        console.log('current',current);
        //删除叶子节点
        if(current.left == null && current.right == null) {
            if(current == this.root){

                this.root = null;
            } else if (isLeftChild) {
                console.log('aaaaa');
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
        //删除的节点有一个子节点
        else if(current.left == null ) {
            if(current == this.root) {
                this.root = current.right;
            }
            else if(isLeftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        }
        else if(current.right == null ) {
            if(current == this.root) {
                this.root = current.left;
            }
            else if(isLeftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        }
        //删除的节点有两个子节点
        else {
            let successor = this.getSuccessor(current);
            if(this.root == current) {
                this.root = successor;
            } else if (isLeftChild) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }
            successor.left = current.left
        }
        return true;

    }
    BinarySearchTree.prototype.getSuccessor=function(delNode) {
        let succrsserParent = delNode;
        let successer = delNode;
        let current = delNode.right;

        while(current != null) {
            succrsserParent = successer;
            successer=current;
            current=current.left;
        }
        if(successer != delNode.right) {
            succrsserParent.left = successer.right;
            successer.right = delNode.right;
        }
        return successer;
    }

}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
binarySearchTree.insert(6);
console.log(binarySearchTree);
let res1 = '';
binarySearchTree.preOderTraversal(function(key){
    res1+=key + " "
})
console.log(res1);

let res3 = '';
binarySearchTree.postOrderTraversal(function(key){
    res3+=key + " "
})
console.log(res3);

// console.log(binarySearchTree.max());
// console.log(binarySearchTree.min());
// console.log(binarySearchTree.search(13));
console.log(binarySearchTree.remove(15));
let res2 = '';
binarySearchTree.midOrderTraversal(function(key){
    res2+=key + " "
})
console.log(res2);