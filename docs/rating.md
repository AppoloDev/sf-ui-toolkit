# Rating

> Note par étoiles : affichage en lecture seule (étoiles partielles) ou saisie par boutons radio, avec demi-étoiles et aperçu au survol.

## Utilisation

```twig
<twig:Rating name="note" :value="4" label="Votre note" />
```

## Exemples

### Lecture seule

Sans `name` (ou avec `readonly`), le composant affiche la note. Une valeur décimale remplit partiellement l'étoile concernée.

```twig
<twig:Rating :value="3.7" />
```

### Saisie

Avec un `name`, chaque étoile est un bouton radio natif : le champ part avec le formulaire, et les flèches du clavier changent la note. Le survol affiche un aperçu.

```twig
<twig:Rating name="note" :value="4" label="Votre note" />
```

### Demi-étoiles

Avec `step="0.5"`, chaque étoile compte deux zones : la moitié gauche vaut x,5 et la moitié droite la valeur entière.

```twig
<twig:Rating name="note_precise" :value="3.5" :step="0.5" label="Note précise" />
```

### Tailles

```twig
<div class="flex flex-col items-start gap-3">
    <twig:Rating :value="4" size="sm" />
    <twig:Rating :value="4" size="md" />
    <twig:Rating :value="4" size="lg" />
</div>
```

### Nombre d'étoiles

```twig
<twig:Rating :value="7" :max="10" />
```

### Lecture seule forcée

`readonly` fige un champ qui a un `name` : utile pour réafficher une saisie existante.

```twig
<twig:Rating name="note" :value="2" readonly />
```

## Accessibilité

- En saisie, le composant est un `radiogroup` dont chaque étoile est un `input type="radio"` natif : tabulation, flèches et lecteurs d'écran fonctionnent sans JavaScript.
- Le focus clavier est visible sur l'étoile concernée.
- En lecture seule, le composant est une image (`role="img"`) dont le libellé indique la note, par exemple « Note : 3.7 / 5 ».
- Le survol n'est qu'un aperçu : il ne change aucune valeur tant qu'on n'a pas cliqué.

## API

### `<twig:Rating>`

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `name` | string | `null` | Nom du champ. Sans nom, le composant est en affichage seul. |
| `value` | number | `0` | Note actuelle. Les décimales sont acceptées. |
| `max` | int | `5` | Nombre d'étoiles. |
| `step` | 1 ou 0.5 | `1` | `0.5` active les demi-étoiles en saisie. |
| `readonly` | bool | `false` | Affichage seul, même avec un `name`. |
| `size` | `sm`, `md`, `lg` | `md` | Taille des étoiles. |
| `label` | string | `Note` | Libellé accessible du groupe. |
