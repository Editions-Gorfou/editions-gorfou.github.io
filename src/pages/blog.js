import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('src/posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`src/posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
    <h1 className="font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold">Blog</h1>
    <div className="container p-6">
        <ul>
          {posts.map(({ slug, frontmatter }) => (
            <li>
              <Link href={`/post/${slug}`}>
                <a>{frontmatter.title}</a>
              </Link>
            </li>
          ))}
        </ul>
    </div>
    </>
  )
}