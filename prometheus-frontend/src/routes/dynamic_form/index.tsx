import React, { FC, useState, useCallback, memo } from "react";
import NeumorphismButton from "../../components/Neumorphism/Button";
import ListItem from "../../components/Neumorphism/ListItem";
import { Item } from "../../types/Item";

const DynamicForm: FC = () => {
  const [formItems, setFormItems] = useState<Item[]>([]);

  const addItem = useCallback(() => {
    const count = formItems.length + 1;
    console.log(formItems);
    setFormItems((formItems) => {
      return [...formItems, { id: count, name: `addItem-${count}` }];
    });
  }, [formItems]);

  const deleteItem = useCallback((deleteId: number): void => {
    setFormItems((formItems) => {
      return formItems.filter(({ id }) => id !== deleteId);
    });
  }, []);

  return (
    <>
      <ListComponent formItems={formItems} onDelete={deleteItem} />
      <NeumorphismButton onClick={addItem} name="add" />
    </>
  );
};
type ListProps = {
  formItems: Item[];
  onDelete: (deleteId: number) => void;
};

const ListComponent: FC<ListProps> = memo(({ formItems, onDelete }) => {
  return (
    <ul>
      {formItems?.map((formItem) => (
        <ListItem formItem={formItem} onDelete={onDelete} />
      ))}
    </ul>
  );
});

export default DynamicForm;
