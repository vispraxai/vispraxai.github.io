import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getProject, projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

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
        <Link href="/projects" className="navBtn"><ArrowLeft size={13} /> PROJECT_INDEX</Link>
      </nav>

      <article className="projectDetail">
        <Link href="/projects" className="backLink"><ArrowLeft size={13} /> RETURN_TO_INDEX</Link>

        <div className="detailTop">
          <div>
            <div className="statusLine"><span className="statusDot" /> PROJECT {project.number} // {project.stage.toUpperCase()}</div>
            <div className="detailCode">/projects/{project.slug}</div>
            <h1>{project.title}</h1>
            <p className="detailLead">{project.summary}</p>
            <div className="tagRow detailTags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="statusCard">
            <span>CURRENT_STATE</span>
            <strong>{project.status}</strong>
            <small>PUBLIC PROJECT RECORD</small>
          </div>
        </div>

        <div className="detailGrid">
          <section>
            <div className="sectionIndex">OVERVIEW // 01</div>
            <p className="detailCopy">{project.overview}</p>
            <div className="detailRule" />
            <div className="labNoteBox">
              <span>LAB_NOTE</span>
              <p>{project.note}</p>
            </div>
          </section>

          <aside className="detailAside">
            <div className="sectionIndex">RESEARCH_QUESTIONS // 02</div>
            <div className="questionList">
              {project.questions.map((question, index) => (
                <div key={question} className="question">
                  <span>0{index + 1}</span>
                  <p>{question}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="detailFooter">
          <a href="https://github.com/vispraxai" target="_blank" rel="noreferrer" className="repoLink">
            RESEARCH_ARCHIVE <ExternalLink size={13} />
          </a>
          <Link href="/projects" className="repoLink">ALL_PROJECTS <ArrowRight size={13} /></Link>
        </div>
      </article>

      <footer>
        <div className="brand"><span className="brandMark" aria-hidden="true"><i /><i /><i /></span><span>VISPRAX<span className="brandDim">.AI</span></span></div>
        <span>INDEPENDENT AI RESEARCH LAB</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
