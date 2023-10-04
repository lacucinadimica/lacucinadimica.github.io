/*import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Header({ children }: QuartzComponentProps) {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
*/
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Header({ children }: QuartzComponentProps) {
  return (
    <header>
      <div className="header-content">
        <h1>
          <a href="/">La Cucina di Mica</a>
        </h1>
        <div className="menu">
          {/* Add your menu buttons here */}
          <a href="/engineering">Projects</a>
          <a href="/lacucina">Food</a>
        </div>
      </div>
    </header>
  );
}

Header.css = `
header {
  background-color: #fdf1dd; /* Example background color */
  color: #000; /* Example text color */
  padding: 10px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu a {
  text-decoration: none;
  color: #000; /* Menu button text color */
}
`

export default (() => Header) satisfies QuartzComponentConstructor;