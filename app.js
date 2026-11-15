const categories = [
["🏛️","ආණ්ඩුක්‍රම ව්‍යවස්ථාව","මූලික අයිතිවාසිකම්, ව්‍යවස්ථා සංශෝධන"],
["⚖️","අපරාධ නීතිය","දණ්ඩ නීතිය, අපරාධ සහ දඬුවම්"],
["📄","සිවිල් නීතිය","ගිවිසුම්, වගකීම් සහ සිවිල් නඩු"],
["🚗","මාර්ග නීති","රථවාහන, බලපත්‍ර සහ දඩ"],
["🛡️","පොලිස් නීති හා බලතල","අත්අඩංගුවට ගැනීම් සහ පොලිස් ක්‍රියාමාර්ග"],
["🌐","සයිබර් නීති","Online වංචා, දත්ත සහ පරිගණක අපරාධ"],
["🛍️","පාරිභෝගික අයිතිවාසිකම්","භාණ්ඩ, සේවා සහ පැමිණිලි"],
["💼","රැකියා හා කම්කරු නීති","වැටුප්, නිවාඩු, EPF/ETF"],
["🏠","ඉඩම් හා දේපළ නීති","ඔප්පු, අයිතිය, බදු සහ උරුමය"],
["👨‍👩‍👧","විවාහ හා පවුල් නීති","විවාහය, දික්කසාදය සහ දරුවන්"],
["💰","බදු හා මූල්‍ය නීති","බදු, බැංකු සහ මූල්‍ය ගනුදෙනු"],
["📰","නව පනත් හා ගැසට්","නව නීති, සංශෝධන සහ නිල නිවේදන"],
["✈️","ආගමන හා විදේශ ගමන්","වීසා සහ පුරවැසිභාවය"],
["🏢","සමාගම් නීති","සමාගම් සහ ව්‍යාපාර ලියාපදිංචිය"],
["🎓","අධ්‍යාපන නීති","පාසල් සහ උසස් අධ්‍යාපනය"],
["🏥","සෞඛ්‍ය නීති","රෝහල් සහ සෞඛ්‍ය සේවා"],
["🌱","පරිසර නීති","පරිසරය, වනජීවී සහ දූෂණය"],
["©️","බුද්ධිමය දේපළ","Copyright, Trademarks, Patents"],
["🗳️","මැතිවරණ නීති","ඡන්ද අයිතිය සහ මැතිවරණ"],
["🧒","ළමා හා මානව හිමිකම්","ළමා ආරක්ෂාව සහ මානව හිමිකම්"],
["🏙️","පළාත් පාලන නීති","පළාත් සභා සහ අතුරු ව්‍යවස්ථා"],
["🏦","බැංකු හා රක්ෂණ නීති","බැංකු, ණය සහ රක්ෂණ"],
["⚓","මුහුදු හා ධීවර නීති","ධීවර කටයුතු සහ මුහුදු නීති"],
["📚","පුද්ගල නීති පද්ධති","Kandyan, Thesawalamai සහ Muslim personal law"]
];
const container = document.getElementById("categories");
document.getElementById("categoryCount").textContent = `${categories.length} කාණ්ඩ`;
function render(list){
  container.innerHTML = "";
  list.forEach(([icon,title,desc])=>{
    const el=document.createElement("button"); el.className="category";
    el.innerHTML=`<span class="ico">${icon}</span><b></b><small></small>`;
    el.querySelector("b").textContent=title; el.querySelector("small").textContent=desc;
    el.addEventListener("click",()=>showCategory(title,desc)); container.appendChild(el);
  });
}
function showCategory(title,desc){
  const box=document.getElementById("searchResults");
  box.innerHTML="";
  const div=document.createElement("div"); div.className="result";
  const b=document.createElement("b"); b.textContent=title;
  const p=document.createElement("p"); p.textContent=desc+". මෙම කාණ්ඩයේ තහවුරු කළ පනත්/වගන්ති දත්ත එක් කළ පසු මෙහි පෙන්වනු ලැබේ. දැනට නිල මූලාශ්‍ර භාවිතයෙන් පරීක්ෂා කරන්න.";
  div.append(b,p); box.append(div);
  document.getElementById("searchResultsSection").scrollIntoView({behavior:"smooth"});
}
render(categories);
document.getElementById("searchInput").addEventListener("input",e=>{
 const q=e.target.value.trim().toLocaleLowerCase("si");
 const matches=categories.filter(c=>c.join(" ").toLocaleLowerCase("si").includes(q));
 render(matches);
 const box=document.getElementById("searchResults");
 if(!q){box.textContent="සෙවීමක් ආරම්භ කළ විට ප්‍රතිඵල මෙහි පෙන්වයි.";return;}
 box.innerHTML="";
 const msg=document.createElement("p"); msg.className="muted";
 msg.textContent=matches.length?`${matches.length} කාණ්ඩ හමු විය. සම්පූර්ණ පනත්/වගන්ති සෙවුම සඳහා නීති දත්ත ගබඩාව සම්බන්ධ කළ යුතුය.`:"ගැළපෙන කාණ්ඩ හමු නොවීය. වෙනත් වචනයක් උත්සාහ කරන්න.";
 box.append(msg);
});
document.getElementById("askBtn").addEventListener("click",()=>{
 const q=document.getElementById("question").value.trim(), n=document.getElementById("aiNotice");
 n.classList.remove("hidden");
 n.textContent=q ? "ඔබගේ ප්‍රශ්නය සටහන් කර ඇත. සැබෑ නීතිමය පිළිතුරක් ලබාදීමට සත්‍යාපිත නීති දත්ත සහ ආරක්ෂිත AI backend එක සම්බන්ධ කළ යුතුය. මේ demo එකෙන් නීති උපදෙස් හෝ තහවුරු නොකළ පිළිතුරු ලබා නොදේ." : "කරුණාකර ඔබගේ ප්‍රශ්නය ලියන්න.";
});
let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;const b=document.getElementById("installBtn");b.classList.remove("hidden");b.onclick=async()=>{deferredPrompt.prompt();deferredPrompt=null;b.classList.add("hidden");};});
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));