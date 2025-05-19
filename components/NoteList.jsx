import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <NoteItem item={item} onDelete={onDelete} onEdit={onEdit} />
        )}
      />
    </>
  );
};

export default NoteList;
