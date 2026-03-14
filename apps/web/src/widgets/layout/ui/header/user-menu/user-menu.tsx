import { useState } from 'react';
import { Avatar, Popover } from '@kds/ui';

import UserPopover from '../user-popover/user-popover';

interface UserMenuProps {
  profileUrl: string;
  name: string;
  email: string;
}

const UserMenu = ({ profileUrl, name, email }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Avatar
        profileUrl={profileUrl}
        use="header"
        onClick={() => setIsOpen(true)}
      />
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchor="--anchor-user-profile"
        placement="bottom-end"
        offsetY="0.7rem"
      >
        <UserPopover profileUrl={profileUrl} name={name} email={email} />
      </Popover>
    </>
  );
};

export default UserMenu;
