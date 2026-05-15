// 1. 定義你的常用鏈結
const myLinks = [
    { name: "Sailor Piece Discord", url: "https://discord.gg/..." },
    { name: "我的 Value List (GitHub)", url: "https://雷鳴.github.io/value-list" },
    { name: "Atomic Core 交易模版", content: "TRADING ATOMIC CORE x66 | LF: GOOD OFFERS" },
    { name: "Abyss Edge 交易模版", content: "TRADING ABYSS EDGE x15 | NTY LOWBALL" }
];

// 初始化鏈結按鈕
const linkGrid = document.getElementById('linkGrid');
myLinks.forEach(link => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerText = `📋 ${link.name}`;
    btn.onclick = () => {
        const textToCopy = link.content || link.url;
        navigator.clipboard.writeText(textToCopy);
        btn.innerText = "✅ 已複製！";
        setTimeout(() => btn.innerText = `📋 ${link.name}`, 1500);
    };
    linkGrid.appendChild(btn);
});

// 2. 策略日誌邏輯 (儲存在 LocalStorage)
function addStrategy() {
    const input = document.getElementById('strategyInput');
    if (!input.value) return;

    const strategies = JSON.parse(localStorage.getItem('myStrategies') || '[]');
    strategies.unshift({ text: input.value, date: new Date().toLocaleString() });
    localStorage.setItem('myStrategies', JSON.stringify(strategies));
    
    input.value = '';
    renderStrategies();
}

function renderStrategies() {
    const list = document.getElementById('strategyList');
    const strategies = JSON.parse(localStorage.getItem('myStrategies') || '[]');
    list.innerHTML = strategies.map(s => `
        <li>
            <strong>${s.date}</strong><br>
            ${s.text}
        </li>
    `).join('');
}

// 網頁開啟時載入
renderStrategies();
