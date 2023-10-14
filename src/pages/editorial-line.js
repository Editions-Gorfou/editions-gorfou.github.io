export default function EditorialLine() {
  return (
    <>
      <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">Ligne éditoriale</h1>
      <div className="container m-5 mx-auto">
        <p>Cette page s’adresse à l’attention des auteurs qui souhaitent nous soumettre des manuscrits.</p>
        <p>Sur le fond, voici <strong>les manuscrits que nous n’acceptons pas :</strong></p>
        <ul className="list-disc ml-5 mb-5">
          <li>la <em>bit lit</em>, à savoir des fictions impliquant des créatures surnaturelles autour d’un environnement contemporain. Plus d’informations sur ce genre ici : <a href="https://fr.wikipedia.org/wiki/Bit-lit">https://fr.wikipedia.org/wiki/Bit-lit</a> ;</li>
          <li>les manuscrits de non-fiction évoquant des sujets de société sensibles et qui peuvent exposer tant son auteur que les Éditions Gorfou ;</li>
          <li>les comédies romantiques ;</li>
          <li>les romans d’amour ;</li>
          <li>les contenus à caractère pornographique.</li>
        </ul>
        <p>Sur la forme, pas de préférence. À noter que la mise en page sur laquelle vous partez risque d’être largement reprise par les outils propres à notre maison d’édition. Vous êtes libre d’envoyer un manuscrit déjà mis en page ou non. Nous préférons les fichiers au format PDF.</p>
      </div>
    </>
  )
}