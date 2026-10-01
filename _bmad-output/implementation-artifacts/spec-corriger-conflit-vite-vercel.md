---
title: 'Corriger le conflit Vite/plugin React du déploiement Vercel'
type: 'bugfix'
created: '2026-10-01'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le déploiement Vercel échoue pendant `npm install` car Vite 8.3.1 est résolu avec `@vitejs/plugin-react` 4.7.0, dont la contrainte de peer dependency ne couvre pas cette version de Vite.

**Approach:** Aligner les versions de Vite et du plugin React selon une combinaison compatible, régénérer le lockfile, puis vérifier l’installation et le build de production avant publication.

</frozen-after-approval>

## Implementation Notes

- `package.json` utilise Vite `^7.3.6`, compatible avec `@vitejs/plugin-react@4.7.0`.
- `package-lock.json` a été régénéré avec `npm install`.
- Vérifications réussies : `npm install`, `npm run build`, `npm ls vite @vitejs/plugin-react @tailwindcss/vite --depth=0` et `git diff --check`.

