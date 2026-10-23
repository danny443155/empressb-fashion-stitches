const WHATSAPP_NUMBER = "2348140120959";
const products = [
 {name:"The Occasion Edit",kind:"Occasion wear",tag:"OCCASION",ngn:85000,usd:65,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"},
 {name:"The Bridal Muse",kind:"Bridal inspiration",tag:"BRIDAL",ngn:250000,usd:190,image:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80"},
 {name:"Golden Hour Details",kind:"Beadwork",tag:"HAND-FINISHED",ngn:45000,usd:35,image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80"},
 {name:"The Statement Dress",kind:"Ready-to-wear",tag:"THE EDIT",ngn:65000,usd:50,image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80"}
];
const productRoot=document.getElementById("products"),currency=document.getElementById("currency");
function wa(message){return "https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message)}
function render(){productRoot.innerHTML=products.map(p=>`<article><div class="productimage" style="background-image:url('${p.image}')"><span class="tag">${p.tag}</span></div><div class="productinfo"><h3>${p.name}</h3><p>${p.kind}</p><div class="productbottom"><span class="price">${currency.value==="USD"?"$"+p.usd.toLocaleString("en-US"):"₦"+p.ngn.toLocaleString("en-NG")}</span><a class="mini" target="_blank" rel="noreferrer" href="${wa("Hello EmpressB Fashion Stitches, I'm interested in "+p.name+". Please share current availability and final pricing.")}">Enquire ↗</a></div></div></article>`).join("")}
currency.addEventListener("change",render);render();
document.getElementById("customForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const m=`Hello EmpressB Fashion Stitches! I'd like to discuss a custom order.\nName: ${d.get("name")}\nContact: ${d.get("contact")}\nOutfit type: ${d.get("type")}\nOccasion date: ${d.get("date")||"Not specified"}\nBudget: ${d.get("budget")}\nDetails: ${d.get("details")||"I'd like to discuss my idea."}`;window.open(wa(m),"_blank","noopener,noreferrer")});
document.getElementById("appointmentForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const m=`Hello EmpressB Fashion Stitches! I'd like to request an appointment.\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nPreferred date: ${d.get("date")}\nPreferred time: ${d.get("time")}\nAppointment type: ${d.get("type")}\nPlease let me know if this time is available.`;window.open(wa(m),"_blank","noopener,noreferrer")});
document.getElementById("whatsappCta").href=wa("Hello EmpressB Fashion Stitches! I'd like to enquire about your designs and services.");
document.getElementById("year").textContent=new Date().getFullYear();
const today=new Date();document.getElementById("appointmentDate").min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
const toggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.textContent=nav.classList.contains("open")?"×":"☰"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.textContent="☰"}));
