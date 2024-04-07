import React from 'react'
import classes from "./footer.module.css"
function footer() {
  return (
      <footer>
        <div className={["container",classes.container].join(" ")}>
          <div>
            Copyright &copy;2024.
          </div>
          <div className="textRight">
            Built with <span className="red">&hearts;</span> by
            <a href="https://github.com/AbrarMahabub21">Abrar Mahabub</a>
          </div>
        </div>
      </footer>
  )
}

export default footer
