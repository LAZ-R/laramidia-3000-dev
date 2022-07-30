const FINISH_ADVENTURE_TEXT = 'Voir le compte rendu de votre aventure';
/* const page =
{
	id: 55,
	title: '',
	content: [
		{
            // affichage contextuel
            // s'affiche si on est passé par le bouton 12
			ifButton: 12,
			text: ''
		},
		{
            // affichage contextuel
            // s'affiche si on est passé par le bouton 17
			ifButton: 13,
			text: ''
		},
		{
            // affichage contextuel
            // s'affiche si on est passé par aucun des bouton précédents
			ifButton: null,
			text: ''
		},
	],
	buttons: [
		{
            // affichage non contextuel
			id: 214,
			ifButton: null,
			notIfButton: null,
			text: 'Proposer de fabriquer un arc',
			link: 147
		},
		{
            // affichage contextuel
            // ne s'affiche que si on est passé par le bouton 14 (récupérer le harpon)
			id: 215,
			ifButton: 14,
			notIfButton: null,
			text: 'Proposer d\'utiliser le harpon',
			link: 148
		},
		{
            // affichage contextuel
            // ne s'affiche que si on est passé par le bouton 8 (avoir du feu)
            // ne s'affiche pas si on est passé par le bouton 15 (plonger donc feu marche plus)
			id: 217,
			ifButton: 8,
			notIfButton: 15,
			text: 'Proposer d\'allumer un feu',
			link: 149
		}
	],
    theme: 'basic'
} */

export const RAW_LIST = [
    {
        id: -1,
        title: 'Compte rendu d\'aventure',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par aucun des bouton précédents
                ifButton: null,
                text: ''
            },
        ],
        buttons: [
            {
                // affichage non contextuel
                id: -1,
                ifButton: null,
                notIfButton: null,
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
        content:[
            {
                // affichage contextuel
                // s'affiche si on est passé par aucun des bouton précédents
                ifButton: null,
                text:
                    'Bienvenue dans une aventure dont <b>VOUS</b> êtes le héros.<br>' +
                    '<br>' +
                    'Pour naviguer à travers cette histoire, il vous suffira de choisir une des options proposées au bas de chaque page.'
            },
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 0,
                ifButton: null,
                notIfButton: null,
                text:
                    'Commencer l\'aventure',
                link: 1
            }
        ],
        theme: 'basic'
    },
    {
        id: 1,
        title: 'Un nouveau jour',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par aucun des bouton précédents
                ifButton: null,
                text:
                    'Le bruit diffus de l\'alarme de votre téléphone vous tire d\'un sommeil profond et réparateur.<br>' +
                    '<br>' +
                    'Après l\'avoir éteinte, vous vous apercevez qu\'elle sonnait depuis mainenant une bonne demie-heure, et que vous êtes désormais en retard.<br>' +
                    'Il va falloir courir pour réussir à avoir l\'avion. Une chance que vous ayez préparé votre valise la veille.<br>' +
                    '<br>' +
                    'Vous enfilez les premiers vêtements que vous trouvez, et passez en revue vos affaires une dernière fois afin de vous assurer que vous n\'oubliez rien.<br>' +
                    '<br>' +
                    'Pendant que vous descendez les escaliers de votre domicile, vous réflechissez au meilleur moyen de vous rendre à l\'aéroport.'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 1,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous décidez d\'appeller un taxi.<br>Tant pis pour le prix, ils passent partout',
                link: 2
            },
            {
                // affichage non contextuel
                id: 2,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous vous dites qu\'avec votre moto, vous comblerez votre retard et éviterez les embouteillages',
                link: 3
            },
            {
                // affichage non contextuel
                id: 3,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous vous dites que, pour la planète, vous pouvez bien prendre les transports en commun',
                link: 4
            }
        ],
        theme: 'basic'
    },
    {
        id: 2,
        title: 'Un trajet soporifique',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par aucun des bouton précédents
                ifButton: null,
                text:
                    'Après avoir attendu votre taxi 10 <i>bonnes</i> minutes, celui-ci arrive et se gare à votre niveau. En vous analysant de la tête aux pieds, il vous fait signe de ranger votre valise dans le coffre.<br>' +
                    'Vous vous éxecutez, puis prenez place à bord de la berline, certe un peu datée, mais toujours comfortable.<br>' +
                    '<br>' +
                    'Vous sentez alors le regard de votre chauffeur dans le rétroviseur intérieur :<br>' +
                    '- On va où ?<br>' +
                    '- À l\'aéroport, le plus vite possible s\'il vous plaît !<br>' +
                    '- Et c\'est parti !<br>' +
                    '<br>' +
                    'Le vent s\'engouffre dans la voiture en même temps que celle-ci se met en mouvement, et vous regardez votre montre avec anxiété. Timmy et les autres vous attendent sans doute déjà.<br>' +
                    '<br>' +
                    'Après 15 minutes d\'un trajet aussi inintéressant que la vie de l\'homme assis devent vous, qu\'il tient pourtant absolument à vous raconter, l\'univers vous envoi un nouveau signe :<br>' +
                    '<br>' +
                    'Un embouteillage.<br>Monstrueux.<br>' +
                    '<br>' +
                    'Vous regardez votre interlocuteur, qui s\'excuse pour le retard que cela va engendrer.'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 4,
                ifButton: null,
                notIfButton: null,
                text:
                    'Lui dire qu\'il n\'y est pour rien',
                link: 3
            }
        ],
        theme: 'basic'
    },
    {
        id: 3,
        title: 'Réunion de famille',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 2 (prendre sa moto)
                ifButton: 2,
                text:
                    'Grâce à votre talent et à la rapidité de votre bolide, vous arrivez à l\'aéroport en un instant. Vous garez votre engin dans le parking le plus proche de l\'entrée, puis sortez en courant, valise à la main.<br>' +
                    'Vous vous mettez en recherche, et saluez vos amis d\'enfance, regroupés un peu plus loin, en vous dirigeant vers eux.<br>' +
                    'Timmy est passé vous voir la semaine précédente pour vous proposer cette "réunion de famille", mais il y a un petit moment que vous n\'aviez pas vu Robert et Laura en personne.<br>' +
                    '<br>' +
                    'Celle-ci vous sourit en sortant un paquet de cigarettes de sa poche, et vous demande si vous n\'auriez pas du feu.'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 1 (prendre le taxi)
                ifButton: 1,
                text:
                    'L\'embouteillage finit par se dissiper au bout de ce qui vous semble une éternité.<br>' +
                    '<br>' +
                    'En arrivant devant le terminal de l\'aéroport, le chauffeur du taxi n\'a même pas le temps de vous annoncer le prix de votre course que vous lui avez déjà tendu un billet en lui disant de garder la monnaie et êtes déjà dans le coffre à récupérer votre valise.<br>' +
                    'D\'un rapide coup d\'oeil, vous repérez et saluez vos amis d\'enfance, regroupés un peu plus loin, et vous dirigez vers eux.<br>' +
                    'Timmy est passé vous voir la semaine précédente pour vous proposer cette "réunion de famille", mais il y a un petit moment que vous n\'aviez pas vu Robert et Laura en personne.<br>' +
                    '<br>' +
                    'Celle-ci vous sourit en sortant un paquet de cigarettes de sa poche, et vous demande si vous n\'auriez pas du feu.'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 5,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous lui rappelez que, n\'ayant jamais fumé de votre vie, son sens de l\'humour est toujours aussi particulier',
                link: 5
            },
            {
                // affichage non contextuel
                id: 6,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous lui prêtez votre briquet fétiche en sortant vos propres cigarettes',
                link: 5
            },
            {
                // affichage non contextuel
                id: 7,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous lui annoncez que depuis la dernière fois que vous vous êtes vu, vous avez arrêté de fumer, et que vous vous sentez beaucoup mieux !',
                link: 5
            },
        ],
        theme: 'basic'
    },
    {
        id: 4,
        title: 'Un confiance mal placée',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par aucun des bouton précédents
                ifButton: null,
                text:
                    'Vous arrivez devant l\'arrêt de bus, le compte-à-rebours à affichage numérique indique que celui-ci passera dans 4 minutes.<br>' +
                    '<br>' +
                    '3 minutes.<br>' +
                    '<br>' +
                    '2.<br>' +
                    '<br>' +
                    '1.<br>' +
                    '<br>' +
                    '0.<br>' +
                    '<br>' +
                    'Le bus n\'est jamais passé.<br>' +
                    'Après avoir pesté contre les services de transport de votre ville, vous appellez Timmy pour lui demander comment régler la situation.<br>Celui-ci vous répond que c\'est trop tard, l\'avion est parti.<br>'+
                    '<br>' +
                    'Malheureusement pour vous, l\'aventure se termine avant même d\'avoir commencé.'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 8,
                ifButton: null,
                notIfButton: null,
                text:
                    FINISH_ADVENTURE_TEXT,
                link: -1
            }
        ],
        theme: 'death'
    },
    {
        id: 5,
        title: 'La véritable raison',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 5 (jamais fumé)
                ifButton: 5,
                text:
                    'Laura s\'esclaffe en vous répondant que décidément, votre sens de l\'humour est toujours aussi déplorable, et alpague un passant qui avait le malheur d\'allumer une cigarette au même instant.' +
                    '<br>' +
                    'Robert rapelle à Laura que c\'est <b>son</b> humour qui est douteux, pendant que Timmy se place au centre du groupe :<br>' +
                    '- Bien. Maintenant que nous sommes tous réunis, si je vous ai demandé de venir ici, ce n\'est pas <i>uniquement</i> pour passer une semaine avec mes meilleurs amis dans un hôtel aux USA.<br>' +
                    'Comme vous le savez sûrement, mon équipe de fouilles et moi même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales.<br>' +
                    '<br>' +
                    'Laura se montre immédiatement curieuse, tandis que Robert émet, comme à son habitude, des doutes sur l\'emballement de Timmy pour ce qu\'il appelle de <i>"vulgaires cailloux d\'os d\'animaux disparus depuis des millions d\'années"</i>.<br>' +
                    '<br>' +
                    'Pour votre part,'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 6 (avoir du feu)
                ifButton: 6,
                text:
                    'Laura allume sa cigarette et vous rend votre briquet, en marmonnant qu\'il serait peut-être temps d\'en changer.<br>' +
                    'Vous la taquinez pendant que vous essayez d\'allumer la votre tant bien que mal, en répondant que vous, au moins, vous avez du feu, même s\'il est vieux et bientôt à sec, avant d\'éclater de rire ensemble.' +
                    '<br>' +
                    'Robert et Timmy ricanent, avant que celui-ci se place au centre du groupe :<br>' +
                    '- Bien. Maintenant que nous sommes tous réunis, si je vous ai demandé de venir ici, ce n\'est pas <i>uniquement</i> pour passer une semaine avec mes meilleurs amis dans un hôtel aux USA.<br>' +
                    'Comme vous le savez sûrement, mon équipe de fouilles et moi même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales.<br>' +
                    '<br>' +
                    'Laura se montre immédiatement curieuse, tandis que Robert émet, comme à son habitude, des doutes sur l\'emballement de Timmy pour ce qu\'il appelle de <i>"vulgaires cailloux d\'os d\'animaux disparus depuis des millions d\'années"</i>.<br>' +
                    '<br>' +
                    'Pour votre part,'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 7 (arrété de fumer)
                ifButton: 7,
                text:
                    'Laura vous charrie et en profite pour alpaguer un passant qui avait le malheur d\'allumer une cigarette au même instant, mais fini par vous féliciter en vous disant que ses essais successifs se sont tous soldés par des échecs.<br>' +
                    'Vous compatissez, lui assurez que la prochaine tentative sera la bonne, et lui proposez même vôtre aide.' +
                    '<br>' +
                    'Robert et Timmy fous félicitent également, avant que celui-ci se place au centre du groupe :<br>' +
                    '- Bien. Maintenant que nous sommes tous réunis, si je vous ai demandé de venir ici, ce n\'est pas <i>uniquement</i> pour passer une semaine avec mes meilleurs amis dans un hôtel aux USA.<br>' +
                    'Comme vous le savez sûrement, mon équipe de fouilles et moi même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales.<br>' +
                    '<br>' +
                    'Laura se montre immédiatement curieuse, tandis que Robert émet, comme à son habitude, des doutes sur l\'emballement de Timmy pour ce qu\'il appelle de <i>"vulgaires cailloux d\'os d\'animaux disparus depuis des millions d\'années"</i>.<br>' +
                    '<br>' +
                    'Pour votre part,'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 9,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous ne pouvez vous retenir de poser à Timmy une centaine de questions en moins de dix secondes',
                link: 6
            },
            {
                // affichage non contextuel
                id: 10,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous savez que Timmy va vous bassiner avec ses lézards pendant toute la durée du vol, mais l\'important est d\'être avec vos amis, vous vous contentez donc de hocher la tête en signe d\'approbation',
                link: 6
            }
        ],
        theme: 'basic'
    },
    {
        id: 6,
        title: 'La course',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 8 (détails)
                ifButton: 9,
                text:
                    'Il vous rassure en vous disant qu\'il vous expliquera tout durant le vol.<br>' +
                    '<br>' +
                    'Soudain, une voix robotique se fait entendre :<br>' +
                    '- Fin d\'enregistrement pour le vol numéro 065421 à destination de Great Falls International dans 15 minutes !<br>' +
                    'Le visage déformé de Timmy vous fait comprendre qu\'il s\'agit de votre avion, et Robert, Laura, Timmy et vous même vous ruez donc à l\'intérieur de l\'aéroport.<br>' +
                    'L\'enregistrement se passe sans encombre, excepté pour Robert, qui rechigne à laisser son couteau de survie aux agents de sécurité.<br>' +
                    '<br>' +
                    'Vous profitez du temps d\'attente avant l\'embarquement pour discuter un peu avec Robert et Laura des derniers évenements marquants de vos vies respectives, avant que l\'hôtesse de bord ne déclare le début de l\'embarquement au micro'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 9 (pas détails)
                ifButton: 10,
                text:
                    'Il vous rassure en vous disant que si vous ne voulez pas des détails techniques, il se fera violence et vous les épargnera.<br>' +
                    '<br>' +
                    'Soudain, une voix robotique se fait entendre :<br>' +
                    '- Fin d\'enregistrement pour le vol numéro 065421 à destination de Great Falls International dans 15 minutes !<br>' +
                    'Le visage déformé de Timmy vous fait comprendre qu\'il s\'agit de votre avion, et Robert, Laura, Timmy et vous même vous ruez donc à l\'intérieur de l\'aéroport.<br>' +
                    'L\'enregistrement se passe sans encombre, excepté pour Robert, qui rechigne à laisser son couteau de survie aux agents de sécurité.<br>' +
                    '<br>' +
                    'Vous profitez du temps d\'attente pour discuter un peu avec Robert et Laura des derniers évenements marquants de vos vies respectives, avant que l\'hôtesse de bord ne déclare le début de l\'embarquement au micro'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 11,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous présentez votre carte d\'embarquement',
                link: 7
            }
        ],
        theme: 'basic'
    },
    {
        id: 7,
        title: 'le Vol',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 9 (détails)
                ifButton: 9,
                text:
                    'Vous prenez place dans l\'avion, non sans difficultés à trouver votre place. Vos amis s\'installent également, Timmy ayant eu la présence d\'esprit de réserver des places voisines les unes des autres.<br>' +
                    'Après un décollage animé par les hurlements d\'un bébé, la première partie du vol se déroule sans encombre.<br>' +
                    'Vous vous tournez alors vers Timmy :<br>' +
                    '- Du coup, ces recherches, ça porte sur quoi exactement ?<br>' +
                    '- LARAMIDIA ! C\'est le nom du continent nors-américain durant la péridode du Crétacé...<br>' +
                    // TODO : Compléter les infos
                    'La conversation qui en résulte suffit à vous occuper jusqu\'à la fin du vol.<br>' +
                    'Vous finissez par atterir à bon port, et vous terminez la démo'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 10 (pas détails)
                ifButton: 10,
                text:
                'Vous prenez place dans l\'avion, non sans difficultés à trouver votre place. Vos amis s\'installent également, Timmy ayant eu la présence d\'esprit de réserver des places voisines les unes des autres.<br>' +
                'Après un décollage animé par les hurlements d\'un bébé, la première partie du vol se déroule sans encombre.<br>' +
                'Laura se tourne alors vers Timmy :<br>' +
                '- Du coup, ces recherches, ça porte sur quoi exactement ?<br>' +
                'Sentant que cette conversation ne risque pas de vous passionner, vous mettez vos écouteurs et vous mettez en quête d\'un film passable dans le catalogue de l\'avion.<br>' +
                'La qualité des oeuvres que vous regardez jusqu\'à la fin du vol est, au mieux, déplorable, mais au moins vous en voyez le bout.<br>' +
                'Vous finissez par atterir à bon port, et vous terminez la démo'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 12,
                ifButton: null,
                notIfButton: null,
                text: 
                    FINISH_ADVENTURE_TEXT,
                link: -1
            }
        ],
        theme: 'win'
    },
];

/* export const RAW_LIST = [
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
            'Bienvenue dans une aventure dont <b>VOUS</b> êtes le héros.<br>' +
            '<br>' +
            'Pour naviguer à travers cette histoire, il vous suffira de choisir une des options proposées au bas de chaque page.',
        buttons: [
            {
                if: null,
                text:
                    'Commencer l\'aventure !',
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
            'Vous saluez vos amis d\'enfance, regroupés un peu plus loin, en vous dirigeant vers eux.<br>' +
            'Timmy est passé vous voir la semaine précédente pour vous proposer cette "réunion de famille", mais il y a un petit moment que vous n\'aviez pas vu Robert et Laura en personne.<br>' +
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
            'Laura s\'esclaffe en vous répondant que décidément, votre sens de l\'humour est toujours aussi déplorable, et alpague un passant qui avait le malheur d\'allumer une cigarette au même instant.',
        buttons: [
            {
                if: null,
                text:
                    'Vous en profitez pour saluer Timmy et Robert',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 3,
        title: 'À sec ?',
        content:
            'Laura allume sa cigarette et vous rend votre briquet, en marmonnant qu\'il serait peut-être temps d\'en changer.<br>' +
            'Vous la taquinez pendant que vous essayez d\'allumer la vôtre tant bien que mal, en répondant que vous, au moins, vous avez du feu, même s\'il est vieux et bientôt à sec, avant d\'éclater de rire ensemble.',
        buttons: [
            {
                if: null,
                text:
                    'Timmy et Robert sourient et vous saluent à leur tour',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 4,
        title: 'Bravo !',
        content:
            'Laura vous charrie et en profite pour alpaguer un passant qui avait le malheur d\'allumer une cigarette au même instant, mais fini par vous féliciter en vous disant que ses essais successifs se sont tous soldés par des échecs.<br>' +
            'Vous compatissez, lui assurez que la prochaine tentative sera la bonne, et lui proposez même vôtre aide.',
        buttons: [
            {
                if: null,
                text:
                    'Timmy et Robert vous félicient également, avant de vous saluer à leur tour',
                link: 5
            }
        ],
        theme: 'basic'
    },
    {
        id: 5,
        title: 'La véritable raison',
        content:
            '"Alors si je vous ai demandé de venir ici, ce n\'est pas <i>uniquement</i> pour passer une semaine avec mes meilleurs amis dans un hôtel aux USA.<br>' +
            'Comme vous le savez sûrement, mon équipe de fouilles et moi même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales".<br>' +
            '<br>' +
            'Laura se montre immédiatement curieuse, tandis que Robert émet, comme à son habitude, des doutes sur l\'emballement de Timmy pour ce qu\'il appelle de <i>"vulgaires cailloux d\'os d\'animaux disparus depuis des millions d\'années"</i>.<br>' +
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
                text: 'Vous savez que Timmy va vous bassiner avec ses lézards pendant toute la durée du vol, mais l\'important est d\'être avec vos amis, vous vous contentez donc de hocher la tête en signe d\'approbation',
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
            '"C\'est le nôtre !" hurle Timmy avant de se mettre à courir. Robert, Laura et vous même vous ruez donc à l\'intérieur de l\'aéroport, et…<br>' +
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
            '"C\'est le nôtre !" hurle Timmy avant de se mettre à courir. Robert, Laura et vous même vous ruez donc à l\'intérieur de l\'aéroport, et…<br>' +
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
            'Alors que vous regardez vos anciens camarades fondre en se tordant de douleur, le bruit appaisant des sirènes se rapprochant vous fait oublier vos démons intérieurs. Vous allez enfin pouvoir vous reposer.<br>' +
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
]; */
