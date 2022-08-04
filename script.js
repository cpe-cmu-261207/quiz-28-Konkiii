const btnRandom = document.querySelector("#btn-random");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

btnRandom.onclick = async () => {
  btnRandom.innerText = "";
};
