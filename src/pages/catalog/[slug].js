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
            loader={imageLoader}
            src={frontmatter.cover}
            width={345}
            height={525}
            alt="Book front cover" />
        </div>
        <div className="mx-auto">
          <div>Auteur : {frontmatter.author}</div>
          <div>Description : {frontmatter.author}</div>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </div>
  );
}