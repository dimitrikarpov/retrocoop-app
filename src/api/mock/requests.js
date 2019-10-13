import moment from 'moment'

export default [
    {
        id: 1,
        startsAt: moment().hour(19).valueOf(),
        stopsAt: moment().hour(20).valueOf(),
        platform: {
            id: 2,
            title: 'SEGA'
        },
        game: {
            id: 1,
            title: 'Streets of Rage'
        },
        user: {
            id: 100,
            name: 'John Doe'
        },
        skill: {
            type: 1 // have not played before
        },
        microphone: true,
    },
    {
        id: 2,
        startsAt: moment().hour(17).valueOf(),
        stopsAt: moment().hour(20).valueOf(),
        platform: {
            id: 1,
            title: 'NES'
        },
        game: {
            id: 1,
            title: 'Battletoads'
        },
        user: {
            id: 101,
            name: 'Jane Doe'
        },
        skill: {
            type: 2
        },
        microphone: true,
    },
    {
        id: 3,
        startsAt: moment().hour(18).valueOf(),
        stopsAt: moment().hour(21).valueOf(),
        platform: {
            id: 1,
            title: 'NES'
        },
        game: {
            id: 1,
            title: 'Street Fighter 2010'
        },
        user: {
            id: 100,
            name: 'John Doe'
        },
        skill: {
            type: 1 // have not played before
        },
        microphone: true,
    },
]
