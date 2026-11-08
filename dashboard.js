// =========================================
// CyberVault - Dashboard Logic
// Developer: Anuga Senithu
// =========================================

import { auth, signOut, onAuthStateChanged, showToast } from './app.js';

// 1. Authentication State Check
// Redirects to login if the user is not authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        console.log('Secure session established for:', user.email);
    }
});

// 2. Logout Handler
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            showToast('Terminating secure session...');
            await signOut(auth);
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } catch (error) {
            showToast(error.message, true);
        }
    });
}

// 3. Tool Rendering Logic
const toolsGrid = document.getElementById('toolsGrid');
const toolSearch = document.getElementById('toolSearch');

function renderTools(filterText = '') {
    if (!toolsGrid) return;
    
    // Add a subtle fade effect during search for smooth UX
    toolsGrid.style.opacity = '0.5';
    
    setTimeout(() => {
        toolsGrid.innerHTML = '';
        
        // Filter tools by name, description, or ID
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(filterText.toLowerCase()) ||
            tool.description.toLowerCase().includes(filterText.toLowerCase()) ||
            tool.id.toString().includes(filterText)
        );

        if (filteredTools.length === 0) {
            toolsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                    <h3 class="text-neon" style="margin-bottom: 10px; font-family: var(--font-display);">No Tools Found</h3>
                    <p style="color: var(--text-secondary); font-family: var(--font-mono);">Try adjusting your search parameters.</p>
                </div>
            `;
        } else {
            filteredTools.forEach((tool, index) => {
                const card = document.createElement('div');
                card.className = 'interactive-tool-card fade-in-up';
                
                // Staggered animation delay for a cascading reveal effect
                card.style.animationDelay = `${index * 0.03}s`; 
                
                // Format ID to be 3 digits (e.g., 001, 088, 091)
                const formattedId = tool.id.toString().padStart(3, '0');
                
                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                        <h3 class="text-neon" style="font-size: 1.05rem; font-family: var(--font-mono); font-weight: 700;">
                            <span style="color: var(--neon-purple); margin-right: 8px;">#${formattedId}</span>
                            ${tool.name}
                        </h3>
                        <span style="background: rgba(0, 243, 255, 0.1); color: var(--neon-blue); padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; border: 1px solid rgba(0, 243, 255, 0.3); font-family: var(--font-mono); letter-spacing: 1px;">
                            ${tool.category.toUpperCase()}
                        </span>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
                        ${tool.description}
                    </p>
                    <button class="neon-btn cyber-btn" style="width: 100%; font-size: 0.8rem; padding: 10px; font-family: var(--font-mono);" data-tool="${tool.name}">
                        INITIALIZE TOOL
                    </button>
                `;
                
                // Add click event to simulate tool launch
                const btn = card.querySelector('button');
                btn.addEventListener('click', () => {
                    showToast(`Initializing ${tool.name} environment...`);
                    // Future enhancement: Add actual tool routing, e.g., window.location.href = `tools/${tool.id}.html`;
                });
                
                toolsGrid.appendChild(card);
            });
        }
        
        // Restore opacity after rendering
        toolsGrid.style.opacity = '1';
        toolsGrid.style.transition = 'opacity 0.3s ease';
    }, 150); // Small delay allows the fade-out to be perceived
}

// 4. Initial Render
renderTools();

// 5. Search Functionality with Debounce (Prevents lag on rapid typing)
let searchTimeout;
if (toolSearch) {
    toolSearch.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderTools(e.target.value);
        }, 300); // 300ms debounce
    });
}

// 6. Responsive Sidebar Logic
function handleResize() {
    const rightSidebar = document.getElementById('rightSidebar');
    if (rightSidebar) {
        if (window.innerWidth >= 1200) {
            rightSidebar.style.display = 'block';
            // Add fade-in animation when it appears on large screens
            rightSidebar.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            rightSidebar.style.display = 'none';
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial check on load
