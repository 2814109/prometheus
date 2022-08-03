import { FC, memo } from "react";
import { Item } from "../../../types/Item";
import NeumorphismButton from "../Button";
import NeumorphismString from "../String";
import style from "./index.module.css";
type ChildProps = {
  formItem: Item;
  onDelete: (deleteId: number) => void;
};
const ListItem: FC<ChildProps> = memo(({ formItem, onDelete }) => {
  return (
    <div className={style.listItemContainer}>
      <NeumorphismString text={formItem.name} fontRemSize={2} />
      <NeumorphismButton
        onClick={() => onDelete(formItem.id)}
        name="Delete"
        fontRemSize={0.4}
      />
    </div>
  );
});

export default ListItem;
