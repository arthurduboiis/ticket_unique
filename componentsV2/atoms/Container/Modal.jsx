import Modal from "react-native-modal";
import styled from "styled-components/native";
import { useThemeColor } from '../../../hooks/useThemeColor';

const StyledModalContent = styled.View`
    backgroundColor: ${props => props.bgColor};
    paddingVertical: 44px;
    paddingHorizontal: 20px;
    borderTopLeftRadius: 30px;
    borderTopRightRadius: 30px;
    flexDirection: column;
    alignItems: center;
    minHeight: 25%;
    gap: 15px;
`;

const ModalContainer = ({ modalVisible, closeModal, ...props }) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={closeModal}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <StyledModalContent bgColor={useThemeColor("primaryLight")}>{props.children}</StyledModalContent>
    </Modal>
  );
};

export default ModalContainer;
