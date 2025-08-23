const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeSidebar');
const toggleBtn = document.getElementById('toggleSidebar');

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
});

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});
