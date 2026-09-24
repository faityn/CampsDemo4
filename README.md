# Алтай Retreat — Scroll-driven website

Монгол хэлтэй, full-screen sticky scroll storytelling загвар.

## Ашигласан технологи
- Next.js + App Router
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide React

## Ажиллуулах
```bash
npm install
npm run dev
```
Дараа нь `http://localhost:3000` нээнэ.

## Гол animation
Experience хэсэгт дэлгэц бүр `pin: true` + `scrub` ашиглан тогтож, зураг zoom/fade, текст гарч ирээд дараагийн scene рүү шилжинэ.

Зургууд demo зориулалттай Unsplash URL ашиглаж байгаа. Production дээр өөрийн `/public` зурагнуудаар солиход бэлэн.
