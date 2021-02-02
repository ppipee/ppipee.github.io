import { GRAY } from 'common/styles/colors'
import styled from 'styled-components'

const NAV_HEIGHT = '50px'

export const NavbarContainer = styled.div`
  height: ${NAV_HEIGHT};
  background-color: ${GRAY[900]};
  color: ${GRAY.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`
