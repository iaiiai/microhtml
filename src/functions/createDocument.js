import fs from 'fs';

/**
 * Creates document from certain content, like HTML tags.
 * @param {String} - HTML document file name.
 * @param {String} - HTML document content.
 * @returns {True} - if operation succeed.
 */

const createDocument = (filename, content) => {
  fs.writeFile(`./${filename}.html`, content, (error) => {
    if (error) {
      console.error('[microhtml]: Can not create file.');
      return false;
    }
    return true;
  });
};

export default createDocument;
