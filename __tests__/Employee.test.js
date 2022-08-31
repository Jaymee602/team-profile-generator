const Employee = require('../lib/Employee');
const newEmployee = new Employee('Jaymee', '1', 'jaymee@gmail.com');

test('employee was created', () => {
    expect(newEmployee.name).toBe('Jaymee');
    expect(newEmployee.id).toBe('1');
    expect(newEmployee.email).toBe('jaymee@gmail.com');

    expect(newEmployee.getName()).toBe('Jaymee');
    expect(newEmployee.getId()).toBe('1');
    expect(newEmployee.getEmail()).toBe('jaymee@gmail.com');
    expect(newEmployee.getRole()).toBe('Employee');
})