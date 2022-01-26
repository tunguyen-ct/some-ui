import { Button } from "some-ui"
import { css } from 'linaria'

const title = css`
  color: red;
`

export default function Web() {
  return (
    <div>
      <h1 className={title}>Demo Some-UI theme customization</h1>
      <Button />
    </div>
  )
}
