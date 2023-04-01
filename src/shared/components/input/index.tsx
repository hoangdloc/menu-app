import { Box, styled } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import React from 'react';

type MyInputProps = {
  id?: string
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>;

const MyInputStyles = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'icon'
})<MyInputProps>(({ theme, icon }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  input: {
    fontFamily: 'inherit',
    padding: icon != null ? '0.8rem 2rem 0.8rem 2.6rem' : '0.8rem 1rem',
    outline: 'none',
    borderRadius: '0.6rem',
    border: 'none',
    fontSize: '1rem',
    backgroundColor: theme.palette.mode === 'light' ? orange[500] : grey[800],
    color: theme.palette.mode === 'light' ? 'inherit' : grey[50],
    '&::placeholder': {
      color: theme.palette.mode === 'light' ? orange[900] : grey[600]
    }
  },
  label: {
    color: theme.palette.mode === 'light' ? orange[900] : grey[600],
    position: 'absolute',
    top: '60%',
    left: '3%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  },
  'input:not(:placeholder-shown) + label': {
    color: theme.palette.mode === 'light' ? 'inherit' : grey[50]
  }
}));

const MyInput: React.FC<MyInputProps> = ({ id, icon, ...rest }) => {
  return (
    <MyInputStyles icon={icon}>
      <input
        id={id}
        {...rest}
      />
      {icon != null ? <label htmlFor={id}>{icon}</label> : null}
    </MyInputStyles>
  );
};

export default MyInput;
