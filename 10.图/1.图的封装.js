const {Queue} = require('../3.队列/1.队列的封装')
function Graph() {
    // 属性 顶点（数组）、边（字典）
    this.vertexes = [];
    this.edges = new Map();

    //1.添加顶点
    Graph.prototype.addVertex = function(v) {
        this.vertexes.push(v);
        this.edges.set(v, []);
    }
    //2.添加边
    Graph.prototype.addEdge = function(v1, v2) {
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);
    }
    Graph.prototype.toString = function() {
        let res = '';
        for(let i = 0;i<this.vertexes.length;i++) {
            res += this.vertexes[i] + ' -> ';
            let vEdges = this.edges.get(this.vertexes[i]);
            for(let j =0; j<vEdges.length;j++) {
                res += vEdges[j] + ' ';
            }
            res += '\n'
        }
        return res;
    }

    //初始化状态颜色
    Graph.prototype.initializeColor = function() {
        let colors = [];
        for(let i = 0; i< this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white';
        }
        return colors;
    }

    //广度优先bfs
    Graph.prototype.bfs = function (initV, handler) {
        let colors = this.initializeColor();
        let queue = new Queue();
        //将顶点加入到队列中
        queue.enqueue(initV);
        while(!queue.isEmpty()) {
            //顶点出队
            let v = queue.dequeue();
            //获取和顶点相邻的点 
            let vList = this.edges.get(v);
            colors[v]='gray';
            for(let i=0;i<vList.length;i++) {
                let e = vList[i];
                if(colors[e] == 'white') {
                    colors[e] = 'gray';
                    queue.enqueue(e);
                }
            }
            //访问顶点
            handler(v);
            colors[v]='balck';

        }
    }

    //深度优先dfs
    Graph.prototype.dfs = function(initV, handler) {
        let colors = this.initializeColor();
        this.dfsVisit(initV, colors, handler);
    }
    Graph.prototype.dfsVisit = function(v, colors, handler)  {
        colors[v] = 'gray';
        handler(v);
        let vList = this.edges.get(v);
        for(let i = 0;i < vList.length; i++) {
            let e = vList[i];
            if(colors[e] == 'white') {
                this.dfsVisit(e, colors, handler);
            }

        }
        colors[v] = 'black'; 
    }

}

let g = new Graph();

let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(let i=0; i<myVertexes.length; i++) {
    g.addVertex(myVertexes[i])
}
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'G');
g.addEdge('D', 'G');
g.addEdge('D', 'H');
g.addEdge('B', 'E');
g.addEdge('B', 'F');
g.addEdge('E', 'I');
// console.log(g.toString());
let res = '';
g.bfs(g.vertexes[0], function(v) {
    res += v + ' ';
})
console.log(res);
res = '';
g.dfs(g.vertexes[0], function(v) {
    res += v + ' ';
})
console.log(res);