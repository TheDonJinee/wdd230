const employees = [
    {
        'id': 001,
        'name': 'John Doe',
        'level': 'Newbie',
        'isHardworking': true,
        'hobbies': ['Music', 'Travel', 'Reading']
    },
    {
        'id': 002,
        'name': 'Fedrick Lawadosky',
        'level': 'Intermediate',
        'isHardworking': false,
        'hobbies': ['Clubbing', 'Sleeping', 'Reading']
    },
    {
        'id': 003,
        'name': 'Sarah Abraham',
        'level': 'Vetran',
        'isHardworking': true,
        'hobbies': ['Church', 'Family Time', 'Cooking']
    },
    {
        'id': 004,
        'name': 'Lauren Bush',
        'level': 'Newbie',
        'isHardworking': false,
        'hobbies': ['Drinking', 'Horse riding', 'Dancing']
    }
];

const employeeHobbies = employees.map(function(employee){
    return `${employee.name} => ${employee.hobbies[0]}`;
});

const few = employees.filter(function(IsTrue){
    return IsTrue.isHardworking === true;
}).map(function(name){
    return `${name.name} - ${name.level}`
});

console.log(few)
