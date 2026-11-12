import { Link, useRouter } from "../lib/router.jsx";
import { PROFILE, EDUCATION, FACTS, LENSES, INTERESTS, TRAJECTORY } from "../data/site.js";
import { WORK, THREADS } from "../data/work.js";
import { PUBLICATIONS, TALKS, POSTERS, HONORS, TRAINING, SKILLS, TEACHING, LEADERSHIP, OUTREACH, CLINICAL } from "../data/record.js";
import Posterior from "../components/Posterior.jsx";
import Schematic from "../components/Schematic.jsx";
import Reveal from "../components/Reveal.jsx";

function Head({ n, id, title, children }) {
  return (
    <Reveal as="header" className="head">
      <p className="head__n">§ {n}</p>
      <h2 id={`${id}-title`}>{title}</h2>
      {children && <p className="head__lede">{children}</p>}
    </Reveal>
  );
}

function LensChips({ compact = false }) {
  const { loc, setLens } = useRouter();
  const all = [{ id: "all", label: "Everything" }, ...LENSES];
  return (
    <div className={`chips ${compact ? "chips--compact" : ""}`} role="group" aria-label="Choose what to emphasize">
      {all.map((l) => (
        <button key={l.id} type="button" className="chip" aria-pressed={loc.lens === l.id} onClick={() => setLens(l.id)}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="eyebrow">Mathematics · Biomedical Engineering · Statistics</p>
          <h1>{PROFILE.name}</h1>
          <p className="hero__statement">{PROFILE.statement}</p>
          <p className="hero__lead">{PROFILE.lead}</p>
          <div className="hero__cta">
            <Link to="/#research" className="btn btn--solid">See the research</Link>
            <Link to={PROFILE.cv} className="btn">Download CV <span aria-hidden="true">↓</span></Link>
            <Link to={`mailto:${PROFILE.email}`} className="btn btn--text">Get in touch</Link>
          </div>
        </div>
        <Posterior />
      </div>
      <div className="wrap">
        <dl className="facts">
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Lens() {
  const { loc } = useRouter();
  const lens = LENSES.find((l) => l.id === loc.lens);
  return (
    <section className="lens" id="lens" aria-labelledby="lens-title">
      <div className="wrap">
        <div className="lens__bar">
          <h2 id="lens-title">What brings you here?</h2>
          <LensChips />
        </div>
        {lens ? (
          <div className="lens__panel" key={lens.id}>
            <div>
              <p className="eyebrow">{lens.audience}</p>
              <p className="lens__pitch">{lens.pitch}</p>
            </div>
            <ol className="lens__points">
              {lens.points.map((p) => (
                <li key={p.head}>
                  <Link to={p.href}>
                    <b>{p.head}</b>
                    <span>{p.text}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p className="lens__hint">
            The same work reads differently to a PhD committee, a quantitative team and a clinical research group. Pick
            one and the page brings forward what matters to you. Nothing is hidden for good.
          </p>
        )}
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", verb: "Model", text: "Turn a mechanism into equations: continuum mechanics, differential equations, agents, Markov chains." },
  { n: "02", verb: "Solve", text: "Write the numerics that make it run: finite elements, lattice Boltzmann, high-performance computing." },
  { n: "03", verb: "Infer", text: "Let data constrain it: Bayesian computation, sensitivity analysis, model selection." },
  { n: "04", verb: "Decide", text: "Ask what the answer changes, for an experiment, a patient or a design." },
];

function About() {
  return (
    <section className="sec" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <Head n="1" id="about" title="From the clinic to the equations" />
        <div className="about">
          <Reveal className="prose">
            <p>
              My first research was clinical. In the summer of 2022 I worked in a radiology department at the
              University of Pittsburgh, collating imaging and outcome data on a new kind of prostate cancer scan. It
              became a published article and a conference talk, and it left me asking what a measurement really tells
              you about a patient.
            </p>
            <p>
              At the University of Florida I study mathematics and biomedical engineering side by side, with a minor in
              statistics. The engineering took me to the bench and the workshop: purifying DNA repair proteins, testing
              surgical training models, generating MRI from CT. The mathematics gave me the language underneath it:
              continuum mechanics, partial differential equations, Markov chains, Bayesian computation.
            </p>
            <p>
              Most of what I do now follows one pattern, whether the subject is embryonic tissue, a transplanted lung
              or an AI trained on its own output.
            </p>
          </Reveal>
          <Reveal as="ol" className="steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="steps__n">{s.n}</span>
                <h3>{s.verb}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal as="ol" className="path" aria-label="Trajectory">
          {TRAJECTORY.map((t) => (
            <li key={t.when}>
              <span className="path__when">{t.when}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </Reveal>

        <div className="interests">
          <Reveal className="interests__intro">
            <h3>What I want to work on next</h3>
            <p>
              I graduate in May 2027 and plan to stay in quantitative research: PhD and post-baccalaureate programs in
              mathematics, statistics and operations research, and research roles in industry and medicine where
              careful modeling carries real weight.
            </p>
          </Reveal>
          <ul className="interests__list">
            {INTERESTS.map((it, i) => (
              <Reveal as="li" key={it.title} delay={i * 60}>
                <h4>{it.title}</h4>
                <p>{it.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Feature({ w }) {
  return (
    <Reveal as="article" className="card">
      <Link to={`/work/${w.slug}`} className="card__link" aria-label={w.title}>
        <div className="card__fig">
          <Schematic name={w.figure} label={`Schematic for ${w.short}`} />
        </div>
        <p className="card__meta">{w.period}</p>
        <h4>{w.title}</h4>
        <p className="card__sum">{w.summary}</p>
        <p className="card__where">{w.where}</p>
        <span className="card__more">Read the full account <span aria-hidden="true">→</span></span>
      </Link>
    </Reveal>
  );
}

function Row({ w }) {
  return (
    <details className="row" id={`work-${w.slug}`}>
      <summary>
        <span className="row__title">{w.title}</span>
        <span className="row__where">{w.where}</span>
        <span className="row__when">{w.period}</span>
        <span className="row__plus" aria-hidden="true" />
      </summary>
      <div className="row__body">
        <p>{w.summary}</p>
        {w.items && (
          <ul className="row__items">
            {w.items.map((it) => (
              <li key={it.head}>
                <b>{it.head}</b>
                <span>{it.text}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="row__foot">
          {w.advisor && <span>Advisor: {w.advisor}</span>}
          {w.tools.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </p>
      </div>
    </details>
  );
}

function WorkSection({ n, id, title, lede }) {
  const { loc, setLens } = useRouter();
  const lens = LENSES.find((l) => l.id === loc.lens);
  const threads = THREADS.filter((t) => t.section === id);
  const inSection = WORK.filter((w) => threads.some((t) => t.id === w.thread));
  const match = (w) => !lens || w.lens.includes(lens.id);
  const shown = inSection.filter(match);
  return (
    <section className="sec" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Head n={n} id={id} title={title}>{lede}</Head>
        <div className="filter">
          <LensChips compact />
          <p aria-live="polite">
            {lens ? (
              <>
                Showing {shown.length} of {inSection.length} for {lens.label.toLowerCase()}.{" "}
                <button type="button" className="linkish" onClick={() => setLens("all")}>Show everything</button>
              </>
            ) : (
              <>{inSection.length} entries. Featured work opens a full page; the rest expand in place.</>
            )}
          </p>
        </div>
        {threads.map((t) => {
          const items = shown.filter((w) => w.thread === t.id);
          if (!items.length) return null;
          const feats = items.filter((w) => w.page);
          const rows = items.filter((w) => !w.page);
          return (
            <div className="thread" key={t.id}>
              <Reveal className="thread__head">
                <h3>{t.title}</h3>
                <p>{t.blurb}</p>
              </Reveal>
              {feats.length > 0 && (
                <div className={`cards cards--${Math.min(feats.length, 3)}`}>
                  {feats.map((w) => <Feature key={w.slug} w={w} />)}
                </div>
              )}
              {rows.length > 0 && (
                <Reveal className="rows">
                  {rows.map((w) => <Row key={w.slug} w={w} />)}
                </Reveal>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const Me = ({ text }) => {
  const parts = text.split("S. Ojha");
  return parts.length === 1 ? text : <>{parts[0]}<b>S. Ojha</b>{parts[1]}</>;
};

function Cite({ c }) {
  return (
    <li className="cite">
      <span className="cite__date">{c.date}</span>
      <div>
        <p className="cite__title">{c.title}{c.note && <span className="badge">{c.note}</span>}</p>
        <p className="cite__by"><Me text={c.authors} /></p>
        <p className="cite__venue">{c.venue}</p>
      </div>
    </li>
  );
}

function Record() {
  return (
    <section className="sec" id="record" aria-labelledby="record-title">
      <div className="wrap">
        <Head n="4" id="record" title="The record">
          Writing, talks, posters and recognition, most recent first.
        </Head>

        <Reveal className="pubs">
          <h3>Publications and manuscripts</h3>
          <ul>
            {PUBLICATIONS.map((p) => (
              <li key={p.title}>
                <span className={`pill ${p.status === "Published" ? "pill--on" : ""}`}>{p.status}</span>
                <div>
                  <p className="cite__title">{p.href ? <Link to={p.href}>{p.title}</Link> : p.title}</p>
                  <p className="cite__by"><Me text={p.authors} /></p>
                  {p.venue && <p className="cite__venue">{p.venue} · {p.date}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="two">
          <Reveal>
            <h3>Talks <span className="count">{TALKS.length}</span></h3>
            <ul className="cites">{TALKS.map((c) => <Cite key={c.title + c.date} c={c} />)}</ul>
            <p className="note">Next: a Directed Reading Program presentation at UF Mathematics, late November 2026.</p>
          </Reveal>
          <Reveal>
            <h3>Posters <span className="count">{POSTERS.length}</span></h3>
            <ul className="cites">{POSTERS.map((c) => <Cite key={c.venue + c.title} c={c} />)}</ul>
          </Reveal>
        </div>

        <Reveal>
          <h3>Honors and awards</h3>
          <ul className="honors">
            {HONORS.map((h) => (
              <li key={h.what + h.when}>
                <b>{h.what}</b>
                <span>{h.who}{h.note ? ` · ${h.note}` : ""}</span>
                <i>{h.when}</i>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Preparation() {
  return (
    <section className="sec" id="preparation" aria-labelledby="preparation-title">
      <div className="wrap">
        <Head n="5" id="preparation" title="Preparation">
          Degrees, the training I have sought out beyond them, and the tools I work with.
        </Head>
        <div className="prep">
          <Reveal className="edu">
            <p className="eyebrow">Education</p>
            <h3>{EDUCATION.school}</h3>
            <ul>
              {EDUCATION.degrees.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <p className="edu__meta">{EDUCATION.dates}</p>
            <p className="edu__gpa"><b>{EDUCATION.gpa}</b> GPA</p>
            {EDUCATION.coursework.length > 0 && (
              <>
                <p className="eyebrow">Selected coursework</p>
                <p className="tags">{EDUCATION.coursework.map((c) => <span key={c} className="tag">{c}</span>)}</p>
              </>
            )}
          </Reveal>
          <ol className="training">
            {TRAINING.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 40}>
                <p className="training__when">{t.when}</p>
                <div>
                  <h4>{t.href ? <Link to={t.href}>{t.title}</Link> : t.title}</h4>
                  <p className="training__where">{t.where}</p>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="skills">
          <h3>Methods and tools</h3>
          <dl>
            {SKILLS.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.map((i) => <span key={i} className="tag">{i}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Column({ title, items }) {
  return (
    <Reveal className="col">
      <h3>{title}</h3>
      <ul>
        {items.map((it) => (
          <li key={(it.role || "") + (it.org || it.course) + it.when}>
            <p className="col__when">{it.when}</p>
            <h4>{it.role ? `${it.role}` : it.org}</h4>
            {it.role && <p className="col__org">{it.org || it.course}</p>}
            <p>{it.text}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function Beyond() {
  return (
    <section className="sec" id="beyond" aria-labelledby="beyond-title">
      <div className="wrap">
        <Head n="6" id="beyond" title="Teaching, leading, showing up">
          Explaining an idea to someone else is how I find out whether I understand it.
        </Head>
        <div className="cols">
          <Column title="Teaching" items={TEACHING} />
          <Column title="Leadership" items={LEADERSHIP} />
          <Column title="Outreach and service" items={OUTREACH} />
          <Column title="Clinical exposure" items={CLINICAL} />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal>
          <p className="head__n">§ 7</p>
          <h2 id="contact-title">If the work is relevant to yours, I would like to hear about it.</h2>
          <a className="contact__mail" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <p className="contact__links">
            <Link to={PROFILE.cv} className="btn btn--solid">Download CV (PDF) <span aria-hidden="true">↓</span></Link>
            <Link to={PROFILE.github} className="btn">GitHub <span aria-hidden="true">↗</span></Link>
            {PROFILE.linkedin && <Link to={PROFILE.linkedin} className="btn">LinkedIn <span aria-hidden="true">↗</span></Link>}
          </p>
          <p className="contact__where">{PROFILE.school} · {PROFILE.location}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Lens />
      <About />
      <WorkSection n="2" id="research" title="Research" lede="Three threads, one habit: build the model, then make it answer to evidence." />
      <WorkSection n="3" id="projects" title="Projects" lede="Modeling contests, independent analyses and design work done alongside the research." />
      <Record />
      <Preparation />
      <Beyond />
      <Contact />
    </>
  );
}
