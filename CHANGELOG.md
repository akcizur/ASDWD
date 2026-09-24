# Changelog

Všechny významné změny v projektu jsou dokumentovány v tomto souboru.
Formát vychází z Keep a Changelog a projekt dodržuje Semantic Versioning.

## [2.1.0] - 2026-09-24

### Added
- Esc handler pro zavření SettingsModal
- Scroll lock na body při otevřeném modalu s kompenzací scrollbaru
- aria-expanded, aria-controls, aria-pressed a aria-label
- Validace hodnot z localStorage
- safeGet / safeSet helper pro localStorage
- prefers-reduced-motion respektování
- DESIGN_RULES.md

### Fixed
- Nadpisy příspěvků používají em škálování místo pevných textových velikostí
- ButtonGroup je mimo SettingsModal
- Compact view používá gap-3 pro meta
- Nepoužitý stav readingWidth není duplikován v layoutu

### Changed
- Verze zvýšena z 2.0.0 na 2.1.0

## [2.0.0] - 2026-09-24

### Added
- React rewrite
- BlogContext pro globální stav
- 4 view modes
- Nastavení šířky, písma a hustoty
- Dark mode s FOUC prevencí
