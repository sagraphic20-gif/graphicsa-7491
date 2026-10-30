# IIGNA Capital — Site vitrine · Design

Site vitrine one-page institutionnel pour MAMELENZIA Sydney Christ (fondateur & PDG d'IIGNA Capital) et sa holding. Web uniquement, responsive mobile + ordinateur. Objectif : inspirer confiance, présenter le parcours, les 10 filiales, les engagements, et faciliter le contact.

## Direction visuelle
"Fonds d'investissement / leadership global" : épuré, sobre, institutionnel. Fonds sombres bleu nuit, surfaces anthracite, touches de blanc cassé et d'or bronze pour les accents.

## Couleurs (CSS variables dans les composants via Tailwind arbitrary values)
| Token | Hex | Usage |
|---|---|---|
| night | #0B1424 | Fond principal hero, footer |
| navy | #13233D | Sections sombres, cartes |
| anthracite | #1E2329 | Textes secondaires sur fond clair, bordures |
| ivory | #F7F5F0 | Fond sections claires |
| white | #FFFFFF | Cartes sur fond clair |
| gold | #B8925A | Accents, filets, boutons secondaires |
| gold-light | #D9B982 | Titres sur fond sombre, hover |

## Typographie
- Titres et texte : Inter (300/400/500/600) — une seule police moderne et épurée pour tout le site. Titres en graisse 500, casse normale.
- Hiérarchie par taille et graisse ; interligne 1.6 pour le corps.

## Composants
- Navigation fixe, fond translucide sombre, liens ancrés, bouton menu mobile.
- Hero plein écran : nom, titre, accroche, portrait, deux CTA.
- Cartes filiales : fond blanc, filet doré en haut, titre, slogan, description.
- Timeline parcours, grille expertise, cartes engagements.
- Formulaire de contact (ouvre un mailto, pas de backend).

## Mise en page
Sections pleines largeur alternant sombre / ivoire. Conteneur max 1200px. Espacement vertical 96px desktop, 64px mobile.

## Anti-patterns à éviter
Gradients violets, cartes arrondies génériques, Inter/Roboto, grilles sans hiérarchie.
