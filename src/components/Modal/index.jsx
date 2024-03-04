import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function index({ size,title, content, onClose,isOpen, buttonActions}) {
  //const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
     
     <Modal 
     isOpen={isOpen} 
     onOpenChange={onClose}
      size={size}
       backdrop="blur" 
       placement='center'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{content}</ModalBody>
            <ModalFooter>
           {buttonActions}

            </ModalFooter>
          </>

        )}
      </ModalContent>
    </Modal>
    </>
  );
}

/*

   <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
*/