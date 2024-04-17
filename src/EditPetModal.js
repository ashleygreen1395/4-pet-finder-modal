import { Theme, Dialog, Button } from "@radix-ui/themes";
import PetForm from "./PetForm";

const EditPetModal = ({ pet, onCancel, onSave }) => {
  return (
    <Dialog.Root open={true} onClose={onCancel}>
      <Dialog.Content size="3" maxWidth="400px">
        <Dialog.Title>Edit Pet</Dialog.Title>
        <Dialog.Description>
          <PetForm pet={pet} onCancel={onCancel} onSave={onSave} />
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default EditPetModal;
