import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="site">
      <div className="ambientGrid" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="notFound">
        <span className="sectionIndex">404 // ROUTE_NOT_FOUND</span>
        <h1>NO SUCH<br /><span>PROJECT.</span></h1>
        <p>Requested resource is not present in the current public research index.</p>
        <Link href="/projects" className="navBtn"><ArrowLeft size={13} /> RETURN_TO_INDEX</Link>
      </div>
    </main>
  );
}
