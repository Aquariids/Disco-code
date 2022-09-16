import React, { Dispatch, SetStateAction, useContext } from 'react';
import Menu from '../Menu/Menu';
import s from './ModalMenu.module.css';
import cn from 'classnames';
import { AppContext } from '../../../context/app.context';

interface modalProps {
    active:boolean,
    setActive: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({active,setActive}:modalProps) => {

    const { posts } = useContext(AppContext); 

    return (
       <></>
    );
};

export default Modal;