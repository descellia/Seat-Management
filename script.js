const form = document.getElementById('initiate-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const room = document.getElementById('room').value;
    const block = document.getElementById('block').value;
    const row = document.getElementById('row').value;
    const column = document.getElementById('column').value;

    // Simpan data ke localStorage
    localStorage.setItem('room', room);
    localStorage.setItem('block', block);
    localStorage.setItem(`${room}-${block}-rows`, row);
    localStorage.setItem(`${room}-${block}-cols`, column);

    // Simpan daftar room dan block jika belum ada
    let savedRooms = JSON.parse(localStorage.getItem('savedRooms')) || [];
    if (!savedRooms.includes(room)) {
        savedRooms.push(room);
        localStorage.setItem('savedRooms', JSON.stringify(savedRooms));
    }

    let savedBlocks = JSON.parse(localStorage.getItem('savedBlocks')) || [];
    if (!savedBlocks.includes(block)) {
        savedBlocks.push(block);
        localStorage.setItem('savedBlocks', JSON.stringify(savedBlocks));
    }

    // Redirect ke halaman seat map
    window.location.href = 'seatmap.html';
});
