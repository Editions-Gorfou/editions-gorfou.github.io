import Link from "next/link";

export default function SubmitDraft() {
  return (
    <>
      <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">Soumettre un manuscrit</h1>
      <div className="container m-5 mx-auto">
        <p>Si vous projetez de nous envoyer votre manuscrit, c’est que vous portez de la considération envers notre maison d’édition et, pour cela, nous vous remercions de votre confiance.</p>
        <p>Avant tout envoi, nous vous invitons à vérifier si votre manuscrit est en accord avec la <Link href="/editioral-line">ligne éditoriale</Link> des Éditions Gorfou.</p>
        <p>Vous devrez envoyer votre manuscrit directement à l’adresse suivante : <a href="mailto:publication@editions-gorfou.fr">publication@editions-gorfou.fr</a>.</p>
        <p>Dans votre email, <strong>merci d’ajouter toute information complémentaire utile à sa lecture</strong>. Une présentation succincte de l’auteur ainsi qu’un paragraphe accrocheur ne sont pas de refus.</p>
        <p>Si vous n’obtenez pas de réponse au bout de deux mois, considérez que votre manuscrit n’a pas retenu votre attention. Toutefois nous nous efforcerons de vous fournir un retour aussi informatif que possible.</p>
      </div>
    </>
  )
}