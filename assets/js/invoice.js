// Fungsi untuk menampilkan pop-up
function showInvoicePopup() {
    var invoicePopup = document.getElementById("invoicePopup");
    var overlay = document.getElementById("overlay");
    
    invoicePopup.style.display = "block";
    overlay.style.display = "block";
  }
  
  // Fungsi untuk menyembunyikan pop-up
  function hideInvoicePopup() {
    var invoicePopup = document.getElementById("invoicePopup");
    var overlay = document.getElementById("overlay");
    
    invoicePopup.style.display = "none";
    overlay.style.display = "none";
  }
  
  // Menambahkan event listener ke tombol atau tautan
  document.getElementById("showInvoiceButton").addEventListener("click", showInvoicePopup);
  document.getElementById("closeButton").addEventListener("click", hideInvoicePopup);
  