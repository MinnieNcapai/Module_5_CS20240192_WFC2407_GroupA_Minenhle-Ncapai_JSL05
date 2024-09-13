// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    {title: "God is Good", artist: "Jonathan McReynolds", genre: "Gospel" }, // added more songs
    {title: "Ingelosi", artist: "Brandon Dhludhlu", genre: "Amapiano" },
    {title: "Umthandazo", artist: "Lwah Ndlunkulu", genre: "Afro-pop" },
    {title: "The Only Reason", artist: "Jp Cooper", genre: "Pop" },
    {title: "The Point of it All", artist: "Anthony Hamilton", genre: "Contemporary Soul" },
    {title: "Goodness of God", artist: "Cece Winans", genre: "Gospel" },
    {title: "Almost Is Never Enough", artist: "Adele", genre: "Pop" },
    {title: "Best Part ", artist: "Daniel Caeser", genre: "R&B" },
    

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"R&B", // Add preferences for' Drax', Rocket, and Groot
    "Rocket": "Rock",
    "Groot": "Pop",

};

// Function to generate playlist based on preferred genre
 // Use the map() function to create playlists for each Guardian

function generatePlaylist(guardians, songs) {
     // Use Object.keys() to get an array of Guardian names,then map over this array to create a playlist for each Guardian
        const playlists = Object.keys(guardians).map(guardian => {
            // Filter songs for each Guardian's preferred genre
            const playlist = songs.filter(song => song.genre === guardians[guardian]);
            // Return an object with the Guardian's name and their playlist 
                return { guardian, playlist};
            });
            return playlists;
            
        }
// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

function displayPlaylists(playlists) {
    // Get the container for displaying playlists
    const playlistsContainer = document.getElementById('playlists');
    // Clear previous content
    playlistsContainer.innerHTML = ''; 

    // Loop over each playlist,add html and display it
     playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist';
        playlistDiv.innerHTML = `<h2>Playlist for ${playlist.guardian}:</h2>`;

        // Add each song to the playlist
    playlist.playlist.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            playlistDiv.appendChild(songDiv);
        });
        
        // Append the playlist to the container
        playlistsContainer.appendChild(playlistDiv);
    });
}

// Call the function to display playlists
displayPlaylists(playlists);

