import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

const AddPlayerModal = ({isOpen, onClose}: {isOpen: boolean, onClose:any}) => {
  
  const [playerName, setPlayerName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [preferredPosition, setPreferredPosition] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      playerName,
      joiningDate,
      preferredPosition,
    });
    onClose(); // Close the modal after submission
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Player</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel htmlFor="playerName">Player Name</FormLabel>
              <Input
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="joiningDate">Joining Date</FormLabel>
              <Input
                id="joiningDate"
                type="date"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="preferredPosition">Preferred Position</FormLabel>
              <Select
                id="preferredPosition"
                value={preferredPosition}
                onChange={(e) => setPreferredPosition(e.target.value)}
              >
                <option value="">Select position</option>
                <option value="Forward">Forward</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Defender">Defender</option>
                <option value="Goalkeeper">Goalkeeper</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" ml={3} onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPlayerModal;