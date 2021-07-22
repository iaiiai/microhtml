import HTMLElement from '../ctypes/HTMLElement';
import inspectArguments from '../utils/inspectArguments';

/**
 * Recursive function that generates "HTMLElement" object from given AST.
 * @param {Object} - AST
 * @returns {HTMLElement}
 * @example
 * const AST = {
  tagName: 'html',
  type: 'paired',
  attr: {
    lang: 'ru',
  },
  children: [
    {
      tagName: 'body',
      type: 'paired',
      attr: {},
      children: [],
      body: ''
    },
    {
      tagName: 'img',
      type: 'single',
      attr: {},
      children: [],
      body: ''
    }
  ],
  body: '',
};
 * const elem = createElement(AST).transform();
 * createDocument('index', elem);
 */

const createElement = (AST) => {
  const {
    tagName, type, attr, children, body,
  } = AST;
  const elementInfo = [tagName, type, attr, children, body];
  const forceExit = (invalidField) => {
    console.error(`[microhtml]: Node with field «${invalidField}» is invalid. Type: ${(typeof invalidField).toUpperCase()}.`);
    return true;
  };

  if (inspectArguments(elementInfo, forceExit, elementInfo.length - 1)) {
    return console.error('[microhtml]: The function has interrupted its execution.');
  }

  const makePairedTag = (tagDefinition, tagAttributes, tagType, tagBody, tagChildren) => (
    new HTMLElement(
      tagDefinition,
      tagType,
      { attributes: tagAttributes, children: tagChildren.map(createElement) },
      tagBody,
    )
  );

  const makeSingleTag = (tagDefinition, tagAttributes) => (
    new HTMLElement(tagDefinition, type, { attributes: tagAttributes })
  );

  const tagTypes = {
    paired: makePairedTag,
    single: makeSingleTag,
  };

  return tagTypes[type](tagName, attr, type, body, children);
};

export default createElement;
