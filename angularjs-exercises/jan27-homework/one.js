var container = [];
var total = 0;

for(var i=1; i<1000; i++){
   if(i % 3 === 0){
      container.push(i);
   }else if(i % 5 === 0){
      container.push(i);
   }
}

for (var i in container)
   total += container[i];

console.log(total);
