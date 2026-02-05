const countdownEl = document.querySelector("#countdown");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
const specialButton = document.querySelector("#special");
const responseEl = document.querySelector("#response");

let noClickCount = 0;

const getNextValentine = () => {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 1, 14, 0, 0, 0);

  if (now > target) {
    return new Date(year + 1, 1, 14, 0, 0, 0);
  }

  return target;
};

const formatCountdown = (timeLeft) => {
  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const updateCountdown = () => {
  const target = getNextValentine();
  const now = new Date();
  const timeLeft = target - now;
  countdownEl.textContent = formatCountdown(timeLeft);
};

updateCountdown();
setInterval(updateCountdown, 1000);

yesButton.addEventListener("click", () => {
  responseEl.textContent = "I love you so much 💕";
});

specialButton.addEventListener("click", () => {
  responseEl.textContent = " Its been 3weeks and a day since we've been together and I want to take it easy with you as my Girlfriend SO I'm asking if you will be my girlfriend hope I ain't rushing you 🙂?";
    
});

noButton.addEventListener("click", () => {
  noClickCount++;
  if (noClickCount === 1) {
    responseEl.textContent = "▄︻̷̿┻̿═━一, you better press yes";
  } else if (noClickCount > 1) {
    responseEl.textContent =
      "You no wan click yes abi, ▄︻̷̿┻̿═━一 you bettter click yes";
  }
});

