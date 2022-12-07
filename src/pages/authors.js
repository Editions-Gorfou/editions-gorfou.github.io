import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('src/authors');
  const authors = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`src/authors/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      authors,
    },
  };
}

export default function Authors({ authors }) {
  return (
    <>
    <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">Auteurs</h1>
    <ul>
      {authors.map(({ slug, frontmatter }) => (
        <li>
          <Link href={`/author/${slug}`}>
            <a>{frontmatter.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}