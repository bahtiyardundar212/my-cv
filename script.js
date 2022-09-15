const pdfBtn=document.getElementById("pdfBtn")
const languageSelect=document.getElementById("language")

const keys = ["personelDescription", "educationTitle"]

const dictionary=[
  {
    id: "personelDescription",
    tr: "merhaba ben bahtiyar dündar frontend developer olarak çalışıyorum.",
    en: "hi, I'm bahtiyar dündar. I've been workng as a Frontend Developer for 1 year.",
  },
  {
    id: "educationTitle",
    tr: "EĞİTİM",
    en: "EDUCATİON",
  },
  {
    id: "experienceTitle",
    tr: "DENEYİM",
    en: "EXPERİENCES",
  },
] 

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

languageSelect.addEventListener("change", function(event){
  console.log(event.target.value);
  
})


function translate(selectedLanguage){
  for (let i = 0; i < dictionary.length; i++) {
    const element=document.getElementById(dictionary[i].id)
    if(selectedLanguage === "en"){
      element.innerText = dictionary[i].en
    }
    if(selectedLanguage === "tr"){
      element.innerText = dictionary[i].tr
    }
  }
}