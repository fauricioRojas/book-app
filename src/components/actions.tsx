import { FC } from 'react';

import { Box, Fab, FlexWrap, IconButton, TFabItem } from '@/shared/components';

type ActionsProps = {
  onDelete?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
};

export const Actions: FC<ActionsProps> = ({ onDelete, onEdit, onAdd }) => {
  const generateItems = () => {
    const items = [];
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
    if (onDelete) {
      items.push({
        variant: 'error',
        iconName: 'trash',
        onClick: onDelete,
      });
    }
    return items as TFabItem[];
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
              height={25}
              width={25}
              onClick={onDelete}
            />
          )}
          {onEdit && (
            <IconButton
              iconName="pencil"
              variant="primary-ghost"
              height={25}
              width={25}
              onClick={onEdit}
            />
          )}
          {onAdd && (
            <IconButton
              iconName="add"
              variant="primary-ghost"
              height={25}
              width={25}
              onClick={onAdd}
            />
          )}
        </FlexWrap>
      </Box>
    </>
  );
};
