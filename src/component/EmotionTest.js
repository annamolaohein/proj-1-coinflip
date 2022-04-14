// import { css } from '@emotion/css'
import styled from '@emotion/styled'
// import { css} from '@emotion/core'
// import { css } from '@emotion/react'



export const EmotionTest = () => {

 
return(
 
  <div>
    <Button>This my button component.</Button>
    <H1>Hello</H1>
  </div>

)
}
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }

`
const H1=styled.h1`
/* background-color:green; */
text-decoration: underline double red;
text-underline-position: under;`
  