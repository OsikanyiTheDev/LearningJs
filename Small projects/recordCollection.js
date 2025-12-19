const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  let selectedAlbum = records[id];
  let propToChange = selectedAlbum[prop];

  if (value === "") {
    delete selectedAlbum[prop];
  } else if (prop !== "tracks" && value !== "") {
    selectedAlbum[prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (propToChange === undefined) {
      selectedAlbum[prop] = [value];
    } else {  // <-- Added missing } before else
      propToChange.push(value);
    }
  }
  return records;
}


