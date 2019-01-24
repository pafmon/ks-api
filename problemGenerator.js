const fs = require('fs');
const code = Math.floor((Math.random() * 100000) + 1);

const NI = 2000; // Number of Items
const WMAX = 2000; // Maximum weight

const problemId = "KSProblem"+code+"-I"+NI+"-WM"+WMAX;

//var problemSize = Math.floor((Math.random() * ((NI*WMAX*2)/3)) + 1);

var problemItems = [];

for(var i = 0; i< NI; i++){
    var problemItem = {
        item : "item"+i,
        value : Math.floor((Math.random() * WMAX) + 1)
    };
    problemItems.push(problemItem);
}

var totalItemsWeight = problemItems.reduce((totalWeight,item) => {
      return totalWeight + item.value;
    },0);

var problemSize = totalItemsWeight/2;


var problem = {
    id : problemId,
    problem : {
        items: problemItems,
        size : problemSize
    }
};

var fileName = "problems/"+problemId+".json";

console.log("Writing problem on "+fileName)+"...";

fs.writeFileSync(fileName, JSON.stringify(problem,null,2));

console.log("Done.");