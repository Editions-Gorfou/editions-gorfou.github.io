import Image from 'next/image';

export default function Index() {
  return (
    <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
      <div className="mx-auto">
        <Image src="/assets/editions-gorfou-logo.svg" class="mx-auto" height={256} width={256} />
      </div>
      <h1 className="text-5xl font-bold mt-0 mb-6">Bienvenue sur le site des Éditions Gorfou !</h1>
      <h3 className="text-3xl font-bold mb-8">Maison d’édition indépendante, à compte d’éditeur et dans l’ère du temps.</h3>
      <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/catalogue.html" role="button">Découvrir le catalogue</a>
   </div>
  );
}