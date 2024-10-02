//Question 40
function make_album(artist:string, title:string,tracks?:number){
    let album = {artist, title};
    if(tracks){
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The first Album", 12));
//Question 41
let magician = ["David", "Chris", "Charles"];

function show_magic(magicians:string[]){
    magicians.forEach(magic => {
        console.log(magic);
    });
}

function make_great(magicians:string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " the Great";
    };
}
make_great(magician);
show_magic(magician);