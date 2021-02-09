import { BLUE, GRAY } from 'common/styles/colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		font-family: 'Lexend Deca', sans-serif;
		color: ${GRAY[700]}; 
		min-height:100vh;
		background-color:${GRAY.white};
	}

	* {
		box-sizing:border-box;
		font-family: 'Lexend Deca', sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`

export default GlobalStyles
