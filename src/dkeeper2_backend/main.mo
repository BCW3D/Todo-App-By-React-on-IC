import List "mo:base/List";
import Text "mo:base/Text";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";


actor dkeeper {
  public type Note = {
    title: Text;
    desc: Text;
  };

  stable var notes : List.List<Note> = List.nil <Note>();

  public func createNote(titleText : Text, descText :  Text){
    let newNote : Note = {
      title  = titleText;
      desc = descText;

    };

    notes := List.push(newNote, notes);
    

  };

  public query func readNotes(): async [Note]{
    return List.toArray(notes);
  };


 public func removeNote(id : Nat){
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes, id + 1);
    notes := List.append(listFront, listBack);
 }


}