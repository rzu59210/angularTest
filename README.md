# L'application

- Le but de cette application est d'afficher une liste de clients, de pouvoir afficher un client de cette liste et de pouvoir en créer un. Il est également demandé de pouvoir filtrer un client selon sa catégorie.
- L'API des clients renvoie un champs "category_id" qui correspond à l'identifiant d'une catégorie de client. Il convient de "re-couper" ces données avec la liste des catégories pour afficher la désignation de la catégorie du client, et non seulement l'identifiant.

# API

- Récupérer la liste des clients. Le header HTTP "Content-Type: application/json" est obligatoire pour récupérer les données.

```
  GET https://prodv2.id-ingenierie.com/api/companies
```

- Récupérer la liste des catégories. Le header HTTP "Content-Type: application/json" est obligatoire pour récupérer les données.

```
  GET https://prodv2.id-ingenierie.com/api/categories/list
```

- Créer un client. Le header HTTP "Content-Type: application/json" est obligatoire pour récupérer les données.

```
  POST https://prodv2.id-ingenierie.com/api/companies
```

# Compilation

- Vous pouvez utiliser Webpack ou Gulp (conseillé) pour compiler vos assets ou importer tous les fichiers un par un, dans le bon ordre, dans le fichier index.html

# Résultat attendu 

- Une page permattant d'afficher la liste clients avec un filtre sur les catégories de client.
- Une page permettant d'afficher un client en particulier.
- Une page permettant de créer un client.
- Une structure cohérence : contrôleur, service, route,...

# Aide

- Le framework bootstrap est intégré au projet pour vous aidez à présenter vos données mais vous ne serez pas jugé sur le design de votre application.
- Le repo GIT est initialisé, AngularJS déjà installé en dépendance via NPM. Vous êtes fortement encouragé à créé des commits réguliers de l'avancement de votre travail.
- Une structure de base est proposée. Elle est inspirée du guide de style officiel d'AngularJS : 
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
