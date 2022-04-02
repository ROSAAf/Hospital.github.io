function addMoreText() {
  document.getElementById("textMore").innerText += "شفاخانه معالجوی کاتب با داشتن (16) داکتر متخصص، (8) نرس، (2) لابرانت، (2) فارمسست، (2) رادیولوژست، (3) کارمند اداری و 6 کارگرخدماتی در بخش های داخله عمومی، داخله اطفال، نسایی ولادی، جراحی عمومی، جراحی اطفال، گوش و گلو، جراحی اعصاب، و اورتوپیدی در خدمت مردم قرار داشته و خدمات صحی تخصصی با کیفیت را به طور ۲۴ ساعته  با کم ترین هزینه ممکن  برای مردم ارایه می کند. شفاخانه فیض محمد کاتب با داشتن امکانات چون عملیات خانه، ولادت خانه، اطاق عاجل، اطاق ICU  و CCU، اطاق های بستر، ماشین اکسجن (Oxygen Concentrator)، بالون اکسجن، مانیتورها، ماشین تنفس مصنوعی (Ventilator)، لابراتوار مجهز، اکسری، التراساوند، دواخانه، مرکز گرمی، AC (Air condition)  ، برق 24 ساعت و کمره های امنیتی، امبولانس مجهز و ساختمان معیاری یکی از مجهزترین و معیاری ترین مراکز صحی شهر کابل می باشد."
  document.getElementById("textMore").style.textAlign = "justify";
  document.getElementById("myCarousel").style.marginTop = "270px";
  let button = document.getElementById("btnmore");
  button.disabled = true;
}
$("document").ready(function(){
  $("#show1").cycle();
});
$("document").ready(function(){
  $("#show2").cycle();
});
$("document").ready(function(){
  $("#show3").cycle();
});
