// @flow

import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {|
  classes: any,
  text: string,
  color: string,
  variant: string,
  onClick: () => void,
  icon: Node,
|};

const ButtonStyled = styled(Button)`
  &:focus {
    outline: none;
  }

  & > :nth-child(1) {
    & > svg {
      margin-left: 8px;
    }
  }
`;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const ButtonCustom = ({
  classes,
  text,
  color,
  variant,
  onClick,
  icon,
}: Props) => (
  <ButtonStyled
    variant={variant}
    color={color}
    className={classes.button}
    onClick={onClick}
  >
    {text}
    {icon}
  </ButtonStyled>
);

export default withStyles(styles)(ButtonCustom);
