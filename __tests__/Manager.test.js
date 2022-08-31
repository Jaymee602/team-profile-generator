const Manager = require ('../lib/Manager')
const newManager = new Manager('Holly', '4', 'holly@gmail.com', '235');

test('Manager was created', () => {
    expect(newManager.name).toBe('Holly');
    expect(newManager.id).toBe('4');
    expect(newManager.email).toBe('holly@gmail.com');
    expect(newManager.officeNumber).toBe('235');

    expect(newManager.getName()).toBe('Holly');
    expect(newManager.getId()).toBe('4');
    expect(newManager.getEmail()).toBe('holly@gmail.com');
    expect(newManager.getOfficeNumber()).toBe('235');
    expect(newManager.getRole()).toBe('Manager');
})