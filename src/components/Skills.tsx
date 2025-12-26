import React from 'react'

function Skills() {
  return (
<section className="bg-light py-5" >
  <div className="container">
    <h2 className="fw-bold text-center mb-5">Technical Sklls</h2>
    <div className="row g-4">
      <div className="col-md-6 col-lg-3 d-flex">
        <div className="card shadow-sm border-0 text-center w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-bold text-primary mb-3">Frontend</h5>
            <p className="mb-0">HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Bootstrap, Tailwind CSS</p>
          </div>
        </div>
      </div>
        <div className="col-md-6 col-lg-3 d-flex">
        <div className="card shadow-sm border-0 text-center w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-bold text-info mb-3">Tools and Platforms</h5>
            <p className="mb-0">Visual Studio, VS code, Git & GitHub, Postman, Node.js, Agile</p>
          </div>
        </div>
      </div>
        <div className="col-md-6 col-lg-3 d-flex">
        <div className="card shadow-sm border-0 text-center w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-bold text-success mb-3">Backend</h5>
            <p className="mb-0">C#, ASP.NET Core MVC, RESTful APIs, Entity Framework Core, PHP</p>
          </div>
        </div>
      </div>
        <div className="col-md-6 col-lg-3 d-flex">
        <div className="card shadow-sm border-0 text-center w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-bold text-danger mb-3">Database</h5>
            <p className="mb-0">Microsoft SQL Server, MySQL, Database Design, Stored Procedures, LINQ</p>
          </div>
        </div>
      </div>
      
    </div>
      </div>
      </section>
  )
}

export default Skills
