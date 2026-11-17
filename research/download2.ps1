$ErrorActionPreference = 'Continue'
$dest = 'research/assets/photography'
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$items = @(
  'btr-mpl-id-s17-champions-dsc05795.JPG|https://bigetron.gg/media/django_ckeditor_5/DSC05795.JPG'
  'btr-mpl-id-s17-moreno-fmvp-dsc05863.JPG|https://bigetron.gg/media/django_ckeditor_5/DSC05863.JPG'
  'btr-mwi-ewc26-champions-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_zXdrWPk.jpeg'
  'btr-mwi-ewc26-vival-fmvp-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_LYZCYJW.jpeg'
  'btr-ewc-2026-hoc-all-divisions-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_zE4coBn.jpeg'
  'btr-ewc-2026-freefire-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_jicGVkm.jpeg'
  'btr-ewc-2026-mlbb-women-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_yerBYxB.jpeg'
  'btr-pmpl-id-2026-runner-up-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_rROj2ha.jpeg'
  'btr-pmpl-id-2026-team-article.jpeg|https://bigetron.gg/media/django_ckeditor_5/image_Jys7dwS.jpeg'
  'thumb-ffws-sea-2026-champions-1280x640.webp|https://bigetron.gg/media/thumbnails/2EZFofU4z26yBUc8yfEvvu_size_1280x640_webp.webp'
  'thumb-mwi-ewc26-1280x640.webp|https://bigetron.gg/media/thumbnails/WvEGzRskQ6npdSv7aBL7Ra_size_1280x640_webp.webp'
  'thumb-all-divisions-ewc-1280x640.webp|https://bigetron.gg/media/thumbnails/aybd4NwwxzbmutQMkjfvaX_size_1280x640_webp.webp'
  'thumb-pmpl-id-fall-2026-1280x640.webp|https://bigetron.gg/media/thumbnails/boLd8kPTCtYKmbkt9bv52s_size_1280x640_webp.webp'
  'thumb-mpl-id-s17-champions-1280x640.webp|https://bigetron.gg/media/thumbnails/8H45vhmdP5ttAYZ74mPB9x_size_1280x640_webp.webp'
  'thumb-academy-champions-1280x640.webp|https://bigetron.gg/media/thumbnails/gqjEkNNrgRbaFR7xJLZWJA_size_1280x640_webp.webp'
  'thumb-b2b-gamehers-800x400.jpeg|https://bigetron.gg/media/thumbnails/ezSrko9fnC8nv8yxkbCeoD_size_800x400.jpeg'
  'thumb-mdl-indonesia-s13-800x400.jpeg|https://bigetron.gg/media/thumbnails/fBhmLMXHvh8VNCvicYUw6y_size_800x400.jpeg'
  'thumb-ikl-spring-2026-800x400.jpeg|https://bigetron.gg/media/thumbnails/n2v2YEcp86JRfHqQs5zASm_size_800x400.jpeg'
)

Add-Type -AssemblyName System.Drawing
foreach ($item in $items) {
  $name, $url = $item -split '\|', 2
  $out = Join-Path $dest $name
  try {
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $out -TimeoutSec 60 -ErrorAction Stop
    $f = Get-Item $out
    $dims = ''
    try { $im = [System.Drawing.Image]::FromFile($f.FullName); $dims = "$($im.Width)x$($im.Height)"; $im.Dispose() } catch { $dims = 'n/a' }
    Write-Output "OK|$name|$($f.Length)|$dims|$((Get-FileHash -Algorithm MD5 $f.FullName).Hash)"
  } catch {
    Remove-Item $out -ErrorAction SilentlyContinue
    Write-Output "FAIL|$name|$($_.Exception.Message)"
  }
}
