import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const InputContainer = styled('div')({
  margin: '8px 24px',
});

const MaxHeightButton = styled(Button)({
  height: '100%',
  borderRadius: 'unset',
  fontWeight: 'bold',
  paddingLeft: 8,
  paddingRight: 8,
});
export { InputContainer, MaxHeightButton };
