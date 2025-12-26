import React from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};
function Projects() {
  const projects: Project[] = [
    {
      title: "CC Hub Platform",
      description:
        "A centralized web platform for managing customer communications, analytics, and internal workflows.",
      technologies: [
        "React",
        "TypeScript",
        ".NET 8",
        "Azure App Service",
        "SQL Server",
      ],
      link: "https://example.com/cc-hub",
    },
    {
      title: "Inventory Management System",
      description:
        "Full-stack application for tracking inventory levels, suppliers, and purchase orders in real time.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://example.com/inventory",
    },
    {
      title: "Employee Portal",
      description:
        "Secure internal portal that allows employees to manage profiles, view payslips, and submit requests.",
      technologies: ["React", ".NET Core", "Azure AD", "Azure SQL"],
      link: "https://example.com/employee-portal",
    },
    {
      title: "E-Commerce Web App",
      description:
        "Scalable e-commerce platform with product catalog, shopping cart, and Stripe payments.",
      technologies: ["Next.js", "TypeScript", "Stripe API", "PostgreSQL"],
      link: "https://example.com/ecommerce",
    },
  ];

  return (
    <section
      className="py-5"
      id="projects"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100)",
        minHeight: "100vh",
      }}
    >
      <div className="container text-center">
        <h1
          className="fw-bold mb-5"
          style={{
            color: "#0d6efd",
            fontSize: "2.5rem",
            letterSpacing: "1px",
            position: "relative",
            display: "inline-block",
          }}
        >
          Projects
          <span style={{display:"block", width:"40px", height:"4px", backgroundColor:"#0d6efd", borderRadius:"2px", margin:"10px auto 0"}}>

          </span>
        </h1>
        <div className="row">
            {projects.map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100 shadow-sm border-0 hover-card"
                    style={{borderRadius:"15px", backgroundColor:"white", transition:"transform 0.3s, box-shadow 0.3s"}}
                    >
                        <div className="card-body text-start p-4">
                            <h5 className="card-title fw-bold text-dark mb-3">
                                {project.title}
                            </h5>
                            <p className="card-text text-muted mb-3">
                                {project.description}
                            </p>
                              <p className="text-secondary small mb-3">
                               <strong>Technologies:</strong> {project.technologies.map((tec, i) => (
                                <span key={i} className="badge bg-light text-dark me-1">{tec}</span>
                               ))}
                            </p>
                            <a  className="btn btn-primary w-100 fw-semibold"
                            style={{borderRadius:"10px", transition: "all 0.3s ease"}}
                            
                            >View Project</a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
