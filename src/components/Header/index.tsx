import { FC, useState } from 'react';
import { links } from './constants';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './styles';

const Header: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <S.Header open={!open}>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="open"
            >
                <MenuIcon color="inherit" />
            </button>
            <ul>
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="close"
                >
                    <CloseIcon />
                </button>
                {links.map((item) => {
                    return (
                        <li key={item.id} onClick={() => setOpen(false)}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </S.Header>
    );
};

export default Header;
