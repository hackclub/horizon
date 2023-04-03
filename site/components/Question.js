export default function Question({ summary, answer }) {
  return (
    <details open style={{ position: 'relative' }}>
      <summary>{summary}</summary>
      {answer}
    </details>
  )
}
