import { FC } from 'react';

import { Box, Fab, FlexWrap, IconButton, TFabItem } from '@/shared/components';

type ActionsProps = {
  onDelete?: () => void;
  onTransfer?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
};

export const Actions: FC<ActionsProps> = ({ onDelete, onTransfer, onEdit, onAdd }) => {
  const generateItems = () => {
    const items: TFabItem[] = [];

    if (onAdd) {
      items.push({
        variant: 'primary',
        iconName: 'add',
        onClick: onAdd,
      });
    }
    if (onEdit) {
      items.push({
        variant: 'primary',
        iconName: 'pencil',
        onClick: onEdit,
      });
    }
    if (onTransfer) {
      items.push({
        variant: 'primary',
        iconName: 'transfer',
        onClick: onTransfer,
      });
    }
    if (onDelete) {
      items.push({
        variant: 'error',
        iconName: 'trash',
        onClick: onDelete,
      });
    }
    return items;
  };

  return (
    <>
      <Box displayLg={false}>
        <Fab items={generateItems()} />
      </Box>
      <Box display={false} displayLg>
        <FlexWrap align="center" gap={2} gapMd={1}>
          {onDelete && (
            <IconButton
              iconName="trash"
              variant="error-ghost"
              size={25}
              onClick={onDelete}
            />
          )}
          {onEdit && (
            <IconButton
              iconName="pencil"
              variant="primary-ghost"
              size={25}
              onClick={onEdit}
            />
          )}
          {onTransfer && (
            <IconButton
              iconName="transfer"
              variant="primary-ghost"
              size={25}
              onClick={onTransfer}
            />
          )}
          {onAdd && (
            <IconButton
              iconName="add"
              variant="primary-ghost"
              size={25}
              onClick={onAdd}
            />
          )}
        </FlexWrap>
      </Box>
    </>
  );
};
