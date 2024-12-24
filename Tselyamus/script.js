function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Рекомендуемые NFT
const recommendations = document.querySelector('.recommendation-gallery');
for (let i = 1; i <= 4; i++) {
    const item = document.createElement('div');
    item.className = 'recommendation-item';
    item.innerHTML = `<h3>NFT ${i}</h3><p>Цена: ${(Math.random() * 5).toFixed(2)} ETH</p>`;
    recommendations.appendChild(item);
}

// Каталог NFT
const nftGallery = document.querySelector('.nft-gallery');
const nfts = [];
for (let i = 1; i <= 12; i++) {
    const price = +(Math.random() * 10).toFixed(2);
    nfts.push({ id: i, name: `NFT ${i}`, price });
    const nft = document.createElement('div');
    nft.className = 'nft-item';
    nft.innerHTML = `<h3>${nfts[i - 1].name}</h3><p>Цена: ${price} ETH</p>`;
    nftGallery.appendChild(nft);
}

// Фильтр
function filterNFTs() {
    const search = document.getElementById('search').value.toLowerCase();
    const maxPrice = +document.getElementById('price-filter').value || Infinity;
    document.querySelectorAll('.nft-item').forEach((item, i) => {
        const { name, price } = nfts[i];
        if (name.toLowerCase().includes(search) && price <= maxPrice) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Редактировать профиль
function editProfile() {
    const username = prompt('Введите новое имя пользователя:');
    if (username) {
        document.getElementById('username-display').innerText = username;
    }
}
