import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Image from 'next/image';

export async function getStaticPaths() {
  const files = fs.readdirSync('src/catalog');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`src/catalog/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

const imageLoader = ({ src }) => {
  return `/assets/covers/${src}`;
}

export default function CatalogPage({ frontmatter, content }) {
  console.dir(frontmatter);
  return (
    <div className='mx-auto'>
      <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">{frontmatter.title}</h1>
      {frontmatter.subtitle !== null ? (
        <h2 className="font-small leading-tight text-2xl mt-5 mb-5 text-center font-bold">{frontmatter.subtitle}</h2>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="mx-auto">
          <Image
            unoptimized
            src={frontmatter.cover}
            width={frontmatter["cover-width"]}
            height={frontmatter["cover-height"]}
            alt="Book front cover" />
        </div>
        <div className="mx-auto">
          <div>Auteur : {frontmatter.author}</div>
          <div className="mt-3 mb-3">
            Ebook :
            <ul className="list-disc ml-9">
              <li>ISBN : {frontmatter["ebook-isbn"]}</li>
              <li>Prix : {frontmatter["ebook-price"]}</li>
              <li>Date de publication : {frontmatter["ebook-release-date"]}</li>
              <li>Acheter : <a className="inline-block px-2 py-2 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out" href={frontmatter["ebook-amazon-link"]}>Amazon</a></li>
            </ul>
          </div>

          <div className="mt-3 mb-3">
            Livre broché :
            <ul className="list-disc ml-9">
              <li>ISBN : {frontmatter["paperback-isbn"]}</li>
              <li>Prix : {frontmatter["paperback-price"]}</li>
              <li>Date de publication :  {frontmatter["paperback-release-date"]}</li>
              <li>Acheter : <a className="inline-block px-2 py-2 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out" href={frontmatter["paperback-amazon-link"]}>Amazon</a></li>
            </ul>
          </div>
          <div className="mb-4">Description :</div>
          <div className="pl-5 pr-5 align-justify book-description" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </div>
  );
}