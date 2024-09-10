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
} from '@chakra-ui/react';
import { useAddPlayerMutation } from '@/store/services/playersApiSlice';
import { PlayersPayloadType } from '@/store/services/types';
// import { useGetAllPlayersQuery } from '@/services/playersApiSlice';

const AddPlayerModal = ({isOpen, onClose}: {isOpen: boolean, onClose:any}) => {
  // const { data } = useGetAllPlayersQuery();
  // console.log(data);
  const [playerData, setPlayerData] = useState<PlayersPayloadType>({
    name: '',
    preferredPosition: '',
    joiningDate: '',
    rating: 0
  });

  const [addPlayer] = useAddPlayerMutation();
  const handleSubmit = async () => {
    await addPlayer({
      name: playerData?.name as string,
      joiningDate: playerData?.joiningDate as string,
      preferredPosition: playerData?.preferredPosition as string,
    });
    onClose(); 
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
                value={playerData?.name}
                onChange={(e) => setPlayerData((prevValue) => ({...prevValue, name: (e.target.value as string)}))}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="joiningDate">Joining Date</FormLabel>
              <Input
                id="joiningDate"
                type="date"
                value={playerData?.joiningDate}
                onChange={(e) => setPlayerData((prevValue) => ({...prevValue, joiningDate: e.target.value}))}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="preferredPosition">Preferred Position</FormLabel>
             <Input
                id="rating"
                type="number"
                max={10}
                min={0}
                value={playerData?.rating}
                onChange={(e) => setPlayerData((prevValue) => ({...prevValue, rating: +e.target.value}))}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="preferredPosition">Preferred Position</FormLabel>
              <Select
                id="preferredPosition"
                value={playerData.preferredPosition}
                onChange={(e) => setPlayerData((prevValue) => ({...prevValue, preferredPosition: (e.target.value as string)}))}
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