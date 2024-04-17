import { Theme, Dialog, Button } from "@radix-ui/themes";
import PetForm from "./PetForm";

const NewPetModal = ({ onCancel, onSave }) => {
  return (
    <Dialog.Root open={true} onClose={onCancel}>
      <Dialog.Content size="3" maxWidth="400px">
        <Dialog.Title>New Pet</Dialog.Title>
        <Dialog.Description>
          <PetForm onCancel={onCancel} onSave={onSave} />
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NewPetModal;
