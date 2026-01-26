(function() {
    'use strict';
    
    // Create and inject CSS
    const style = document.createElement('style');
    style.textContent = `
        #project0-loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0a0a0a;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            color: #00ff9d;
            font-family: 'Courier New', monospace;
        }
        
        .project0-loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(0, 255, 157, 0.3);
            border-radius: 50%;
            border-top-color: #00ff9d;
            animation: project0-spin 1s ease-in-out infinite;
            margin-bottom: 20px;
        }
        
        @keyframes project0-spin {
            to { transform: rotate(360deg); }
        }
        
        #project0-app-root {
            min-height: 100vh;
        }
        
        :root {
            --project0-primary: #00ff9d;
            --project0-secondary: #00b8ff;
            --project0-accent: #ff00ff;
            --project0-bg: #0a0a0a;
            --project0-text: #ffffff;
        }
        
        /* Main CSS styles from original code */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                        color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                        border-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                        box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body {
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Animated background particles */
        .project0-particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        }

        .project0-particle {
            position: absolute;
            border-radius: 50%;
            animation: project0-float 20s infinite linear;
        }

        @keyframes project0-float {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-100px) translateX(100px); }
            50% { transform: translateY(-50px) translateX(-100px); }
            75% { transform: translateY(100px) translateX(50px); }
            100% { transform: translateY(0) translateX(0); }
        }

        .project0-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        /* Header Styles */
        .project0-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            margin-bottom: 30px;
            position: relative;
        }

        /* Animated gradient border for header */
        .project0-header-border {
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, currentColor, transparent);
            opacity: 0.3;
        }

        .project0-logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .project0-logo i {
            font-size: 2.8rem;
            filter: drop-shadow(0 0 10px);
        }

        .project0-logo h1 {
            font-size: 2.4rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        /* Theme Selector - Clean Dropdown */
        .project0-theme-selector {
            position: relative;
            min-width: 200px;
        }

        .project0-theme-label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        .project0-theme-dropdown {
            width: 100%;
            padding: 14px 20px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid;
            border-radius: 15px;
            color: inherit;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 2;
        }

        .project0-theme-dropdown:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .project0-theme-dropdown:focus {
            outline: none;
            transform: scale(1.02);
        }

        .project0-dropdown-arrow {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }

        .project0-theme-dropdown:focus + .project0-dropdown-arrow {
            transform: translateY(-50%) rotate(180deg);
        }

        /* Search Bar */
        .project0-search-container {
            position: relative;
            width: 100%;
            max-width: 500px;
        }

        .project0-search-bar {
            width: 100%;
            padding: 18px 25px;
            padding-left: 60px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            color: inherit;
            font-size: 1.1rem;
            font-weight: 500;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project0-search-bar:focus {
            outline: none;
            transform: scale(1.02);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .project0-search-icon {
            position: absolute;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.3rem;
            opacity: 0.7;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        /* Categories Section */
        .project0-categories-section {
            margin: 50px 0;
            position: relative;
        }

        .project0-section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 35px;
            padding: 0 10px;
        }

        .project0-section-header h2 {
            font-size: 2.2rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 15px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            position: relative;
            padding-bottom: 10px;
        }

        .project0-section-header h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 4px;
            background: currentColor;
            border-radius: 2px;
            opacity: 0.7;
        }

        .project0-section-header h2 i {
            font-size: 2rem;
            filter: drop-shadow(0 0 8px);
        }

        .project0-scroll-hint {
            font-size: 1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        .project0-scroll-hint i {
            animation: project0-bounce 2s infinite;
        }

        @keyframes project0-bounce {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
        }

        /* Horizontal Scroll Categories */
        .project0-categories-container {
            position: relative;
            overflow: hidden;
            padding: 20px 10px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .project0-categories-scroll {
            display: flex;
            overflow-x: auto;
            gap: 30px;
            padding: 20px 10px;
            scrollbar-width: none;
            cursor: grab;
        }

        .project0-categories-scroll::-webkit-scrollbar {
            height: 12px;
        }

        .project0-categories-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            margin: 0 10px;
        }

        .project0-categories-scroll::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            border: 3px solid transparent;
            background-clip: content-box;
        }

        .project0-categories-scroll:active {
            cursor: grabbing;
        }

        /* Category Cards */
        .project0-category-card {
            flex: 0 0 auto;
            width: 320px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            border-radius: 25px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            position: relative;
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .project0-category-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, transparent, currentColor, transparent);
            opacity: 0.6;
        }

        .project0-category-card:hover {
            transform: translateY(-15px) rotateX(5deg);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
        }

        .project0-category-card:hover .project0-category-icon {
            transform: scale(1.1) rotate(5deg);
        }

        .project0-category-header {
            padding: 25px;
            background: linear-gradient(180deg, rgba(0,0,0,0.4), transparent);
            display: flex;
            align-items: center;
            gap: 20px;
            position: relative;
            overflow: hidden;
        }

        .project0-category-header::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            opacity: 0.5;
        }

        .project0-category-icon {
            width: 70px;
            height: 70px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            position: relative;
            z-index: 1;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project0-category-icon::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
            border-radius: inherit;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .project0-category-card:hover .project0-category-icon::before {
            opacity: 1;
        }

        .project0-category-header h3 {
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 5px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .project0-category-header p {
            font-size: 1rem;
            opacity: 0.9;
            font-weight: 500;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        .project0-games-list {
            padding: 25px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-height: 350px;
            overflow-y: auto;
        }

        .project0-games-list::-webkit-scrollbar {
            width: 8px;
        }

        .project0-games-list::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
        }

        .project0-games-list::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }

        /* Game Buttons */
        .project0-game-btn {
            padding: 18px 20px;
            background: rgba(255, 255, 255, 0.07);
            border: none;
            border-radius: 15px;
            color: inherit;
            text-align: left;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project0-game-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
        }

        .project0-game-btn:hover {
            transform: translateX(10px) scale(1.03);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .project0-game-btn:hover::before {
            left: 100%;
        }

        .project0-game-btn i {
            font-size: 1rem;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
        }

        .project0-game-btn:hover i {
            opacity: 1;
            transform: translateX(0);
        }

        /* Game Viewer */
        .project0-game-viewer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project0-game-viewer.active {
            opacity: 1;
            visibility: visible;
        }

        .project0-game-header {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 15px 20px;
            background: linear-gradient(180deg, rgba(0,0,0,0.9), transparent);
            height: 6%;
            min-height: 60px;
            backdrop-filter: blur(10px);
        }

        .project0-game-title {
            font-size: 1.4rem;
            font-weight: 800;
            color: white;
            position: absolute;
            left: 30px;
            top: 25px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            letter-spacing: 1px;
        }

        .project0-close-game {
            background: rgba(255, 255, 255, 0.15);
            border: 2px solid rgba(255, 255, 255, 0.3);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: white;
            font-size: 1.4rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project0-close-game:hover {
            background: #ff4757;
            border-color: #ff4757;
            transform: rotate(90deg) scale(1.1);
            box-shadow: 0 0 30px rgba(255, 71, 87, 0.5);
        }

        .project0-game-frame {
            width: 100%;
            height: 94%;
            background: #000;
            border: none;
            box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
        }

        .project0-game-viewer iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* Footer */
        .project0-footer {
            text-align: center;
            padding: 40px 0;
            margin-top: 60px;
            position: relative;
            font-size: 1rem;
            opacity: 0.9;
        }

        .project0-footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 2px;
            background: linear-gradient(90deg, transparent, currentColor, transparent);
            opacity: 0.3;
        }

        .project0-footer-links {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 25px;
        }

        .project0-footer-links a {
            color: inherit;
            text-decoration: none;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .project0-footer-links a:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Admin Hint */
        .project0-admin-hint {
            background: rgba(255, 255, 255, 0.08);
            border-left: 5px solid;
            padding: 25px;
            margin-top: 40px;
            border-radius: 20px;
            font-size: 1rem;
            opacity: 0.9;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }

        .project0-admin-hint::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            opacity: 0.5;
        }

        .project0-admin-hint h4 {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 1.3rem;
            font-weight: 800;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        /* No results message */
        .project0-no-results {
            text-align: center;
            padding: 60px 20px;
            font-size: 1.3rem;
            display: none;
            opacity: 0.9;
            position: relative;
        }

        .project0-no-results i {
            font-size: 4rem;
            margin-bottom: 25px;
            display: block;
            filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
            animation: project0-pulse 2s infinite;
        }

        @keyframes project0-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .project0-container {
                padding: 15px;
            }
            
            .project0-category-card {
                width: 300px;
            }
        }

        @media (max-width: 992px) {
            .project0-header {
                flex-direction: column;
                gap: 25px;
                text-align: center;
            }
            
            .project0-search-container {
                max-width: 100%;
                order: 3;
            }
            
            .project0-theme-selector {
                order: 2;
                width: 100%;
                max-width: 300px;
            }
            
            .project0-category-card {
                width: 280px;
            }
            
            .project0-section-header {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }
            
            .project0-section-header h2::after {
                left: 50%;
                transform: translateX(-50%);
            }
        }

        @media (max-width: 768px) {
            .project0-logo h1 {
                font-size: 2rem;
            }
            
            .project0-category-card {
                width: 260px;
            }
            
            .project0-category-header h3 {
                font-size: 1.5rem;
            }
            
            .project0-game-btn {
                padding: 15px;
                font-size: 1rem;
            }
            
            .project0-footer-links {
                flex-wrap: wrap;
                gap: 15px;
            }
        }

        @media (max-width: 480px) {
            .project0-category-card {
                width: 240px;
            }
            
            .project0-category-icon {
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
            }
            
            .project0-theme-dropdown {
                padding: 12px 15px;
                font-size: 0.95rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create loading screen
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'project0-loading';
    loadingDiv.innerHTML = `
        <div class="project0-loading-spinner"></div>
        <h2>Loading Project 0...</h2>
        <p>Initializing gaming environment</p>
    `;
    
    // Create app root
    const appRoot = document.createElement('div');
    appRoot.id = 'project0-app-root';
    
    // Insert into body
    document.body.appendChild(loadingDiv);
    document.body.appendChild(appRoot);
    
    // Configuration
    const CONFIG = {
        siteName: "Project 0",
        siteTagline: "Ultimate Gaming Experience",
        currentYear: new Date().getFullYear(),
        
        themes: [
            { id: "cyberpunk", name: "Cyberpunk" },
            { id: "retrowave", name: "Retrowave" },
            { id: "matrix", name: "The Matrix" },
            { id: "oceanic", name: "Oceanic Depth" },
            { id: "inferno", name: "Inferno" },
            { id: "forest", name: "Enchanted Forest" },
            { id: "galaxy", name: "Cosmic Galaxy" },
            { id: "golden", name: "Golden Age" },
            { id: "midnight", name: "Midnight Aurora" },
            { id: "sunset", name: "Sunset Paradise" },
            { id: "holographic", name: "Holographic" },
            { id: "japanese", name: "Japanese Cherry Blossom" },
            { id: "synthwave", name: "Synthwave Dream" },
            { id: "arctic", name: "Arctic Frost" },
            { id: "royal", name: "Royal Purple" },
            { id: "neon", name: "Neon City" },
            { id: "cottoncandy", name: "Cotton Candy" },
            { id: "jungle", name: "Jungle Adventure" },
            { id: "moonlight", name: "Moonlight" },
            { id: "lava", name: "Lava Flow" },
            { id: "cyberfuture", name: "Cyber Future" },
            { id: "dreamy", name: "Dreamy Pastel" },
            { id: "desert", name: "Desert Mirage" }
        ],
            
        categoryIcons: {
            gba: "fa-mobile-alt",
            flash: "fa-bolt",
            ds: "fa-tablet-alt",
            nes: "fa-tv",
            snes: "fa-gamepad",
            ps1: "fa-compact-disc",
            n64: "fa-cube"
        }
    };
//ROOKS GAMES//
    const GAME_DATA = {
        categories: {
            gba: {
                displayName: "GBA",
                description: "Mostly Pokemon Games",
                games: [
                    { name: "Pokemon Radical Red (v4.1)", url: "https://roject-roms.pages.dev/Radical%20Red%20(v4.1)" },
                    { name: "Pokemon Elite Redux (v2.5)", url: "https://roject-roms.pages.dev/Elite%20Redux%20(v2.5)" }
                    
                ]
            },
            
            flash: {
                displayName: "Flash Games",
                description: "",
                games: [
                    { name: "PapasFreezeria", url: "https://roject-roms.pages.dev/papasfreezeria" }
                ]
            },
            
            ds: {
                displayName: "Nintendo DS",
                description: "Dual-screen classic games",
                games: [
                    { name: "Pokemon white", url: "https://incomparable-hotteok-58d177.netlify.app/" }
                ]
            },
            
            nes: {
                displayName: "Nintendo Entertainment System",
                description: "Classic 8-bit retro games",
                games: [
                    { name: "Super Mario Bros", url: "https://classicgame.com/nes/super-mario" },
                    { name: "The Legend of Zelda", url: "https://classicgame.com/nes/zelda" },
                    { name: "Metroid", url: "https://classicgame.com/nes/metroid" }
                ]
            }
        }
    };

    const THEMES = {
        cyberpunk: {
            name: "Cyberpunk",
            colors: {
                primary: "#00ff9d",
                secondary: "#00b8ff",
                accent: "#ff00ff",
                background: "#0a0a0a",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
                shadow: "0 0 30px rgba(0, 255, 157, 0.3)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff00ff, #9d00ff)",
                flash: "linear-gradient(135deg, #00ff9d, #00b8ff)",
                ds: "linear-gradient(135deg, #ff9a00, #ff0058)",
                nes: "linear-gradient(135deg, #00ffea, #00b8ff)"
            },
            particles: {
                color: "#00ff9d",
                count: 30
            },
            font: "'Courier New', monospace"
        },
        
        retrowave: {
            name: "Retrowave",
            colors: {
                primary: "#ff00ff",
                secondary: "#ff9a00",
                accent: "#00ffea",
                background: "#0f0f23",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #0f0f23 0%, #1a0f33 50%, #330f33 100%)",
                shadow: "0 0 40px rgba(255, 0, 255, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff00ff, #9d00ff)",
                flash: "linear-gradient(135deg, #00ffea, #00b8ff)",
                ds: "linear-gradient(135deg, #ff9a00, #ff0058)",
                nes: "linear-gradient(135deg, #ff00ff, #ff9a00)"
            },
            particles: {
                color: "#ff00ff",
                count: 25
            },
            font: "'Arial Black', sans-serif"
        },
        
        matrix: {
            name: "The Matrix",
            colors: {
                primary: "#00ff41",
                secondary: "#008f11",
                accent: "#00ff9d",
                background: "#000000",
                text: "#00ff41",
                gradient: "linear-gradient(135deg, #000000 0%, #001a00 50%, #003300 100%)",
                shadow: "0 0 25px rgba(0, 255, 65, 0.3)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #00ff41, #00b894)",
                flash: "linear-gradient(135deg, #00ff9d, #00ff41)",
                ds: "linear-gradient(135deg, #00b894, #00ff41)",
                nes: "linear-gradient(135deg, #00ff41, #00ff9d)"
            },
            particles: {
                color: "#00ff41",
                count: 40
            },
            font: "'Consolas', monospace"
        },
        
        oceanic: {
            name: "Oceanic Depth",
            colors: {
                primary: "#0077ff",
                secondary: "#00ddff",
                accent: "#00ffea",
                background: "#001f3f",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #001f3f 0%, #003f7f 50%, #005fbf 100%)",
                shadow: "0 0 30px rgba(0, 119, 255, 0.3)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #0077ff, #00ddff)",
                flash: "linear-gradient(135deg, #00ddff, #00ffea)",
                ds: "linear-gradient(135deg, #00ffea, #0077ff)",
                nes: "linear-gradient(135deg, #0077ff, #00ffea)"
            },
            particles: {
                color: "#00ddff",
                count: 20
            },
            font: "'Segoe UI', sans-serif"
        },
        
        inferno: {
            name: "Inferno",
            colors: {
                primary: "#ff6b35",
                secondary: "#ffa500",
                accent: "#ff0000",
                background: "#1a0000",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #8b0000 100%)",
                shadow: "0 0 35px rgba(255, 107, 53, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff6b35, #ffa500)",
                flash: "linear-gradient(135deg, #ffa500, #ff0000)",
                ds: "linear-gradient(135deg, #ff0000, #ff6b35)",
                nes: "linear-gradient(135deg, #ff6b35, #ff0000)"
            },
            particles: {
                color: "#ff6b35",
                count: 25
            },
            font: "'Impact', sans-serif"
        },
        
        forest: {
            name: "Enchanted Forest",
            colors: {
                primary: "#00cc66",
                secondary: "#00ff99",
                accent: "#99ff66",
                background: "#002200",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #002200 0%, #004400 50%, #006600 100%)",
                shadow: "0 0 30px rgba(0, 204, 102, 0.3)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #00cc66, #00ff99)",
                flash: "linear-gradient(135deg, #00ff99, #99ff66)",
                ds: "linear-gradient(135deg, #99ff66, #00cc66)",
                nes: "linear-gradient(135deg, #00cc66, #99ff66)"
            },
            particles: {
                color: "#00ff99",
                count: 20
            },
            font: "'Georgia', serif"
        },
        
        galaxy: {
            name: "Cosmic Galaxy",
            colors: {
                primary: "#9d4edd",
                secondary: "#c77dff",
                accent: "#ff9e00",
                background: "#10001d",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #10001d 0%, #240046 50%, #3c096c 100%)",
                shadow: "0 0 40px rgba(157, 78, 221, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #9d4edd, #c77dff)",
                flash: "linear-gradient(135deg, #c77dff, #ff9e00)",
                ds: "linear-gradient(135deg, #ff9e00, #9d4edd)",
                nes: "linear-gradient(135deg, #9d4edd, #ff9e00)"
            },
            particles: {
                color: "#c77dff",
                count: 35
            },
            font: "'Century Gothic', sans-serif"
        },
        
        golden: {
            name: "Golden Age",
            colors: {
                primary: "#ffd700",
                secondary: "#ffed4e",
                accent: "#ff9500",
                background: "#1a1200",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #1a1200 0%, #3d2c00 50%, #5a4100 100%)",
                shadow: "0 0 35px rgba(255, 215, 0, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ffd700, #ffed4e)",
                flash: "linear-gradient(135deg, #ffed4e, #ff9500)",
                ds: "linear-gradient(135deg, #ff9500, #ffd700)",
                nes: "linear-gradient(135deg, #ffd700, #ff9500)"
            },
            particles: {
                color: "#ffed4e",
                count: 20
            },
            font: "'Times New Roman', serif"
        },
        midnight: {
            name: "Midnight Aurora",
            colors: {
                primary: "#7c3aed",
                secondary: "#8b5cf6",
                accent: "#a78bfa",
                background: "#0f172a",
                text: "#f1f5f9",
                gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
                shadow: "0 0 30px rgba(124, 58, 237, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
                flash: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
                ds: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
                nes: "linear-gradient(135deg, #7c3aed, #a78bfa)"
            },
            particles: {
                color: "#8b5cf6",
                count: 25
            },
            font: "'Inter', sans-serif"
        },
        
        sunset: {
            name: "Sunset Paradise",
            colors: {
                primary: "#ff6b6b",
                secondary: "#ffa8a8",
                accent: "#ffd166",
                background: "#1a1a2e",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                shadow: "0 0 35px rgba(255, 107, 107, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff6b6b, #ffa8a8)",
                flash: "linear-gradient(135deg, #ffa8a8, #ffd166)",
                ds: "linear-gradient(135deg, #ffd166, #ff6b6b)",
                nes: "linear-gradient(135deg, #ff6b6b, #ffd166)"
            },
            particles: {
                color: "#ffa8a8",
                count: 20
            },
            font: "'Montserrat', sans-serif"
        },
        
        holographic: {
            name: "Holographic",
            colors: {
                primary: "#00f5d4",
                secondary: "#9b5de5",
                accent: "#f15bb5",
                background: "#03071e",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #03071e 0%, #370617 50%, #6a040f 100%)",
                shadow: "0 0 40px rgba(0, 245, 212, 0.3)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #00f5d4, #9b5de5)",
                flash: "linear-gradient(135deg, #9b5de5, #f15bb5)",
                ds: "linear-gradient(135deg, #f15bb5, #00f5d4)",
                nes: "linear-gradient(135deg, #00f5d4, #f15bb5)"
            },
            particles: {
                color: "#00f5d4",
                count: 35
            },
            font: "'Orbitron', sans-serif"
        },
        
        japanese: {
            name: "Japanese Cherry Blossom",
            colors: {
                primary: "#ff5d8f",
                secondary: "#ff97b7",
                accent: "#ffacc5",
                background: "#2d3047",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #2d3047 0%, #419d78 50%, #419d78 100%)",
                shadow: "0 0 30px rgba(255, 93, 143, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff5d8f, #ff97b7)",
                flash: "linear-gradient(135deg, #ff97b7, #ffacc5)",
                ds: "linear-gradient(135deg, #ffacc5, #ff5d8f)",
                nes: "linear-gradient(135deg, #ff5d8f, #ffacc5)"
            },
            particles: {
                color: "#ff97b7",
                count: 30
            },
            font: "'Noto Sans JP', sans-serif"
        },
        
        synthwave: {
            name: "Synthwave Dream",
            colors: {
                primary: "#ff00ff",
                secondary: "#00ffff",
                accent: "#ffff00",
                background: "#120458",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #120458 0%, #2d00a8 50%, #5c00e6 100%)",
                shadow: "0 0 40px rgba(255, 0, 255, 0.5)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff00ff, #00ffff)",
                flash: "linear-gradient(135deg, #00ffff, #ffff00)",
                ds: "linear-gradient(135deg, #ffff00, #ff00ff)",
                nes: "linear-gradient(135deg, #ff00ff, #ffff00)"
            },
            particles: {
                color: "#00ffff",
                count: 40
            },
            font: "'Rajdhani', sans-serif"
        },
        
        arctic: {
            name: "Arctic Frost",
            colors: {
                primary: "#00cecb",
                secondary: "#a3d9ff",
                accent: "#e7f9ff",
                background: "#001f3f",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #001f3f 0%, #003f7f 50%, #005fbf 100%)",
                shadow: "0 0 30px rgba(0, 206, 203, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #00cecb, #a3d9ff)",
                flash: "linear-gradient(135deg, #a3d9ff, #e7f9ff)",
                ds: "linear-gradient(135deg, #e7f9ff, #00cecb)",
                nes: "linear-gradient(135deg, #00cecb, #e7f9ff)"
            },
            particles: {
                color: "#a3d9ff",
                count: 15
            },
            font: "'Lato', sans-serif"
        },
        
        royal: {
            name: "Royal Purple",
            colors: {
                primary: "#9d4edd",
                secondary: "#c77dff",
                accent: "#e0aaff",
                background: "#10001d",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #10001d 0%, #240046 50%, #3c096c 100%)",
                shadow: "0 0 35px rgba(157, 78, 221, 0.5)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #9d4edd, #c77dff)",
                flash: "linear-gradient(135deg, #c77dff, #e0aaff)",
                ds: "linear-gradient(135deg, #e0aaff, #9d4edd)",
                nes: "linear-gradient(135deg, #9d4edd, #e0aaff)"
            },
            particles: {
                color: "#c77dff",
                count: 25
            },
            font: "'Playfair Display', serif"
        },
        
        neon: {
            name: "Neon City",
            colors: {
                primary: "#39ff14",
                secondary: "#ff3131",
                accent: "#1f51ff",
                background: "#0a0a0a",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
                shadow: "0 0 35px rgba(57, 255, 20, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #39ff14, #ff3131)",
                flash: "linear-gradient(135deg, #ff3131, #1f51ff)",
                ds: "linear-gradient(135deg, #1f51ff, #39ff14)",
                nes: "linear-gradient(135deg, #39ff14, #1f51ff)"
            },
            particles: {
                color: "#39ff14",
                count: 50
            },
            font: "'Exo 2', sans-serif"
        },
        
        cottoncandy: {
            name: "Cotton Candy",
            colors: {
                primary: "#ff9ff3",
                secondary: "#feca57",
                accent: "#ff6b6b",
                background: "#54a0ff",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #54a0ff 0%, #5f27cd 50%, #341f97 100%)",
                shadow: "0 0 30px rgba(255, 159, 243, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff9ff3, #feca57)",
                flash: "linear-gradient(135deg, #feca57, #ff6b6b)",
                ds: "linear-gradient(135deg, #ff6b6b, #ff9ff3)",
                nes: "linear-gradient(135deg, #ff9ff3, #ff6b6b)"
            },
            particles: {
                color: "#feca57",
                count: 20
            },
            font: "'Comic Neue', cursive"
        },
        
        jungle: {
            name: "Jungle Adventure",
            colors: {
                primary: "#10b981",
                secondary: "#34d399",
                accent: "#fbbf24",
                background: "#064e3b",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
                shadow: "0 0 30px rgba(16, 185, 129, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #10b981, #34d399)",
                flash: "linear-gradient(135deg, #34d399, #fbbf24)",
                ds: "linear-gradient(135deg, #fbbf24, #10b981)",
                nes: "linear-gradient(135deg, #10b981, #fbbf24)"
            },
            particles: {
                color: "#34d399",
                count: 25
            },
            font: "'Bangers', cursive"
        },
        
        moonlight: {
            name: "Moonlight",
            colors: {
                primary: "#6d28d9",
                secondary: "#8b5cf6",
                accent: "#c4b5fd",
                background: "#1e1b4b",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
                shadow: "0 0 35px rgba(109, 40, 217, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #6d28d9, #8b5cf6)",
                flash: "linear-gradient(135deg, #8b5cf6, #c4b5fd)",
                ds: "linear-gradient(135deg, #c4b5fd, #6d28d9)",
                nes: "linear-gradient(135deg, #6d28d9, #c4b5fd)"
            },
            particles: {
                color: "#8b5cf6",
                count: 20
            },
            font: "'Cinzel', serif"
        },
        
        lava: {
            name: "Lava Flow",
            colors: {
                primary: "#ff5400",
                secondary: "#ff6d00",
                accent: "#ff9100",
                background: "#240046",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #240046 0%, #3c096c 50%, #5a189a 100%)",
                shadow: "0 0 40px rgba(255, 84, 0, 0.5)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ff5400, #ff6d00)",
                flash: "linear-gradient(135deg, #ff6d00, #ff9100)",
                ds: "linear-gradient(135deg, #ff9100, #ff5400)",
                nes: "linear-gradient(135deg, #ff5400, #ff9100)"
            },
            particles: {
                color: "#ff6d00",
                count: 30
            },
            font: "'Bruno Ace SC', cursive"
        },
        
        cyberfuture: {
            name: "Cyber Future",
            colors: {
                primary: "#00ff9d",
                secondary: "#00b8ff",
                accent: "#ff0055",
                background: "#0a0a0a",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
                shadow: "0 0 45px rgba(0, 255, 157, 0.5)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #00ff9d, #00b8ff)",
                flash: "linear-gradient(135deg, #00b8ff, #ff0055)",
                ds: "linear-gradient(135deg, #ff0055, #00ff9d)",
                nes: "linear-gradient(135deg, #00ff9d, #ff0055)"
            },
            particles: {
                color: "#00ff9d",
                count: 45
            },
            font: "'Share Tech Mono', monospace"
        },
        
        dreamy: {
            name: "Dreamy Pastel",
            colors: {
                primary: "#ffafcc",
                secondary: "#bde0fe",
                accent: "#cdb4db",
                background: "#ffc8dd",
                text: "#2d3047",
                gradient: "linear-gradient(135deg, #ffc8dd 0%, #ffafcc 50%, #bde0fe 100%)",
                shadow: "0 0 25px rgba(255, 175, 204, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #ffafcc, #bde0fe)",
                flash: "linear-gradient(135deg, #bde0fe, #cdb4db)",
                ds: "linear-gradient(135deg, #cdb4db, #ffafcc)",
                nes: "linear-gradient(135deg, #ffafcc, #cdb4db)"
            },
            particles: {
                color: "#bde0fe",
                count: 15
            },
            font: "'Dancing Script', cursive"
        },
        
        desert: {
            name: "Desert Mirage",
            colors: {
                primary: "#fbbf24",
                secondary: "#f59e0b",
                accent: "#d97706",
                background: "#78350f",
                text: "#ffffff",
                gradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)",
                shadow: "0 0 35px rgba(251, 191, 36, 0.4)"
            },
            categoryGradients: {
                gba: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                flash: "linear-gradient(135deg, #f59e0b, #d97706)",
                ds: "linear-gradient(135deg, #d97706, #fbbf24)",
                nes: "linear-gradient(135deg, #fbbf24, #d97706)"
            },
            particles: {
                color: "#f59e0b",
                count: 20
            },
            font: "'Sedgwick Ave Display', cursive"
        }
    };

    function createHTMLStructure() {
        const appRoot = document.getElementById('project0-app-root');
        appRoot.innerHTML = '';
        
        const container = document.createElement('div');
        container.className = 'project0-container';
        
        const headerHTML = `
            <header class="project0-header">
                <div class="project0-header-border"></div>
                <div class="project0-logo">
                    <i class="fas fa-gamepad"></i>
                    <h1 id="project0-site-title">${CONFIG.siteName}</h1>
                </div>
                
                <div class="project0-theme-selector">
                    <label class="project0-theme-label">THEME</label>
                    <select class="project0-theme-dropdown" id="project0-themeDropdown">
                        ${CONFIG.themes.map(theme => 
                            `<option value="${theme.id}">${theme.name}</option>`
                        ).join('')}
                    </select>
                    <i class="fas fa-chevron-down project0-dropdown-arrow"></i>
                </div>
                
                <div class="project0-search-container">
                    <i class="fas fa-search project0-search-icon"></i>
                    <input type="text" class="project0-search-bar" id="project0-searchBar" placeholder="Search for games...">
                </div>
            </header>
            
            <main>
                <div class="project0-categories-section">
                    <div class="project0-section-header">
                        <h2><i class="fas fa-layer-group"></i> Game Categories</h2>
                        <div class="project0-scroll-hint">
                            <i class="fas fa-arrows-alt-h"></i>
                        </div>
                    </div>
                    
                    <div class="project0-categories-container">
                        <div class="project0-categories-scroll" id="project0-categoriesScroll">
                            <!-- Categories will be generated here -->
                        </div>
                    </div>
                </div>
                
                <div class="project0-no-results" id="project0-noResults">
                    <i class="fas fa-gamepad"></i>
                    <p>No games found matching your search.</p>
                    <p>Try a different keyword or explore the categories.</p>
                </div>
            </main>
            
            <footer class="project0-footer">
                <p id="project0-footer-text">${CONFIG.siteName} &copy; ${CONFIG.currentYear} | ${CONFIG.siteTagline}</p>
                <div class="project0-footer-links">
                    <a href="#"><i class="fas fa-question-circle"></i> Help Center</a>
                    <a href="#"><i class="fas fa-shield-alt"></i> Privacy Policy</a>
                    <a href="#"><i class="fas fa-envelope"></i> Contact Us</a>
                    <a href="#"><i class="fab fa-github"></i> GitHub</a>
                </div>
            </footer>
        `;
        
        container.innerHTML = headerHTML;
        appRoot.appendChild(container);
        
        const gameViewer = document.createElement('div');
        gameViewer.className = 'project0-game-viewer';
        gameViewer.id = 'project0-gameViewer';
        gameViewer.innerHTML = `
            <div class="project0-game-header">
                <div class="project0-game-title" id="project0-gameTitle">Game Title</div>
                <button class="project0-close-game" id="project0-closeGame">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="project0-game-frame">
                <iframe id="project0-gameFrame" src="" title="Game"></iframe>
            </div>
        `;
        appRoot.appendChild(gameViewer);
        
        const particles = document.createElement('div');
        particles.className = 'project0-particles';
        particles.id = 'project0-particles';
        appRoot.appendChild(particles);
    }

    function initializeSite() {
        document.getElementById('project0-site-title').textContent = CONFIG.siteName;
        document.getElementById('project0-footer-text').innerHTML = 
            `${CONFIG.siteName} &copy; ${CONFIG.currentYear} | ${CONFIG.siteTagline}`;
        
        const savedTheme = localStorage.getItem('gameEmulatorTheme') || 'cyberpunk';
        
        populateThemeDropdown();
        applyTheme(savedTheme);
        createParticles();
        generateCategories();
        setupEventListeners();
    }

    function populateThemeDropdown() {
        const dropdown = document.getElementById('project0-themeDropdown');
        dropdown.innerHTML = '';
        
        CONFIG.themes.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme.id;
            option.textContent = THEMES[theme.id].name;
            dropdown.appendChild(option);
        });
    }

    function applyTheme(themeId) {
        const theme = THEMES[themeId] || THEMES.cyberpunk;
        
        document.body.className = '';
        document.body.classList.add(`project0-theme-${themeId}`);
        
        document.getElementById('project0-themeDropdown').value = themeId;
        
        const root = document.documentElement;
        root.style.setProperty('--project0-primary', theme.colors.primary);
        root.style.setProperty('--project0-secondary', theme.colors.secondary);
        root.style.setProperty('--project0-accent', theme.colors.accent);
        root.style.setProperty('--project0-bg', theme.colors.background);
        root.style.setProperty('--project0-text', theme.colors.text);
        
        document.body.style.background = theme.colors.gradient;
        
        updateParticles(themeId);
        
        document.body.style.fontFamily = theme.font;
        
        localStorage.setItem('gameEmulatorTheme', themeId);
        
        console.log(`🎨 Applied ${theme.name} theme`);
    }

    function createParticles() {
        const particlesContainer = document.getElementById('project0-particles');
        particlesContainer.innerHTML = '';
    }

    function updateParticles(themeId) {
        const theme = THEMES[themeId] || THEMES.cyberpunk;
        const particlesContainer = document.getElementById('project0-particles');
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < theme.particles.count; i++) {
            const particle = document.createElement('div');
            particle.className = 'project0-particle';
            
            const size = Math.random() * 4 + 1;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = theme.particles.color;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.animationDuration = `${15 + Math.random() * 20}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    function updateCategoryColors(themeId) {
        const theme = THEMES[themeId] || THEMES.cyberpunk;
        const categoryCards = document.querySelectorAll('.project0-category-card');
        
        categoryCards.forEach(card => {
            const categoryKey = card.dataset.category;
            const gradient = theme.categoryGradients[categoryKey] || 
                            `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`;
            
            const icon = card.querySelector('.project0-category-icon');
            if (icon) {
                icon.style.background = gradient;
                icon.style.boxShadow = `0 10px 30px ${hexToRGBA(theme.colors.primary, 0.3)}`;
            }
            
            card.style.boxShadow = `0 20px 40px ${hexToRGBA(theme.colors.primary, 0.15)}`;
        });
    }

    function generateCategories() {
        const categoriesContainer = document.getElementById('project0-categoriesScroll');
        categoriesContainer.innerHTML = '';
        
        for (const [categoryKey, categoryData] of Object.entries(GAME_DATA.categories)) {
            const categoryCard = document.createElement('div');
            categoryCard.className = `project0-category-card ${categoryKey}`;
            categoryCard.dataset.category = categoryKey;
            
            categoryCard.innerHTML = `
                <div class="project0-category-header">
                    <div class="project0-category-icon">
                        <i class="fas ${CONFIG.categoryIcons[categoryKey] || 'fa-gamepad'}"></i>
                    </div>
                    <div>
                        <h3>${categoryData.displayName}</h3>
                        <p>${categoryData.description}</p>
                    </div>
                </div>
                <div class="project0-games-list" id="project0-games-list-${categoryKey}"></div>
            `;
            
            categoriesContainer.appendChild(categoryCard);
            
            const gamesList = document.getElementById(`project0-games-list-${categoryKey}`);
            categoryData.games.forEach(game => {
                const gameButton = document.createElement('button');
                gameButton.className = 'project0-game-btn';
                gameButton.dataset.game = game.name;
                gameButton.dataset.category = categoryKey;
                gameButton.dataset.url = game.url;
                gameButton.innerHTML = `${game.name} <i class="fas fa-external-link-alt"></i>`;
                gamesList.appendChild(gameButton);
            });
        }
        
        const currentTheme = localStorage.getItem('gameEmulatorTheme') || 'cyberpunk';
        updateCategoryColors(currentTheme);
        updateGameButtons();
    }

    function updateGameButtons() {
        const gameButtons = document.querySelectorAll('.project0-game-btn');
        
        gameButtons.forEach(button => {
            button.replaceWith(button.cloneNode(true));
        });
        
        const newGameButtons = document.querySelectorAll('.project0-game-btn');
        newGameButtons.forEach(button => {
            button.addEventListener('click', function() {
                const gameName = this.dataset.game;
                const gameUrl = this.dataset.url;
                
                document.getElementById('project0-gameTitle').textContent = gameName;
                document.getElementById('project0-gameFrame').src = gameUrl;
                document.getElementById('project0-gameViewer').classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    function setupEventListeners() {
        document.getElementById('project0-themeDropdown').addEventListener('change', function() {
            applyTheme(this.value);
        });
        
        const searchBar = document.getElementById('project0-searchBar');
        searchBar.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let hasResults = false;
            
            const gameButtons = document.querySelectorAll('.project0-game-btn');
            const categoryCards = document.querySelectorAll('.project0-category-card');
            
            gameButtons.forEach(game => {
                const gameName = game.dataset.game.toLowerCase();
                if (gameName.includes(searchTerm)) {
                    game.style.display = 'flex';
                    hasResults = true;
                } else {
                    game.style.display = 'none';
                }
            });
            
            categoryCards.forEach(card => {
                const visibleGamesInCard = Array.from(card.querySelectorAll('.project0-game-btn'))
                    .filter(game => game.style.display !== 'none');
                
                card.style.display = (visibleGamesInCard.length > 0 || searchTerm === '') ? 'block' : 'none';
            });
            
            document.getElementById('project0-noResults').style.display = 
                (!hasResults && searchTerm !== '') ? 'block' : 'none';
        });
        
        const categoriesScroll = document.getElementById('project0-categoriesScroll');
        let isDown = false;
        let startX, scrollLeft;
        
        categoriesScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            categoriesScroll.classList.add('active');
            startX = e.pageX - categoriesScroll.offsetLeft;
            scrollLeft = categoriesScroll.scrollLeft;
        });
        
        categoriesScroll.addEventListener('mouseleave', () => {
            isDown = false;
            categoriesScroll.classList.remove('active');
        });
        
        categoriesScroll.addEventListener('mouseup', () => {
            isDown = false;
            categoriesScroll.classList.remove('active');
        });
        
        categoriesScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - categoriesScroll.offsetLeft;
            const walk = (x - startX) * 2;
            categoriesScroll.scrollLeft = scrollLeft - walk;
        });
        
        categoriesScroll.addEventListener('wheel', (e) => {
            e.preventDefault();
            categoriesScroll.scrollLeft += e.deltaY * 0.5;
        });
        
        const closeGameBtn = document.getElementById('project0-closeGame');
        const gameViewer = document.getElementById('project0-gameViewer');
        const gameFrame = document.getElementById('project0-gameFrame');
        
        closeGameBtn.addEventListener('click', function() {
            gameViewer.classList.remove('active');
            document.body.style.overflow = 'auto';
            setTimeout(() => { gameFrame.src = ''; }, 300);
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                gameViewer.classList.remove('active');
                document.body.style.overflow = 'auto';
                setTimeout(() => { gameFrame.src = ''; }, 300);
            }
        });
    }

    function hexToRGBA(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function init() {
        window.appLoaded = true;
        
        createHTMLStructure();
        initializeSite();
        
        const loading = document.getElementById('project0-loading');
        if (loading) loading.style.display = 'none';
        
        console.log('🚀 Project 0 loaded successfully from jsDelivr');
        console.log('📦 Version: ' + (window.appVersion || '1.0.0'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.project0 = {
        addGame: function(category, gameName, gameUrl) {
            if (!GAME_DATA.categories[category]) {
                console.error(`Category "${category}" doesn't exist!`);
                return;
            }
            GAME_DATA.categories[category].games.push({ name: gameName, url: gameUrl });
            generateCategories();
            console.log(`🎮 Added "${gameName}" to ${category}`);
        },

        removeGame: function(category, gameName) {
            if (!GAME_DATA.categories[category]) {
                console.error(`Category "${category}" doesn't exist!`);
                return;
            }
            const index = GAME_DATA.categories[category].games.findIndex(game => game.name === gameName);
            if (index !== -1) {
                GAME_DATA.categories[category].games.splice(index, 1);
                generateCategories();
                console.log(`🗑️ Removed "${gameName}" from ${category}`);
            } else {
                console.error(`Game "${gameName}" not found in ${category}`);
            }
        },

        addCategory: function(categoryKey, displayName, description, icon = 'fa-gamepad') {
            if (GAME_DATA.categories[categoryKey]) {
                console.error(`Category "${categoryKey}" already exists!`);
                return;
            }
            GAME_DATA.categories[categoryKey] = { displayName, description, games: [] };
            CONFIG.categoryIcons[categoryKey] = icon;
            generateCategories();
            console.log(`📁 Added new category: "${displayName}"`);
        },

        setTheme: function(themeId) {
            if (THEMES[themeId]) {
                applyTheme(themeId);
            } else {
                console.error(`Theme "${themeId}" doesn't exist!`);
            }
        },

        getConfig: function() {
            return { ...CONFIG, THEMES, GAME_DATA };
        }
    };
})();
