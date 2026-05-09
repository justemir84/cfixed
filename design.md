# Soru Çözme ve Ders Çalışma Uygulaması - Tasarım Planı

## Genel Bakış

Bu uygulama, öğrencilerin soru çözmesi ve ders çalışması için tasarlanmış modern bir mobil platformudur. Kullanıcı dostu arayüz ve akıcı navigasyon ile öğrenme deneyimini iyileştirir.

## Ekran Listesi

1. **Ana Sayfa (Home Screen)** - Uygulamanın ana giriş noktası
2. **İstatistik Sayfası (Statistics Screen)** - Kullanıcının performans verilerini gösterir
3. **Profil Sayfası (Profile Screen)** - Kullanıcı bilgileri ve ayarlar

## Birincil İçerik ve İşlevsellik

### 1. Ana Sayfa (Home Screen)

**Başlık Bölümü:**
- Üst sol: Hamburger menü (☰) - Kütüphane menüsünü açar
- Orta: "Ana Sayfa" başlığı
- Üst sağ: Soru işareti (?) ve bildirim ikonu

**Bugünkü Hedef Kartı:**
- Başlık: "Bugünkü hedef" (mor renk)
- İlerleme göstergesi: 10/50 (Başladığın, ritmi bozma)
- Yüzde: %20
- Alt bilgi: "10 soru çözüldü" + "Kalan 40 soru"
- Buton: "Hadefi Değiştir" (mor, ortalanmış)

**İstatistik Özeti:**
- Yeşil arka plan: "38 yeni test, 523 yeni soru, 2366 yeni doğru/yanlış"

**Hızlı Başla Bölümü:**
- Başlık: "Hızlı Başla" (sağda "En sık kullanılan alanlar")
- Kartlar:
  - Online Testler (kitap ikonu, yeşil)
  - Rastgele Test (play ikonu, mavi)
  - Doğru / Yanlış (ikili ikon, mor)

**Kütüphane Bölümü:**
- Başlık: "Kütüphane" (sağda "İçerikler ve kayıtlı alanlar")
- Kartlar:
  - Konu Anlatımı (not ikonu, mor)
  - Favori Konularım (bookmark ikonu, mor)
  - Favori Sorularım (kalp ikonu, pembe)
  - Yanlış Sorularım (bilgi ikonu, turuncu)
  - Notlarım (not ikonu, gri)
  - Denemeler (kutu ikonu, sarı)

**Alt Navigasyon (Bottom Tab Bar):**
- Ana Sayfa (ev ikonu, aktif mavi)
- İstatistik (grafik ikonu)
- Profil (kişi ikonu)

### 2. İstatistik Sayfası (Statistics Screen)

- Kullanıcının test sonuçlarını, doğru/yanlış oranlarını ve ilerleme grafiklerini gösterir
- Zaman içinde performans trendi
- Konu bazında başarı oranları

### 3. Profil Sayfası (Profile Screen)

- Kullanıcı adı ve profil fotoğrafı
- Hesap ayarları
- Uygulama ayarları (tema, bildirimler, vb.)
- Çıkış yap seçeneği

## Anahtar Kullanıcı Akışları

### Akış 1: Hızlı Başla ile Test Çözme
1. Kullanıcı Ana Sayfa'da "Online Testler" kartına tıklar
2. Test listesi sayfasına yönlendirilir
3. Bir test seçer ve test çözme ekranına gider
4. Soruları cevaplar ve testi tamamlar
5. Sonuçlar sayfasında performansını görür

### Akış 2: Kütüphane Erişimi
1. Kullanıcı sol üstteki hamburger menüye (☰) tıklar
2. Kütüphane menüsü açılır
3. İstediği kategoriyi seçer (Favori Konularım, Yanlış Sorularım, vb.)
4. İlgili içeriğe erişir

### Akış 3: Bugünkü Hedef Güncelleme
1. Kullanıcı Ana Sayfa'da "Hadefi Değiştir" butonuna tıklar
2. Hedef belirleme modal açılır
3. Yeni hedef sayısını girer ve kaydeder
4. Hedef kartı güncellenir

## Renk Seçimleri

| Renk | Kullanım | Hex Kodu |
|------|----------|----------|
| Mor | Başlıklar, birincil butonlar, ikonlar | #6366F1 |
| Mavi | Aktif sekme, vurgulu öğeler | #3B82F6 |
| Yeşil | Başarı, istatistik kartları | #10B981 |
| Pembe | Favori öğeleri | #EC4899 |
| Turuncu | Uyarı, yanlış sorular | #F97316 |
| Sarı | Denemeler | #EAB308 |
| Gri | Nötr öğeler, metinler | #6B7280 |
| Beyaz | Arka plan, kartlar | #FFFFFF |
| Açık Gri | Hafif arka planlar | #F3F4F6 |

## Tipografi

- **Başlıklar**: Bold, 18-24px
- **Alt başlıklar**: Semibold, 14-16px
- **Gövde metni**: Regular, 12-14px
- **Açıklama metni**: Regular, 11-12px, gri renk

## Bileşen Tasarımı

### Kartlar
- Beyaz arka plan, hafif gölge
- Köşeler: 12-16px border radius
- Padding: 16px
- Hover/Press durumunda hafif opacity değişimi

### Butonlar
- Mor arka plan, beyaz metin
- Padding: 12px 24px
- Border radius: 8px
- Press durumunda scale: 0.97

### İkonlar
- Boyut: 24-32px
- Renk: Tema rengine göre değişir
- Stil: Outline veya filled

## Navigasyon Yapısı

- **Bottom Tab Navigation**: 3 ana sekme (Ana Sayfa, İstatistik, Profil)
- **Drawer Navigation**: Sol taraftan açılan kütüphane menüsü
- **Modal**: Hedef belirleme, ayarlar vb. için

## Erişilebilirlik

- Tüm butonlar minimum 44x44px dokunma alanı
- Yeterli renk kontrastı (WCAG AA standardı)
- Ekran okuyucu desteği
- Yazı boyutu ayarlanabilir
