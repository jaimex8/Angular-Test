To run app locally:
npm http-server


### Javascript Test

Use the following API ```GET http://www.cheapshark.com/api/1.0/deals```  which returns a list of Deal items that look like this:

```

{

    internalName: "THEWITCHER2ASSASSINSOFKINGSENHANCEDEDITION",

    title: "The Witcher 2: Assassins of Kings Enhanced Edition",

    metacriticLink: "/game/pc/the-witcher-2-assassins-of-kings",

    dealID: "W%2BYTnGTjA%2F7PvwgRsUM2h1uELwkBJauhJDQYjkGyIvo%3D",

    storeID: "8",

    gameID: "5572",

    salePrice: "2.99",

    normalPrice: "19.99",

    savings: "85.042521",

    metacriticScore: "88",

    releaseDate: 1305590400,

    lastChange: 1445532509,

    dealRating: "9.6"

}

```

Create a page that displays the returned information using the following criteria:

 * Deals must be grouped by a generated ```score``` property

     - The ```score``` property must be derived from the ```metacriticScore``` property which has a score range of 0-100

     - The ```score``` property must be rounded to the next greatest tens (96 -> 100)

 * The score groups must be listed in numerically descending order

 * Deals must be listed with their associated group

    - Deals must be listed by their ```title``` property and ```score``` property

    - Deals must be listed in alphabetically ascending order by ```title``` within their group

 * The solution must be written entirely in javascript that is runnable by chrome (html/css are allowed of course)

 * You must also use ```Angular``` to generate your views and fetch your data


Here is an example output:

100

--------

Battlefield 3            | 95

The Witcher 2            | 92



90

--------

Lego Batman              | 84

Overlord                 | 81