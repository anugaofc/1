<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - CyberVault</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="cyber-loader">
        <div class="loader-ring"><div></div><div></div></div>
        <div class="loader-text">ESTABLISHING SECURE SESSION...</div>
    </div>

    <div class="responsive-cyber-layout">
        <aside class="vertical-nav">
            <h2 class="text-neon" style="margin-bottom: 40px; font-size: 1.4rem; letter-spacing: 2px;">CYBERVAULT</h2>
            <nav style="display: flex; flex-direction: column; gap: 8px;">
                <a href="dashboard.html" class="active-nav-glow" style="padding: 12px 16px; border-radius: 6px; color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.9rem;">
                    <span>◈</span> Dashboard
                </a>
                <a href="#" class="animated-underline" style="padding: 12px 16px; border-radius: 6px; color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.9rem;">
                    <span>◈</span> All Tools
                </a>
                <a href="#" class="animated-underline" style="padding: 12px 16px; border-radius: 6px; color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.9rem;">
                    <span>◈</span> Learning Labs
                </a>
                <a href="#" class="animated-underline" style="padding: 12px 16px; border-radius: 6px; color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.9rem;">
                    <span>◈</span> Settings
                </a>
                <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <button id="logoutBtn" class="neon-btn cyber-btn" style="width: 100%; font-size: 0.8rem;">Terminate Session</button>
                </div>
            </nav>
        </aside>

        <main style="padding: 30px; min-height: 100vh;">
            <header class="sticky-header" style="position: sticky; top: 0; z-index: 100; background: rgba(5, 5, 8, 0.9); padding: 20px; border-radius: 8px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.05);">
                <h2 class="text-gradient" style="font-size: 1.5rem;">Command Center</h2>
                <input type="text" id="toolSearch" class="search-input-glow" placeholder="Search arsenal..." style="max-width: 300px;">
            </header>

            <div class="dashboard-3d" style="margin-bottom: 40px;">
                <div class="grid-layout" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                    <div class="dashboard-panel stats-card">
                        <div class="number" style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 900; color: var(--neon-blue);">100</div>
                        <div style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.85rem; margin-top: 5px;">TOTAL TOOLS</div>
                    </div>
                    <div class="dashboard-panel stats-card">
                        <div class="number" style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 900; color: var(--neon-green);">ONLINE</div>
                        <div style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.85rem; margin-top: 5px;">SERVERLESS STATUS</div>
                    </div>
                    <div class="dashboard-panel stats-card">
                        <div class="number" style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 900; color: var(--neon-purple);">A+</div>
                        <div style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.85rem; margin-top: 5px;">SECURITY GRADE</div>
                    </div>
                </div>
            </div>

            <div id="toolsGrid" class="grid-layout"></div>
        </main>

        <aside style="padding: 30px 20px; border-left: 1px solid rgba(255,255,255,0.05); display: none;" id="rightSidebar">
            <div style="text-align: center; margin-bottom: 40px;">
                <h4 class="text-neon" style="margin-bottom: 20px; font-family: var(--font-mono); font-size: 0.9rem;">SYSTEM RADAR</h4>
                <div class="cyber-radar" style="width: 180px; height: 180px; border-radius: 50%; border: 2px solid var(--neon-green); position: relative; background: radial-gradient(circle, rgba(10,255,0,0.1) 0%, transparent 70%); overflow: hidden; margin: 0 auto;">
                    <div style="position: absolute; top: 50%; left: 50%; width: 50%; height: 2px; background: var(--neon-green); transform-origin: 0 0; animation: spin 2s infinite linear; box-shadow: 0 0 10px var(--neon-green);"></div>
                </div>
            </div>
        </aside>
    </div>

    <div id="notificationToast" class="notification-toast">
        <span id="toastMessage">Operation successful</span>
    </div>

    <footer class="cyber-footer" style="margin-top: 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <p style="color: var(--text-secondary); font-size: 0.8rem; font-family: var(--font-mono);">
                &copy; 2026 CYBERVAULT. DEVELOPED BY <strong class="text-neon">ANUGA SENITHU</strong> | HOSTED ON VERCEL
            </p>
        </div>
    </footer>

    <script>
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('cyber-loader').classList.add('hidden');
            }, 800);
        });
    </script>
    <script src="tools.js"></script>
    <script type="module" src="dashboard.js"></script>
</body>
</html>
