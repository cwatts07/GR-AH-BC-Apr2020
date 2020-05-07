const studentFactory = (function(){
    let studentId =1;
    function changeBy(val){
        studentId += val;
    }

    return {create:function(name){
            studentId++;
            return {studentId:studentId, name:name}
        },
        inc:function(){changeBy(1)},
        dec:function(){changeBy(-1)}
    }
})()


const student1 = studentFactory.create('Kirk');
studentFactory.inc();
const student2 = studentFactory.create('Picard');
console.log(student1, student2);