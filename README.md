# myRandevu web sitesi (myrandevu.tr)

GitHub Pages'te yayınlanan statik site.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Ana sayfa |
| `gizlilik.html` | Gizlilik Politikası + KVKK Aydınlatma Metni + hesap silme (App Store / Google Play için gereken adres) |
| `kvkk.html` | `gizlilik.html`'e yönlendirir |
| `404.html` | Bulunamayan sayfalar için (GitHub Pages otomatik kullanır) |
| `style.css`, `script.js` | Stil ve küçük betik |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Tarayıcı ve iPhone ana ekran ikonları |
| `og-image.jpg` | WhatsApp / sosyal medya paylaşım görseli (1200×630) |
| `robots.txt`, `sitemap.xml` | Arama motorları için |

## Yayından önce doldurulacaklar

Sayfalarda `{{...}}` ile işaretli yer tutucular var; hepsini gerçek bilgiyle değiştirin:

- `{{ILETISIM_EPOSTA}}`: iletişim / KVKK başvuru e-postası (index.html ve gizlilik.html)
- `{{SIRKET_UNVANI}}`: veri sorumlusunun ticari ünvanı (şahıs şirketiyse ad soyad)
- `{{SIRKET_ADRESI}}`: yazışma adresi

Kalan yer tutucu var mı kontrol etmek için:

```sh
grep -n "{{" *.html
```

Bu komut hiçbir şey yazdırmıyorsa hazırdır.

Gizlilik metni uygulamanın gerçekte işlediği verilere göre hazırlandı; yayından önce bir
hukukçuya kontrol ettirilmesi önerilir (özellikle yurt dışı aktarım ve saklama süreleri).

## GitHub Pages'e yükleme

Bu klasördeki tüm dosyaları (README hariç isteğe bağlı) repo köküne koyun; mevcut
`index.html`, `style.css`, `script.js` ve `favicon.svg` üzerine yazılır. Repodaki `CNAME`
dosyasına dokunmayın (alan adı ayarı orada).

Yayından sonra:
- Paylaşım önizlemesini kontrol: https://developers.facebook.com/tools/debug/ (WhatsApp da bu önbelleği kullanır)
- Google Search Console'a `myrandevu.tr` ekleyip `sitemap.xml` gönderin.
