interface AudioPlayer {
    audioVolume : number;
    songDuration: number;
    song: string;
    details:  Details;
}


interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author : "Ed Sheeran",
        year: 2015
    }
}

const {  song, songDuration, details } = audioPlayer;
const { author:name } = details; //desestructurando en otra linea para mantener legibilidad

console.table({song, songDuration , name} )

//podemos darle nombre directamente a las posiciones del arreglo desestructurandoo valores si no existen 
const [p1, p2, broly]: string[] = ['Goku', 'Vegeta', 'Broly'];
// const trunks = dbz[3] || "No existe el personaje";

console.log('Personaje 3: ' ,broly)




export{};