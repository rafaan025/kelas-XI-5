/* ============================================================
   XI-5 AVENGERS SCIENFIVE — EDIT DATA KELAS DI SINI (GAMPANG!)
   ------------------------------------------------------------
   1. Ganti CONFIG.igKelas dengan link Instagram kelas kamu
   2. Ganti DATA_SISWA: nama, alias marvel, ig, jabatan
   3. Simpan, refresh browser. Selesai!
============================================================ */
const CONFIG = {
  namaKelas: "XI-5 IPA",
  tahunAjaran: "2025/2026",
  waliKelas: "Asniri Widaningsih S.Pd",
  igKelas: "https://www.instagram.com/avengers_scifive/", // <-- GANTI LINK IG KELAS DI SINI
  igUsername: "@avengers_scifive",                   // <-- GANTI USERNAME IG DI SINI
  sekolah: "SMA NEGERI 1 SUMBER"
};

const DATA_SISWA = [
  // DATA ASLI KELAS XI-5 — 47 siswa. Edit link IG masing-masing ya!
  // Kalau mau jadikan pengurus, isi jabatan: "Ketua Kelas" / "Wakil Ketua" / "Sekretaris" / "Bendahara"
  { nama: "Achmad Daffa Nurachman", alias: "Iron Man", emoji: "🦾", jabatan: "", ig: "https://instagram.com/achmad.daffa", quote: "Rajin. Gas." },
  { nama: "Adela Novianti", alias: "Shuri", emoji: "🧪", jabatan: "", ig: "", quote: "Kimia itu seru." },
  { nama: "Adeline Callysta Alrayi", alias: "Spider-Man", emoji: "🕷️", jabatan: "", ig: "https://instagram.com/adeline.callysta", quote: "Tugas. Begadang." },
  { nama: "Aisyah Fathin Mumtazziah", alias: "Captain Marvel", emoji: "💫", jabatan: "", ig: "https://instagram.com/aisyah.fathin", quote: "Kas aman." },
  { nama: "Alma Dinar Alfiyah", alias: "Thor", emoji: "⚡", jabatan: "", ig: "https://instagram.com/alma.dinar", quote: "Target 100." },
  { nama: "Ansal Isnaeni", alias: "Black Widow", emoji: "🕶️", jabatan: "", ig: "https://instagram.com/ansal.isnaeni", quote: "Tenang. Fokus." },
  { nama: "Asri Rahmawati", alias: "Hulk", emoji: "💪", jabatan: "", ig: "https://instagram.com/asri.rahmawati", quote: "Kuat. Santai." },
  { nama: "Athaya Dafiey Nofrianti", alias: "Scarlet Witch", emoji: "🔮", jabatan: "bendahara", ig: "https://instagram.com/athaya.dafiey", quote: "Hitung. Beres." },
  { nama: "Azahra Resfriana Putri", alias: "Doctor Strange", emoji: "🌀", jabatan: "", ig: "https://instagram.com/azahra.resfriana", quote: "Pasti lulus." },
  { nama: "Deva Setia Herlambang", alias: "Wasp", emoji: "🐝", jabatan: "", ig: "https://instagram.com/deva.setia", quote: "Kecil. Juara." },
  { nama: "Dian Nur Aini", alias: "Star-Lord", emoji: "🌌", jabatan: "", ig: "https://instagram.com/dian.nur", quote: "Gas praktikum." },
  { nama: "Dinda Maulida Baid", alias: "Gamora", emoji: "⚔️", jabatan: "", ig: "https://instagram.com/dinda.maulida", quote: "Rajin nyatet." },
  { nama: "Elma Elmina", alias: "Ant-Man", emoji: "🐜", jabatan: "", ig: "https://instagram.com/elma.elmina", quote: "Mimpi besar." },
  { nama: "Faraisya Diva Rafaifa", alias: "Pepper Potts", emoji: "💼", jabatan: "ketua kelas", ig: "https://instagram.com/faraisya.diva", quote: "Ketua. Gas." },
  { nama: "Farkhatus Sokhibah", alias: "Black Panther", emoji: "🐈‍⬛", jabatan: "", ig: "https://instagram.com/farkhatus.sokhibah", quote: "IPA forever." },
  { nama: "Filzah Nur Mufidah", alias: "Captain America", emoji: "🛡️", jabatan: "", ig: "https://instagram.com/filzah.nur", quote: "Belajar terus." },
  { nama: "Fradinka Aryabima", alias: "Hawkeye", emoji: "🏹", jabatan: "", ig: "https://instagram.com/fradinka.aryabima", quote: "Tepat sasaran." },
  { nama: "Furqon Aditya Nugraha", alias: "Loki", emoji: "🟢", jabatan: "bendahara", ig: "https://instagram.com/furqon.aditya", quote: "Santai. Beres." },
  { nama: "Hanifa", alias: "Vision", emoji: "🤖", jabatan: "", ig: "https://instagram.com/hanifa", quote: "Logis. Fokus." },
  { nama: "Ibrahim Al Habsi Mangkuraga", alias: "Falcon", emoji: "🦅", jabatan: "", ig: "https://instagram.com/ibrahim.alhabsi", quote: "Otot Kuat." },
  { nama: "Imel Tri Cahyati", alias: "Winter Soldier", emoji: "❄️", jabatan: "", ig: "https://instagram.com/imel.tri", quote: "Dingin. Kompak." },
  { nama: "Khansa Raissa Anjani", alias: "Groot", emoji: "🌳", jabatan: "", ig: "https://instagram.com/khansa.raissa", quote: "Anak IPA." },
  { nama: "Mecca Nahariah Noor Sabrina", alias: "Rocket", emoji: "🦝", jabatan: "", ig: "https://instagram.com/mecca.nahariah", quote: "Otak encer." },
  { nama: "Muhammad Bagus Fanani", alias: "Nebula", emoji: "💙", jabatan: "", ig: "https://instagram.com/muhammad.bagus", quote: "Masa depan cerah." },
  { nama: "Muhammad Faqih", alias: "Okoye", emoji: "⚔️", jabatan: "wakil ketua kelas", ig: "https://instagram.com/muhammad.faqih", quote: "Setia kawan." },
  { nama: "Muhammad Ilham", alias: "Wong", emoji: "📚", jabatan: "", ig: "https://instagram.com/muhammad.ilham", quote: "Kutu buku." },
  { nama: "Naafito Raufa Ramadhan", alias: "Daredevil", emoji: "👊", jabatan: "", ig: "https://instagram.com/naafito.raufa", quote: "Kejar nilai." },
  { nama: "Nadia Ulfa", alias: "Deadpool", emoji: "😜", jabatan: "", ig: "https://instagram.com/nadia.ulfa", quote: "Tukang jokes." },
  { nama: "Najwa Salsabillah Thabroni", alias: "Wolverine", emoji: "🐺", jabatan: "sekertaris", ig: "https://instagram.com/najwa.salsabillah", quote: "Tangguh." },
  { nama: "Naura Kaylatheefa Izzara", alias: "Storm", emoji: "🌩️", jabatan: "", ig: "https://instagram.com/naura.kaylatheefa", quote: "Badai berlalu." },
  { nama: "Niela Nacita", alias: "Cyclops", emoji: "👓", jabatan: "", ig: "https://instagram.com/niela.nacita", quote: "Fokus depan." },
  { nama: "Nur Fahmi Al Rif'qi", alias: "Jean Grey", emoji: "🔥", jabatan: "", ig: "https://instagram.com/nur.fahmi", quote: "Pikiran kuat." },
  { nama: "Pelangi Alifa", alias: "Captain Carter", emoji: "🇬🇧", jabatan: "", ig: "https://instagram.com/pelangi.alifa", quote: "Habis hujan, pelangi." },
  { nama: "Rafa Abdillah Nurakhman", foto: "Rafa.jpeg.jpeg", alias: "Ms. Marvel", emoji: "✨", jabatan: "sekertaris", ig: "https://instagram.com/rafa.abdillah", quote: "Hero beneran." },
  { nama: "Riska Maulida A", alias: "She-Hulk", emoji: "💚", jabatan: "", ig: "https://instagram.com/riska.maulida", quote: "Kuat. Cerdas." },
  { nama: "Rifqi Zidan Farras", alias: "Moon Knight", emoji: "🌙", jabatan: "", ig: "https://instagram.com/rifqi.zidan", quote: "Zubaedah pengocok poker." },
  { nama: "Salwa Azahra", alias: "Shang-Chi", emoji: "🐉", jabatan: "", ig: "https://instagram.com/salwa.azahra", quote: "Fokus. Bisa." },
  { nama: "Sarah Amellia Febrianti", alias: "Sersi", emoji: "💎", jabatan: "", ig: "https://instagram.com/sarah.amellia", quote: "Biasa jadi luar biasa." },
  { nama: "Saskia Dewi", alias: "Nova", emoji: "☄️", jabatan: "", ig: "https://instagram.com/saskia.dewi", quote: "Meluncur cepat." },
  { nama: "Shella Nabela", alias: "Ironheart", emoji: "❤️", jabatan: "", ig: "https://instagram.com/shella.nabela", quote: "Penerus Iron Man." },
  { nama: "Siti Zaenab", alias: "Miles Morales", emoji: "🕸️", jabatan: "", ig: "https://instagram.com/siti.zaenab", quote: "Bisa jadi juara." },
  { nama: "Vino Arief Maulana", alias: "Spider-Gwen", emoji: "🎸", jabatan: "", ig: "https://instagram.com/vino.arief", quote: "Nilai aman." },
  { nama: "Vivia Refania", alias: "Nick Fury", emoji: "😎", jabatan: "", ig: "https://instagram.com/vivia.refania", quote: "pokoknya gituh." },
  { nama: "Wafi Hayfa Nugraha", alias: "Mantis", emoji: "🦗", jabatan: "", ig: "https://instagram.com/wafi.hayfa", quote: "Teman semua." },
  { nama: "Wirahma Yudha", alias: "Drax", emoji: "😂", jabatan: "", ig: "https://instagram.com/wirahma.yudha", quote: "Lucu. Pinter." },
  { nama: "Yuni Makiyah Syahidah", alias: "Happy Hogan", emoji: "🚗", jabatan: "", ig: "https://instagram.com/yuni.makiyah", quote: "Siaga membantu." },
  { nama: "Zahra Alzena Bahi Ramadani", alias: "Phil Coulson", emoji: "📋", jabatan: "", ig: "https://instagram.com/zahra.alzena", quote: "Andalan kelas." },
];

const DATA_STONES = [
  { nama: "Space Stone", mapel: "FISIKA ⚛", emoji: "🟦", warna: "linear-gradient(135deg,#38e1ff,#1a56ff)", desc: "Gerak, gaya, energi.", guru: "⚛ Selasa & Jumat" },
  { nama: "Mind Stone", mapel: "BIOLOGI 🧬", emoji: "🟨", warna: "linear-gradient(135deg,#f6d365,#fda085)", desc: "Makhluk hidup.", guru: "👩‍🏫 Selasa & Jumat" },
  { nama: "Reality Stone", mapel: "KIMIA 🧪", emoji: "🟥", warna: "linear-gradient(135deg,#ff416c,#ff4b2b)", desc: "Reaksi & larutan.", guru: "🧪 Rabu & Kamis" },
  { nama: "Power Stone", mapel: "MATEMATIKA ➗", emoji: "🟪", warna: "linear-gradient(135deg,#a044ff,#6a3093)", desc: "Logika & hitung.", guru: "➕ Kamis & Jumat" },
  { nama: "Time Stone", mapel: "BAHASA ⏳", emoji: "🟩", warna: "linear-gradient(135deg,#11998e,#38ef7d)", desc: "Bahasa & sejarah.", guru: "📝 Senin-Rabu • 🌍 Kamis" },
  { nama: "Soul Stone", mapel: "AGAMA & PPKN 🤍", emoji: "🟧", warna: "linear-gradient(135deg,#f7971e,#ffd200)", desc: "Moral & jiwa.", guru: "🕌 Rabu • 🇮🇩 Kamis" },
];

// JADWAL ASLI dari file "Jadwal KBM XI.docx" — jam yang berurutan tanpa keterangan = lanjutan mapel yang sama
const DATA_JADWAL = {
  Senin: [["07.40-09.40","🏃 PJOK","3 JP"],["09.40-10.10","☕ Istirahat 1","—"],["10.10-11.30","💻 Informatika","2 JP"],["11.30-12.10","📝 B. Indonesia","1 JP"],["12.10-13.00","☕ Istirahat 2","—"],["13.00-15.00","🧬 Biologi","3 JP"]],
  Selasa: [["07.15-08.35","💻 Informatika","2 JP"],["08.35-09.55","🎨 Seni Budaya","2 JP"],["09.55-10.15","☕ Istirahat 1","—"],["10.15-11.35","🗣️ Bahasa Sunda","2 JP"],["11.35-12.15","📜 Sejarah","1 JP"],["12.15-13.00","☕ Istirahat 2","—"],["13.00-13.40","📜 Sejarah (lanjutan)","1 JP"],["13.40-15.00","⚛ Fisika","2 JP"]],
  Rabu: [["07.15-08.35","🧪 Kimia","2 JP"],["08.35-09.55","➗ MTK Lanjut","2 JP"],["09.55-10.15","☕ Istirahat 1","—"],["10.15-10.55","➗ MTK Lanjut (lanjutan)","1 JP"],["10.55-12.15","📝 B. Indonesia","2 JP"],["12.15-13.00","☕ Istirahat 2","—"],["13.00-15.00","🕌 PAI","3 JP"]],
  Kamis: [["07.15-09.15","🧪 Kimia","3 JP"],["09.15-09.55","➕ Matematika","1 JP"],["09.55-10.15","☕ Istirahat 1","—"],["10.15-10.55","➕ Matematika (lanjutan)","1 JP"],["10.55-12.15","🇮🇩 Pend. Pancasila","2 JP"],["12.15-13.00","☕ Istirahat 2","—"],["13.00-15.00","🌍 B. Inggris","3 JP"]],
  Jumat: [["07.15-08.35","⚛ Fisika","2 JP"],["08.35-09.55","🧬 Biologi","2 JP"],["09.55-10.15","☕ Istirahat 1","—"],["10.15-11.35","➕ Matematika","2 JP"],["11.35-12.40","☕ Istirahat 2","—"],["12.40-14.00","➗ MTK Lanjut","2 JP"]],
};

// JADWAL PIKET ASLI dari file "JADWAL PIKET KELAS XI.docx" (nama panggilan sesuai file)
const DATA_PIKET = {
  Senin: ["Dian","Alma","Farha","Rafa","Fara","Baim","Mecca","Vivia","Fito"],
  Selasa: ["Filzah","Aisyah","Adela","Daffa","Shella","Yudha","Wafi","Adeline","Yuni"],
  Rabu: ["Adit","Khanza","Sarah","Saskia","Niela","Elma","Nadia","Faqih","Fahmi"],
  Kamis: ["Dinda","Alzena","Hanifah","Riska","Asri","Ansal","Pelangi","Deva","Triya","Vino"],
  Jumat: ["Najwa","Jeje","Salwa","Zahra","Athaya","Naura","Imel","Ilham","Bagus","Bima"],
};

// FOTO GALERI — semua file di folder "foto-kenangan". Tambah/hapus nama file di sini.
const GALERI_FOTOS = [
  "WhatsApp Image 2026-10-02 at 4.01.25 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.01.26 PM (1).jpeg",
  "WhatsApp Image 2026-10-02 at 4.01.26 PM (2).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.05 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.06 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.07 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.08 PM (1).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.08 PM (2).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.08 PM (3).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.08 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.09 PM (1).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.09 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.10 PM (1).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.10 PM (3).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.11 PM (1).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.11 PM (3).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.11 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.12 PM (3).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.12 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.13 PM (1).jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.13 PM.jpeg",
  "WhatsApp Image 2026-10-02 at 4.03.14 PM.jpeg",
];
const DATA_GALERI = GALERI_FOTOS.map((f,i)=>({ foto: "foto-kenangan/" + f, judul: "Kenangan " + (i+1), tag: "📸 XI-5" }));

/* ===== RENDER (jangan diubah kalau ragu) ===== */
const $ = s => document.querySelector(s);

// Terapkan CONFIG IG ke semua tombol
$("#btn-ig-hero").href = CONFIG.igKelas;
$("#btn-ig-kontak").href = CONFIG.igKelas;
$("#ig-username").textContent = CONFIG.igUsername;
if($("#wali-nama")) $("#wali-nama").textContent = CONFIG.waliKelas;
$("#wali-nama-hero").textContent = CONFIG.waliKelas;
$("#kelas-label").textContent = `${CONFIG.namaKelas} • ${CONFIG.tahunAjaran}`;
$("#stat-siswa").textContent = DATA_SISWA.length;
// Total mapel unik dari jadwal (lanjutan digabung, istirahat tidak dihitung)
$("#stat-mapel").textContent = new Set(Object.values(DATA_JADWAL).flat().map(j=>j[1].replace(/ \(lanjutan\)$/, "")).filter(m=>!/Istirahat/.test(m))).size;
document.title = `${CONFIG.namaKelas} • Profil Kelas`;

// Stones
$("#stonesGrid").innerHTML = DATA_STONES.map((s,i)=>`
 <div class="stone-card reveal" style="background:${s.warna}" data-stone="${i}">
   <div class="big">${s.emoji}</div><h3>${s.nama}</h3><p><b>${s.mapel}</b><br>${s.desc.slice(0,70)}...</p>
   <span class="go">Lihat misi →</span>
 </div>`).join("");
document.querySelectorAll("[data-stone]").forEach(el=>el.onclick=()=>{
  const s = DATA_STONES[+el.dataset.stone];
  $("#stoneEmoji").textContent=s.emoji; $("#stoneNama").textContent=s.nama;
  $("#stoneMapel").textContent=s.mapel; $("#stoneDesc").textContent=s.desc; $("#stoneGuru").textContent=s.guru;
  $("#stoneBg").classList.add("show");
});
$("#stoneX").onclick=()=>$("#stoneBg").classList.remove("show");
$("#stoneBg").onclick=e=>{if(e.target.id==="stoneBg")e.target.classList.remove("show")};

// Siswa — struktur urut: ketua > wakil > sekretaris > sekretaris > bendahara > bendahara
let filterAktif="all", keyword="";
function jabatanRank(s){
  const j = (s.jabatan||"").toLowerCase();
  if(j.includes("wakil")) return 2;
  if(j.includes("ketua")) return 1;
  if(j.includes("sek")) return 3;
  if(j.includes("bendahara")) return 4;
  return 99;
}
function renderSiswa(){
  const pengurus = DATA_SISWA.map((s,idx)=>({s,idx})).filter(o=>o.s.jabatan)
    .sort((a,b)=> jabatanRank(a.s)-jabatanRank(b.s) || a.idx-b.idx).map(o=>o.s);
  const biasa = DATA_SISWA.filter(s=>!s.jabatan);
  $("#pengurusStrip").innerHTML = pengurus.map(strukturHTML).join("");
  let list = filterAktif==="pengurus"?pengurus:filterAktif==="siswa"?biasa:DATA_SISWA;
  if(keyword) list = list.filter(s=>(s.nama+s.alias).toLowerCase().includes(keyword));
  $("#siswaGrid").innerHTML = list.length?list.map(cardHTML).join(""):`<p style="color:var(--muted)">Tidak ketemu.</p>`;
  bindCards();
}
// Foto profil: pakai s.foto kalau ada (cth: "foto/adela.jpg"), kalau kosong pakai avatar otomatis dari nama
function fotoURL(s){
  return s.foto || "";
}
function cardHTML(s){
  return `<div class="siswa-card ${s.jabatan?'pengurus':''}" data-nama="${s.nama}">
    ${s.foto ? `<div class="ava"><img src="${s.foto}" alt="Foto ${s.nama}" loading="lazy"></div>` : ""}
    <h4>${s.nama}</h4>
    ${s.jabatan?`<span class="jabatan">★ ${s.jabatan.toUpperCase()}</span>`:""}
  </div>`;
}
function strukturHTML(s,i){
  return `<div class="struktur-node" data-nama="${s.nama}">
    <div class="struktur-dot">${i+1}</div>
    <div class="struktur-card">
      <div class="struktur-info">
        <h4>${s.nama}</h4>
        <span class="jabatan">★ ${s.jabatan.toUpperCase()}</span>
      </div>
    </div>
  </div>`;
}
function bindCards(){
  document.querySelectorAll(".siswa-card, .struktur-node").forEach(c=>c.onclick=()=>{
    const s = DATA_SISWA.find(x=>x.nama===c.dataset.nama);
    const src = fotoURL(s);
    $("#modalHero").innerHTML = `<img src="${src}" alt="Foto ${s.nama}" />`;
    $("#modalHero").classList.add("zoomable");
    $("#modalHero").title = "Klik untuk perbesar 1 layar penuh";
    // Klik foto siswa -> fullscreen 1 layar
    $("#modalHero").onclick = (ev) => { ev.stopPropagation(); openSingle(src, s.nama); };
    $("#modalNama").textContent=s.nama;
    $("#modalJabatan").innerHTML=s.jabatan?`<span>★ ${s.jabatan.toUpperCase()}</span>`:"";
    $("#modalQuote").textContent=`"${s.quote}"`;
    $("#modalBg").classList.add("show");
  });
}
$("#modalX").onclick=()=>$("#modalBg").classList.remove("show");
$("#modalBg").onclick=e=>{if(e.target.id==="modalBg")e.target.classList.remove("show")};
$("#search").oninput=e=>{keyword=e.target.value.toLowerCase();renderSiswa()};
document.querySelectorAll("#filters button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); filterAktif=b.dataset.filter; renderSiswa();
});
renderSiswa();

// Jadwal
const hariList = Object.keys(DATA_JADWAL);
$("#jadwalTabs").innerHTML = hariList.map((h,i)=>`<button class="${i===0?'active':''}" data-h="${h}">${h}</button>`).join("");
function renderJadwal(h){
  $("#jadwalHari").textContent=h;
  $("#jadwalList").innerHTML = DATA_JADWAL[h].map(j=>`<li><span><b>${j[0]}</b><br>${j[1]}</span><span>${j[2]}</span></li>`).join("");
  document.querySelectorAll("#jadwalTabs button").forEach(b=>b.classList.toggle("active",b.dataset.h===h));
}
document.querySelectorAll("#jadwalTabs button").forEach(b=>b.onclick=()=>renderJadwal(b.dataset.h));
const _d = new Date().getDay();
const _today = _d >= 1 && _d <= 5 ? hariList[_d - 1] : null;
// Piket markas: tampil sesuai harinya saja (mengikuti tab hari yang dipilih)
function renderPiket(h){
  const isToday = (h === _today);
  $("#piketHari").innerHTML = isToday ? `<span class="today-badge">🔴 HARI INI • ${h.toUpperCase()}</span>` : `<span class="day-badge">📅 TIM ${h.toUpperCase()}</span>`;
  $("#piketList").innerHTML = DATA_PIKET[h].map(n=>`<div>🧹 ${n}</div>`).join("");
}
const _oldRender = renderJadwal;
renderJadwal = function(h){ _oldRender(h); renderPiket(h); };
renderJadwal(_today || "Senin");

// Galeri — foto asli folder foto-kenangan, klik untuk perbesar FULLSCREEN 1 layar
$("#galeriGrid").innerHTML = DATA_GALERI.map((g,i)=>`
 <div class="g-item" data-galeri="${i}"><img src="${g.foto}" alt="${g.judul}" loading="lazy" onerror="this.closest('.g-item').remove()" /><div class="g-cap"><small>${g.tag}</small><h4>${g.judul}</h4></div></div>`).join("");

// ===== FULLSCREEN VIEWER (1 layar penuh) =====
let _lightMode = "galeri"; // "galeri" | "single"
let _lightIdx = 0;
let _lightSingle = { foto: "", judul: "" };

function lockScroll(on){ document.body.style.overflow = on ? "hidden" : ""; }
function showCurrent(){
  const img = $("#lightImg"), cap = $("#lightCap"), counter = $("#lightCounter");
  const prev = $("#lightPrev"), next = $("#lightNext");
  if(_lightMode === "galeri" && DATA_GALERI.length){
    const g = DATA_GALERI[_lightIdx];
    img.src = g.foto; img.alt = g.judul;
    cap.textContent = `${g.judul} • ${g.tag}`;
    counter.textContent = `${_lightIdx + 1} / ${DATA_GALERI.length}`;
    counter.style.display = "";
    const multi = DATA_GALERI.length > 1;
    prev.style.display = multi ? "" : "none";
    next.style.display = multi ? "" : "none";
  } else {
    img.src = _lightSingle.foto; img.alt = _lightSingle.judul;
    cap.textContent = _lightSingle.judul;
    counter.textContent = `1 / 1`;
    counter.style.display = "none";
    prev.style.display = "none";
    next.style.display = "none";
  }
  resetZoom();
}
function openGaleri(i){
  if(!DATA_GALERI.length) return;
  _lightMode = "galeri";
  _lightIdx = ((i % DATA_GALERI.length) + DATA_GALERI.length) % DATA_GALERI.length;
  showCurrent();
  $("#lightbox").classList.add("show");
  lockScroll(true);
}
function openSingle(src, judul){
  _lightMode = "single";
  _lightSingle = { foto: src, judul: judul || "Foto" };
  showCurrent();
  $("#lightbox").classList.add("show");
  lockScroll(true);
}
function closeLightbox(){
  $("#lightbox").classList.remove("show");
  lockScroll(false);
  resetZoom();
}
function stepLightbox(d){
  if(_lightMode !== "galeri" || DATA_GALERI.length < 2) return;
  _lightIdx = ((_lightIdx + d) % DATA_GALERI.length + DATA_GALERI.length) % DATA_GALERI.length;
  showCurrent();
}
document.querySelectorAll("[data-galeri]").forEach(el=>el.onclick=()=>openGaleri(+el.dataset.galeri));
$("#lightPrev").onclick = e => { e.stopPropagation(); stepLightbox(-1); };
$("#lightNext").onclick = e => { e.stopPropagation(); stepLightbox(1); };
$("#lightX").onclick = e => { e.stopPropagation(); closeLightbox(); };
$("#lightbox").onclick = e => { if(e.target.id === "lightbox") closeLightbox(); };

// Zoom lightbox: tombol +/−, scroll mouse, ketuk 2x, cubit & geser di HP
let _z = { s: 1, x: 0, y: 0 };
function applyZoom(){ $("#lightImg").style.transform = `translate(${_z.x}px,${_z.y}px) scale(${_z.s})`; }
function resetZoom(){ _z = { s: 1, x: 0, y: 0 }; applyZoom(); }
function zoomStep(f){ _z.s = Math.min(4, Math.max(1, _z.s * f)); if(_z.s === 1){ _z.x = 0; _z.y = 0; } applyZoom(); }
$("#zoomIn").onclick = e => { e.stopPropagation(); zoomStep(1.4); };
$("#zoomOut").onclick = e => { e.stopPropagation(); zoomStep(1/1.4); };
$("#zoomReset").onclick = e => { e.stopPropagation(); resetZoom(); };
$("#lightZoom").addEventListener("wheel", e => {
  e.preventDefault();
  zoomStep(e.deltaY < 0 ? 1.15 : 1/1.15);
}, { passive: false });
$("#lightZoom").addEventListener("dblclick", e => {
  e.preventDefault();
  if(_z.s > 1) resetZoom(); else { _z.s = 2.5; applyZoom(); }
});
const _ptrs = new Map();
let _pinchD = 0, _pinchS = 1;
$("#lightZoom").addEventListener("pointerdown", e => {
  try{ $("#lightZoom").setPointerCapture(e.pointerId); }catch(err){}
  _ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if(_ptrs.size === 2){
    const p = [..._ptrs.values()];
    _pinchD = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
    _pinchS = _z.s;
  }
  $("#lightZoom").classList.add("grabbing");
});
$("#lightZoom").addEventListener("pointermove", e => {
  if(!_ptrs.has(e.pointerId)) return;
  const prev = _ptrs.get(e.pointerId);
  const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
  _ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if(_ptrs.size === 2){
    const p = [..._ptrs.values()];
    const d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
    if(_pinchD > 0){
      _z.s = Math.min(4, Math.max(1, _pinchS * d / _pinchD));
      if(_z.s === 1){ _z.x = 0; _z.y = 0; }
      applyZoom();
    }
  } else if(_z.s > 1){
    _z.x += dx; _z.y += dy;
    applyZoom();
  }
});
["pointerup","pointercancel","pointerleave"].forEach(ev=>$("#lightZoom").addEventListener(ev, e => {
  _ptrs.delete(e.pointerId);
  if(_ptrs.size < 2) _pinchD = 0;
  if(_ptrs.size === 0) $("#lightZoom").classList.remove("grabbing");
}));
// Geser kiri/kanan (HP & mouse) untuk pindah foto saat zoom = 1
let _swX = null, _swY = null;
$("#lightZoom").addEventListener("touchstart", e => {
  if(e.touches.length === 1){ _swX = e.touches[0].clientX; _swY = e.touches[0].clientY; }
}, { passive: true });
$("#lightZoom").addEventListener("touchend", e => {
  if(_swX === null) return;
  const dx = e.changedTouches[0].clientX - _swX;
  const dy = e.changedTouches[0].clientY - _swY;
  _swX = null; _swY = null;
  if(_z.s === 1 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) stepLightbox(dx < 0 ? 1 : -1);
}, { passive: true });
addEventListener("keydown",e=>{
  if($("#lightbox").classList.contains("show")){
    if(e.key==="Escape") closeLightbox();
    else if(e.key==="ArrowRight") stepLightbox(1);
    else if(e.key==="ArrowLeft") stepLightbox(-1);
    else if(e.key==="+"||e.key==="=") zoomStep(1.2);
    else if(e.key==="-") zoomStep(1/1.2);
    else if(e.key==="0") resetZoom();
    return;
  }
  if(e.key==="Escape")document.querySelectorAll(".modal-bg.show").forEach(m=>m.classList.remove("show"));
});

// Share
$("#btn-share").onclick=async()=>{
  const data={title:document.title,text:`XI-5 Avengers Scienfive!`,url:location.href};
  if(navigator.share){try{await navigator.share(data)}catch(e){}}
  else{await navigator.clipboard.writeText(location.href);alert("Link disalin! 🚀")}
};

// Mobile nav
$("#hamburger").onclick=()=>$("#navLinks").classList.toggle("open");
document.querySelectorAll("#navLinks a").forEach(a=>a.onclick=()=>$("#navLinks").classList.remove("open"));

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// Tilt 3D
const tilt=$("#tiltCard");
if(tilt){tilt.parentElement.onmousemove=e=>{
  const r=tilt.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
  tilt.style.transform=`rotateY(${x*16}deg) rotateX(${-y*16}deg)`;
};tilt.parentElement.onmouseleave=()=>tilt.style.transform="none"}

// Cursor glow
addEventListener("mousemove",e=>{const g=$("#cursor-glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});

// Particles: atom + ember
const cv=$("#particles"),ctx=cv.getContext("2d");let P=[];
function resize(){cv.width=innerWidth;cv.height=innerHeight}
resize();addEventListener("resize",resize);
for(let i=0;i<70;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2.2+.6,s:Math.random()*.6+.2,c:Math.random()>.5?"56,225,255":"237,29,36",o:Math.random()*.5+.2});
(function loop(){ctx.clearRect(0,0,cv.width,cv.height);
 P.forEach(p=>{p.y-=p.s;if(p.y<0){p.y=cv.height;p.x=Math.random()*cv.width}
  ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle=`rgba(${p.c},${p.o})`;ctx.fill()});
 requestAnimationFrame(loop)})();
