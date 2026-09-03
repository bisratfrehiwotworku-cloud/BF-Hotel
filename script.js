//Page Exchange function
function round1(sec1Id){
let sec1 =document.querySelectorAll('.page1');
  sec1.forEach((s1)=>{
  s1.classList.remove('active');
          });
document.getElementById(sec1Id).classList.add('active');

}

/*Food list & their price check*/
const list1 = [
  {food:'Kitfo',amh:' ክትፎ ',price:'500-1500'},
  {food:'Chuko',amh:' ጩኮ ',price:'800-1300'},
  {food:'Thilo',amh:' ጥህሎ ',price:'600-1200'},
  {food:'Fish specials',amh:' አሳ ስፔሻሎች ', price:'900-1700'},
  {food:'Chechebsa',amh:' ጨጨብሳ ',price:'800-1000'}
]
const list2 = [
  {food:'Burgers',amh:' በርገር ',price:'700-1400'},
  {food:'Pizza',amh:' ፒዛ ',price:'400-900'},
  {food:'Cakes',amh:' ኬኮች ',price:'150-250'},
  {food:'Chickens',amh:' ዶሮ ',price:'800-1800'},
  {food:'Lasagna',amh:' ላዛኛ ',price:'500-1200'}
]
const list3 = [
  {drink:'Coffee',amh:' ቡና ',price:80},
  {drink:'Tea',amh:' ሻይ ',price:70},
  {drink:'Macchiato',amh:' ማኪያቶ ',price:120},
  {drink:'Soft drinks',amh:' ለስላሳ መጠጥ ',price:'95 - 135'},
  {drink:'Spris',amh:' ስፕሪስ ',price:100}
]



/*Price check*/
//=======

//====

/*Amharic Price*/  

// language exchange section 
const language = {
  en:{
    text1:'BF 5⭐  Hotel',
    text2:'⭐⭐⭐⭐⭐',
    text3:'Welcome to BF 5 star Hotel!',
    text4:'Explore to main page!',
    text5:'Explore',
    text6:'BF International 5 Star Hotel',
    text7:'Language',
    text8:'Wellcome to our website BF Hotel is an international tourist attractive high quality standard Hotel with a lot of satisfactory services.',
    text9:'Navigate Service Details',
    text10:'Luxury Rooms',
    text11:'Food & Beverage',
    text12:'Transport & Logistics',
    text13:'Wellness & Leisure',
    text14:'About',
    text15:'Contact us',
    text16:'Address: ......',
    text17:'Phone number: ....',
    text18:'Email: ....',
    text19:'Developed by: Bisrat Firehiwot Worku',
    text20:'Luxury Rooms Catalog',
    text21:'One Bed Room 2700 Birr / Week',
    text22:'Two Bed Room 4500 Birr / week',
    text23:'Three Bed Room 5800 Birr / week',
    text24:'VIP Room 8000 Birr / week',
    text25:'VVIP Room 12000 Birr / week',
    text26:'Food & Beverage',
    text27:'In our hotel there are more than 60 traditional foods and 75 modern foods and 10 special foods.',
    text28:'Check price',
    text29:'Check',
    text30:'Price:  ...',
    text31:'Traditionals',
    text32:'Moderns',
    text33:'Beverages',
    text34:'Transport & Logistics',
    text35:'Complimentary overnight parking for hotel guests. Secure daytime parking at 5 ETB / hour.',
    text36:'There are many bicycles ready to rent for customers at 50 ETB / hour.  Also cars at 300 ETB / day.',
    text37:'Airport terminal pickup & drop-off service available at 9.06 ETB / km (40% discount applied!).',
    text38:'Wellness & Leisure',
    text39:'Our hotel features two fully-equipped gyms with state-of-the-art fitness equipment. Access is complimentary for hotel guests, or 500 ETB for a 2-hour day pass for non-guests.',
    text40:'Each floor has its own private swimming pool.',
    text41:'Enjoy our Spa, Massage, Sauna, and Moroccan Bath services with a 30% discount for hotel guests. Prices range from 400 to 3500 ETB.',
    text42:'We have also Day care , kids club and Baby sitting with suitable environment and Baby care professionals.',
    text43:'About page',
    text44:'Project Overview & Disclaimer',
    text45:'Welcome to the BF 5★ Hotel web application demo!',
    text46:'Purpose: Built to demonstrate modern web development techniques, full mobile responsiveness, and client-side data handling without external frameworks.',
    text47:'Interactive Features: Features smooth custom text animations, horizontal scrolling cards, and dynamic single-page routing. ',
    text48:'Functionality: All prices, room details, and service listings are sample data created to test user experience and UI responsiveness.',
    text49:'Creator Credit: Entirely designed, animated, and developed by Bisrat Firehiwot Worku.  All rights reserved.'
  },
  am:{
   text1: 'ቢኤፍ ባለ 5⭐ ሆቴል',
text2: '⭐⭐⭐⭐⭐',
text3: 'ወደ ቢኤፍ ባለ 5 ኮከብ ሆቴል እንኳን ደህና መጡ!',
text4: 'ወደ ዋናው ገጽ ይግቡ!',
text5: 'ይግቡ',
text6: 'ቢኤፍ ዓለም አቀፍ ባለ 5 ኮከብ ሆቴል',
text7: 'ቋንቋ',
text8: 'ወደ ድረ-ገጻችን እንኳን ደህና መጡ! ቢኤፍ ሆቴል በርካታ አርኪ አገልግሎቶችን የሚሰጥ፣ ዓለም አቀፍ ቱሪስቶችን የሚስብና ከፍተኛ የጥራት ደረጃውን የጠበቀ ሆቴል ነው።',
text9: 'የአገልግሎት ዝርዝሮችን ይመልከቱ',
text10: 'የቅንጦት ክፍሎች',
text11: 'ምግብ እና መጠጥ',
text12: 'ትራንስፖርት እና ሎጅስቲክስ',
text13: 'ጤና እና መዝናኛ',
text14: 'ስለ እኛ',
text15: 'ያግኙን',
text16: 'አድራሻ: ......',
text17: 'ስልክ ቁጥር: ....',
text18: 'ኢሜይል: ....',
text19: 'የገነባው: ብስራት ፍሬሕይወት ወርቁ',
text20: 'የቅንጦት ክፍሎች ካታሎግ',
text21: 'አንድ መኝታ ክፍል 2700 ብር / በሳምንት',
text22: 'ሁለት መኝታ ክፍል 4500 ብር / በሳምንት',
text23: 'ሶስት መኝታ ክፍል 5800 ብር / በሳምንት',
text24: 'ቪአይፒ (VIP) ክፍል 8000 ብር / በሳምንት',
text25: 'ቪቪአይፒ (VVIP) ክፍል 12000 ብር / በሳምንት',
text26: 'ምግብ እና መጠጥ',
text27: 'በሆቴላችን ውስጥ ከ60 በላይ የሀገር ባህል ምግቦች፣ 75 ዘመናዊ ምግቦች እና 10 ልዩ ምግቦች ይገኛሉ።',
text28: 'ዋጋ ይፈትሹ',
text29: 'ይፈትሹ',
text30: 'ዋጋ:  ...',
text31: 'የሀገር ባህል ምግቦች',
text32: 'ዘመናዊ ምግቦች',
text33: 'መጠጦች',
text34: 'ትራንስፖርት እና ሎጅስቲክስ',
text35: 'ለሆቴሉ እንግዶች ነፃ የማደርያ የመኪና ማቆሚያ። የቀን መኪና ማቆሚያ በሰዓት 5 ብር።',
text36: 'ለደንበኞች የሚከራዩ በርካታ ብስክሌቶች በሰዓት በ50 ብር ተዘጋጅተዋል። እንዲሁም መኪኖች በቀን በ300 ብር።',
text37: 'የአየር ማረፊያ ማደያ መውሰጃ እና ማውረጃ አገልግሎት በኪሎሜትር 9.06 ብር (የ40% ቅናሽ ተደርጓል!)።',
text38: 'ጤና እና መዝናኛ',
text39: 'ሆቴላችን ዘመናዊ የአካል ብቃት መሣሪያዎች የተሟሉላቸው ሁለት ጂሞች አሉት። መግቢያው ለሆቴሉ እንግዶች ነፃ ሲሆን፥ ለእንግዳ ላልሆኑ ደግሞ ለ2 ሰዓት ቆይታ 500 ብር ነው።',
text40: 'እያንዳንዱ ፎቅ የራሱ የግል መዋኛ ገንዳ አለው።',
text41: 'በስፓ፣ ማሳጅ፣ ሳውና እና የሞሮኮ መታጠቢያ አገልግሎቶቻችን ለሆቴሉ እንግዶች የ30% ቅናሽ ያግኙ። ዋጋዎች ከ400 እስከ 3500 ብር ይደርሳሉ።',
text42: 'እንዲሁም ምቹ ሁኔታ እና የህፃናት እንክብካቤ ባለሙያዎች ያሉት የህፃናት ማቆያ፣ የህፃናት ክለብ እና ሞግዚት አገልግሎት አለን።',
text43: 'ስለ ገጹ',
text44: 'የፕሮጀክት አጠቃላይ እይታ እና ማስተባበያ',
text45: 'ወደ ቢኤፍ 5★ ሆቴል የዌብ አፕሊኬሽን ማሳያ እንኳን ደህና መጡ!',
text46: 'ዓላማ: ዘመናዊ የዌብ ልማት ቴክኒኮችን፣ ሙሉ የሞባይል ምላሽ ሰጪነትን እና ያለ ተጨማሪ ፍሬምወርኮች የደንበኛ ወገን (client-side) መረጃ አያያዝን ለማሳየት የተሰራ።',
text47: 'በይነተገናኝ ባህሪያት: ለስላሳ ብጁ የጽሑፍ አኒሜሽኖችን፣ አግድም ተንሸራታች ካርዶችን እና ተለዋዋጭ ነጠላ-ገጽ ማዘዋወርን ያካትታል።',
text48: 'ተግባራዊነት: ሁሉም ዋጋዎች፣ የክፍል ዝርዝሮች እና የአገልግሎት ዝርዝሮች የተጠቃሚውን ልምድ እና የUI ምላሽ ሰጪነት ለመፈተሽ የተፈጠሩ ናሙና መረጃዎች ናቸው።',
text49: 'የፈጣሪ ክሬዲት: ሙሉ በሙሉ በብስራት ፍሬሕይወት ወርቁ የተቀየሰ፣ አኒሜሽን የተሰራለት እና የዳበረ። መብቱ በህግ የተጠበቀ ነው።'
 
  }
}

function changeLang(lang){
  document.querySelectorAll('  [data-i18n]').forEach(single=>{
  const key =  single.getAttribute('data-i18n');
  if(language[lang]&& language[lang][key]){
    single.textContent=language[lang][key];
  localStorage.setItem('Lang',lang);
  }
    
  });
  Check()
}

window.addEventListener('DOMContentLoaded',()=>{
  const saveing = localStorage.getItem('Lang') || 'en';
  const savedlan = document.getElementById('language');
  if(savedlan){
    savedlan.value= saveing;
  }
  changeLang(saveing)
  
});

let h = document.querySelector('.unique');
let cont = 'Welcome to BF 5 star Hotel!';
function Check(){
const tra = document.querySelector('.tradition');
const mod = document.querySelector('.modern');
const bev = document.querySelector('.beverage');

 if(h.textContent===cont){
   let inp2 = document.querySelector('.inp') 
  inp2.placeholder='Which item ...?';
  let com = document.querySelector('.comment') 
  com.placeholder='Comment...';
const maped1 = list1.map(m1=>m1.food);
tra.textContent = [...maped1];

const maped2 = list2.map(m2=>m2.food);
mod.textContent = [...maped2];

const maped3 = list3.map(m3=>m3.drink);
bev.textContent = [...maped3]; 

const check = document.querySelector('.check');

check.addEventListener('click', () => {
  const p = document.querySelector('.price');
  let inp1 = document.querySelector('.inp').value.toLowerCase().trim();
  
  // Find name & price from arry
  const found1 = list1.find(fo1 => fo1.food.trim().toLowerCase() === inp1);
  
  const found2 = list2.find(fo2 => fo2.food.trim().toLowerCase() === inp1);
  
  const found3 = list3.find(fo3 => fo3.drink.trim().toLowerCase() === inp1);
  
  
  if (found1) {
    p.style.color = '#1D908D';
    p.textContent = `${found1.food} price ranges ${found1.price} ETB.`;
    setTimeout(() => {
      p.textContent = 'Price: ...';
    }, 10000)
  } else if (found2) {
    p.style.color = '#1D908D';
    p.textContent = `${found2.food} price ranges ${found2.price} ETB.`;
    setTimeout(() => {
      p.textContent = 'Price: ...';
    }, 10000)
  } else if (found3) {
    p.style.color = '#1D908D';
    p.textContent = `${found3.drink} price ranges ${found3.price} ETB.`;
    setTimeout(() => {
      p.textContent = 'Price: ...';
    }, 10000)
  } else if (inp1 === '') {
    p.style.color = 'brown';
    p.textContent = 'Enter Item!';
    setTimeout(() => {
      p.style.color = '#1D908D';
      p.textContent = 'Price: ...';
    }, 10000)
  } else {
    p.style.color = 'brown';
    p.textContent = 'Please put valid item from list below alone!';
    setTimeout(() => {
      p.style.color = '#1D908D';
      p.textContent = 'Price: ...';
    }, 10000)
  }
  
});

  
}else{
  let inp2 = document.querySelector('.inp') 
  inp2.placeholder='የትኛውን ...?';
const maped1 = list1.map(m1=>m1.amh);
tra.textContent = [...maped1];

const maped2 = list2.map(m2=>m2.amh);
mod.textContent = [...maped2];

const maped3 = list3.map(m3=>m3.amh);
bev.textContent = [...maped3]; 

const check = document.querySelector('.check');

check.addEventListener('click', () => {
  const p = document.querySelector('.price');
  let inp1 = document.querySelector('.inp').value.toLowerCase().trim();
  // Find name & price from arry
  const found1 = list1.find(fo1 => fo1.amh.trim().toLowerCase() === inp1);
  
  const found2 = list2.find(fo2 => fo2.amh.trim().toLowerCase() === inp1);
  
  const found3 = list3.find(fo3 => fo3.amh.trim().toLowerCase() === inp1);
  
  
  if (found1) {
    p.style.color = '#1D908D';
    p.textContent = `የ${found1.amh} ዋጋ ከ${found1.price} ETB.`;
    setTimeout(() => {
      p.textContent = 'ዋጋ: ...';
    }, 10000)
  } else if (found2) {
    p.style.color = '#1D908D';
    p.textContent = `የ${found2.amh} ዋጋ ከ${found2.price} ETB.`;
    setTimeout(() => {
      p.textContent = 'ዋጋ: ...';
    }, 10000)
  } else if (found3) {
    p.style.color = '#1D908D';
    p.textContent = `የ${found3.amh} ዋጋ ከ${found3.price} ETB.`;
    setTimeout(() => {
      p.textContent = 'ዋጋ: ...';
    }, 10000)
  } else if (inp1 === '') {
    p.style.color = 'brown';
    p.textContent = 'ምርጫዎን ያስገቡ!';
    setTimeout(() => {
      p.style.color = '#1D908D';
      p.textContent = 'ዋጋ: ...';
    }, 10000)
  } else {
    p.style.color = 'brown';
    p.textContent = 'እባክዎት እታች ከተዘረዘሩት የመረጡትን ብቻ ያስገቡ!';
    setTimeout(() => {
      p.style.color = '#1D908D';
      p.textContent = 'ዋጋ: ...';
    }, 10000)
  }
  
});

}
}

    

