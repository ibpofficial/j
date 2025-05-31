// Music Data
const songs = [
     {
        id: 1,
        title: "MILLIONARE",
        artist: "yo yo honey sing",
        genre: "hiphop",
        cover: "https://i1.sndcdn.com/artworks-I1VkGxl2ilhQzbZY-9VobTQ-t500x500.jpg",
        audio: "MILLIONAIRE SONG (Full Video) YoYoHoneySingh GLORY BHUSHAN KUMAR - T-Series.mp3",
        duration: "5:12",
        showOnHome: true // Add this to control visibility on home
    },
    
    {
        id: 2,
        title: "BONITA",
        artist: "yo yo honey sing",
        genre: "hiphop",
        cover: "https://lyricloops.com/wp-content/uploads/2024/09/Bonita-Lyrics-Yo-Yo-Honey-Singh-600x338.jpg",
        audio: "bonita.mp3",
        duration: "4:31"
    },
    {
        id: 6,
        title: "QAYAMAT",
        artist: "Neeraj Shridhar & Shruti Dhasmana",
        genre: "pop",
        cover: "https://i.ytimg.com/vi/s06y3qa3fEQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmJlvpxudxK6GSTh5u2ruYniMLiA",
        audio: "housefull5.mp3",
        duration: "2:52"
    },
    {
        id: 3,
        title: "Naacho Naacho",
        artist: "Vishal Mishra",
        genre: "pop",
        cover: "https://www.lyricsgoal.com/wp-content/uploads/2021/11/naacho-naacho-rrr-vishal-mishra.jpg",
        audio: "naatunaatu.mp3",
        duration: "4:06"
    },
    {
        id: 4,
        title: "Baba bholenath ",
        artist: "tadkeshwar mahadev ",
        genre: "bhajan",
        cover: "https://i.pinimg.com/474x/e4/a1/6b/e4a16bcabb6db000d3e80b8eb502cb85.jpg",
        audio: "Baba bholenath meri naiya ko ubaaro na.mp3",
        duration: "5:28"
    },
    {
        id: 5,
        title: "Main aarti teri gau ",
        artist: "Pandit ji ",
        genre: "bhajan",
        cover: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/54083/278476/1598169540955_Shree_Ganesh__42118.1687411714.jpg?c=2",
        audio: "Main aarti teri gau ganesh.m4a",
        duration: "6:20"
    },
     {
        id: 5,
        title: "Vishnu stuti",
        artist: "Maanu ,Annural Khalid ",
        genre: "bhajan",
        cover: "https://t3.ftcdn.net/jpg/08/53/98/72/360_F_853987281_DRruJqfRbnNwjUNyp1xAhTzbLtABG3ph.jpg",
        audio: "Vishnu stuti.mp3",
        duration: "3:30"
    },
    {
        id: 19,
        title: "Ek khatola",
        artist: "masoom sharma",
        genre: "pop",
        cover: "https://i.ytimg.com/vi/xl6RvlD_KIM/maxresdefault.jpg",
        audio: "koina.mp3",
        duration: "2:52"
    },
    {
        id: 7,
        title: "Vishnu Chalisa Fast",
        artist: "vishnu",
        genre: "pop",
        cover: "https://t3.ftcdn.net/jpg/08/53/98/72/360_F_853987281_DRruJqfRbnNwjUNyp1xAhTzbLtABG3ph.jpg",
        audio: "Vishnu Chalisa Fast.mp3",
        duration: "4:29"
    },
     {
        id: 22,
        title: "Hanuman aarti ",
        artist: "Hanuman ji",
        genre: "bhajan",
        cover: "https://i.pinimg.com/736x/d8/d6/52/d8d6524ac9c89e9dbd2b02b35a05a684.jpg",
        audio: "Bajrang Baan.mp3",
        duration: "4:31"
    },
    {
        id: 8,
        title: "MILLIONARE",
        artist: "yo yo honey sing ",
        genre: "hiphop",
        cover: "https://i1.sndcdn.com/artworks-I1VkGxl2ilhQzbZY-9VobTQ-t500x500.jpg",
        audio: "MILLIONAIRE SONG (Full Video) YoYoHoneySingh GLORY BHUSHAN KUMAR - T-Series.mp3",
        duration: "5:12"
    },
     {
        id: 13,
        title: "JATT MAKHMA",
        artist: "yo yo honey sing ",
        genre: "hiphop",
        cover: "https://i.ytimg.com/vi/OCz1sADowRI/maxresdefault.jpg",
        audio: "MILLIONAIRE SONG (Full Video) YoYoHoneySingh GLORY BHUSHAN KUMAR - T-Series.mp3",
        duration: "5:12"
    },
      {
        id: 33,
        title: "Bajrang baan ",
        artist: "Rasraj Ji Maharaj",
        genre: "bhajan",
        cover: "https://source.boomplaymusic.com/group10/M00/06/08/42e5de0bb8b64a76844418b9076adc97_464_464.jpg",
        audio: "Bajrang Baan.mp3",
        duration: "2:20"
    },
     {
        id: 14,
        title: "Knock Knock",
        artist: "KR$NA ",
        genre: "hiphop",
        cover: "https://i.ytimg.com/vi/02OPySK0jsA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAH31bznr9tzcN9HDJ1KxIGUFwKtg",
        audio: "MILLIONAIRE SONG (Full Video) YoYoHoneySingh GLORY BHUSHAN KUMAR - T-Series.mp3",
        duration: "5:12"
    },
      {
        id: 15,
        title: "Janeman",
        artist: "GURU RANDHAWA ",
        genre: "hiphop",
        cover: "https://i.ytimg.com/vi/Q0xFN10WJGc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvU-Ztb-ZdHf5RmKjoMYpOYbm8XA",
        audio: "janeman.mp3",
        duration: "5:12"
    },
      
    {
        id: 9,
        title: "Chor Baazari",
        artist: "Atif aslam",
        genre: "hiphop",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkoNBmgSEbEz8xMb8EfLmqLXGmCAwXkwPOg&s",
        audio: "Chor Bazari Phir Se Bhool Chuk Maaf Rajkummar, Wamiqa Pritam, Tanishk, Irshad, Neeraj, Sunidhi - Sony Music India.mp3",
        duration: "3:25"
    },
    {
        id: 10,
        title: "QATAL ",
        artist: "Gury randhawa",
        genre: "hiphop",
        cover: "https://i.ytimg.com/vi/c-FKlE3_kHo/maxresdefault.jpg",
        audio: "Guru Randhawa - QATAL - (Official Video) - Guru Randhawa.mp3",
        duration: "2:54"
    },
    {
        id: 11,
        title: "Pall Pal'",
        artist: "Talvindar",
        genre: "rock",
        cover: "https://i.ytimg.com/vi/AbkEmIgJMcU/maxresdefault.jpg",
        audio: "Afusic - Pal Pal with Talwiinder (Official Visualiser) Prod. AliSoomroMusic - AFUSIC.mp3",
        duration: "3:24"
    },
    {
        id: 12,
        title: "Teri Yadein",
        artist: "Yo Yo honey sing & Grinny",
        genre: "hiphop",
        cover: "https://timesofindia.indiatimes.com/photo/msid-121411308/121411308.jpg?resizemode=4",
        audio: "assets/songs/hotel-california.mp3",
        duration: "6:30"
    }
];

// DOM Elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const playerAlbumCover = document.getElementById('player-album-cover');
const playerSongTitle = document.getElementById('player-song-title');
const playerSongArtist = document.getElementById('player-song-artist');
const favoriteBtn = document.getElementById('favorite-btn');
const addToPlaylistBtn = document.getElementById('add-to-playlist-btn');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const searchResults = document.getElementById('search-results');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
const menuItems = document.querySelectorAll('.menu li');
const sections = document.querySelectorAll('.section');
const playlistsList = document.getElementById('playlists-list');
const playlistsGrid = document.getElementById('playlists-grid');
const createPlaylistBtn = document.getElementById('create-playlist-btn');
const createPlaylistModal = document.getElementById('create-playlist-modal');
const addToPlaylistModal = document.getElementById('add-to-playlist-modal');
const playlistOptions = document.getElementById('playlist-options');
const newPlaylistName = document.getElementById('new-playlist-name');
const confirmCreatePlaylist = document.getElementById('confirm-create-playlist');
const closeModalBtns = document.querySelectorAll('.close-modal');
const addSongToPlaylistBtn = document.getElementById('add-song-to-playlist-btn');
const currentPlaylistSection = document.getElementById('current-playlist-section');
const currentPlaylistSongs = document.getElementById('current-playlist-songs');
const currentPlaylistName = document.getElementById('current-playlist-name');

// State
let currentSongIndex = 0;
let isPlaying = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let playlists = JSON.parse(localStorage.getItem('playlists')) || [];
let currentPlaylistId = null;
let currentSongToAddToPlaylist = null;

// Initialize
function init() {
    renderSongsByGenre('trending', songs.slice(0, 10));
    renderSongsByGenre('pop', songs.filter(song => song.genre === 'pop'));
    renderSongsByGenre('rock', songs.filter(song => song.genre === 'rock'));
    renderSongsByGenre('hiphop', songs.filter(song => song.genre === 'hiphop'));
     renderSongsByGenre('bhajan', songs.filter(song => song.genre === 'bhajan'));
     renderRecentlyPlayed();
     setupRecentlyPlayedToggle();

    renderFavorites();
    renderPlaylists();
    
    // Load first song
    if (songs.length > 0) {
        loadSong(songs[0]);
    }
    
    // Event listeners
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Player controls
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    audioPlayer.addEventListener('ended', nextSong);
    progressContainer.addEventListener('click', setProgress);
    
    // Favorites
    favoriteBtn.addEventListener('click', toggleFavorite);
    
    // Search
    searchInput.addEventListener('input', searchSongs);
    searchInput.addEventListener('focus', showSearchSuggestions);
    document.addEventListener('click', closeSearchSuggestions);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);
    
    // Menu navigation
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            navigateToSection(section);
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
    });
    
    // Playlist creation
    createPlaylistBtn.addEventListener('click', showCreatePlaylistModal);
    confirmCreatePlaylist.addEventListener('click', createNewPlaylist);
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            createPlaylistModal.style.display = 'none';
            addToPlaylistModal.style.display = 'none';
        });
    });
    
    // Add to playlist
    addToPlaylistBtn.addEventListener('click', () => {
        if (songs[currentSongIndex]) {
            currentSongToAddToPlaylist = songs[currentSongIndex].id;
            showAddToPlaylistModal();
        }
    });
    
    addSongToPlaylistBtn.addEventListener('click', () => {
        if (currentPlaylistId) {
            currentSongToAddToPlaylist = null;
            showAddToPlaylistModal();
        }
    });
    
    // Modal close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === createPlaylistModal) {
            createPlaylistModal.style.display = 'none';
        }
        if (e.target === addToPlaylistModal) {
            addToPlaylistModal.style.display = 'none';
        }
    });
}

function renderSongsByGenre(genre, songs) {
    const grid = document.getElementById(`${genre}-songs`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Filter songs that should appear on home
    const songsToShow = songs.filter(song => song.showOnHome !== false);
    
    songsToShow.forEach(song => {
        const songCard = createSongCard(song);
        grid.appendChild(songCard);
    });
}
// Create song card element
function createSongCard(song) {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.dataset.id = song.id;
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;
    
    songCard.addEventListener('click', () => {
        const songIndex = songs.findIndex(s => s.id === song.id);
        currentSongIndex = songIndex;
        loadSong(song);
        playSong();
    });
    
    return songCard;
}

// Render favorites
function renderFavorites() {
    const favoritesGrid = document.getElementById('favorites-songs');
    favoritesGrid.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p>No favorites yet. Add some songs to your favorites!</p>';
        return;
    }
    
    const favoriteSongs = songs.filter(song => favorites.includes(song.id));
    
    favoriteSongs.forEach(song => {
        const songCard = createSongCard(song);
        favoritesGrid.appendChild(songCard);
    });
}

// Render playlists
function renderPlaylists() {
    // Sidebar playlist list
    playlistsList.innerHTML = '';
    playlists.forEach(playlist => {
        const playlistItem = document.createElement('li');
        playlistItem.textContent = playlist.name;
        playlistItem.dataset.id = playlist.id;
        playlistItem.addEventListener('click', () => {
            viewPlaylist(playlist.id);
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
        playlistsList.appendChild(playlistItem);
    });
    
    // Playlists grid in playlists section
    playlistsGrid.innerHTML = '';
    playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.dataset.id = playlist.id;
        
        // Use the first song's cover as playlist image, or a default image
        const firstSongId = playlist.songs.length > 0 ? playlist.songs[0] : null;
        const firstSong = firstSongId ? songs.find(s => s.id === firstSongId) : null;
        const coverImage = firstSong ? firstSong.cover : 'https://i.scdn.co/image/ab67616d00001e026a5b30bb8a7e5c6d878cdfa6';
        
        playlistCard.innerHTML = `
            <img class="playlist-image" src="${coverImage}" alt="${playlist.name}">
            <div class="playlist-content">
                <h3>${playlist.name}</h3>
                <p>${playlist.songs.length} songs</p>
            </div>
        `;
        
        playlistCard.addEventListener('click', () => {
            viewPlaylist(playlist.id);
        });
        
        playlistsGrid.appendChild(playlistCard);
    });
}

// View playlist
function viewPlaylist(playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    currentPlaylistId = playlistId;
    currentPlaylistName.textContent = playlist.name;
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show current playlist section
    currentPlaylistSection.style.display = 'block';
    
    // Render playlist songs
    currentPlaylistSongs.innerHTML = '';
    
    if (playlist.songs.length === 0) {
        currentPlaylistSongs.innerHTML = '<p>This playlist is empty. Add some songs!</p>';
        return;
    }
    
    playlist.songs.forEach(songId => {
        const song = songs.find(s => s.id === songId);
        if (song) {
            const songCard = createSongCard(song);
            currentPlaylistSongs.appendChild(songCard);
        }
    });
    
    // Update menu active state
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

function loadSong(song) {
    playerSongTitle.textContent = song.title;
    playerSongArtist.textContent = song.artist;
    playerAlbumCover.src = song.cover;
    playerAlbumCover.onerror = function() {
        this.src = 'https://i.scdn.co/image/ab67616d00001e026a5b30bb8a7e5c6d878cdfa6'; // default image
    };
    audioPlayer.src = song.audio;
    
    // Update favorite button
    updateFavoriteButton(song.id);
    
    // Update progress bar duration
    setTimeout(() => {
        durationEl.textContent = formatTime(audioPlayer.duration);
    }, 100);

    // Update fullscreen player if open
    if (document.getElementById('fullscreen-player').style.display === 'flex') {
        document.getElementById('fullscreen-cover').src = song.cover;
        document.getElementById('fullscreen-title').textContent = song.title;
        document.getElementById('fullscreen-artist').textContent = song.artist;
        updateFullscreenPlayButton(); // Add this line
    }
}
function playSong() {
    isPlaying = true;
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    updateFullscreenPlayButton();

    // ✅ ADD THIS LINE:
    saveRecentlyPlayed(songs[currentSongIndex].id);
}


// Pause song
function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    updateFullscreenPlayButton(); // Update this line
}

// Toggle play/pause
function togglePlay() {
    if (audioPlayer.src) {
        isPlaying ? pauseSong() : playSong();
        updateFullscreenPlayButton(); // Add this line
    }
}
// Update fullscreen play button icon
function updateFullscreenPlayButton() {
    const fullscreenPlayBtn = document.getElementById('fullscreen-play');
    if (fullscreenPlayBtn) {
        fullscreenPlayBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
}

// Previous song
function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

// Next song
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

// Update progress bar
function updateProgressBar(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Update time display
    currentTimeEl.textContent = formatTime(currentTime);
    
    // Update duration if not already set
    if (duration) {
        durationEl.textContent = formatTime(duration);
    }
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Toggle favorite
function toggleFavorite() {
    if (!songs[currentSongIndex]) return;
    
    const currentSongId = songs[currentSongIndex].id;
    const index = favorites.indexOf(currentSongId);
    
    if (index === -1) {
        favorites.push(currentSongId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton(currentSongId);
    renderFavorites();
}

// Update favorite button
function updateFavoriteButton(songId) {
    if (favorites.includes(songId)) {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
        favoriteBtn.classList.add('active');
    } else {
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
        favoriteBtn.classList.remove('active');
    }
}

// Search functionality
function searchSongs() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        searchSuggestions.style.display = 'none';
        searchResults.innerHTML = '';
        return;
    }
    
    // Simple fuzzy search
    const results = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
    
    // If no results, try to find similar titles (simple implementation)
    if (results.length === 0) {
        const similarResults = songs.filter(song => 
            getSimilarity(song.title.toLowerCase(), searchTerm) > 0.3 ||
            getSimilarity(song.artist.toLowerCase(), searchTerm) > 0.3
        );
        
        displaySearchResults(similarResults);
    } else {
        displaySearchResults(results);
    }
}

// Show search suggestions
function showSearchSuggestions() {
    if (searchInput.value.length > 0 && searchSuggestions.children.length > 0) {
        searchSuggestions.style.display = 'block';
    }
}

// Close search suggestions
function closeSearchSuggestions(e) {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.style.display = 'none';
    }
}

// Display search results
function displaySearchResults(results) {
    searchSuggestions.innerHTML = '';
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchSuggestions.style.display = 'none';
        searchResults.innerHTML = '<p>No results found</p>';
        return;
    }
    
    // Display suggestions in dropdown
    results.slice(0, 5).forEach(song => {
        const suggestion = document.createElement('div');
        suggestion.textContent = `${song.title} - ${song.artist}`;
        suggestion.addEventListener('click', () => {
            currentSongIndex = songs.findIndex(s => s.id === song.id);
            loadSong(song);
            playSong();
            searchInput.value = '';
            searchSuggestions.style.display = 'none';
        });
        searchSuggestions.appendChild(suggestion);
    });
    
    searchSuggestions.style.display = 'block';
    
    // Display all results in search results section
    const resultsGrid = document.createElement('div');
    resultsGrid.className = 'song-grid';
    
    results.forEach(song => {
        const songCard = createSongCard(song);
        resultsGrid.appendChild(songCard);
    });
    
    searchResults.appendChild(resultsGrid);
}

// Simple string similarity function (Levenshtein distance based)
function getSimilarity(s1, s2) {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    
    if (longerLength === 0) return 1.0;
    
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// Toggle sidebar on mobile
function toggleSidebar() {
    sidebar.classList.toggle('active');
}

// Navigate to section
function navigateToSection(section) {
    // Hide all sections
    sections.forEach(sec => {
        sec.style.display = 'none';
    });
    currentPlaylistSection.style.display = 'none';
    
    // Show selected section
    if (section === 'home') {
        document.getElementById('home-section').style.display = 'block';
    } else if (section === 'search') {
        document.getElementById('search-section').style.display = 'block';
        searchInput.focus();
    } else if (section === 'favorites') {
        document.getElementById('favorites-section').style.display = 'block';
    } else if (section === 'playlists') {
        document.getElementById('playlists-section').style.display = 'block';
    }
    
    // Update menu active state
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === section) {
            item.classList.add('active');
        }
    });
}

// Show create playlist modal
function showCreatePlaylistModal() {
    newPlaylistName.value = '';
    createPlaylistModal.style.display = 'flex';
}

// Create new playlist
function createNewPlaylist() {
    const name = newPlaylistName.value.trim();
    if (!name) return;
    
    const newPlaylist = {
        id: Date.now().toString(),
        name: name,
        songs: []
    };
    
    playlists.push(newPlaylist);
    localStorage.setItem('playlists', JSON.stringify(playlists));
    renderPlaylists();
    createPlaylistModal.style.display = 'none';
}

// Show add to playlist modal
function showAddToPlaylistModal() {
    playlistOptions.innerHTML = '';
    
    if (playlists.length === 0) {
        playlistOptions.innerHTML = '<p>No playlists yet. Create one first!</p>';
    } else {
        playlists.forEach(playlist => {
            const option = document.createElement('div');
            option.className = 'playlist-option';
            option.textContent = playlist.name;
            
            // Check if song is already in playlist
            const songInPlaylist = playlist.songs.includes(currentSongToAddToPlaylist || songs[currentSongIndex].id);
            
            if (songInPlaylist) {
                option.innerHTML += '<span style="margin-left: 10px; color: #1db954;"><i class="fas fa-check"></i></span>';
            }
            
            option.addEventListener('click', () => {
                toggleSongInPlaylist(playlist.id);
            });
            
            playlistOptions.appendChild(option);
        });
    }
    
    addToPlaylistModal.style.display = 'flex';
}

// Toggle song in playlist
function toggleSongInPlaylist(playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    const songId = currentSongToAddToPlaylist || songs[currentSongIndex].id;
    const songIndex = playlist.songs.indexOf(songId);
    
    if (songIndex === -1) {
        playlist.songs.push(songId);
    } else {
        playlist.songs.splice(songIndex, 1);
    }
    
    localStorage.setItem('playlists', JSON.stringify(playlists));
    
    // Update current playlist view if we're viewing it
    if (currentPlaylistId === playlistId) {
        viewPlaylist(playlistId);
    }
    
    // Re-render the modal to update checkmarks
    showAddToPlaylistModal();
    
    // Re-render playlists to update counts
    renderPlaylists();
}
// Add this function to handle removing songs from favorites
function removeFromFavorites(songId) {
    const index = favorites.indexOf(songId);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
        
        // Update favorite button if the current song is the one being removed
        if (songs[currentSongIndex] && songs[currentSongIndex].id === songId) {
            updateFavoriteButton(songId);
        }
    }
}

// Add this function to handle removing songs from playlists
function removeFromPlaylist(playlistId, songId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    const songIndex = playlist.songs.indexOf(songId);
    if (songIndex !== -1) {
        playlist.songs.splice(songIndex, 1);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        
        // If we're currently viewing this playlist, re-render it
        if (currentPlaylistId === playlistId) {
            viewPlaylist(playlistId);
        }
        
        // Re-render playlists to update counts
        renderPlaylists();
    }
}

// Update the createSongCard function to include remove buttons when in favorites or playlist view
function createSongCard(song, options = {}) {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.dataset.id = song.id;
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;
    
    // Add remove button if in favorites view
    if (options.inFavorites) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromFavorites(song.id);
        });
        songCard.appendChild(removeBtn);
    }
    
    // Add remove button if in playlist view
    if (options.inPlaylist && currentPlaylistId) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromPlaylist(currentPlaylistId, song.id);
        });
        songCard.appendChild(removeBtn);
    }
    
    songCard.addEventListener('click', () => {
        const songIndex = songs.findIndex(s => s.id === song.id);
        currentSongIndex = songIndex;
        loadSong(song);
        playSong();
    });
    
    return songCard;
}

// Update the renderFavorites function to pass the inFavorites option
function renderFavorites() {
    const favoritesGrid = document.getElementById('favorites-songs');
    favoritesGrid.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p>No favorites yet. Add some songs to your favorites!</p>';
        return;
    }
    
    const favoriteSongs = songs.filter(song => favorites.includes(song.id));
    
    favoriteSongs.forEach(song => {
        const songCard = createSongCard(song, { inFavorites: true });
        favoritesGrid.appendChild(songCard);
    });
}

// Update the viewPlaylist function to pass the inPlaylist option
function viewPlaylist(playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    currentPlaylistId = playlistId;
    currentPlaylistName.textContent = playlist.name;
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show current playlist section
    currentPlaylistSection.style.display = 'block';
    
    // Render playlist songs
    currentPlaylistSongs.innerHTML = '';
    
    if (playlist.songs.length === 0) {
        currentPlaylistSongs.innerHTML = '<p>This playlist is empty. Add some songs!</p>';
        return;
    }
    
    playlist.songs.forEach(songId => {
        const song = songs.find(s => s.id === songId);
        if (song) {
            const songCard = createSongCard(song, { inPlaylist: true });
            currentPlaylistSongs.appendChild(songCard);
        }
    });
    
    // Update menu active state
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}
// Modify the createSongCard function to include heart button
function createSongCard(song, options = {}) {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.dataset.id = song.id;
    
    // Check if song is in favorites
    const isFavorite = favorites.includes(song.id);
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <button class="heart-btn ${isFavorite ? 'active' : ''}">
            <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;
    
    // Add click handler for heart button
    const heartBtn = songCard.querySelector('.heart-btn');
    heartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSongFavorite(song.id);
        
        // Update heart button appearance
        if (favorites.includes(song.id)) {
            heartBtn.classList.add('active');
            heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            heartBtn.classList.remove('active');
            heartBtn.innerHTML = '<i class="far fa-heart"></i>';
        }
        
        // If we're in favorites view, re-render
        if (options.inFavorites) {
            renderFavorites();
        }
    });
    
    // Existing remove button logic (keep this if you want both)
    if (options.inFavorites) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromFavorites(song.id);
        });
        songCard.appendChild(removeBtn);
    }
    
    if (options.inPlaylist && currentPlaylistId) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromPlaylist(currentPlaylistId, song.id);
        });
        songCard.appendChild(removeBtn);
    }
    
    songCard.addEventListener('click', () => {
        const songIndex = songs.findIndex(s => s.id === song.id);
        currentSongIndex = songIndex;
        loadSong(song);
        playSong();
    });
    
    return songCard;
}

// Add this helper function
function toggleSongFavorite(songId) {
    const index = favorites.indexOf(songId);
    if (index === -1) {
        favorites.push(songId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update player favorite button if this is the current song
    if (songs[currentSongIndex] && songs[currentSongIndex].id === songId) {
        updateFavoriteButton(songId);
    }
}
function renderPlaylists() {
    // Sidebar playlist list
    playlistsList.innerHTML = '';
    playlists.forEach(playlist => {
        const playlistItem = document.createElement('li');
        playlistItem.innerHTML = `
            <span>${playlist.name}</span>
            <button class="delete-playlist-btn" data-id="${playlist.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        playlistItem.addEventListener('click', (e) => {
            // Only navigate if click wasn't on delete button
            if (!e.target.closest('.delete-playlist-btn')) {
                viewPlaylist(playlist.id);
                if (window.innerWidth <= 768) {
                    toggleSidebar();
                }
            }
        });
        playlistsList.appendChild(playlistItem);
    });
    
    // Playlists grid in playlists section
    playlistsGrid.innerHTML = '';
    playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.dataset.id = playlist.id;
        
        const firstSongId = playlist.songs.length > 0 ? playlist.songs[0] : null;
        const firstSong = firstSongId ? songs.find(s => s.id === firstSongId) : null;
        const coverImage = firstSong ? firstSong.cover : 'https://i.scdn.co/image/ab67616d00001e026a5b30bb8a7e5c6d878cdfa6';
        
        playlistCard.innerHTML = `
            <img class="playlist-image" src="${coverImage}" alt="${playlist.name}">
            <div class="playlist-content">
                <h3>${playlist.name}</h3>
                <p>${playlist.songs.length} songs</p>
                <button class="delete-playlist-btn" data-id="${playlist.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        playlistCard.addEventListener('click', (e) => {
            // Only navigate if click wasn't on delete button
            if (!e.target.closest('.delete-playlist-btn')) {
                viewPlaylist(playlist.id);
            }
        });
        
        playlistsGrid.appendChild(playlistCard);
    });

    // Add event listeners to all delete buttons
    document.querySelectorAll('.delete-playlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const playlistId = btn.dataset.id;
            deletePlaylist(playlistId);
        });
    });
}
function deletePlaylist(playlistId) {
    if (confirm('Are you sure you want to delete this playlist?')) {
        // Remove from playlists array
        playlists = playlists.filter(playlist => playlist.id !== playlistId);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        
        // If we were viewing this playlist, go back to playlists view
        if (currentPlaylistId === playlistId) {
            navigateToSection('playlists');
            currentPlaylistId = null;
        }
        
        // Re-render playlists
        renderPlaylists();
    }
}
function createSongCard(song, options = {}) {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.dataset.id = song.id;
    
    const isFavorite = favorites.includes(song.id);
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <div class="song-actions">
            <button class="heart-btn ${isFavorite ? 'active' : ''}">
                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="add-to-playlist-btn">
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;
    
    // Heart button functionality
    const heartBtn = songCard.querySelector('.heart-btn');
    heartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSongFavorite(song.id);
        
        if (favorites.includes(song.id)) {
            heartBtn.classList.add('active');
            heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            heartBtn.classList.remove('active');
            heartBtn.innerHTML = '<i class="far fa-heart"></i>';
        }
        
        if (options.inFavorites) {
            renderFavorites();
        }
    });
    
    // Add to playlist button functionality
    const addToPlaylistBtn = songCard.querySelector('.add-to-playlist-btn');
    addToPlaylistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSongToAddToPlaylist = song.id;
        showAddToPlaylistModal();
    });
    
    // Existing remove button logic (if you're keeping it)
    if (options.inFavorites) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromFavorites(song.id);
        });
        songCard.appendChild(removeBtn);
    }
    
    if (options.inPlaylist && currentPlaylistId) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromPlaylist(currentPlaylistId, song.id);
        });
        songCard.appendChild(removeBtn);
    }
    
    songCard.addEventListener('click', () => {
        const songIndex = songs.findIndex(s => s.id === song.id);
        currentSongIndex = songIndex;
        loadSong(song);
        playSong();
    });
    
    return songCard;
}
function showAddToPlaylistModal() {
    playlistOptions.innerHTML = '';
    
    if (playlists.length === 0) {
        playlistOptions.innerHTML = `
            <p>No playlists yet.</p>
            <button id="create-playlist-from-modal" style="margin-top: 10px;">
                <i class="fas fa-plus"></i> Create New Playlist
            </button>
        `;
        
        document.getElementById('create-playlist-from-modal').addEventListener('click', () => {
            addToPlaylistModal.style.display = 'none';
            showCreatePlaylistModal();
        });
    } else {
        playlists.forEach(playlist => {
            const option = document.createElement('div');
            option.className = 'playlist-option';
            option.textContent = playlist.name;
            
            const songInPlaylist = playlist.songs.includes(currentSongToAddToPlaylist || songs[currentSongIndex].id);
            
            if (songInPlaylist) {
                option.innerHTML += '<span style="margin-left: 10px; color: #1db954;"><i class="fas fa-check"></i></span>';
            }
            
            option.addEventListener('click', () => {
                toggleSongInPlaylist(playlist.id);
            });
            
            playlistOptions.appendChild(option);
        });
    }
    
    addToPlaylistModal.style.display = 'flex';
}

progressContainer.addEventListener('click', setProgress);
document.getElementById('player-album-cover').addEventListener('click', () => {
    const song = songs[currentSongIndex];
    document.getElementById('fullscreen-cover').src = song.cover;
    document.getElementById('fullscreen-title').textContent = song.title;
    document.getElementById('fullscreen-artist').textContent = song.artist;
    document.getElementById('fullscreen-player').style.display = 'flex';

    updateFullscreenProgress();
    renderSuggestedSongs();
});

function updateFullscreenProgress() {
    const update = () => {
        const { duration, currentTime } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        document.getElementById('fullscreen-progress').style.width = `${progressPercent}%`;
        document.getElementById('fullscreen-current-time').textContent = formatTime(currentTime);
        document.getElementById('fullscreen-duration').textContent = formatTime(duration);
    };
    update();
    audioPlayer.addEventListener('timeupdate', update);
}

document.getElementById('fullscreen-progress-bar').addEventListener('click', (e) => {
    const bar = e.currentTarget;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / bar.clientWidth) * duration;
});

// Fullscreen player controls
document.getElementById('fullscreen-prev').addEventListener('click', prevSong);
document.getElementById('fullscreen-next').addEventListener('click', nextSong);
document.getElementById('fullscreen-play').addEventListener('click', togglePlay);
document.getElementById('close-fullscreen').addEventListener('click', () => {
    document.getElementById('fullscreen-player').style.display = 'none';
});

function renderSuggestedSongs() {
    const container = document.getElementById('fullscreen-suggestions');
    container.innerHTML = '';
    songs.forEach(song => {
        const card = createSongCard(song);
        container.appendChild(card);
    });
}

document.getElementById('toggle-suggestions').addEventListener('click', function () {
    const section = document.getElementById('suggested-section');
    if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
      this.innerHTML = '<i class="fas fa-chevron-down"></i> Hide Suggestions';
    } else {
      section.style.display = 'none';
      this.innerHTML = '<i class="fas fa-chevron-up"></i> Show Suggestions';
    }
  });

  document.getElementById('fullscreen-heart').addEventListener('click', function () {
    const song = songs[currentSongIndex];
    const index = favorites.indexOf(song.id);
    const icon = this.querySelector('i');
    if (index === -1) {
      favorites.push(song.id);
      icon.classList.remove('far');
      icon.classList.add('fas');
      this.style.color = '#1db954';
    } else {
      favorites.splice(index, 1);
      icon.classList.remove('fas');
      icon.classList.add('far');
      this.style.color = 'white';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton(song.id);
    renderFavorites();
  });
  function changeTheme(themeName) {
    document.body.className = themeName;
    localStorage.setItem('theme', themeName);
}





function generateRecommendations() {
    // Analyze listening history
    const genrePrefs = {};
    favorites.forEach(songId => {
        const song = songs.find(s => s.id === songId);
        genrePrefs[song.genre] = (genrePrefs[song.genre] || 0) + 1;
    });
    
    // Sort by most listened genre
    const sortedGenres = Object.entries(genrePrefs).sort((a,b) => b[1] - a[1]);
    
    // Get recommendations
    const recommendedSongs = songs.filter(song => 
        song.genre === sortedGenres[0][0] && !favorites.includes(song.id)
    ).slice(0, 6);
    
    renderRecommendedSection(recommendedSongs);
}







// Using Three.js for 3D effects
function init3DViewer() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    const texture = new THREE.TextureLoader().load(currentSong.cover);
    const geometry = new THREE.BoxGeometry(3, 3, 0.2);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    camera.position.z = 5;
    
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}








window.addEventListener('load', () => {
    const toast = document.getElementById('welcome-toast');
    if (toast) {
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 4000);
    }
});


function setGreeting() {
    const greetingEl = document.getElementById("greeting-message");
    const hour = new Date().getHours();
    let greeting = "Welcome";

    if (hour < 12) greeting = "Good Morning ☀️";
    else if (hour < 18) greeting = "Good Afternoon 🌤️";
    else greeting = "Good Evening 🌙";

    greetingEl.textContent = `${greeting}, enjoy your music!`;
}

function playAll() {
    if (songs.length > 0) {
        currentSongIndex = 0;
        loadSong(songs[0]);
        playSong();
    }
}

// Call it in init()
init = (function (originalInit) {
    return function () {
        originalInit();
        setGreeting();
    };
})(init);

function renderDiscoveryCarousel() {
    const carousel = document.getElementById('discover-carousel');
    songs.slice(0, 10).forEach(song => {
        const card = createSongCard(song);
        carousel.appendChild(card);
    });
}
window.addEventListener('load', renderDiscoveryCarousel);





const particleCanvas = document.getElementById('particles');
const particleCtx = particleCanvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticles(count) {
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            radius: Math.random() * 3,
            dx: (Math.random() - 0.5) * 1.2,
            dy: (Math.random() - 0.5) * 1.2,
        });
    }
}

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;

        particleCtx.beginPath();
        particleCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        particleCtx.fillStyle = '#1db954';
        particleCtx.fill();
    });
    requestAnimationFrame(animateParticles);
}

createParticles(60);
animateParticles();






// Save played song to localStorage
function saveRecentlyPlayed(songId) {
    let history = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    history = [songId, ...history.filter(id => id !== songId)].slice(0, 5); // 🔥 Changed from 10 to 5
    localStorage.setItem('recentlyPlayed', JSON.stringify(history));
    renderRecentlyPlayed();
}

function renderRecentlyPlayed() {
    const container = document.getElementById('recently-played');
    if (!container) return;

    // Check if hidden before rendering
    const isHidden = localStorage.getItem('recentlyPlayedHidden') === 'true';
    if (isHidden) {
        container.style.display = 'none';
        document.getElementById('toggle-recently-played').textContent = 'Show History';
    } else {
        container.style.display = 'grid';
        document.getElementById('toggle-recently-played').textContent = 'Hide History';
    }

    const history = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    container.innerHTML = '';

    history.forEach(id => {
        const song = songs.find(s => s.id === id);
        if (song) {
            const card = createSongCard(song);
            container.appendChild(card);
        }
    });
}

// Add this new function
function setupRecentlyPlayedToggle() {
    const toggleBtn = document.getElementById('toggle-recently-played');
    const recentlyPlayedSection = document.getElementById('recently-played');
    
    // Check localStorage for hidden state
    const isHidden = localStorage.getItem('recentlyPlayedHidden') === 'true';
    
    if (isHidden) {
        recentlyPlayedSection.style.display = 'none';
        toggleBtn.textContent = 'Show History';
    } else {
        recentlyPlayedSection.style.display = 'grid'; // or whatever display value you use
        toggleBtn.textContent = 'Hide History';
    }
    
    toggleBtn.addEventListener('click', () => {
        const currentlyHidden = recentlyPlayedSection.style.display === 'none';
        
        if (currentlyHidden) {
            recentlyPlayedSection.style.display = 'grid';
            toggleBtn.textContent = 'Hide History';
            localStorage.setItem('recentlyPlayedHidden', 'false');
        } else {
            recentlyPlayedSection.style.display = 'none';
            toggleBtn.textContent = 'Show History';
            localStorage.setItem('recentlyPlayedHidden', 'true');
        }
    });
}


























































// Add these functions to script.js

// Modified renderSongsByGenre function to handle show more
function renderSongsByGenre(genre, songs) {
    const grid = document.getElementById(`${genre}-songs`);
    if (!grid) return;
    
    // Create or get the container for this section
    let container = grid.parentElement;
    if (!container.classList.contains('section-container')) {
        const newContainer = document.createElement('div');
        newContainer.className = 'section-container';
        grid.parentNode.insertBefore(newContainer, grid);
        newContainer.appendChild(grid);
        container = newContainer;
    }
    
    // Clear any existing show more button
    const existingBtn = container.querySelector('.show-more-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    // Clear the grid
    grid.innerHTML = '';
    
    // Filter songs that should appear on home
    const songsToShow = songs.filter(song => song.showOnHome !== false);
    
    // Determine how many to show initially
    const initialCount = 5;
    const shouldShowMore = songsToShow.length > initialCount;
    const songsToRender = shouldShowMore ? songsToShow.slice(0, initialCount) : songsToShow;
    
    // Render the songs
    songsToRender.forEach(song => {
        const songCard = createSongCard(song);
        grid.appendChild(songCard);
    });
    
    // Add show more button if needed
    if (shouldShowMore) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'show-more-btn';
        showMoreBtn.textContent = 'Show More';
        showMoreBtn.dataset.genre = genre;
        showMoreBtn.dataset.expanded = 'false';
        showMoreBtn.dataset.allSongs = JSON.stringify(songsToShow.map(song => song.id));
        
        showMoreBtn.addEventListener('click', function() {
            const isExpanded = this.dataset.expanded === 'true';
            
            if (isExpanded) {
                // Show only initial count
                grid.innerHTML = '';
                songsToShow.slice(0, initialCount).forEach(song => {
                    const songCard = createSongCard(song);
                    grid.appendChild(songCard);
                });
                this.textContent = 'Show More';
                this.dataset.expanded = 'false';
            } else {
                // Show all songs
                grid.innerHTML = '';
                songsToShow.forEach(song => {
                    const songCard = createSongCard(song);
                    grid.appendChild(songCard);
                });
                this.textContent = 'Show Less';
                this.dataset.expanded = 'true';
            }
        });
        
        container.appendChild(showMoreBtn);
    }
}

// Update the init function to wrap section headers
function init() {
    // Wrap all section headers
    document.querySelectorAll('.section h2').forEach(header => {
        const container = document.createElement('div');
        container.className = 'section-header';
        header.parentNode.insertBefore(container, header);
        container.appendChild(header);
    });
    
    renderSongsByGenre('trending', songs.slice(0, 10));
    renderSongsByGenre('pop', songs.filter(song => song.genre === 'pop'));
    renderSongsByGenre('rock', songs.filter(song => song.genre === 'rock'));
    renderSongsByGenre('hiphop', songs.filter(song => song.genre === 'hiphop'));
    renderSongsByGenre('bhajan', songs.filter(song => song.genre === 'bhajan'));
    renderRecentlyPlayed();
    setupRecentlyPlayedToggle();

    renderFavorites();
    renderPlaylists();
    
    // Load first song
    if (songs.length > 0) {
        loadSong(songs[0]);
    }
    
    // Event listeners
    setupEventListeners();
}


















// Add this to your script.js file (in the init function or near the top)
const artists = [
    {
        id: 1,
        name: "Yo Yo Honey Singh",
        genre: "Hip Hop",
        image: "https://i1.sndcdn.com/artworks-I1VkGxl2ilhQzbZY-9VobTQ-t500x500.jpg",
        page: "yoyo.html"
    },
    {
        id: 2,
        name: "Vishal Mishra",
        genre: "Pop",
        image: "https://www.lyricsgoal.com/wp-content/uploads/2021/11/naacho-naacho-rrr-vishal-mishra.jpg",
        page: "vishal-mishra.html"
    },
    {
        id: 3,
        name: "Tadkeshwar Mahadev",
        genre: "Bhajan",
        image: "https://i.pinimg.com/474x/e4/a1/6b/e4a16bcabb6db000d3e80b8eb502cb85.jpg",
        page: "tadkeshwar-mahadev.html"
    },
    {
        id: 4,
        name: "Pandit Ji",
        genre: "Bhajan",
        image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/54083/278476/1598169540955_Shree_Ganesh__42118.1687411714.jpg?c=2",
        page: "pandit-ji.html"
    },
    {
        id: 5,
        name: "Masoom Sharma",
        genre: "Pop",
        image: "https://i.ytimg.com/vi/xl6RvlD_KIM/maxresdefault.jpg",
        page: "masoom-sharma.html"
    },
    {
        id: 6,
        name: "Guru Randhawa",
        genre: "Hip Hop",
        image: "https://i.ytimg.com/vi/Q0xFN10WJGc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvU-Ztb-ZdHf5RmKjoMYpOYbm8XA",
        page: "guru-randhawa.html"
    },
    
];

// Add this function to render artists
function renderArtists() {
    const artistsScroll = document.getElementById('artists-scroll');
    artistsScroll.innerHTML = '';
    
    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artist-image">
            <div class="artist-name">${artist.name}</div>
            <div class="artist-genre">${artist.genre}</div>
        `;
        
        artistCard.addEventListener('click', () => {
            window.location.href = artist.page;
        });
        
        artistsScroll.appendChild(artistCard);
    });
}

// Call renderArtists() in your init function
init = (function (originalInit) {
    return function () {
        originalInit();
        setGreeting();
        renderArtists(); // Add this line
    };
})(init);




// Initialize the app
document.addEventListener('DOMContentLoaded', init);










// Toggle player visibility
const playerToggleBtn = document.getElementById('player-toggle-btn');
const player = document.querySelector('.player');

if (playerToggleBtn && player) {
    playerToggleBtn.addEventListener('click', () => {
        player.classList.toggle('hidden');
        playerToggleBtn.innerHTML = player.classList.contains('hidden') ? 
            '<i class="fas fa-music"></i>' : 
            '<i class="fas fa-times"></i>';
    });
}



