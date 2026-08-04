const contracts = [
  {
    icon: "📱",
    name: "vivo V70",
    contract: "SBR0001339",
    amount: "2,230 บาท / เดือน",
    installment: "14 งวด",
    status: "🟠 รอชำระ"
  },
  {
    icon: "⌚",
    name: "Redmi Watch 5 Lite",
    contract: "ยอดคงเหลือ 3,180 บาท",
    amount: "265 บาท / สัปดาห์",
    installment: "12 งวด",
    status: "🟠 รอชำระ"
  },
  {
    icon: "🎧",
    name: "Soundcore R60i NC",
    contract: "ยอดคงเหลือ 1,300 บาท",
    amount: "130 บาท / สัปดาห์",
    installment: "12 งวด",
    status: "🟠 รอชำระ"
  }
];

document.getElementById("totalPay").textContent = "2,625 บาท";
document.getElementById("contractCount").textContent = contracts.length + " สัญญา";

const container = document.getElementById("contracts");

contracts.forEach(item => {

  container.innerHTML += `
    <div class="card">

      <h2>${item.icon} ${item.name}</h2>

      <p>${item.contract}</p>

      <p><strong>ยอดผ่อน :</strong> ${item.amount}</p>

      <p><strong>จำนวนงวด :</strong> ${item.installment}</p>

      <p>${item.status}</p>

      <button class="btn">
        ดูรายละเอียด
      </button>

    </div>
  `;

});