export default function AboutUs() {
  return (
    <>
      <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">Qui sommes-nous ?</h1>
      <div className="container m-5 mx-auto">
          <p className="text-center mb-5"><img src="assets/editions-gorfou-logo.svg" className="mx-auto h-48 " /><br />
          <em>Le logo des Éditions Gorfou</em></p>
          <p className="mb-5">Les Éditions Gorfou, c’est une maison d’édition <strong>indépendante</strong>, <strong>à compte d’éditeur</strong> et <strong>dans l’air du temps</strong> :</p>
          <ul className="list-disc ml-5 mb-5">
              <li><strong>indépendante</strong>, parce que nous n’appartenons à aucun grand groupe de publication et nous choisissons nous-mêmes nos partenaires ;</li>
              <li><strong>à compte d’éditeur</strong>, parce que nous ne demanderons jamais le moindre centime à nos auteurs et que nous voulons nous-mêmes prendre nos propres risques ;</li>
              <li><strong>dans l’air du temps</strong>, parce qu’on ne vous demandera pas d’imprimer un manuscrit à l’ère du numérique et que notre objectif est de faciliter la collaboration entre les auteurs et nous-mêmes.</li>
          </ul>
          <p className="mb-5">Nous utilisons des outils informatiques actualisés qui nous permettent de mettre en page efficacement nos œuvres et nous utilisons une approche itérative pour publier. À l’aide des nouveaux canaux de diffusion, il devient de plus en plus aisé de publier un livre (surtout à l’ère du numérique). Fort de constater qu’aucune maison d’édition digne de ce nom n’accompagnait ses auteurs dans un processus transparent et en utilisant les outils à disposition des auteurs et éditeurs, les Éditions Gorfou ont vu le jour.</p>
          <p className="mb-5">Le fondateur de cette maison d’édition ayant ressenti le besoin profond de publier tout en s’abstrayant des contraintes actuelles de l’édition, il a pris la décision de lancer sa propre maison d’édition tout en documentant ses démarches et les différents procédés utilisés.</p>
      </div>
    </>
  )
}