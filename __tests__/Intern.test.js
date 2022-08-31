const Intern = require ('../lib/Intern')
const newIntern = new Intern('Paige', '3', 'paige@gmail.com', 'UCB');

test('Intern was created', () => {
    expect(newIntern.name).toBe('Paige');
    expect(newIntern.id).toBe('3');
    expect(newIntern.email).toBe('paige@gmail.com');

    expect(newIntern.getName()).toBe('Paige');
    expect(newIntern.getId()).toBe('3');
    expect(newIntern.getEmail()).toBe('paige@gmail.com');
    expect(newIntern.getSchool()).toBe('UCB');
    expect(newIntern.getRole()).toBe('Intern');
})