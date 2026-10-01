import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Mail } from "lucide-react";
import { projects } from "../lib/projects";

function LabCore() {
  return (
    <div className="labCore" aria-label="Visprax system visualization">
      <div className="coreChrome">
        <span>VX_CORE / 04</span>
        <span>SYNC 100%</span>
      </div>
      <div className="coreStage">
        <div className="orbit orbitOne" />
        <div className="orbit orbitTwo" />
        <div className="orbit orbitThree" />
        <div className="coreMesh">
          <div className="coreFace" />
          <div className="coreFace coreFaceInner" />
          <div className="coreDot" />
        </div>
        <div className="coreReadout coreReadoutA">MODEL_SPACE // ACTIVE</div>
        <div className="coreReadout coreReadoutB">LAT 04.8ms</div>
        <div className="coreReadout coreReadoutC">ENTROPY 0.14</div>
      </div>
      <div className="coreFooter">
        <span>RESEARCH GRAPH / 3 ACTIVE NODES</span>
        <span>● NOMINAL</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site">
      <div className="ambientGrid" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <nav className="nav">
        <Link href="/" className="brand">
          <span className="brandMark" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span>VISPRAX<span className="brandDim">.AI</span></span>
        </Link>
        <div className="navLinks">
          <Link href="/projects">Projects</Link>
          <Link href="/manifest">Manifest</Link>
          <a href="#contact">Contact</a>
        </div>
        <Link href="/projects" className="navBtn">
          OPEN_INDEX <ArrowRight size={13} />
        </Link>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <div className="statusLine">
            <span className="statusDot" /> SYSTEM ONLINE // APPLIED AI RESEARCH
          </div>
          <div className="heroKicker">VISPRAX RESEARCH LAB / REV_04</div>
          <h1>
            FROM VISION
            <br />
            <span>TO PRACTICE.</span>
          </h1>
          <p className="heroLead">
            An independent research lab building practical AI systems. We move from
            hypothesis to running code, with the constraints of deployment treated as part
            of the research itself.
          </p>
          <div className="heroActions">
            <Link href="/projects" className="primaryBtn">
              VIEW PROJECTS <ArrowRight size={15} />
            </Link>
            <Link href="/manifest" className="textBtn">READ THE MANIFEST <span>↓</span></Link>
          </div>

          <div className="heroMeta">
            <div><span>MODE</span><strong>CODE_FIRST</strong></div>
            <div><span>STATUS</span><strong className="accent">NOMINAL</strong></div>
            <div><span>NODES</span><strong>03 ACTIVE</strong></div>
          </div>
        </div>

        <LabCore />
      </section>

      <section className="projectSection" id="projects">
        <div className="sectionHeader">
          <div>
            <div className="sectionIndex">INDEX // 002</div>
            <h2>ACTIVE DEPLOYMENTS</h2>
          </div>
          <span className="sectionTelemetry">PUBLIC RESEARCH RECORD / LIVE</span>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <Link className="projectCard" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="cardTop">
                <span className="cardNumber">{project.number}</span>
                <span className="cardStatus">{project.status}</span>
              </div>
              <div className="cardSignal" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="cardLabel">{project.shortLabel}</div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="cardBottom">
                <div className="tagRow">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="cardArrow"><ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="indexFooter">
          <Link href="/projects">OPEN FULL PROJECT INDEX <ExternalLink size={13} /></Link>
          <span>03 PROJECTS / 03 STATES / 00 CLOSED</span>
        </div>
      </section>

      <section className="labSection" id="lab">
        <div className="labIntro">
          <div className="sectionIndex">INDEX // 003</div>
          <h2>THE LAB</h2>
          <p>
            Small, independent, and implementation-heavy. Visprax focuses on applied
            intelligence: research that can become a testable system, a useful tool, or a
            repository other people can inspect.
          </p>
          <Link href="/manifest" className="manifestLink">READ THE VISPRAX CHARTER <ArrowRight size={13} /></Link>
        </div>

        <div className="protocolList">
          <div className="protocolRow">
            <span>01</span>
            <div><strong>CODE_FIRST</strong><p>Ideas should become executable artifacts as early as possible.</p></div>
          </div>
          <div className="protocolRow">
            <span>02</span>
            <div><strong>OBSERVABLE_BY_DEFAULT</strong><p>Important system behavior stays inspectable instead of disappearing behind the demo.</p></div>
          </div>
          <div className="protocolRow">
            <span>03</span>
            <div><strong>CONSTRAINTS_ARE_RESEARCH</strong><p>Latency, provenance, reliability, and deployment are part of the work.</p></div>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div>
          <div className="sectionIndex">INDEX // 004</div>
          <h2>COMMUNICATION_PORT</h2>
          <p className="contactLead">For technical conversations, collaboration, or project-specific inquiries.</p>
        </div>
        <div className="contactPanel">
          <a href="mailto:contact@visprax.ai" className="contactRow">
            <span className="contactLabel">MAIL</span>
            <span>contact@visprax.ai</span>
            <ArrowRight size={13} />
          </a>
          <a href="https://github.com/vispraxai" className="contactRow" target="_blank" rel="noreferrer">
            <span className="contactLabel">GITHUB</span>
            <span>github.com/vispraxai</span>
            <ExternalLink size={13} />
          </a>
          <div className="contactState"><span className="statusDot" /> OPEN FOR INQUIRIES</div>
        </div>
      </section>

      <footer>
        <div className="brand">
          <span className="brandMark" aria-hidden="true"><i /><i /><i /></span>
          <span>VISPRAX<span className="brandDim">.AI</span></span>
        </div>
        <span>CORE_REVISION_04 // INDEPENDENT AI RESEARCH LAB</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
