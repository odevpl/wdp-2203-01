import { AiOutlineLike } from 'react-icons/ai';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FcAssistant, FcPortraitMode } from 'react-icons/fc';
import { GrAttachment, GrDocumentImage } from 'react-icons/gr';
import { BsPersonCircle } from 'react-icons/bs';

import { RiMailSendLine } from 'react-icons/ri';
import styles from './Chatbox.module.scss';

const Chatbox = () => {
  const {
    icon,
    root,
    header,
    open,
    close,
    form,
    body,
    overlay,
    logs,
    log,
    logQuestion,
    logAnswer,
    input,
    submit,
    messageBox,
    dialogIcon,
    messageIcon,
    sendIcon,
    headerIcon,
  } = styles;

  const settings = {
    buttonMessage: 'Ask us a question',
    placeholderMessage: 'Type your question ...',
    messageboxClass: 'd-none',
  };

  document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.id === open) {
      handleOpen(event);
    } else if (
      event.target.closest(`#${close}`) ||
      !event.target.closest(`#${messageBox}`)
    ) {
      handleClose(event);
    }
  });

  const handleOpen = () => {
    document.getElementById(open).classList.add('d-none');
    document.getElementById(messageBox).classList.remove('d-none');
  };

  const handleClose = () => {
    document.getElementById(messageBox).classList.add('d-none');
    document.getElementById(open).classList.remove('d-none');
  };

  return (
    <div className={root}>
      <div id={messageBox} className={settings.messageboxClass}>
        <div className={header}>
          <BsPersonCircle className={headerIcon} />
          <FontAwesomeIcon className={icon} id={close} icon={faTimes} />
        </div>
        <div className={body}>
          <div className={overlay}></div>
          <div className={logs}>
            <div className={logQuestion}>
              <FcAssistant className={dialogIcon} />
              <div className={log}>Hi, Can I help you?</div>
            </div>

            <div className={`${logAnswer}`}>
              <FcPortraitMode className={dialogIcon} />
              <div className={log}>Test answer</div>
            </div>
          </div>
        </div>
        <form className={form}>
          <button type='submit' className={submit} id={submit}>
            <GrAttachment className={messageIcon} />
            <GrDocumentImage className={messageIcon} />
          </button>
          <input
            type='text'
            className={input}
            name='entry.724320362'
            id='entry_724320362'
            dir='auto'
            required='true'
            placeholder={settings.placeholderMessage}
          />
          <button type='submit' className={submit} id={submit}>
            <AiOutlineLike className={sendIcon} />
            <RiMailSendLine className={sendIcon} />
          </button>
        </form>
      </div>
      <Button id={open} className='' variant={'floating'}>
        {settings.buttonMessage}
      </Button>
    </div>
  );
};

export default Chatbox;
