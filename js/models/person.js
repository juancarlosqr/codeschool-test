App.Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    username: DS.attr(),
    email: DS.attr()
});

App.PersonAdapter = DS.FixtureAdapter.extend({});

App.Person.FIXTURES = [
    {
        id: 1,
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'jhon.doe@emberjscss.com',
        username: 'jhon.doe'
    },
    {
        id: 2,
        firstName: 'Michael',
        lastName: 'Stewart',
        email: 'michael.stewart@emberjscss.com',
        username: 'michael.stewart'
    },
    {
        id: 3,
        firstName: 'Derek',
        lastName: 'Smith',
        email: 'derek.smith@emberjscss.com',
        username: 'derek.smith'
    },
    {
        id: 4,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@emberjscss.com',
        username: 'jane.doe'
    },
    {
        id: 5,
        firstName: 'Ryan',
        lastName: 'Dale',
        email: 'ryan.dale@emberjscss.com',
        username: 'ryan.dale'
    }
];