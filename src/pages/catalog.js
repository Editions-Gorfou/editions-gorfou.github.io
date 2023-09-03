import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';


export async function getStaticProps() {
  const files = fs.readdirSync('src/catalog');
  const books = files.map((bookFilename) => {
    const slug = bookFilename.replace('.md', '');
    const readFile = fs.readFileSync(`src/catalog/${bookFilename}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      books,
    },
  };
}

export default function Catalog({ books }) {
  return (
    <>
      <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">Catalogue</h1>
      <h5 className="text-xl font-bold mb-8 text-center">Découvrez nos nouveautés sous tous les formats (epub, broché…) sur cette page.</h5>
      <div className="mx-auto content-center place-items-stretch place-self-center grid grid-cols-4 lg:grid-cols-12 gap-4 mt-5 mb-5 ml-5 mr-5">
        {books.map(({slug, frontmatter}) => (
          <div key={slug} className="mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm lg:col-span-3 col-span-12">
            <h4 className="text-gray-900 text-xl leading-tight font-medium">{frontmatter.title}</h4>
            <h5 className="text-gray-500 mb-2">{frontmatter.author}</h5>
            <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={{ __html: frontmatter.pitch }} />
            <Link
              href={`/catalog/${slug}`}
              className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              role="button">Découvrir</Link>
          </div>
        ))}
      </div>
    </>
  )
}