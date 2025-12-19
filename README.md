[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Xg2jV1i2)
# WEB ÖDEVİ (2.secenek )– SPA Portfolyo Projesi

Bu proje, Web Teknolojileri dersi kapsamında geliştirilmiş, SPA (Single Page Application) mantığına uygun bir kişisel portfolyo web sitesidir. Projede HTML, CSS ve JavaScript kullanılarak modern ve kullanıcı odaklı bir yapı oluşturulmuştur.

# 📌Proje Amacı
Bu projenin amacı:
* HTML5, CSS3 ve JavaScript (ES6) bilgilerini uygulamalı olarak kullanmak
* SPA mantığını öğrenmek ve uygulamak
* JSON veri yapısı ile dinamik içerik üretmek
* Dosya ve klasör yapısını doğru ve düzenli şekilde kullanmaktır

# 🗂️ Proje Klasör Yapısı
Proje dosyaları aşağıdaki şekilde organize edilmiştir:
WEB ODEVI
│
├── index.html
├── favicon.ico
│
├── css
│   └── style.css
│
├── js
│   └── app.js
│
├── data
│   └── projects.json
│
└── assets
    └── images
        ├── 1.image.jpeg
        └── icons
            └── favicon.svg


# 📄 Dosyaların Görevleri

# index.html
* Projenin ana HTML dosyasıdır.
* Sayfanın iskelet yapısını oluşturur.
* CSS ve JavaScript dosyaları bu dosyaya bağlanır.
* SPA yapısına uygun olarak içerik alanları tanımlanmıştır.

# css/style.css
* Tüm sayfanın stil ve tasarım ayarlarını içerir.
* Responsive (duyarlı) tasarım kuralları bu dosyada yer alır.
* Renkler, yazı tipleri, kart yapıları ve layout düzenlemeleri burada yapılmıştır.

# js/app.js
* JavaScript kodlarının bulunduğu ana dosyadır.
* SPA mantığı burada uygulanır.
* `fetch()` kullanılarak **projects.json** dosyasından veriler alınır.
* Alınan veriler DOM üzerinde dinamik olarak gösterilir.

# data/projects.json
* Projelerin bilgilerini içeren JSON veri dosyasıdır.
* Her proje için başlık, açıklama ve kullanılan teknolojiler yer alır.
* JavaScript tarafından okunarak projeler bölümü dinamik olarak oluşturulur.

# assets/images
* Projede kullanılan tüm görseller bu klasör altında tutulur.
 **1.image.jpeg :**  Sayfa içerisinde kullanılan örnek görseldir.
  **icons/favicon.svg:** Site için kullanılan SVG formatındaki ikon dosyasıdır.
  **favicon.ico:**  Tarayıcı sekmesinde görünen site ikonudur.
                    HTML dosyasına `<link rel="icon" ...>` etiketi ile bağlanır.

# ⚙️ Kullanılan Teknolojiler

* HTML5
* CSS3
* JavaScript (ES6)
* JSON
* Fetch API
* SPA mimarisi   

## 🚀 Çalıştırma Talimatları

1. Proje klasörünü Visual Studio Code ile açın
2. `index.html` dosyasını **Live Server** ile çalıştırın
3. Tarayıcıda proje otomatik olarak açılacaktır

> ⚠️ Not: Projede fetch() kullanıldığı için index.html dosyası **Live Server** (VS Code) ile çalıştırılmalıdır. Dosya doğrudan çift tıklanarak açıldığında JSON verileri yüklenmez. 


**Ad Soyad:** Khadra Khoder
**Ogrenci Numarasi:** B231200576
**Bölüm:** Bilişim Sistemleri Mühendisliği
