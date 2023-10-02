'use client';

import { FC } from "react";
import styled from 'styled-components';

import { Fab, FlexWrap, IconButton, TFabItem } from "@/shared/components";

const MobileWrapper = styled.div`
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
const DesktopWrapper = styled.div`
  display: none;
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

type ActionsProps = {
  onDelete?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
}

export const Actions: FC<ActionsProps> = ({
  onDelete,
  onEdit,
  onAdd,
}) => {
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
      <MobileWrapper>
        <Fab items={generateItems()} />
      </MobileWrapper>
      <DesktopWrapper>
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
      </DesktopWrapper>
    </>
  );
};
