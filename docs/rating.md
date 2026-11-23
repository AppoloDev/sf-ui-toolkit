# Rating

Note par étoiles. En saisie, ce sont des boutons radio masqués (aucun JavaScript) ; en lecture seule, les demi-étoiles sont prises en charge.

## Lecture seule

Une note décimale est affichée avec des étoiles partielles.

```twig
<twig:Rating :value="3.5" readonly />
```

## Saisie

Avec un `name`, le composant devient un groupe de boutons radio utilisable dans un formulaire.

```twig
<twig:Rating name="note" :value="4" label="Votre note" />
```

## Tailles

```twig
<div class="flex items-center gap-4">
    <twig:Rating :value="4" size="sm" readonly />
    <twig:Rating :value="4" size="md" readonly />
    <twig:Rating :value="4" size="lg" readonly />
</div>
```

## Nombre d'étoiles

```twig
<twig:Rating :value="7" :max="10" readonly />
```
