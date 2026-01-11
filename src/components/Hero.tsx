import { Link } from 'react-router-dom'

function Hero() {
  return (
<section className="bg-light align-items-center py-5">
  <div className="container text-center">
    <h1 className="fw-bold display-3 mb-3">
      Hi, I'm <span className='text-primary'>Luba Moura</span>
    </h1>
    <p className="lead mb-4">Asp Dot Net Core Developer | React Enthusiast | Lifelong Learner</p>
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <Link to="/projects" className="btn btn-primary btn-lg">View My Work </Link>
      <Link to="/contact" className="btn btn-outline-primary btn-lg">Contact</Link>
    </div>
    <div className="d-flex justify-content-center gap-3 mt-4">
      <a href="www.msn.com" className="btn btn-outline-secondary btn-sm" target='_blank' rel="noopener noreferrer">GitHub</a>
       <a href="www.msn.com" className="btn btn-outline-secondary btn-sm" target='_blank' rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>

</section>
  )
}

export default Hero
