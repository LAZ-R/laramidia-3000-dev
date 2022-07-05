/*
    Every image here is under a Pixabay License
        https://pixabay.com/service/license/
        https://pixabay.com/service/terms/#license

*/
const rawList = [
    {
        id: 0,
        title: 'Accueil',
        content:
            'Bienvenue dans une aventure dont <b>VOUS</b> êtes le héros.',
        buttons: [
            {
                text: 'Commencer',
                link: 1
            }
        ],
        theme: 'basic'
    },

    {
        id: 1,
        title: 'Arrivée sur Laramidia',
        content:
            'Vous venez d\'arriver sur place.<br>' +
            'Vous ne voyez pas grand chose, de toute façon ceci n\'est qu\'un exemple de page.',
        buttons: [
            {
                text: 'Aller à la meilleur fin du jeu',
                link: 2
            },
            {
                text: 'Aller à la fin bis',
                link: 3
            },
            {
                text: 'Mourir directement',
                link: 4
            },
        ],
        theme: 'basic'
    },
    {
        id: 2,
        title: 'La meilleur fin du jeu',
        content:
            'Ceci est l\'écran de la meilleur fin du jeu.',
        buttons: [
            {
                text: 'Retourner à l\'écran titre',
                link: 0
            }
        ],
        theme: 'bestwin'
    },
    {
        id: 3,
        title: 'La fin du jeu',
        content:
            'Ceci est l\'écran de la fin du jeu (non optimale).',
        buttons: [
            {
                text: 'Retourner à l\'écran titre',
                link: 0
            }
        ],
        theme: 'win'
    },
    {
        id: 4,
        title: 'Vous êtes mort',
        content:
            'Ça devait arriver avec un manche à balai dans votre genre.<br>' +
            'Vous êtes mort.',
        buttons: [
            {
                text: 'Retourner à l\'écran titre',
                link: 0
            }
        ],
        theme: 'death'
    },
];

export const getItems = () => {
    return rawList;
}

export const getItemById = (itemId) => {
    let itemReturn;
    getItems().forEach(item => {
        if (item.id == itemId) {
            itemReturn = item;
        }
    });
    return itemReturn;
}