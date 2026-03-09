function Lines() {
  return (
    <div className="lines" aria-hidden>
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
      <style jsx>{`
        .lines {
          display: flex;
          flex-direction: column;
          gap: 1px;
          flex: 1;
          align-self: stretch;
          position: relative;
          z-index: 1;
        }
        .line {
          flex: 1;
        }
        .line-1 { background-color: #f5a623; }
        .line-2 { background-color: #e8638c; }
        .line-3 { background-color: #3d3b72; }
      `}</style>
    </div>
  )
}

export default function Banner({ children }) {
  return (
    <div className="banner">
      <Lines />
      <p>{children}</p>
      <Lines />
      <style jsx>{`
        @keyframes drift {
          from { background-position: 0px 0px; }
          to { background-position: 400px -400px; }
        }

        .banner {
          background-color: #f9f4ec;
          color: black;
          text-align: center;
          padding: 0.75rem 0;
          font-weight: 800;
          font-size: 1.3rem;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 2px solid black;
          position: relative;
          overflow: hidden;
        }

        .banner::before {
          content: '';
          position: absolute;
          inset: -150%;
          background-image: url('/images/bgpattern.svg');
          background-size: 400px;
          background-color: #f9f4ec;
          transform: rotate(45deg);
          animation: drift 20s linear infinite;
          z-index: 0;
        }

        p {
          margin: 0;
          white-space: nowrap;
          padding: 0 0.5rem;
          font-family: 'Cook Widetype', sans-serif;
          position: relative;
          z-index: 1;
        }

        p :global(img) {
          height: 1.2em;
          vertical-align: middle;
        }
      `}</style>
    </div>
  )
}
