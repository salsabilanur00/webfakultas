// --- Fungsi Toggle Dropdown Menu "Tentang Kami" ---
function toggleDropdown(e) {
    // Fungsi ini dipanggil langsung dari onclick di HTML
    e.preventDefault();
    
    // Temukan elemen dropdown-content yang terkait
    const dropdownContainer = e.target.closest('.dropdown');
    if (!dropdownContainer) return;

    const dropdownContent = dropdownContainer.querySelector('.dropdown-content');
    const dropdownIcon = dropdownContainer.querySelector('.dropdown-icon');
    
    const isVisible = dropdownContent.style.display === 'block';

    // 1. Tutup semua dropdown lain
    document.querySelectorAll('.dropdown-content').forEach(content => {
        if (content !== dropdownContent) {
            content.style.display = 'none';
            // Pastikan ikon panah yang lain juga direset
            const otherIcon = content.closest('.dropdown').querySelector('.dropdown-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });

    // 2. Toggle tampilan dan ikon untuk dropdown yang diklik
    if (isVisible) {
        dropdownContent.style.display = 'none';
        if (dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
    } else {
        dropdownContent.style.display = 'block';
        if (dropdownIcon) dropdownIcon.style.transform = 'rotate(180deg)';
    }
}

// Event listener untuk menutup dropdown saat mengklik di luar
document.addEventListener('click', (e) => {
    // Cek apakah klik berasal dari dalam dropdown
    const isClickInsideDropdown = e.target.closest('.dropdown');

    if (!isClickInsideDropdown) {
        // Jika tidak, sembunyikan semua dropdown
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
            // Reset ikon panah
            const icon = content.closest('.dropdown').querySelector('.dropdown-icon');
            if (icon) icon.style.transform = 'rotate(0deg)';
        });
    }
});