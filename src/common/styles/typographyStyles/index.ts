import { createGlobalStyle } from 'styled-components'
import { BLUE, GRAY } from 'common/styles/colors'
import { MOBILE_WIDTH } from '../constants'

const TypographyStyles = createGlobalStyle`
  .text-blue-600{
		color:${BLUE[600]};
	}

	.text-blue-500{
		color:${BLUE[500]};
	}

	.text-blue-400{
		color:${BLUE[400]};
	}

	.text-gray-white{
		color:${GRAY.white};
	}

	.text-gray-700{
		color:${GRAY[700]};
	}

	.rg16{
		font-size:16px;
	}

	.rg18{
		font-size:18px;
	}

	.rg20{
		font-size:20px;
	}

	.rg24{
		font-size:24px;
	}

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		.mWeb-rg14{
			font-size:14px;
		}

		.mWeb-rg16{
			font-size:16px;
		}

		.mWeb-rg18{
			font-size:18px;
		}

		.mWeb-rg20{
			font-size:20px;
		}

		.mWeb-rg24{
			font-size:24px;
		}
	}
`

export default TypographyStyles
