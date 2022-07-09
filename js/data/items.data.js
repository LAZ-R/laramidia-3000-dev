export const RAW_LIST = [
    {
        id: -1,
        title: 'Compte rendu d\'aventure',
        content:
            '',
        buttons: [
            {
                if: null,
                text:
                    'Recommencer l\'aventure',
                link: 0
            }
        ],
        theme: 'basic'
    },
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
            '<br>' +
            'Vous saluez vos amis, regroupés un peu plus loin, en vous dirigeant vers eux.<br>' +
            'Timmy est passé vous voir la semaine précédente pour vous proposer cette "réunion de famille", mais il y a un petit moment que vous n\'aviez pas vu SURVIVALISTE et FILLE en personne.<br>' +
            '<br>' +
            'Celle-ci vous sourit en sortant un paquet de cigarettes de sa poche, et vous demande si vous n\'auriez pas du feu.',
        buttons: [
            {
                if: null,
                text:
                    'Vous lui rappelez que, n\'ayant jamais fumé de votre vie, son sens de l\'humour est toujours aussi particulier',
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
        title: 'Si peu d\'humour…',
        content:
            'FILLE s\'esclaffe en vous répondant que décidément, votre sens de l\'humour est toujours aussi déplorable, et alpague un passant qui avait le malheur d\'allumer une cigarette au même instant.',
        buttons: [
            {
                if: null,
                text:
                    'Vous en profitez pour saluer Timmy et SURVIVALISTE',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 3,
        title: 'À sec',
        content:
            'FILLE allume sa cigarette et vous rend votre briquet, en marmonnant qu\'il serait peut-être temps d\'en changer.<br>' +
            'Vous la taquinez pendant que vous essayez d\'allumer la vôtre tant bien que mal, en répondant que vous, au moins, vous avez du feu, même s\'il est vieux et bientôt à sec, avant d\'éclater de rire ensemble.',
        buttons: [
            {
                if: null,
                text:
                    'Timmy et SURVIVALISTE sourient également, et vous saluent à leur tour',
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
            'Vous compatissez, lui assurez que la prochaine tentative sera la bonne, et lui proposez même vôtre aide.',
        buttons: [
            {
                if: null,
                text:
                    'Timmy et SURVIVALISTE vous félicient également, et vous saluent à leur tour',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 5,
        title: 'La véritable raison',
        content:
            '"Alors si je vous ai demandé de venir, ce n\'est pas uniquement pour passer du temps avec mes meilleurs amis dans un hôtel aux USA." déclare Timmy.<br>' +
            '"Comme vous le savez sûrement, mon équipe de fouille et moi même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales".<br>' +
            '<br>' +
            'FILLE se montre immédiatement curieuse, tandis que SURVIVALISTE émet, comme à son habitude, des doutes sur l\'emballement de Timmy pour de <i>"vulgaires cailloux d\'os d\'animaux disparus depuis des millions d\'années"</i>.<br>' +
            '<br>' +
            'Pour votre part,',
        buttons: [
            {
                if: null,
                text: 'Vous ne pouvez vous retenir de poser à Timmy une centaine de questions en moins de dix secondes',
                link: 6
            },
            {
                if: null,
                text: 'Vous savez que Timmy vous bassinera avec ses lézards pendant toute la durée du vol, mais l\'important est d\'être avec vos amis, vous vous contentez donc de hocher la tête en signe d\'approbation',
                link: 7
            },
            {
                if: 3,
                text: 'Vous brûlez vos amis grâce à votre fidèle briquet',
                link: 8
            },
        ],
        theme: 'basic'
    },
    {
        id: 6,
        title: 'Les détails, s\'il vous plaît !',
        content:
            'Il vous rassure en vous disant qu\'il vous expliquera tout en cours de route.<br>' +
            '<br>' +
            'Soudain, une voix robotique se fait entendre : "Fin d\'enregistrement pour le vol numéro 065421 à destination de Great Falls International dans 15 minutes !".<br>' +
            '"C\'est le nôtre !" hurle Timmy avant de se mettre à courir. SURVIVALISTE, FILLE et vous même vous ruez donc à l\'intérieur de l\'aéroport, et…<br>' +
            '<br>' +
            'Merci d\'avoir joué à la démo !',
        buttons: [
            {
                if: null,
                text: 'Compte rendu d\'aventure',
                link: -1
            }
        ],
        theme: 'basic'
    },
    {
        id: 7,
        title: 'Sans les détails, merci',
        content:
            'Il vous rassure en vous disant que si vous ne voulez pas des détails techniques, il se fera violence et vous les épargnera.<br>' +
            '<br>' +
            'Soudain, une voix robotique se fait entendre : "Fin d\'enregistrement pour le vol numéro 065421 à destination de Great Falls International dans 15 minutes !".<br>' +
            '"C\'est le nôtre !" hurle Timmy avant de se mettre à courir. SURVIVALISTE, FILLE et vous même vous ruez donc à l\'intérieur de l\'aéroport, et…<br>' +
            '<br>' +
            'Merci d\'avoir joué à la démo !',
        buttons: [
            {
                if: null,
                text: 'Compte rendu d\'aventure',
                link: -1
            }
        ],
        theme: 'basic'
    },
    {
        id: 8,
        title: 'La folie, et l\'addition !',
        content:
            'Alors que vous regardez vos anciens camarades fondre, le bruit appaisant des sirènes se rapprochant vous fait oublier tous vos démons interieurs. Vous allez enfin pouvoir vous reposer.<br>' +
            '<br>' +
            'C\'est une façon originale de finir cette démo, merci quand même d\'y avoir joué !',
        buttons: [
            {
                if: null,
                text: 'Compte rendu d\'aventure',
                link: -1
            }
        ],
        theme: 'basic'
    },
];
