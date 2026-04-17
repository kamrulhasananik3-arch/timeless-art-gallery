const CATEGORY_DATA = {
  'abstract-expressionism': { name: 'Abstract Expressionism', era: '1940s-1960s', region: 'United States', highlight: 'Gesture, large canvases, emotional intensity.', search: ['abstract expressionism painting', 'jackson pollock painting', 'mark rothko painting'] },
  'contemporary-art': { name: 'Contemporary Art', era: '1970s-Present', region: 'Global', highlight: 'Diverse mediums and social commentary.', search: ['contemporary art painting', 'contemporary installation art', 'modern gallery artwork'] },
  'renaissance-art': { name: 'Renaissance Art', era: '14th-17th century', region: 'Europe', highlight: 'Perspective, anatomy, and humanist ideals.', search: ['renaissance painting', 'italian renaissance art', 'high renaissance artwork'] },
  'impressionism': { name: 'Impressionism', era: '19th century', region: 'France', highlight: 'Light effects and visible brushwork.', search: ['impressionism painting', 'monet painting', 'impressionist artwork'] },
  'realism': { name: 'Realism', era: '19th century', region: 'Europe', highlight: 'Everyday life painted without idealization.', search: ['realism painting art', 'gustave courbet painting', 'realist artwork'] },
  'surrealism': { name: 'Surrealism', era: '1920s-1950s', region: 'Europe', highlight: 'Dream logic and subconscious imagery.', search: ['surrealism painting', 'salvador dali painting', 'surrealist artwork'] },
  'cubism': { name: 'Cubism', era: '1907-1920s', region: 'France/Spain', highlight: 'Multiple viewpoints in fractured planes.', search: ['cubism painting', 'picasso cubist artwork', 'georges braque painting'] },
  'baroque': { name: 'Baroque', era: '17th century', region: 'Europe', highlight: 'Drama, contrast, and dynamic motion.', search: ['baroque painting', 'caravaggio painting', 'baroque art'] },
  'romanticism': { name: 'Romanticism', era: 'late 18th-19th century', region: 'Europe', highlight: 'Emotion, nature, and the sublime.', search: ['romanticism painting', 'caspar david friedrich painting', 'romantic art'] },
  'neoclassicism': { name: 'Neoclassicism', era: '18th-19th century', region: 'Europe', highlight: 'Order and classical discipline.', search: ['neoclassicism painting', 'jacques louis david painting', 'neoclassical art'] },
  'pop-art': { name: 'Pop Art', era: '1950s-1970s', region: 'US/UK', highlight: 'Mass culture and graphic repetition.', search: ['pop art painting', 'andy warhol art', 'roy lichtenstein painting'] },
  'minimalism': { name: 'Minimalism', era: '1960s-1970s', region: 'United States', highlight: 'Reduction to essential forms.', search: ['minimalist art', 'minimalism painting', 'agnes martin painting'] },
  'symbolism': { name: 'Symbolism', era: 'late 19th century', region: 'Europe', highlight: 'Myth, dream, and hidden meaning.', search: ['symbolist painting', 'gustave moreau painting', 'symbolism art'] },
  'fauvism': { name: 'Fauvism', era: '1905-1910', region: 'France', highlight: 'Wild color and expressive freedom.', search: ['fauvism painting', 'henri matisse painting', 'fauvist artwork'] },
  'dada': { name: 'Dada', era: '1916-1920s', region: 'Europe', highlight: 'Anti-art and conceptual provocation.', search: ['dada art', 'hannah hoch collage', 'marcel duchamp art'] },
  'art-nouveau': { name: 'Art Nouveau', era: '1890-1910', region: 'Europe', highlight: 'Curving lines and decorative elegance.', search: ['art nouveau poster', 'alfons mucha art', 'art nouveau design'] },
  'art-deco': { name: 'Art Deco', era: '1920s-1940s', region: 'Global', highlight: 'Geometry, luxury, and modern style.', search: ['art deco poster', 'art deco painting', 'art deco design'] },
  'ukiyo-e': { name: 'Ukiyo-e', era: '17th-19th century', region: 'Japan', highlight: 'Woodblock prints of city life and landscapes.', search: ['ukiyo-e print', 'hokusai woodblock print', 'japanese woodblock art'] },
  'byzantine-art': { name: 'Byzantine Art', era: '4th-15th century', region: 'Byzantine Empire', highlight: 'Icons, mosaics, and sacred symbolism.', search: ['byzantine mosaic', 'byzantine icon painting', 'byzantine art'] },
  'islamic-art': { name: 'Islamic Art', era: '7th century-Present', region: 'Middle East and beyond', highlight: 'Calligraphy, geometry, and ornament.', search: ['islamic calligraphy art', 'islamic geometric pattern', 'persian miniature painting'] },
  'bengal-art-heritage': { name: 'Bengal Art & Heritage', era: 'Ancient-Present', region: 'Bengal region', highlight: 'Patachitra, terracotta temples, and folk visual traditions.', search: ['bengal patachitra art', 'kalighat painting', 'bengal folk art'], museumQueries: ['india bengal painting', 'south asia india', 'india manuscript painting', 'india folk art', 'india sculpture', 'india textile', 'india miniature painting', 'india bronze sculpture'] },
  'mughal-empire-art': { name: 'Mughal Empire Art', era: '16th-19th century', region: 'South Asia', highlight: 'Miniature painting, manuscript art, and imperial aesthetics.', search: ['mughal miniature painting', 'mughal manuscript art', 'mughal empire art'] },
  'african-art': { name: 'African Art', era: 'Ancient-Present', region: 'Africa', highlight: 'Powerful forms, ritual, and identity.', search: ['african art mask', 'african sculpture art', 'traditional african art'] },
  'street-art': { name: 'Street Art', era: 'late 20th century-Present', region: 'Global cities', highlight: 'Public murals and urban expression.', search: ['street art mural', 'graffiti artwork', 'urban wall art'] },
  'digital-art': { name: 'Digital Art', era: 'late 20th century-Present', region: 'Global', highlight: 'Software-driven creativity and mixed media.', search: ['digital painting artwork', 'concept art digital', 'digital illustration art'] },
  'photography': { name: 'Photography', era: '19th century-Present', region: 'Global', highlight: 'Light, timing, and visual storytelling.', search: ['fine art photography', 'portrait photography art', 'landscape photography'] },
  'sculpture': { name: 'Sculpture', era: 'Ancient-Present', region: 'Global', highlight: 'Three-dimensional form and material craft.', search: ['marble sculpture art', 'bronze sculpture', 'classical sculpture'] },
  'landscape-painting': { name: 'Landscape Painting', era: 'Classical-Present', region: 'Global', highlight: 'Place, weather, and atmosphere.', search: ['landscape painting art', 'mountain landscape painting', 'seascape painting'] },
  'portraiture': { name: 'Portraiture', era: 'Ancient-Present', region: 'Global', highlight: 'Identity, status, and personality.', search: ['portrait painting art', 'classical portrait painting', 'oil portrait'] },
  'still-life': { name: 'Still Life', era: 'Ancient-Present', region: 'Global', highlight: 'Objects, symbolism, and composition.', search: ['still life painting', 'fruit still life art', 'flower still life painting'] },
  'conceptual-art': { name: 'Conceptual Art', era: '1960s-Present', region: 'Global', highlight: 'Idea-led practice over object-based work.', search: ['conceptual art installation', 'concept art gallery', 'conceptual artwork'] },
  'modern-abstract': { name: 'Modern Abstract', era: '20th century-Present', region: 'Global', highlight: 'Non-representational color and form.', search: ['modern abstract painting', 'contemporary abstract art', 'abstract color composition'] }
};

const body = document.body;
const slug = body.dataset.category;
const meta = CATEGORY_DATA[slug] || {
  name: 'Art Category',
  era: 'Various',
  region: 'Global',
  highlight: 'Curated art collection.',
  search: ['painting art', 'museum artwork', 'fine art']
};

const header = document.querySelector('header');
if (header && !header.querySelector('.brand-logo')) {
  const logo = document.createElement('img');
  logo.src = 'https://www.shutterstock.com/image-vector/easel-one-line-drawing-minimalist-600nw-2165618019.jpg';
  logo.alt = 'Timeless Art Gallery Logo';
  logo.className = 'brand-logo';
  header.insertBefore(logo, header.firstChild);
}

document.title = `${meta.name} Album - Timeless Art Gallery`;
document.getElementById('pageTitle').textContent = meta.name;
document.getElementById('pageSubtitle').textContent = `Explore the ${meta.name} album with curated works and visual studies.`;
document.getElementById('albumTitle').textContent = `${meta.name} Album`;
document.getElementById('albumMeta').textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight}`;

const grid = document.getElementById('albumGrid');

const stripHtml = (text) => {
  const div = document.createElement('div');
  div.innerHTML = text || '';
  return div.textContent || div.innerText || '';
};

// Build an Unsplash Source URL (no API key) for images matching a query
const buildUnsplashUrl = (query, width = 480, height = 320, seed = 0) => {
  const q = (query || 'art').split(/\s+/).slice(0,3).join(' ');
  return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(q)}&sig=${seed}`;
};

// Generate placeholder image items using Unsplash Source (fast, no API) and Picsum fallback
const fetchAtLeastImages = async (metaConfig, target = 100, initialCollected = []) => {
  const collected = [...initialCollected];
  const seen = new Set(collected.map(i => i.title));
  const queries = Array.isArray(metaConfig.search) && metaConfig.search.length ? metaConfig.search : ['art'];

  let i = 0;
  while (collected.length < target) {
    const q = queries[i % queries.length] || 'art';
    const title = `${metaConfig.name} - ${q} ${collected.length + 1}`;
    if (seen.has(title)) { i += 1; continue; }
    seen.add(title);
    const img = buildUnsplashUrl(q, 480, 320, Math.floor(Math.random() * 1000000));
    collected.push({ title, img, description: `${metaConfig.name} artwork` });
    i += 1;
  }

  return collected.slice(0, target);
};

// Art Institute of Chicago — free, no API key, CORS-friendly, real museum images
const fetchAICImages = async (queries, categoryName, target = 100) => {
  const collected = [];
  const seen = new Set();
  for (const q of queries) {
    if (collected.length >= target) break;
    try {
      const url = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(q)}&fields=id,title,artist_display,date_display,image_id&limit=50`;
      const resp = await fetch(url);
      if (!resp.ok) continue;
      const data = await resp.json();
      for (const art of (data.data || [])) {
        if (collected.length >= target) break;
        if (!art.image_id || seen.has(art.id)) continue;
        seen.add(art.id);
        const imgUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/480,/0/default.jpg`;
        const desc = [art.artist_display, art.date_display].filter(Boolean).join(' · ');
        collected.push({
          title: art.title || `${categoryName} artwork`,
          img: imgUrl,
          description: desc ? `${categoryName} — ${desc}` : `${categoryName} artwork`
        });
      }
    } catch (e) { /* continue */ }
  }
  return collected;
};

// Cleveland Museum of Art — free, no API key, CORS-friendly
const fetchClevelandImages = async (queries, categoryName, target = 100) => {
  const collected = [];
  const seen = new Set();
  for (const q of queries) {
    if (collected.length >= target) break;
    try {
      const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${encodeURIComponent(q)}&has_image=1&limit=100`;
      const resp = await fetch(url);
      if (!resp.ok) continue;
      const data = await resp.json();
      for (const art of (data.data || [])) {
        if (collected.length >= target) break;
        if (!art.images?.web?.url || seen.has(art.id)) continue;
        seen.add(art.id);
        const desc = [art.creators?.[0]?.description, art.creation_date].filter(Boolean).join(' · ');
        collected.push({
          title: art.title || `${categoryName} artwork`,
          img: art.images.web.url,
          description: desc ? `${categoryName} — ${desc}` : `${categoryName} artwork`
        });
      }
    } catch (e) { /* continue */ }
  }
  return collected;
};

// Fetch museum images using AIC first, then Cleveland to supplement
const fetchMuseumImages = async (queries, categoryName, target = 100) => {
  const aicItems = await fetchAICImages(queries, categoryName, target);
  if (aicItems.length >= target) return aicItems;
  const remaining = target - aicItems.length;
  const clevelandItems = await fetchClevelandImages(queries, categoryName, remaining);
  const seenTitles = new Set(aicItems.map(i => i.title));
  const combined = [...aicItems, ...clevelandItems.filter(i => !seenTitles.has(i.title))];
  return combined.slice(0, target);
};

// Simple localStorage cache with TTL (ms)
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours
const CACHE_VERSION = 'v4';
const cacheKey = (slug) => `cat_cache_${CACHE_VERSION}_${slug}`;
const getCachedItems = (slug) => {
  try {
    const raw = localStorage.getItem(cacheKey(slug));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - (parsed.t || 0) > CACHE_TTL) {
      localStorage.removeItem(cacheKey(slug));
      return null;
    }
    return parsed.items || null;
  } catch (_) { return null; }
};
const setCachedItems = (slug, items) => {
  try {
    localStorage.setItem(cacheKey(slug), JSON.stringify({ t: Date.now(), items }));
  } catch (_) { /* ignore storage errors */ }
};

const renderAlbumItems = (items, categoryName) => {
  items.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'album-item';
    const label = item.title || `${categoryName} artwork ${i + 1}`;
    const desc = item.description.length > 110 ? `${item.description.slice(0, 107)}...` : item.description;

    card.innerHTML = `
      <img src="${item.img}" alt="${label}" loading="lazy" referrerpolicy="no-referrer">
      <div class="album-info">
        <h3>${label}</h3>
        <p>${desc}</p>
      </div>
    `;

    grid.appendChild(card);

    const img = card.querySelector('img');
    // set crossOrigin to improve CORS behavior for some hosts
    try { img.crossOrigin = 'anonymous'; } catch (e) { /* ignore */ }
    try { img.referrerPolicy = 'no-referrer'; } catch (e) { /* ignore */ }

    // robust fallback: try Picsum as last resort if Unsplash fails
    img.addEventListener('error', () => {
      if (!img.dataset.triedPicsum) {
        img.dataset.triedPicsum = '1';
        img.src = `https://picsum.photos/480/320?random=${Math.floor(Math.random() * 100000)}`;
        return;
      }
    });
  });
};

const init = async () => {
  const albumMetaEl = document.getElementById('albumMeta');
  albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loading artworks...`;

  // Try cache first
  const cached = getCachedItems(slug);
  if (cached && Array.isArray(cached) && cached.length) {
    renderAlbumItems(cached, meta.name);
    albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loaded: ${cached.length} artworks (cached)`;
    (async () => {
      if (meta.museumQueries) {
        const full = await fetchMuseumImages(meta.museumQueries, meta.name, 100);
        if (full.length > 0) {
          grid.innerHTML = '';
          renderAlbumItems(full, meta.name);
          setCachedItems(slug, full);
          albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loaded: ${full.length} artworks`;
        }
      } else {
        const full = await fetchAtLeastImages(meta, 100, cached);
        if (full.length > cached.length) {
          renderAlbumItems(full.slice(cached.length), meta.name);
          setCachedItems(slug, full);
          albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loaded: ${full.length} artworks`;
        }
      }
    })();
    return;
  }

  // Use museum APIs for categories that define museumQueries
  if (meta.museumQueries) {
    const museumItems = await fetchMuseumImages(meta.museumQueries, meta.name, 100);
    if (museumItems.length > 0) {
      renderAlbumItems(museumItems, meta.name);
      setCachedItems(slug, museumItems);
      albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loaded: ${museumItems.length} artworks`;
      return;
    }
  }

  // Fetch an initial small batch to show quickly
  const initial = await fetchAtLeastImages(meta, 24, []);
  renderAlbumItems(initial, meta.name);
  setCachedItems(slug, initial);
  albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loaded: ${initial.length} artworks`;

  // Fetch remaining in background and append
  (async () => {
    const full = await fetchAtLeastImages(meta, 100, initial);
    if (full.length > initial.length) {
      renderAlbumItems(full.slice(initial.length), meta.name);
      setCachedItems(slug, full);
      albumMetaEl.textContent = `Era: ${meta.era} | Region: ${meta.region} | Highlight: ${meta.highlight} | Loaded: ${full.length} artworks`;
    }
  })();
};

init();
