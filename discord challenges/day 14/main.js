//Question 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The first Album", 12));
//Question 41
var magician = ["David", "Chris", "Charles"];
function show_magic(magicians) {
    magicians.forEach(function (magic) {
        console.log(magic);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
    ;
}
make_great(magician);
show_magic(magician);
