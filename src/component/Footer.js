export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        style={{ marginTop: '519px' }}
        className="blockquote-footer bg-danger">
        copyright@ {year}
      </footer>
    </>
  );
}
