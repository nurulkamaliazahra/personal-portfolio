# Portofolio Pribadi - Nurul Kamalia Zahra, S.Si.D.

Website portofolio pribadi modern, responsif, dan interaktif dengan estetika desain **Glassmorphism** untuk **Nurul Kamalia Zahra, S.Si.D.** (Data Science Graduate / Data Analyst).

---

## ✨ Fitur & Pembaruan Terkini

1. **Foto Wisuda Resmi Beresolusi Tinggi**:
   - Menampilkan foto wisuda resmi **Nurul Kamalia Zahra, S.Si.D.** di depan gedung kembar UPN "Veteran" Jawa Timur pada kartu kaca modern dengan lencana gelar sarjana dan pin HKI terdaftar.
2. **Proyek Unggulan: MEDRISK ANALYSIS (Dual-Core: C5.0 + Association Rule Mining)**:
   - **Legitimasi Negara Resmi**: Surat Pencatatan Ciptaan dari **Kementerian Hukum Republik Indonesia** (No. Pencatatan: `001353841`, No. Permohonan: `EC002026117439`, masa perlindungan 50 tahun).
   - **Galeri Tangkapan Layar Interaktif (6 Screenshots)**:
     1. *Beranda & Integrasi Modul Prediksi C5.0 serta Asosiasi*
     2. *Form Input Resep Transaksi & Auto-Complete Real-time*
     3. *Profil Obat Klinis: Amoxicilin (Antibiotik / Dosis & Alternatif)*
     4. *Profil Obat Klinis: Asam Mefenamat (Analgesik / Mitigasi Lambung)*
     5. *Form Association Rule Mining (ARM): Unggah CSV Peresepan & Atur Support, Confidence, Lift*
     6. *Wawasan Aturan Asosiasi (ARM) per Kelas Risiko Sangat Berisiko (50 Rules)*
   - **Interactive Universal Lightbox**: Memungkinkan pengunjung mengklik tombol *"Lihat Dokumen Sertifikat Asli"* atau mengklik gambar screenshot untuk memperbesar gambar dalam resolusi penuh dengan latar blur.
3. **Pendidikan, Sertifikasi & Hak Cipta**:
   - Tri-card layout: **Surat Pencatatan Ciptaan Kemenkumham RI**, **BNSP Junior Web Programmer**, dan **S1 Sains Data (S.Si.D.) UPN Veteran Jawa Timur**.

---

## 📁 Struktur Berkas

```
personal-portfolio/
├── index.html                   # Halaman utama (Tailwind CDN, Glassmorphism, Galeri HKI C5.0 & ARM)
├── css/
│   └── style.css                # Styling Glassmorphism, animasi ambient orbs, lightbox & badges
├── js/
│   └── main.js                  # Gallery switcher 6 tabs, modal lightbox, typing effect, toast
├── assets/
│   ├── foto-portofolio.jpeg     # Foto wisuda resmi Nurul Kamalia Zahra, S.Si.D.
│   ├── sertifikat-haki.png      # Sertifikat Ciptaan Kementerian Hukum RI (MEDRISK)
│   ├── medrisk-1.png            # Screenshot: Beranda C5.0 & Asosiasi
│   ├── medrisk-2.png            # Screenshot: Input Resep & Auto-Complete
│   ├── medrisk-3.png            # Screenshot: Profil Obat Amoxicilin
│   ├── medrisk-4.png            # Screenshot: Profil Obat Asam Mefenamat
│   ├── medrisk-5.png            # Screenshot: Form Parameter ARM (Support, Confidence, Lift)
│   ├── medrisk-6.png            # Screenshot: Visualisasi Wawasan Aturan Asosiasi (ARM)
│   └── avatar.svg               # Vektor ilustrasi pelengkap
├── README.md                    # Dokumentasi proyek
└── Salinan gambar lama di root # Dipertahankan; file situs menggunakan gambar di assets/
```

Folder `PortofolioLia/` dari struktur repository sebelumnya juga dipertahankan agar tidak menghapus file yang ada. GitHub Pages menggunakan `index.html` di root repository ini.

---

## 🚀 Menjalankan Website

Buka `index.html` langsung di browser (Google Chrome, Microsoft Edge, atau Firefox). Website ini tidak memerlukan proses build atau framework tambahan. Pastikan koneksi internet tersedia untuk Tailwind CSS, Font Awesome, dan Google Fonts yang dimuat dari CDN.

---

## 🌐 Deploy ke GitHub Pages

1. Pastikan `index.html`, `assets/`, `css/`, `js/`, dan `README.md` berada langsung di root repository.
2. Di GitHub, buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, dan folder `/(root)`, lalu simpan.
4. Setelah perubahan pada branch `main` di-commit dan di-push, tunggu proses deployment selesai. Website tersedia di `https://nurulkamaliazahra.github.io/personal-portfolio/`.

Semua referensi aset lokal menggunakan path relatif (`assets/...`, `css/style.css`, dan `js/main.js`), sehingga tetap berfungsi pada URL GitHub Pages yang memiliki subpath repository.
