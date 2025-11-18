export default function Header({ role }) {
  return (
    <header className="header">
      <h1>IoT Presensi</h1>
      <p className="subtitle">{role.toUpperCase()}</p>
    </header>
  )
}
