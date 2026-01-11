
function Footer() {
  return (
<footer className="bg-dark text-light py-4">
  <div className="container text-center">
    <h5 className="fw-bold mb-3">Luba Moura</h5>
    <div className="d-flex justify-content-center mb-3">
      <a href="www.msn.com" className="text-light mx-3" target="_blank">
        <i className="bi bi-linkedin fs-4"/>LinkedIn
      </a>
      <a href="www.msn.com" className="text-light mx-3" target="_blank">
        <i className="bi bi-github fs-4"/>GitHub
      </a>
      <a href="mailto:luba11751@gmail.com" className="text-light mx-3" target="_blank">
        <i className="bi bi-envelope fs-4"/>Email
      </a>
    </div>
    <p className="mb-0 smal">
      @{new Date().getFullYear()} <strong>Luba Moura</strong>. All Rights Reserved. 
    </p>
  </div>
</footer>
  )
}

export default Footer
