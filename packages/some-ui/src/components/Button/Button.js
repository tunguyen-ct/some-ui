import theme from "../../theme"
import { css } from 'linaria'

const button = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
`

const Button = () => {
  return <button className={button}>Click me</button>
}

export default Button
