import "./ErrorComponent.css";

type ErrorComponentProps = {
    error: string
}
function ErrorComponent({error}:Readonly<ErrorComponentProps>) {
  return (
    <div className="error-component">{error}</div>
  )
}

export default ErrorComponent