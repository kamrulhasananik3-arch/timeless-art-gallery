const CATEGORY_DATA = {
  'abstract-expressionism': { name: 'Abstract Expressionism', era: '1940s-1960s', region: 'United States', highlight: 'Gesture, large canvases, emotional intensity.', search: ['abstract expressionism painting', 'abstract painting oil canvas', 'action painting gestural'] },
  'contemporary-art': { name: 'Contemporary Art', era: '1970s-Present', region: 'Global', highlight: 'Diverse mediums and social commentary.', search: ['contemporary art painting', 'modern art gallery', 'figurative painting contemporary'] },
  'renaissance-art': { name: 'Renaissance Art', era: '14th-17th century', region: 'Europe', highlight: 'Perspective, anatomy, and humanist ideals.', search: ['renaissance painting', 'italian renaissance art', 'high renaissance artwork'] },
  'impressionism': { name: 'Impressionism', era: '19th century', region: 'France', highlight: 'Light effects and visible brushwork.', search: ['impressionism painting', 'monet impressionist painting', 'impressionist landscape art'] },
  'realism': { name: 'Realism', era: '19th century', region: 'Europe', highlight: 'Everyday life painted without idealization.', search: ['realism painting art', 'realist figurative painting', 'courbet realism artwork'] },
  'surrealism': { name: 'Surrealism', era: '1920s-1950s', region: 'Europe', highlight: 'Dream logic and subconscious imagery.', search: ['surrealism painting', 'surrealist dream painting', 'dali surrealist artwork'] },
  'cubism': { name: 'Cubism', era: '1907-1920s', region: 'France/Spain', highlight: 'Multiple viewpoints in fractured planes.', search: ['cubism painting', 'cubist geometric artwork', 'braque cubist painting'] },
  'baroque': { name: 'Baroque', era: '17th century', region: 'Europe', highlight: 'Drama, contrast, and dynamic motion.', search: ['baroque painting', 'caravaggio baroque art', 'baroque dramatic painting'] },
  'romanticism': { name: 'Romanticism', era: 'late 18th-19th century', region: 'Europe', highlight: 'Emotion, nature, and the sublime.', search: ['romanticism painting', 'romantic landscape painting', 'caspar david friedrich painting'] },
  'neoclassicism': { name: 'Neoclassicism', era: '18th-19th century', region: 'Europe', highlight: 'Order and classical discipline.', search: ['neoclassicism painting', 'neoclassical artwork', 'david neoclassical painting'] },
  'pop-art': { name: 'Pop Art', era: '1950s-1970s', region: 'US/UK', highlight: 'Mass culture and graphic repetition.', search: ['pop art painting', 'pop art colorful graphic', 'andy warhol pop art'] },
  'minimalism': { name: 'Minimalism', era: '1960s-1970s', region: 'United States', highlight: 'Reduction to essential forms.', search: ['minimalist art painting', 'geometric minimalist artwork', 'abstract minimalism art'] },
  'symbolism': { name: 'Symbolism', era: 'late 19th century', region: 'Europe', highlight: 'Myth, dream, and hidden meaning.', search: ['symbolist painting', 'gustave moreau symbolism', 'symbolism art painting'] },
  'fauvism': { name: 'Fauvism', era: '1905-1910', region: 'France', highlight: 'Wild color and expressive freedom.', search: ['fauvism painting', 'matisse fauvist painting', 'vibrant color expressionist art'] },
  'dada': { name: 'Dada', era: '1916-1920s', region: 'Europe', highlight: 'Anti-art and conceptual provocation.', search: ['dada art collage', 'dada avant garde artwork', 'dada movement art'] },
  'art-nouveau': { name: 'Art Nouveau', era: '1890-1910', region: 'Europe', highlight: 'Curving lines and decorative elegance.', search: ['art nouveau poster', 'mucha art nouveau painting', 'art nouveau decorative design'] },
  'art-deco': { name: 'Art Deco', era: '1920s-1940s', region: 'Global', highlight: 'Geometry, luxury, and modern style.', search: ['art deco poster', 'art deco painting', 'art deco geometric design'] },
  'ukiyo-e': { name: 'Ukiyo-e', era: '17th-19th century', region: 'Japan', highlight: 'Woodblock prints of city life and landscapes.', search: ['ukiyo-e woodblock print', 'hokusai japanese print', 'japanese ukiyo-e art'] },
  'byzantine-art': { name: 'Byzantine Art', era: '4th-15th century', region: 'Byzantine Empire', highlight: 'Icons, mosaics, and sacred symbolism.', search: ['byzantine icon painting', 'byzantine mosaic art', 'byzantine religious artwork'] },
  'islamic-art': { name: 'Islamic Art', era: '7th century-Present', region: 'Middle East and beyond', highlight: 'Calligraphy, geometry, and ornament.', search: ['islamic calligraphy art', 'persian miniature painting', 'islamic geometric art'] },
  'bengal-art-heritage': { name: 'Bengal Art & Heritage', era: 'Ancient-Present', region: 'Bengal region', highlight: 'Patachitra, terracotta temples, and folk visual traditions.', search: ['bengal painting art', 'india folk art painting', 'india manuscript miniature painting'] },
  'mughal-empire-art': { name: 'Mughal Empire Art', era: '16th-19th century', region: 'South Asia', highlight: 'Miniature painting, manuscript art, and imperial aesthetics.', search: ['mughal miniature painting', 'mughal manuscript art painting', 'india islamic miniature art'] },
  'african-art': { name: 'African Art', era: 'Ancient-Present', region: 'Africa', highlight: 'Powerful forms, ritual, and identity.', search: ['african art painting', 'african tribal sculpture art', 'african traditional artwork'] },
  'street-art': { name: 'Street Art', era: 'late 20th century-Present', region: 'Global cities', highlight: 'Public murals and urban expression.', search: ['street art mural painting', 'graffiti wall art', 'urban mural artwork'] },
  'digital-art': { name: 'Digital Art', era: 'late 20th century-Present', region: 'Global', highlight: 'Software-driven creativity and mixed media.', search: ['digital art illustration', 'digital painting concept art', 'neon digital artwork'] },
  'photography': { name: 'Photography', era: '19th century-Present', region: 'Global', highlight: 'Light, timing, and visual storytelling.', search: ['fine art photography', 'portrait photography art', 'landscape photography art'] },
  'sculpture': { name: 'Sculpture', era: 'Ancient-Present', region: 'Global', highlight: 'Three-dimensional form and material craft.', search: ['marble sculpture art', 'bronze sculpture artwork', 'classical sculpture museum'] },
  'landscape-painting': { name: 'Landscape Painting', era: 'Classical-Present', region: 'Global', highlight: 'Place, weather, and atmosphere.', search: ['landscape painting art', 'mountain landscape painting', 'seascape oil painting'] },
  'portraiture': { name: 'Portraiture', era: 'Ancient-Present', region: 'Global', highlight: 'Identity, status, and personality.', search: ['portrait painting art', 'classical oil portrait', 'face portrait painting'] },
  'still-life': { name: 'Still Life', era: 'Ancient-Present', region: 'Global', highlight: 'Objects, symbolism, and composition.', search: ['still life painting', 'flower still life art', 'fruit still life painting'] },
  'conceptual-art': { name: 'Conceptual Art', era: '1960s-Present', region: 'Global', highlight: 'Idea-led practice over object-based work.', search: ['conceptual art installation', 'mixed media conceptual artwork', 'avant-garde art painting'] },
  'modern-abstract': { name: 'Modern Abstract', era: '20th century-Present', region: 'Global', highlight: 'Non-representational color and form.', search: ['modern abstract painting', 'abstract color composition art', 'abstract expressionist painting'] }
};

const WIKI_API = 'https://commons.wikimedia.org/w/api.php';

const body = document.body;
const slug = body.dataset.category;
const meta = CATEGORY_DATA[slug] || {
  name: 'Art Category',
  era: 'Various',
  region: 'Global',
  highlight: 'Curated art collection.',
  search: ['painting art', 'fine art museum', 'classical artwork']
};

const header = document.querySelector('header');
if (header && !header.querySelector('.brand-logo')) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'brand-logo');
  svg.setAttribute('viewBox', '0 0 100 90');
  svg.setAttribute('width', '80');
  svg.setAttribute('height', '80');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '3.5');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Timeless Art Gallery');
  svg.innerHTML = '<rect x="15" y="4" width="70" height="56" rx="4"/><line x1="10" y1="52" x2="90" y2="52"/><line x1="50" y1="60" x2="15" y2="88"/><line x1="50" y1="60" x2="85" y2="88"/><line x1="50" y1="60" x2="50" y2="88"/><line x1="28" y1="76" x2="72" y2="76"/>';
  header.insertBefore(svg, header.firstChild);
}

document.title = meta.name + ' Album - Timeless Art Gallery';
document.getElementById('pageTitle').textContent = meta.name;
document.getElementById('pageSubtitle').textContent = 'Explore the ' + meta.name + ' album with curated works and visual studies.';
document.getElementById('albumTitle').textContent = meta.name + ' Album';
document.getElementById('albumMeta').textContent = 'Era: ' + meta.era + ' | Region: ' + meta.region + ' | Highlight: ' + meta.highlight;

const grid = document.getElementById('albumGrid');

// ── Wikimedia Commons API ─────────────────────────────────────────────────────
// Step 1: list=search → get file titles (namespace 6 = File:)
// Step 2: prop=imageinfo on those titles → get direct image URLs
// origin=* ensures CORS works from localhost AND Azure with no errors
const fetchWikimediaImages = async function(queries, categoryName, target) {
  var collected = [];
  var seenTitles = new Set();

  for (var qi = 0; qi < queries.length; qi++) {
    if (collected.length >= target) break;
    var q = queries[qi];

    try {
      // Step 1: search for image file titles
      var searchParams = new URLSearchParams({
        action:      'query',
        list:        'search',
        srsearch:    q + ' painting',
        srnamespace: '6',
        srlimit:     '50',
        format:      'json',
        origin:      '*'
      });
      console.log('[WikiAPI] search: "' + q + '"');
      var searchRes = await fetch(WIKI_API + '?' + searchParams.toString());
      if (!searchRes.ok) { console.warn('[WikiAPI] search HTTP ' + searchRes.status + ' for "' + q + '"'); continue; }
      var searchData = await searchRes.json();
      var hits = (searchData.query && searchData.query.search) || [];

      var newTitles = hits
        .map(function(h) { return h.title; })
        .filter(function(t) { return t && !seenTitles.has(t); });

      console.log('[WikiAPI] "' + q + '" → ' + hits.length + ' hits, ' + newTitles.length + ' new titles');
      if (!newTitles.length) continue;
      newTitles.forEach(function(t) { seenTitles.add(t); });

      // Step 2: batch imageinfo for all titles at once
      var infoParams = new URLSearchParams({
        action:   'query',
        titles:   newTitles.join('|'),
        prop:     'imageinfo',
        iiprop:   'url',
        iiurlwidth: '480',
        format:   'json',
        origin:   '*'
      });
      var infoRes = await fetch(WIKI_API + '?' + infoParams.toString());
      if (!infoRes.ok) { console.warn('[WikiAPI] imageinfo HTTP ' + infoRes.status); continue; }
      var infoData = await infoRes.json();
      var pages = Object.values((infoData.query && infoData.query.pages) || {});

      for (var pi = 0; pi < pages.length && collected.length < target; pi++) {
        var page = pages[pi];
        if (!page.imageinfo || !page.imageinfo[0]) continue;
        var info = page.imageinfo[0];
        var imgUrl = info.thumburl || info.url;
        if (!imgUrl) continue;
        if (!/\.(jpe?g|png|gif|webp)/i.test(imgUrl)) continue;
        var title = (page.title || '')
          .replace(/^File:/i, '')
          .replace(/\.\w{2,5}$/, '')
          .replace(/_/g, ' ');
        collected.push({
          title: title || categoryName,
          img: imgUrl,
          artist: '',
          date: '',
          department: 'Wikimedia Commons'
        });
      }
      console.log('[WikiAPI] collected ' + collected.length + '/' + target + ' after "' + q + '"');
    } catch (e) {
      console.error('[WikiAPI] error for "' + q + '":', e.message || e);
    }
  }

  return collected;
};

// ── Cache helpers ─────────────────────────────────────────────────────────────
const CACHE_TTL     = 1000 * 60 * 60 * 24;
const CACHE_VERSION = 'v9';
const cacheKey      = function(s) { return 'cat_cache_' + CACHE_VERSION + '_' + s; };

const getCachedItems = function(s) {
  try {
    var raw = localStorage.getItem(cacheKey(s));
    if (!raw) return null;
    var parsed = JSON.parse(raw);
    if (Date.now() - (parsed.t || 0) > CACHE_TTL) { localStorage.removeItem(cacheKey(s)); return null; }
    return parsed.items || null;
  } catch (_) { return null; }
};

const setCachedItems = function(s, items) {
  try { localStorage.setItem(cacheKey(s), JSON.stringify({ t: Date.now(), items: items })); } catch (_) {}
};

// ── Render cards ──────────────────────────────────────────────────────────────
const renderAlbumItems = function(items, categoryName) {
  items.forEach(function(item, i) {
    var card = document.createElement('article');
    card.className = 'album-item';
    var label = item.title || (categoryName + ' artwork ' + (i + 1));
    var parts = [item.artist, item.date, item.department].filter(Boolean);
    var desc = parts.join(' · ');
    var descTrunc = desc.length > 110 ? desc.slice(0, 107) + '...' : desc;

    card.innerHTML =
      '<img src="' + item.img + '" alt="' + label.replace(/"/g, '&quot;') + '" loading="lazy">' +
      '<div class="album-info"><h3>' + label + '</h3><p>' + (descTrunc || '') + '</p></div>';

    grid.appendChild(card);

    var img = card.querySelector('img');
    function onImgError() {
      img.removeEventListener('error', onImgError);
      img.src = 'https://picsum.photos/480/320?random=' + Math.floor(Math.random() * 100000);
    }
    img.addEventListener('error', onImgError);
  });
};

// ── Init ──────────────────────────────────────────────────────────────────────
const init = async function() {
  var albumMetaEl = document.getElementById('albumMeta');
  albumMetaEl.textContent = 'Era: ' + meta.era + ' | Region: ' + meta.region + ' | Highlight: ' + meta.highlight + ' | Loading artworks...';

  var cached = getCachedItems(slug);
  if (cached && Array.isArray(cached) && cached.length) {
    renderAlbumItems(cached, meta.name);
    albumMetaEl.textContent = 'Era: ' + meta.era + ' | Region: ' + meta.region + ' | Highlight: ' + meta.highlight + ' | Loaded: ' + cached.length + ' artworks (cached)';
    return;
  }

  var queries = meta.search || ['painting art'];
  var items = await fetchWikimediaImages(queries, meta.name, 20);
  console.log('[Init] Wikimedia returned', items.length, 'items');

  if (items.length > 0) {
    renderAlbumItems(items, meta.name);
    setCachedItems(slug, items);
    albumMetaEl.textContent = 'Era: ' + meta.era + ' | Region: ' + meta.region + ' | Highlight: ' + meta.highlight + ' | Loaded: ' + items.length + ' artworks';
  } else {
    albumMetaEl.textContent = 'Era: ' + meta.era + ' | Region: ' + meta.region + ' | Highlight: ' + meta.highlight + ' | No artworks found';
    console.error('[Init] Wikimedia Commons returned 0 results for category:', slug);
  }
};

init();
