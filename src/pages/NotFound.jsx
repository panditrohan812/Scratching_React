import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page not-found">
      <div className="error-number">404</div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button" to="/">Go Home</Link>
    </section>
  );
}

export default NotFound;