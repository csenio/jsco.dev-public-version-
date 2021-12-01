import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

function CodeBlock({children}) {
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => {
        return (
          <div className={`${className} rounded-lg`} style={{...style, padding: '20px', overflowX: 'auto'}}>
            {tokens
              .filter((i) => !i[0].empty) //remove empty line from code snippets
              .map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
          </div>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
