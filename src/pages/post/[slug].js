import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import mdCenterText from 'markdown-it-center-text';

export async function getStaticPaths() {
  const files = fs.readdirSync('src/posts');
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
  const fileName = fs.readFileSync(`src/posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1 className="mt-5">{frontmatter.title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: md().use(mdCenterText).render(content) }} />
    </div>
  );
}