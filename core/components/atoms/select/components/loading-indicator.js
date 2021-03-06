import React from 'react'
import styled from '@auth0/cosmos/styled'
import { spacing } from '@auth0/cosmos-tokens'
import Spinner from '../../spinner'

export const LoadingIndicator = () => <LoadingIndicator.Element />

LoadingIndicator.Element = styled(Spinner)`
  margin-right: ${spacing.xsmall};
`
