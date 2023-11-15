const correctPin = "1234";
    let balance = 100000;

    function checkPin() {
      const enteredPin = document.getElementById("pin").value;
      const resultDiv = document.getElementById("result");
      const menuDiv = document.getElementById("menu");

      if (enteredPin === correctPin) {
        resultDiv.style.color = "green";
        resultDiv.innerHTML = " PIN benar. Selamat datang!";
        menuDiv.style.display = "block";
      } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "PIN salah. Silakan coba lagi.";
      }
    }

    function checkSaldo() {
      const balanceContainer = document.getElementById("balance-container");
      const balanceDiv = document.getElementById("balance");

      balanceDiv.innerHTML = `Rp.${balance}`;
      balanceContainer.style.display = "block";
    }

    function setorTunai() {
      const depositAmount = parseFloat(prompt("Masukkan jumlah setoran:"));
      if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        alert(`Setor Tunai Berhasil Saldo anda saat ini adalah Rp.${balance}`);
      } else {
        alert("Jumlah setoran tidak valid.");
      }
    }

    function tarikTunai() {
      const withdrawAmount = parseFloat(prompt("Masukkan jumlah penarikan:"));
      if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        alert(`Penarikan berhasil! Saldo baru Anda adalah Rp.${balance}`);
      } else {
        alert("Jumlah penarikan tidak valid.");
      }
    }

    function keluar() {
      const menuDiv = document.getElementById("menu");
      const balanceContainer = document.getElementById("balance-container");

      menuDiv.style.display = "none";
      balanceContainer.style.display = "none";
      document.getElementById("pin").value = "";
      document.getElementById("result").innerHTML = "";
    }