describe('Prueba de twitter', () => {
    test('Prueba de usuario', () => {
        const User1 = new User(1, 'Juanito', 'Juan', 'Lorem Ipsum', '25/04/2015');
        expect(User1.lastUpdate).not.Undefined();
    })
})