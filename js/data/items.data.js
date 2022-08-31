const FINISH_ADVENTURE_TEXT = 'Voir le compte rendu de votre aventure';

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
                '<span class="app-title-disclaimer"><i>(titre non définitif)</i></span><br><br>' +
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
                    '',
                link: 1
            }
        ],
        theme: 'home'
    },
    {
        id: 1,
        title: 'Un jour nouveau',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par aucun des bouton précédents
                ifButton: null,
                text:
                    'Le bruit diffus de l\'alarme qui sort de votre téléphone vous tire d\'un sommeil profond et réparateur.<br>' +
                    '<br>' +
                    'Après l\'avoir éteinte, vous vous apercevez qu\'elle sonnait depuis maintenant une bonne demi-heure, et que vous êtes désormais en retard.<br>' +
                    'Il va falloir courir pour réussir à avoir l\'avion. Une chance que vous ayez préparé votre valise la veille.<br>' +
                    '<br>' +
                    'Vous enfilez les premiers vêtements que vous trouvez, et passez en revue vos affaires une dernière fois afin de vous assurer que vous n\'oubliez rien.<br>' +
                    '<br>' +
                    'Pendant que vous dévalez les escaliers de votre domicile, vous réfléchissez au meilleur moyen de vous rendre à l\'aéroport.'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 1,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous décidez d\'appeler un taxi.<br>Tant pis pour le prix, ils passent partout',
                link: 2
            },
            {
                // affichage non contextuel
                id: 2,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous vous dirigez vers votre garage en sachant qu\'avec votre moto, vous éviterez les embouteillages',
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
                    'Vous vous exécutez, puis prenez place à bord de la berline, certes un peu datée, mais toujours confortable.<br>' +
                    '<br>' +
                    'Vous sentez alors le regard de votre chauffeur dans le rétroviseur intérieur :<br>' +
                    '- On va où ?<br>' +
                    '- À l\'aéroport, le plus vite possible s\'il vous plaît !<br>' +
                    '- Et c\'est parti !<br>' +
                    '<br>' +
                    'Le vent s\'engouffre dans la voiture en même temps que celle-ci se met en mouvement, et vous regardez votre montre avec anxiété. Timmy et les autres vous attendent sans doute déjà.<br>' +
                    '<br>' +
                    'Après 15 minutes d\'un trajet aussi inintéressant que la vie de l\'homme assis devant vous, qu\'il tient pourtant absolument à vous raconter, l\'univers vous envoi un nouveau signe :<br>' +
                    '<br>' +
                    'Un embouteillage.<br>' +
                    'Monstrueux.<br>' +
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
                    'Grâce à votre talent et à la rapidité de votre bolide, vous arrivez à l\'aéroport en un instant, malgré l\'inconfort d\'avoir dû transporter votre valise en l\'attachant sur votre dos.<br>' +
                    'Vous garez votre engin dans le parking le plus proche de l\'entrée, puis sortez en courant, valise à la main.<br>' +
                    '<br>' +
                    'Vous retrouvez et saluez vos amis d\'enfance, regroupés un peu plus loin, en vous dirigeant vers eux.<br>' +
                    'Timmy est passé vous voir le mois dernier pour vous proposer cette "réunion de famille", mais il y a un petit moment que vous n\'aviez pas vu Robert et Laura en personne.<br>' +
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
                    'D\'un rapide coup d\'œil, vous repérez et saluez vos amis d\'enfance, regroupés un peu plus loin, et vous dirigez vers eux.<br>' +
                    'Timmy est passé vous voir le mois dernier pour vous proposer cette "réunion de famille", mais il y a un petit moment que vous n\'aviez pas vu Robert et Laura en personne.<br>' +
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
                    'Vous courez donc à toute vitesse, et losque vous arrivez devant l\'arrêt de bus, le compte-à-rebours à affichage numérique indique que celui-ci passera dans 4 minutes.<br>' +
                    '<br>' +
                    '3 minutes<br>' +
                    '<br>' +
                    '2<br>' +
                    '<br>' +
                    '1<br>' +
                    '<br>' +
                    '0<br>' +
                    '<br>' +
                    'Le bus n\'est jamais passé.<br>' +
                    'Après avoir arrosé les services de transport de votre ville de toutes les insultes connues du dictionnaire, vous appellez Timmy pour lui demander quoi faire.<br>' +
                    'Celui-ci vous répond que c\'est trop tard, le temps d\'attendre le prochain l\'embarquement sera terminé, et l\'avion prêt à partir.<br>'+
                    '<br>' +
                    'Malheureusement pour vous, l\'aventure se termine avant même d\'avoir commencée.'
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
                    'Robert rappelle à Laura que c\'est <b>son</b> humour qui est douteux, pendant que Timmy se place au centre du groupe :<br>' +
                    '- Bien. Maintenant que nous sommes tous réunis, si je vous ai demandé de venir ici, ce n\'est pas <i>uniquement</i> pour passer une semaine avec mes meilleurs amis dans un hôtel aux USA.<br>' +
                    'Comme vous le savez sûrement, mon équipe de fouilles et moi-même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales.<br>' +
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
                    'Comme vous le savez sûrement, mon équipe de fouilles et moi-même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales.<br>' +
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
                    'Laura vous charrie et en profite pour alpaguer un passant qui avait le malheur d\'allumer une cigarette au même instant, mais finit par vous féliciter en vous disant que ses essais successifs se sont tous soldés par des échecs.<br>' +
                    'Vous compatissez, lui assurez que la prochaine tentative sera la bonne, et lui proposez même vôtre aide.' +
                    '<br>' +
                    'Robert et Timmy fous félicitent également, avant que celui-ci se place au centre du groupe :<br>' +
                    '- Bien. Maintenant que nous sommes tous réunis, si je vous ai demandé de venir ici, ce n\'est pas <i>uniquement</i> pour passer une semaine avec mes meilleurs amis dans un hôtel aux USA.<br>' +
                    'Comme vous le savez sûrement, mon équipe de fouilles et moi-même avons été envoyés dans le Montana afin d\'étudier une formation récemment découverte, et j\'aimerais vous emmener voir de vos propres yeux certains des spécimens les plus incroyables que nous avons mis à jour. Ils sont tout simplement à couper le souffle, et pourraient révolutionner notre façon de voir les dinosaures et leurs interactions sociales.<br>' +
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
                // s'affiche si on est passé par le bouton 9 (détails)
                ifButton: 9,
                text:
                    'Il vous rassure en vous disant qu\'il vous expliquera tout durant le vol.<br>' +
                    '<br>' +
                    'Une voix robotique se fait soudain entendre à travers les haut-parleurs extérieurs de piètre qualités de l\'aéroport :<br>' +
                    '- Fin d\'enregistrement pour le vol numéro 065421 à destination de Great Falls International dans 15 minutes !<br>' +
                    'La panique sur le visage de Timmy vous fait comprendre qu\'il s\'agit de votre avion, et vous vous précipitez à l\'intérieur de l\'aéroport avec le reste du groupe.<br>' +
                    '<br>' +
                    'L\'enregistrement se passe sans encombre, excepté pour Robert, qui rechigne à laisser son couteau de survie aux agents de sécurité.<br>' +
                    '<br>' +
                    'Vous profitez du temps d\'attente pour discuter un peu avec Laura des derniers événements marquants de vos vies respectives, avant que l\'hôtesse de bord ne déclare le début de l\'embarquement au micro.'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 10 (pas détails)
                ifButton: 10,
                text:
                    'Il vous rassure en vous disant que si vous ne voulez pas des détails techniques, il se fera violence et vous les épargnera.<br>' +
                    '<br>' +
                    'Une voix robotique se fait soudain entendre à travers les haut-parleurs extérieurs de piètre qualités de l\'aéroport :<br>' +
                    '- Fin d\'enregistrement pour le vol numéro 065421 à destination de Great Falls International dans 15 minutes !<br>' +
                    'La panique sur le visage de Timmy vous fait comprendre qu\'il s\'agit de votre avion, et vous vous précipitez à l\'intérieur de l\'aéroport avec le reste du groupe.<br>' +
                    '<br>' +
                    'L\'enregistrement se passe sans encombre, excepté pour Robert, qui rechigne à laisser son couteau de survie aux agents de sécurité.<br>' +
                    '<br>' +
                    'Vous profitez du temps d\'attente pour discuter un peu avec Laura des derniers événements marquants de vos vies respectives, avant que l\'hôtesse de bord ne déclare le début de l\'embarquement au micro.'
            }
        ],
        buttons: [
            {
                // affichage non contextuel
                id: 11,
                ifButton: null,
                notIfButton: null,
                text:
                    'Vous présentez votre carte d\'embarquement à l\'hôtesse, puis vous vous dirigez dans le tunnel accolé à l\'avion',
                link: 7
            }
        ],
        theme: 'basic'
    },
    {
        id: 7,
        title: 'On s\'envole !',
        content: [
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 9 (détails)
                ifButton: 9,
                text:
                    'Vous prenez place dans l\'avion, non sans difficultés à la trouver. Vos amis s\'installent également, Timmy ayant eu la présence d\'esprit de réserver des places voisines les unes des autres.<br>' +
                    '<br>' +
                    'Après un décollage animé par les hurlements aussi mélodieux que discrets d\'un bébé, la première partie du vol se déroule sans encombre.<br>' +
                    'Vous vous tournez alors vers Timmy :<br>' +
                    '- Du coup, ces recherches, ça porte sur quoi exactement ?<br>' +
                    '- LARAMIDIA ! C\'était le nom du continent nord-américain durant la période du Crétacé...<br>' +
                    // TODO : Compléter les infos
                    'La conversation qui en résulte suffit à vous occuper jusqu\'à la fin du vol.<br>' +
                    '<br>' +
                    'Vous finissez par atterrir à bon port, et vous terminez la démo.<br>' +
                    'Merci d\'y avoir joué !'
            },
            {
                // affichage contextuel
                // s'affiche si on est passé par le bouton 10 (pas détails)
                ifButton: 10,
                text:
                'Vous prenez place dans l\'avion, non sans difficultés à la trouver. Vos amis s\'installent également, Timmy ayant eu la présence d\'esprit de réserver des places voisines les unes des autres.<br>' +
                '<br>' +
                'Après un décollage animé par les hurlements aussi mélodieux que discrets d\'un bébé, la première partie du vol se déroule sans encombre.<br>' +
                'Laura se tourne alors vers Timmy :<br>' +
                '- Du coup, ces recherches, ça porte sur quoi exactement ?<br>' +
                '<br>' +
                'Sentant que cette conversation ne risque pas de vous passionner, vous mettez vos écouteurs et partez en quête d\'un film passable dans le catalogue de l\'avion.<br>' +
                'La qualité des œuvres que vous regardez jusqu\'à la fin du vol est, au mieux, déplorable, mais au moins vous en voyez le bout.<br>' +
                '<br>' +
                'Vous finissez par atterrir à bon port, et vous terminez la démo.<br>' +
                'Merci d\'y avoir joué !'
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