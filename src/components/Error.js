import '../css/Error.css'

const Error = ({ errorStatus, errorMessage }) => {
  return (
    <h2 className="error">Apologies! {errorStatus}: {errorMessage}. Please go back and try again.</h2>
  )
}

export default Error
