// Developer: Anuga Senithu
import { auth, signOut, onAuthStateChanged, showToast } from './app.js';

onAuthStateChanged(auth, (user) => {
    if (!user) window.location.href = 'login.html';
});

document.getElementById('logoutBtn')?.addEventListener('click', async () => {
    try {
        await signOut(auth);
        showToast('Logged out successfully');
        setTimeout(() => window.location.href = 'index.html', 1000);
    } catch (error) { showToast(error.message, true); }
});

const toolsGrid = document.getElementById('toolsGrid');
const toolSearch = document.getElementById('toolSearch');

function renderTools(filterText = '') {
    if (!toolsGrid) return;
    toolsGrid.innerHTML = '';
    const filtered = tools.filter(t => t.name.toLowerCase().includes(filterText.toLowerCase()) || t.description.toLowerCase().includes(filterText.toLowerCase()));

    filtered.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'interactive-tool-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                <h3 class="text-neon" style="font-size: 1.1rem;">${tool.id}. ${tool.name}</h3>
                <span style="background: rgba(0, 243, 255, 0.1); color: var(--neon-blue); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid var(--neon-blue);">${tool.category}</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">${tool.description}</p>
            <button class="neon-btn cyber-btn" style="margin-top: 15px; width: 100%; font-size: 0.85rem; padding: 8px;">Launch Tool</button>
        `;
        card.querySelector('button').addEventListener('click', () => showToast(`Launching ${tool.name}...`));
        toolsGrid.appendChild(card);
    });

    if (filtered.length === 0) {
        toolsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No tools found.</p>';
    }
}

renderTools();
toolSearch?.addEventListener('input', (e) => renderTools(e.target.value));

function handleResize() {
    const sidebar = document.getElementById('rightSidebar');
    if (sidebar) sidebar.style.display = window.innerWidth >= 1200 ? 'block' : 'none';
}
window.addEventListener('resize', handleResize);
handleResize();
