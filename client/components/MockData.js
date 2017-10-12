import React from 'react'

export const MockData = {
    _data: [
        { id: 0, thumbnailUrl: "http://placehold.it/75", pictureUrl: "http://placehold.it/300", name: "Einstein", teaser: "invented Atom Bomb", facts: ["Item 1", "Item 2"] },
        { id: 1, thumbnailUrl: "http://placehold.it/75", pictureUrl: "http://placehold.it/300", name: "Newton", teaser: "Discovered Gravity", facts: ["Item 1", "Item 2"] }
    ],

    getGeeks: function() {
        return this._data.map(d => { return { id: d.id, thumbnailUrl: d.thumbnailUrl, name: d.name, teaser: d.teaser }});
    },

    getGeekById: function(id) {
        return this._data.filter(d => d.id == id)[0] || {};
    }
}