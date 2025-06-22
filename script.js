const banks = [
  {
    name: "State Bank of India (SBI)",
    logo: "sbi.png",
    website: "https://www.onlinesbi.sbi"
  },
  {
    name: "HDFC Bank",
    logo: "hdfc.png",
    website: "https://www.hdfcbank.com"
  },
  {
    name: "ICICI Bank",
    logo: "icic.png",
    website: "https://www.icicibank.com"
  },
  {
    name: "Punjab National Bank (PNB)",
    logo: "pnb.png",
    website: "https://www.pnbindia.in"
  },
  {
    name: "Axis Bank",
    logo: "axis.png",
    website: "https://www.axisbank.com"
  },
  {
    name: "Bank of Baroda",
    logo: "bob.png",
    website: "https://www.bankofbaroda.in"
  },
  {
    name: "Canara Bank",
    logo: "canra.png",
    website: "https://www.canarabank.com"
  },
  {
    name: "Kotak Mahindra Bank",
    logo: "kotak.png",
    website: "https://www.kotak.com"
  }
];

const bankList = document.getElementById('bank-list');
const searchInput = document.getElementById('search');

function displayBanks(data) {
  bankList.innerHTML = '';

  if (data.length === 0) {
    bankList.innerHTML = '<p>No banks found.</p>';
    return;
  }

  data.forEach(bank => {
    const card = document.createElement('div');
    card.className = 'bank-card';
    card.innerHTML = `
      <img src="${bank.logo}" alt="${bank.name} logo">
      <h3>${bank.name}</h3>
      <a href="${bank.website}" target="_blank">Visit Website</a>
    `;
    bankList.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = banks.filter(bank =>
    bank.name.toLowerCase().includes(keyword)
  );
  displayBanks(filtered);
});

displayBanks(banks); // Initial display