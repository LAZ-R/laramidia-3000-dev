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
                if: null,
                text:
                    'Commencer',
                link: 1
            }
        ],
        theme: 'basic'
    },

    {
        id: 1,
        title: 'Réunion de famille',
        content:
            'Le taxi, peu bavard et plutôt grognon, vous dépose enfin à l\'aéroport après ce qui vous a semblé une éternité.<br>' +
            'Vous saluez vos amis, regroupés un peu plus loin, en vous dirigeant vers eux.<br>' +
            '<br>' +
            'Timmy est passé vous voir la semaine précédente pour vous proposer de vous retrouver ici, mais il y a bien longtemps que vous n\'aviez pas vu SURVIVALISTE et FILLE.<br>' +
            'Celle-ci vous sourit en retour, sort un paquet de cigarettes de sa poche, et vous demande si vous n\'auriez pas du feu.',
        buttons: [
            {
                if: null,
                text:
                    'Vous lui répondez que n\'ayant jamais fumé de votre vie, il serait souhaitable qu\'elle recycle son stock de blagues',
                link: 2
            },
            {
                if: null,
                text:
                    'Vous lui prêtez votre briquet fétiche en sortant vos propres cigarettes',
                link: 3
            },
            {
                if: null,
                text:
                    'Vous lui annoncez que depuis la dernière fois que vous vous êtes vu, vous avez arrêté de fumer, et que vous vous sentez beaucoup mieux !',
                link: 4
            },
        ],
        theme: 'basic'
    },
    {
        id: 2,
        title: 'Si peu d\'humour...',
        content:
            'FILLE s\'esclaffe, vous répondant que décidément, votre sens de l\'humour est toujours aussi déplorable, et en profite pour alpaguer un passant qui avait le malheur d\'allumer une cigarette au même instant.',
        buttons: [
            {
                if: null,
                text:
                    'Vous décidez tous les deux de prêter attention à Timmy et SURVIVALISTE',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 3,
        title: 'À sec',
        content:
            'FILLE allume sa cigarette et vous rend votre briquet, en marmonant qu\'il serait temps d\'en changer.<br>' +
            'En allumant la vôtre, vous la taquinez en répondant que vous, au moins, vous avez du feu, même s\'il est bientôt à sec, et vous éclatez ensemble d\'un rire sincère.',
        buttons: [
            {
                if: null,
                text:
                    'Vous décidez tous les deux de prêter attention à Timmy et SURVIVALISTE',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 4,
        title: 'Bravo !',
        content:
            'FILLE vous charie et en profite pour alpaguer un passant qui avait le malheur d\'allumer une cigarette au même instant, mais fini par vous féliciter en vous disant que ses essais successifs se sont tous soldés par des échecs.<br>' +
            'Vous compatissez mais lui assurez que la prochaine sera la bonne, et lui proposez même vôtre aide.',
        buttons: [
            {
                if: null,
                text:
                    'Vous décidez tous les deux de prêter attention à Timmy et SURVIVALISTE',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 5,
        title: 'Le feu',
        content:
            'Ici, si vous avez répondu que vous aviez un briquet, vous devez voir apparaitre un bouton qui n\'est visible que dans cette situation.<br>' +
            'Sinon, vous ne voyez qu\'un seul bouton. Les deux font ici la même chose, mais à terme non',
        buttons: [
            {
                if: null,
                text: 'Retour à l\'écran titre',
                link: 0
            },
            {
                if: 3,
                text: '🔥 Visible uniquement si briquet 🔥',
                link: 0
            },
        ],
        theme: 'basic'
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