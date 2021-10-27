exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('events').del()
        .then(function() {
            // Inserts seed entries
            return knex('events').insert([{
                    "id": 1,
                    "location_id": 1,
                    "day": "friday",
                    "time": "2pm - 3pm",
                    "name": "Slushie Apocalypse I",
                    "description": "This is totally a description of this really awesome event that will be taking place during this festival at the Yella Yurt. Be sure to not miss the free slushies cause they are rad!"
                },
                {
                    "id": 2,
                    "location_id": 2,
                    "day": "friday",
                    "time": "6pm - 7pm",
                    "name": "Slushie Apocalypse II",
                    "description": "This is totally a description of this really awesome event that will be taking place during this festival at the TangleStage. Be sure to not miss the free slushies cause they are rad!"
                },
                {
                    "id": 3,
                    "location_id": 1,
                    "day": "saturday",
                    "time": "2pm - 3pm",
                    "name": "Slushie Apocalypse III",
                    "description": "This is totally a description of this really awesome event that will be taking place during this festival at the Yella Yurt. Be sure to not miss the free slushies cause they are rad!"
                },
                {
                    "id": 4,
                    "location_id": 2,
                    "day": "saturday",
                    "time": "6pm - 7pm",
                    "name": "Slushie Apocalypse IV",
                    "description": "This is totally a description of this really awesome event that will be taking place during this festival at the TangleStage. Be sure to not miss the free slushies cause they are rad!"
                },
                {
                    "id": 5,
                    "location_id": 2,
                    "day": "sunday",
                    "time": "2pm - 3pm",
                    "name": "Slushie Apocalypse V",
                    "description": "This is totally a description of this really awesome event that will be taking place during this festival at the TangleStage. Be sure to not miss the free slushies cause they are rad!"
                }
            ]);
        });
};