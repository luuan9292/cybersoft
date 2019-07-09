var classes = [
  {
    id: 1,
    name: '1A', 
    teacher: 'T1'
  //  students: [
  //    {name: 'Huong', height: 120 },
  //    {name: 'Van', height: 120 },
  //    {name: 'An', height: 120 },
  //  ] thay xuong students
  },
  {
    id: 2,
    name: '2A', 
    teacher: 'T2'
  },
  {
    id: 3,
    name: '3A', 
    teacher: 'T3'
  },
  {
    id: 4,
    name: '4A', 
    teacher: 'T4'
  },
  {
    id: 5,
    name: '5A', 
    teacher: 'T5'
  }
];

var teachers = [
  {
    id: 'T1',
    name: 'Quynh',
    age: 30
  },
  {
    id: 'T2',
    name: 'Chinh',
    age: 55
  },
  {
    id: 'T3',
    name: 'Nguyet',
    age: 40
  },
  {
    id: 'T4',
    name: 'Huong',
    age: 45
  },
  {
    id: 'T5',
    name: 'Hai',
    age: 50
  }
];

var students = [
  {id: 'S1', name: 'Huong', height: 120, class: 1},
  {id: 'S2', name: 'Van', height: 120, class: 1},
  {id: 'S3', name: 'An', height: 120, class: 1},
  {id: 'S4', name: 'Xuan', height: 120, class: 2}
];

function getStudentsInClass(classname) {
  var classObject = classes.find(function(parameter) {
    return parameter.name === classname;
  });
  var studentsInClass = students.filter(function(parameter){
    return parameter.class === classObject.id;
  });
  return studentsInClass;
}

var studentsInClass = getStudentsInClass('2A');
console.log(studentsInClass);
