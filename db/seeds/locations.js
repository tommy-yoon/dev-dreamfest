exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('locations').del()
        .then(function() {
            // Inserts seed entries
            return knex('locations').insert([{
                    "id": 1,
                    "name": "TangleStage",
                    "description": "Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip."
                },
                {
                    "id": 2,
                    "name": "Yella Yurt",
                    "description": "It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here!"
                },
                {
                    "id": 3,
                    "name": "Puffy Paddock",
                    "description": "A nice spot in the grass. Just look before you sit. A nice spot in the grass. Just look before you sit. A nice spot in the grass. Just look before you sit."
                },
                {
                    "id": 4,
                    "name": "Kombutcha Karavan",
                    "description": "Whet your whistle with some yummy living organisms. Whet your whistle with some yummy living organisms. Whet your whistle with some yummy living organisms."
                }
            ]);
        });
};