import md from 'markdown-it';

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter ? frontmatter.title : ""}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content ? content : "") }} />
    </div>
  );
}