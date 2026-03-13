// ── wallpapers.js — Macro Quest ──────────────────────────────────
// Wallpapers disponíveis na loja de fundos
// img: pode ser null (gera gradiente/pixel art no canvas) ou caminho de imagem

const BACKGROUNDS = [
  { id: 'bg_default',  nome: 'Padrão',          custo: 0,    lvlMin: 1,  img: null, desc: 'Fundo padrão escuro' },
  { id: 'bg_dungeon',  nome: 'Masmorra',         custo: 200,  lvlMin: 2,  img: null, desc: 'Pedras úmidas e tochas flamejantes' },
  { id: 'bg_arena',    nome: 'Arena',            custo: 350,  lvlMin: 3,  img: null, desc: 'O público clama por sangue' },
  { id: 'bg_forest',   nome: 'Floresta Sombria', custo: 500,  lvlMin: 4,  img: null, desc: 'Árvores antigas guardam segredos' },
  { id: 'bg_volcano',  nome: 'Vulcão',           custo: 700,  lvlMin: 5,  img: null, desc: 'Lava e cinzas no horizonte' },
  { id: 'bg_sky',      nome: 'Céu dos Deuses',   custo: 1000, lvlMin: 7,  img: null, desc: 'Nuvens douradas além dos mortais' },
  { id: 'bg_void',     nome: 'Vazio Eterno',     custo: 1500, lvlMin: 9,  img: null, desc: 'O nada absoluto... ou quase' },
  { id: 'bg_olympus',  nome: 'Olimpo',           custo: 2500, lvlMin: 10, img: null, desc: 'Somente os deuses chegam aqui' },
];

// ── Gerador de wallpapers em pixel art puro ────────────────────────
// Cada função recebe (ctx, size) e desenha um fundo completo no canvas
const WALLPAPER_GENERATORS = {

  bg_default: (ctx, size) => {
    // Fundo escuro com grade de pontos sutis
    ctx.fillStyle = '#0e0e0e';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    const s = Math.max(1, Math.floor(size / 16));
    for (let y = 0; y < size; y += s * 2) {
      for (let x = 0; x < size; x += s * 2) {
        ctx.fillRect(x, y, s, s);
      }
    }
  },

  bg_dungeon: (ctx, size) => {
    // Masmorra: pedras, tochas, escuridão
    const s = Math.max(1, Math.floor(size / 16));
    // Fundo pedra escura
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0, 0, size, size);
    // Blocos de pedra
    const stone = ['#2a1e10','#231808','#2e2212','#1e160a'];
    for (let row = 0; row < 16; row++) {
      for (let col = 0; col < 16; col++) {
        const offset = (row % 2 === 0) ? 0 : 2;
        ctx.fillStyle = stone[((col + offset + row * 3) % stone.length)];
        ctx.fillRect(col * s, row * s, s, s);
        // Linha de argamassa
        ctx.fillStyle = '#0d0a06';
        ctx.fillRect(col * s, row * s, s, 1);
        ctx.fillRect(col * s, row * s, 1, s);
      }
    }
    // Gradiente de escuridão nas bordas
    const gDark = ctx.createRadialGradient(size/2, size/2, size*0.2, size/2, size/2, size*0.8);
    gDark.addColorStop(0, 'transparent');
    gDark.addColorStop(1, 'rgba(0,0,0,0.7)');
    ctx.fillStyle = gDark;
    ctx.fillRect(0, 0, size, size);
    // Tocha — halo laranja
    const torch = ctx.createRadialGradient(size*0.8, size*0.25, 0, size*0.8, size*0.25, size*0.3);
    torch.addColorStop(0, 'rgba(230,120,30,0.35)');
    torch.addColorStop(1, 'transparent');
    ctx.fillStyle = torch;
    ctx.fillRect(0, 0, size, size);
    // Pixel da chama
    ctx.fillStyle = '#f39c12';
    ctx.fillRect(size*0.8 - s, size*0.22, s*2, s*2);
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(size*0.8, size*0.25, s, s);
  },

  bg_arena: (ctx, size) => {
    // Arena: areia com gradiente, arquibancadas
    const s = Math.max(1, Math.floor(size / 16));
    // Céu escuro ao topo
    const gSky = ctx.createLinearGradient(0, 0, 0, size * 0.4);
    gSky.addColorStop(0, '#1a0505');
    gSky.addColorStop(1, '#3d1010');
    ctx.fillStyle = gSky;
    ctx.fillRect(0, 0, size, size * 0.45);
    // Arquibancadas (blocos cinzas)
    const archColors = ['#2a2020','#252020','#301818'];
    for (let col = 0; col < 16; col++) {
      const h = 2 + (col % 3);
      ctx.fillStyle = archColors[col % 3];
      ctx.fillRect(col * s, size * 0.3, s, h * s);
    }
    // Areia
    const gArena = ctx.createLinearGradient(0, size * 0.45, 0, size);
    gArena.addColorStop(0, '#8c6520');
    gArena.addColorStop(0.5, '#6b4c18');
    gArena.addColorStop(1, '#3d2c0a');
    ctx.fillStyle = gArena;
    ctx.fillRect(0, size * 0.45, size, size * 0.55);
    // Textura areia (pixels aleatórios deterministicos)
    for (let i = 0; i < 60; i++) {
      const px = ((i * 137 + 7) % 16) * s;
      const py = size * 0.5 + ((i * 97 + 3) % 8) * s;
      ctx.fillStyle = i % 3 === 0 ? '#a07828' : '#5c4010';
      ctx.fillRect(px, py, s, s);
    }
    // Linha divisória da arena
    ctx.fillStyle = '#4a3010';
    ctx.fillRect(0, size * 0.45, size, 2);
    // Rastros de sangue (vermelho escuro)
    ctx.fillStyle = 'rgba(120,20,20,0.5)';
    ctx.fillRect(size*0.3, size*0.6, s*2, s);
    ctx.fillRect(size*0.5, size*0.7, s*3, s);
  },

  bg_forest: (ctx, size) => {
    // Floresta sombria: céu noturno, árvores escuras
    const s = Math.max(1, Math.floor(size / 16));
    // Céu noturno
    const gNight = ctx.createLinearGradient(0, 0, 0, size * 0.55);
    gNight.addColorStop(0, '#05080e');
    gNight.addColorStop(1, '#0a1a10');
    ctx.fillStyle = gNight;
    ctx.fillRect(0, 0, size, size * 0.6);
    // Estrelas
    const stars = [[1,1],[3,2],[6,1],[9,3],[12,1],[14,2],[5,4],[11,2],[7,3],[2,4],[15,1]];
    stars.forEach(([cx, cy]) => {
      ctx.fillStyle = 'rgba(255,255,220,0.8)';
      ctx.fillRect(cx * s, cy * s, 1, 1);
    });
    // Lua
    ctx.fillStyle = '#d4c88a';
    ctx.fillRect(s*13, s*2, s*2, s*2);
    ctx.fillStyle = '#0a1208';
    ctx.fillRect(s*14, s*2, s, s); // sombra da lua
    // Chão
    const gGround = ctx.createLinearGradient(0, size * 0.6, 0, size);
    gGround.addColorStop(0, '#0a1a08');
    gGround.addColorStop(1, '#050e04');
    ctx.fillStyle = gGround;
    ctx.fillRect(0, size * 0.6, size, size * 0.4);
    // Árvores
    const trees = [[0, 10], [2, 9], [5, 11], [8, 10], [11, 9], [13, 11]];
    trees.forEach(([col, h]) => {
      // Tronco
      ctx.fillStyle = '#2a1808';
      ctx.fillRect(col * s + s*0.3, h * s, s*0.5, (16 - h) * s);
      // Folhagem
      const treeGreen = ['#062808','#0a3a0a','#062006'];
      for (let ty = h - 4; ty < h + 1; ty++) {
        const width = (4 - Math.abs(ty - (h - 2))) * 0.8;
        ctx.fillStyle = treeGreen[ty % 3];
        ctx.fillRect((col - width / 2) * s, ty * s, width * s, s);
      }
    });
    // Névoa
    const gFog = ctx.createLinearGradient(0, size * 0.55, 0, size * 0.75);
    gFog.addColorStop(0, 'rgba(20,50,20,0.4)');
    gFog.addColorStop(1, 'transparent');
    ctx.fillStyle = gFog;
    ctx.fillRect(0, size * 0.55, size, size * 0.2);
  },

  bg_volcano: (ctx, size) => {
    // Vulcão: céu de fumaça, lava
    const s = Math.max(1, Math.floor(size / 16));
    // Céu de fumaça
    const gSmoke = ctx.createLinearGradient(0, 0, 0, size * 0.6);
    gSmoke.addColorStop(0, '#1a0800');
    gSmoke.addColorStop(0.5, '#3d1800');
    gSmoke.addColorStop(1, '#5a2800');
    ctx.fillStyle = gSmoke;
    ctx.fillRect(0, 0, size, size * 0.65);
    // Glow do vulcão no horizonte
    const gGlow = ctx.createRadialGradient(size/2, size*0.65, 0, size/2, size*0.65, size*0.5);
    gGlow.addColorStop(0, 'rgba(255,100,0,0.6)');
    gGlow.addColorStop(0.5, 'rgba(180,40,0,0.3)');
    gGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = gGlow;
    ctx.fillRect(0, 0, size, size);
    // Rochas escuras
    const gRock = ctx.createLinearGradient(0, size * 0.6, 0, size);
    gRock.addColorStop(0, '#1e0a00');
    gRock.addColorStop(1, '#0a0400');
    ctx.fillStyle = gRock;
    ctx.fillRect(0, size * 0.6, size, size * 0.4);
    // Rios de lava
    ctx.fillStyle = '#e84800';
    ctx.fillRect(0, size * 0.72, size, s * 1.5);
    ctx.fillStyle = '#ff6a00';
    ctx.fillRect(s*2, size * 0.72, s*4, s * 0.5);
    ctx.fillRect(s*9, size * 0.72, s*3, s * 0.5);
    ctx.fillStyle = '#ffaa00';
    ctx.fillRect(s*3, size * 0.72, s, s * 0.3);
    // Fumaça (círculos translúcidos)
    [[0.2, 0.15], [0.5, 0.05], [0.75, 0.2]].forEach(([cx, cy]) => {
      const gPuff = ctx.createRadialGradient(cx*size, cy*size, 0, cx*size, cy*size, size*0.15);
      gPuff.addColorStop(0, 'rgba(60,30,10,0.5)');
      gPuff.addColorStop(1, 'transparent');
      ctx.fillStyle = gPuff;
      ctx.fillRect(0, 0, size, size);
    });
    // Pedras no chão
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = '#1a0800';
      const px = ((i * 113) % 14) * s;
      const py = size * 0.65 + ((i * 71) % 4) * s;
      ctx.fillRect(px, py, s * 2, s);
    }
  },

  bg_sky: (ctx, size) => {
    // Céu dos deuses: gradiente celeste, nuvens douradas
    const s = Math.max(1, Math.floor(size / 16));
    // Gradiente céu
    const gSky = ctx.createLinearGradient(0, 0, 0, size);
    gSky.addColorStop(0, '#0a1830');
    gSky.addColorStop(0.4, '#1a3d6a');
    gSky.addColorStop(0.8, '#2a6aaa');
    gSky.addColorStop(1, '#4a90d0');
    ctx.fillStyle = gSky;
    ctx.fillRect(0, 0, size, size);
    // Sol/halo divino
    const gSun = ctx.createRadialGradient(size*0.5, size*0.15, 0, size*0.5, size*0.15, size*0.4);
    gSun.addColorStop(0, 'rgba(255,220,80,0.5)');
    gSun.addColorStop(0.4, 'rgba(255,180,40,0.2)');
    gSun.addColorStop(1, 'transparent');
    ctx.fillStyle = gSun;
    ctx.fillRect(0, 0, size, size);
    // Raios do sol (linhas douradas pixel art)
    ctx.fillStyle = 'rgba(255,210,60,0.3)';
    for (let a = 0; a < 8; a++) {
      const angle = (a / 8) * Math.PI * 2;
      const x1 = size * 0.5 + Math.cos(angle) * size * 0.06;
      const y1 = size * 0.15 + Math.sin(angle) * size * 0.06;
      const x2 = size * 0.5 + Math.cos(angle) * size * 0.4;
      const y2 = size * 0.15 + Math.sin(angle) * size * 0.4;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(255,200,50,0.15)'; ctx.lineWidth = s * 0.8; ctx.stroke();
    }
    // Nuvens douradas (pixel art)
    const clouds = [[1,5,6,2],[4,8,5,2],[10,4,7,3],[8,10,4,2]];
    clouds.forEach(([cx,cy,w,h]) => {
      ctx.fillStyle = 'rgba(255,215,80,0.2)';
      ctx.fillRect(cx*s, cy*s, w*s, h*s);
      ctx.fillStyle = 'rgba(255,240,120,0.35)';
      ctx.fillRect((cx+1)*s, cy*s, (w-2)*s, s);
    });
    // Estrelas tênues
    [[2,2],[6,1],[12,3],[15,1],[1,8],[14,6]].forEach(([cx,cy]) => {
      ctx.fillStyle = 'rgba(255,255,220,0.5)';
      ctx.fillRect(cx*s, cy*s, 1, 1);
    });
  },

  bg_void: (ctx, size) => {
    // Vazio eterno: preto profundo, partículas roxas, estrelas distantes
    const s = Math.max(1, Math.floor(size / 16));
    // Fundo: preto com toque de roxo
    ctx.fillStyle = '#050208';
    ctx.fillRect(0, 0, size, size);
    // Nebulosa roxa
    const gNeb = ctx.createRadialGradient(size*0.4, size*0.5, 0, size*0.4, size*0.5, size*0.6);
    gNeb.addColorStop(0, 'rgba(80,20,140,0.3)');
    gNeb.addColorStop(0.5, 'rgba(40,10,80,0.15)');
    gNeb.addColorStop(1, 'transparent');
    ctx.fillStyle = gNeb;
    ctx.fillRect(0, 0, size, size);
    const gNeb2 = ctx.createRadialGradient(size*0.7, size*0.3, 0, size*0.7, size*0.3, size*0.4);
    gNeb2.addColorStop(0, 'rgba(20,10,80,0.2)');
    gNeb2.addColorStop(1, 'transparent');
    ctx.fillStyle = gNeb2;
    ctx.fillRect(0, 0, size, size);
    // Estrelas (brancas, azuladas, roxas)
    const starColors = ['rgba(255,255,255,0.9)','rgba(180,180,255,0.8)','rgba(200,150,255,0.7)'];
    const starPos = [[1,1],[3,3],[5,1],[7,4],[9,2],[11,1],[13,3],[15,2],[2,6],[4,8],[6,5],[8,7],[10,4],[12,6],[14,5],[0,9],[3,11],[7,10],[11,8],[15,9],[1,13],[5,12],[9,14],[13,11],[2,15],[8,14],[14,13]];
    starPos.forEach(([cx,cy], i) => {
      ctx.fillStyle = starColors[i % 3];
      const sz = i % 5 === 0 ? 2 : 1;
      ctx.fillRect(cx*s, cy*s, sz, sz);
    });
    // Buraco negro sutil no centro
    const gHole = ctx.createRadialGradient(size*0.5, size*0.5, 0, size*0.5, size*0.5, size*0.25);
    gHole.addColorStop(0, 'rgba(0,0,0,0.8)');
    gHole.addColorStop(0.7, 'rgba(20,0,40,0.3)');
    gHole.addColorStop(1, 'transparent');
    ctx.fillStyle = gHole;
    ctx.fillRect(0, 0, size, size);
    // Anel roxo em volta
    const gRing = ctx.createRadialGradient(size*0.5, size*0.5, size*0.18, size*0.5, size*0.5, size*0.28);
    gRing.addColorStop(0, 'transparent');
    gRing.addColorStop(0.5, 'rgba(120,40,200,0.4)');
    gRing.addColorStop(1, 'transparent');
    ctx.fillStyle = gRing;
    ctx.fillRect(0, 0, size, size);
  },

  bg_olympus: (ctx, size) => {
    // Olimpo: dourado, colunas brancas, céu épico
    const s = Math.max(1, Math.floor(size / 16));
    // Céu gradiente épico
    const gSky = ctx.createLinearGradient(0, 0, 0, size * 0.6);
    gSky.addColorStop(0, '#1a1000');
    gSky.addColorStop(0.4, '#4a3400');
    gSky.addColorStop(1, '#8c6a00');
    ctx.fillStyle = gSky;
    ctx.fillRect(0, 0, size, size * 0.65);
    // Raios dourados
    const sunX = size * 0.5, sunY = size * 0.1;
    for (let r = 0; r < 12; r++) {
      const angle = (r / 12) * Math.PI * 2;
      const gRay = ctx.createLinearGradient(sunX, sunY,
        sunX + Math.cos(angle) * size * 0.6,
        sunY + Math.sin(angle) * size * 0.6);
      gRay.addColorStop(0, 'rgba(255,200,0,0.25)');
      gRay.addColorStop(1, 'transparent');
      ctx.fillStyle = gRay;
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.lineTo(sunX + Math.cos(angle - 0.15) * size, sunY + Math.sin(angle - 0.15) * size);
      ctx.lineTo(sunX + Math.cos(angle + 0.15) * size, sunY + Math.sin(angle + 0.15) * size);
      ctx.fill();
    }
    // Plataforma marmórea
    ctx.fillStyle = '#c8a050';
    ctx.fillRect(0, size * 0.62, size, size * 0.08);
    ctx.fillStyle = '#e8c060';
    ctx.fillRect(0, size * 0.62, size, s * 0.5);
    // Chão dourado
    const gFloor = ctx.createLinearGradient(0, size * 0.7, 0, size);
    gFloor.addColorStop(0, '#8c6a00');
    gFloor.addColorStop(1, '#3a2c00');
    ctx.fillStyle = gFloor;
    ctx.fillRect(0, size * 0.7, size, size * 0.3);
    // Colunas gregas
    const colCols = [1, 5, 9, 13];
    colCols.forEach(cx => {
      // Coluna
      ctx.fillStyle = '#e8d898';
      ctx.fillRect(cx * s, s * 5, s * 1.5, s * 8);
      // Capitéis
      ctx.fillStyle = '#d4c070';
      ctx.fillRect((cx - 0.5) * s, s * 5, s * 2.5, s);
      ctx.fillRect((cx - 0.5) * s, s * 12, s * 2.5, s);
      // Sombra coluna
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect((cx + 1) * s, s * 5, s * 0.3, s * 8);
      // Estrias pixel art
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.fillRect(cx * s + 1, s * 6, 1, s * 6);
    });
    // Nuvens douradas no topo
    [[0,1,5,1.5],[6,2,4,1.5],[11,1,5,1.5]].forEach(([cx,cy,w,h]) => {
      ctx.fillStyle = 'rgba(255,220,60,0.18)';
      ctx.fillRect(cx*s, cy*s, w*s, h*s);
    });
  },
};

// ── Função principal: desenha o wallpaper no canvas ──────────────
function desenharFundoNoCanvas(ctx, bgId, size) {
  ctx.clearRect(0, 0, size, size);
  const bg = BACKGROUNDS.find(b => b.id === bgId);
  // Se tem imagem real configurada, usa ela (assíncrono)
  if (bg && bg.img) {
    const imgEl = new Image();
    imgEl.onload = () => {
      ctx.drawImage(imgEl, 0, 0, size, size);
      if (typeof drawAvatar === 'function' && typeof xpData !== 'undefined') {
        drawAvatar(ctx, xpData.equippedAvatar, size);
      }
    };
    imgEl.onerror = () => {
      // Fallback para gerador
      const gen = WALLPAPER_GENERATORS[bgId] || WALLPAPER_GENERATORS['bg_default'];
      gen(ctx, size);
      if (typeof drawAvatar === 'function' && typeof xpData !== 'undefined') {
        drawAvatar(ctx, xpData.equippedAvatar, size);
      }
    };
    imgEl.src = bg.img;
    // Enquanto carrega: gerador como placeholder
    const gen = WALLPAPER_GENERATORS[bgId] || WALLPAPER_GENERATORS['bg_default'];
    gen(ctx, size);
    return;
  }
  // Sem imagem: usar gerador de pixel art
  const gen = WALLPAPER_GENERATORS[bgId || 'bg_default'] || WALLPAPER_GENERATORS['bg_default'];
  gen(ctx, size);
}
