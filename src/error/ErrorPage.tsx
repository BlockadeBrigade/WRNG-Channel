import { useRouteError, isRouteErrorResponse } from "react-router"

const Error: React.FC = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <div className="bg-black">
        <h1 className="text-white text-7xl">{error.status}</h1>
        <p>{error.data}</p>
        <p>{error.statusText}</p>
      </div>
    )
  }
}
export default Error
