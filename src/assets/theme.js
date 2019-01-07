import css from 'styled-jsx/css'

const body = css.global`
        html, body, h1, h2, h3, h4, h5, h6, span, p{
        font-family: 'Lato', sans-serif !important;
        letter-spacing: 1px;
        font-weight: 100;
     }
 
 
 `

 const headingDarken = css`h3{
        color:#57615C;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 2rem;
        letter-spacing: 0.19em;
    
    }`
 const paragraphDarken = css`p{ 
        color: #A7B0AA;
        line-height: 28px;
        font-size: 1.15rem;
        text-align: justify;
        letter-spacing: 0.1em;
}`

const h4 = css`h4{
    font-weight: 200;
    line-height: normal;
    font-size: 1.5rem;
    color: #57615C;
   
}`

const textWhite = css`color:#FFFFFF;`

 export {
     body,
     headingDarken,
     paragraphDarken,
     textWhite,
     h4
 }