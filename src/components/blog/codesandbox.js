const HEIGHT = '450px'
const width = '700px'

function Codesandbox({id, title, height}) {
  return (
    <div style={{height: height || HEIGHT, marginBottom: '2rem'}}>
      <div style={{height: height || HEIGHT, position: 'absolute', left: 0, right: 0}} className="bg-white py-4">
        <div className="rounded-lg border border-gray-200 overflow-hidden h-full bg-transparent" style={{height: '100%', maxWidth: 'calc(100vw - 32px)', width, margin: '0 auto'}}>
          <iframe
            src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark&codemirror=1&hidedevtools=1`}
            style={{height: 'calc(100% + 2px)', width: '100%', margin: '-1px auto 0 auto'}}
            title={title}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Codesandbox
