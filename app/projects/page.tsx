import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="site">
      <div className="ambientGrid" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <nav className="nav">
        <Link href="/" className="brand">
          <span className="brandMark" aria-hidden="true"><i /><i /><i /></span>
          <span>VISPRAX<span className="brandDim">.AI</span></span>
        </Link>
        <div className="navLinks">
          <Link href="/projects">Projects</Link>
          <Link href="/manifest">Manifest</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <Link href="/" className="navBtn"><ArrowLeft size={13} /> BACK_HOME</Link>
      </nav>

      <section className="indexHero">
        <div className="statusLine"><span className="statusDot" /> PROJECT DATABASE // ONLINE</div>
        <div className="sectionIndex">VISPRAX / PROJECT INDEX</div>
        <h1>ACTIVE<br /><span>DEPLOYMENTS.</span></h1>
        <p>
          Public records for current Visprax research. Each project tracks a problem,
          an implementation path, and a state of development.
        </p>
        <div className="indexStats"><span>RECORDS {String(projects.length).padStart(2, "0")}</span><span>ARCHIVE 2026</span><span>ACCESS PUBLIC</span></div>
      </section>

      <section className="indexList">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} className="indexRow" key={project.slug}>
            <div className="indexNumber">{project.number}</div>
            <div className="indexMain">
              <div className="indexMeta">
                <span>{project.shortLabel}</span>
                <span>{project.stage}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="tagRow">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="indexState">
              <span>{project.status}</span>
              <ArrowRight size={15} />
            </div>
          </Link>
        ))}
      </section>

      <footer>
        <div className="brand"><span className="brandMark" aria-hidden="true"><i /><i /><i /></span><span>VISPRAX<span className="brandDim">.AI</span></span></div>
        <span>INDEPENDENT AI RESEARCH LAB</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
