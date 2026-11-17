$ErrorActionPreference = 'Continue'
$dest = 'research/assets/photography'
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Remove-Item -Path "$dest/_test_hero.jpeg" -ErrorAction SilentlyContinue

$items = @(
  # name | URL
  'btr-back-to-back-champions-1920x1080.jpeg|https://bigetron.gg/media/thumbnails/5f7368yZ8a9JFGp4Derft5_size_1920x1080.jpeg'
  'btr-ffws-sea-2026-fall-champions-1920x1080.jpeg|https://bigetron.gg/media/thumbnails/2EZFofU4z26yBUc8yfEvvu_size_1920x1080.jpeg'
  'btr-mwi-ewc26-back-to-back-champions-1920x1080.jpeg|https://bigetron.gg/media/thumbnails/WvEGzRskQ6npdSv7aBL7Ra_size_1920x1080.jpeg'
  'btr-all-divisions-ewc-2026-1920x1080.jpeg|https://bigetron.gg/media/thumbnails/aybd4NwwxzbmutQMkjfvaX_size_1920x1080.jpeg'
  'btr-pmpl-id-fall-2026-runner-up-1920x1080.jpeg|https://bigetron.gg/media/thumbnails/boLd8kPTCtYKmbkt9bv52s_size_1920x1080.jpeg'
  'btr-academy-champions-1920x1080.jpeg|https://bigetron.gg/media/thumbnails/gqjEkNNrgRbaFR7xJLZWJA_size_1920x1080.jpeg'
  'btr-mlbb-team-back-to-back-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_my7opkJ.jpeg'
  'btr-mlbb-shogun-fmvp-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_83PSUNR.jpeg'
  'btr-ffws-champions-article.jpg|https://bigetron.gg/media/django_ckeditor_5/Champions.jpg'
  'btr-ffws-grand-final-surabaya-article.jpg|https://bigetron.gg/media/django_ckeditor_5/Slide%204%20%281%29.jpg'
  'btr-ffws-koja-fmvp-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/WhatsApp%20Image%202026-09-21%20at%2015.59.54_sxaJaTb.jpeg'
  'bigetron-word.svg|https://bigetron.gg/static/images/bigetron-word.svg'
  'bigetron-header-logo.png|https://bigetron.gg/static/images/bigetron_header_logo.png'
  'bigetron-footer-logo.png|https://bigetron.gg/static/images/bigetron_footer_logo.png'
  'btr-mobile-legends-division-banner.png|https://bigetron.gg/media/thumbnails/PbAHMHNEcDe2jiZSyXxMoy_size_720.png'
  'btr-mlbb-team-logo.png|https://bigetron.gg/media/thumbnails/5FRj7MS8qhAraD7mfNKpAN_size_400.png'
  'btr-mlbb-academy-team-logo.png|https://bigetron.gg/media/thumbnails/cf3tckr5rngR9U3spDhhFo_size_400.png'
  'btr-mlbb-women-team-logo.png|https://bigetron.gg/media/thumbnails/mcB2hDLKzGwhwTyHKJfYFt_size_400.png'
  'btr-my-team-logo.png|https://bigetron.gg/media/thumbnails/eJuAG6CFYW5kRADjCqW7BD_size_400.png'
)

Add-Type -AssemblyName System.Drawing
$results = @()
foreach ($item in $items) {
  $name, $url = $item -split '\|', 2
  $out = Join-Path $dest $name
  try {
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $out -TimeoutSec 60 -ErrorAction Stop
    $f = Get-Item $out
    $dims = ''
    try { $im = [System.Drawing.Image]::FromFile($f.FullName); $dims = "$($im.Width)x$($im.Height)"; $im.Dispose() } catch { $dims = 'n/a' }
    $hash = (Get-FileHash -Algorithm MD5 $f.FullName).Hash
    $results += "OK|$name|$($f.Length)|$dims|$hash"
  } catch {
    Remove-Item $out -ErrorAction SilentlyContinue
    $results += "FAIL|$name|$($_.Exception.Message)"
  }
}
$results | ForEach-Object { Write-Output $_ }
