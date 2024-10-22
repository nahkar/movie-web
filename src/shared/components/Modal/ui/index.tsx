import ReactDOM from 'react-dom';

import { StyledModalOverlay, StyledModalWrapper } from './styled';

type Props = {
	children: React.ReactNode;
	onClose: () => void;
};
export const Modal = ({ children, onClose }: Props) => {
	return ReactDOM.createPortal(
		<>
			<StyledModalOverlay onClick={onClose} />
			<StyledModalWrapper>{children}</StyledModalWrapper>
		</>,
		document.body,
	);
};
