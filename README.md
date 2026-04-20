# FHU AUTO-MAX Landing Page

Nowoczesny landing page dla serwisu klimatyzacji samochodowej FHU AUTO-MAX, zbudowany w:
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona bedzie dostepna pod adresem [http://localhost:3000](http://localhost:3000).

## Komendy produkcyjne

```bash
npm run lint
npm run build
npm run start
```

## Gdzie edytowac tresc i dane

- Glowny uklad strony: `src/app/page.tsx`
- Nawigacja: `src/components/Navbar.tsx`
- Sekcje strony: `src/components/sections/*`
- Zdjecia galerii (hardcoded): `src/lib/galleryImages.ts`
- Globalne style i smooth scrolling: `src/app/globals.css`
- Konfiguracja obrazow Unsplash: `next.config.ts`

## Placeholdery do podmiany

W sekcji kontaktu (`src/components/sections/ContactSection.tsx`) podmien:
- adres firmy,
- numer telefonu,
- tresc formularza (jesli chcesz podpiac backend/API).
