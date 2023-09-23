import { FC } from "react";

import { FlexWrap, IconButton } from "@/shared/components";

interface IActionsProps {
  onDelete?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
}

export const Actions: FC<IActionsProps> = ({
  onDelete,
  onEdit,
  onAdd,
}) => (
  <FlexWrap align="center" gap={2} gapMd={1}>
    {onDelete && (
      <IconButton
        iconName="trash"
        variant="error"
        height={25}
        width={25}
        onClick={onDelete}
      />
    )}
    {onEdit && (
      <IconButton
        iconName="pencil"
        height={25}
        width={25}
        onClick={onEdit}
      />
    )}
    {onAdd && (
      <IconButton
        iconName="add"
        height={25}
        width={25}
        onClick={onAdd}
      />
    )}
  </FlexWrap>
);
