import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>500 - Server Error</h1>
      <p>Oops! Something went wrong on our side.</p>
      {/* <a href="/" className="home-link">Go Back Home</a> */}
    </div>
  );
}

export default ErrorPage;
