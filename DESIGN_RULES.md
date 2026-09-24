# NANAS Design Rules

## 1. Princip
NANAS je minimalistický editorial/documentation publishing systém. Prioritou je obsah, typografie a konzistentní whitespace před dekorativními prvky.

## 2. Barevnost
Používej pouze Tailwind neutral utility a černou/bílou v interaktivních stavech. Nepřidávej barevné akcenty bez explicitní změny design systému.

## 3. Typography
- Primární sans: Google Sans / Inter fallback.
- Monospace: JetBrains Mono / Fira Code fallback.
- Nadpisy musí být škálovatelné vůči rodičovské velikosti písma.
- Metadata jsou malé, monospace a nízko-kontrastní.

## 4. Layout
- Obsah je řízen přes --reading-width.
- Výchozí šířka je 48rem.
- Horizontální padding musí zůstat čitelný na mobilu i desktopu.
- Nepřidávat dekorativní kontejnery pouze kvůli vizuálnímu oddělení.

## 5. View modes
Podporované režimy jsou list, grid, magazine a compact. Každý režim musí zachovat stejná data a měnit pouze prezentaci.

## 6. Theme
Light/dark režim je řízen třídou dark na document.documentElement. Stav se ukládá přes localStorage a před renderem probíhá FOUC prevence.

## 7. Persistence
Hodnoty z localStorage jsou validovány oproti povoleným hodnotám. Neznámá nebo poškozená hodnota se ignoruje a použije se fallback.

## 8. Accessibility
Interaktivní ovládací prvky musí mít vhodné aria-label, stavové prvky aria-pressed a expanzivní ovládání aria-expanded + aria-controls, kde je relevantní.

## 9. Modal
- Escape zavírá modal.
- Kliknutí na overlay modal zavírá.
- Kliknutí uvnitř modalu nepropaguje zavření.
- Při otevření je zamčený scroll body.
- Scrollbar kompenzace nesmí posouvat layout.
- Efekty musí respektovat prefers-reduced-motion.

## 10. Components
Stabilní helper komponenty musí být definovány mimo hlavní funkční komponentu, pokud není důvod k opačnému řešení.

## 11. Code quality
- Žádný produkční console.log.
- Žádný mrtvý importovaný kód.
- Konzistentní formátování.
- Stav UI je centralizovaný v BlogContext.

## 12. Content
Demo data jsou součástí prezentační vrstvy. Budoucí Markdown pipeline nemá duplikovat UI logiku.

## 13. Checklist
Před commitem ověř:
- všechny soubory projektu existují,
- verze je konzistentní,
- FOUC prevence je v head,
- localStorage je validované,
- aria stavy jsou přítomné,
- Esc a scroll lock mají cleanup,
- nadpisy používají em škálování,
- používají se pouze neutral barvy,
- není přítomen console.log ani nepoužitý import,
- prefers-reduced-motion je respektováno.
