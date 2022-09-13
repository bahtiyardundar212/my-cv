const pdfBtn=document.getElementById("pdfBtn")

pdfBtn.addEventListener("click", function(){
    const myCv=document.getElementById("myCv")
    const nameSurname=document.getElementById("nameSurname")
    var opt = {
        margin:       0,
        filename:     nameSurname.innerText + ".pdf",
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      // New Promise-based usage:
      html2pdf().set(opt).from(myCv).save();  
})