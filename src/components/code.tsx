import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const Code = ({ children, language = 'javascript' }) => {
  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
              Prism.languages.javascript
            ),
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
        }
        code {
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          background: #f5f5f5;
          font-size: 85%;
          tab-size: 2;
          flex-shrink: 1;
          flex-grow: 1;
          color: rgb(55, 53, 47);
          text-align: left;
          border-radius: var(--radius);
          overflow: auto;
        }
      `}</style>
    </>
  )
}

export default Code
