const Engineer = require ('../lib/Engineer')
const newEngineer = new Engineer('Ashley', '2', 'ashley@gmail.com', 'AshleyCodes');

test('engineer was created', () => {
    expect(newEngineer.name).toBe('Ashley');
    expect(newEngineer.id).toBe('2');
    expect(newEngineer.email).toBe('ashley@gmail.com');

    expect(newEngineer.getName()).toBe('Ashley');
    expect(newEngineer.getId()).toBe('2');
    expect(newEngineer.getEmail()).toBe('ashley@gmail.com');
    expect(newEngineer.getGithub()).toBe('AshleyCodes');
    expect(newEngineer.getRole()).toBe('Engineer');
})