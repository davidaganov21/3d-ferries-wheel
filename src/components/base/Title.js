import styles from "./Title.module.sass"
import cn from "classnames"

export default function Title({ title, className, link, number, direction }) {
  return (
    <div
      className={cn(styles.title, className, {
        [styles.rtl]: direction === "rtl",
        [styles.ltr]: direction === "ltr"
      })}
    >
      {direction === "ltr" && (
        <h2>
          <span aria-hidden="true">0{number}.</span> {title}
        </h2>
      )}
      <a
        href={link}
        aria-label={title}
      >
        #
      </a>
      {direction === "rtl" && (
        <h2>
          {title} <span aria-hidden="true">0{number}.</span>
        </h2>
      )}
    </div>
  )
}
