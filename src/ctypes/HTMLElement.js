import pretty from 'pretty';
/**
  * @summary Create an instance of HTMLElement
  * @name HTMLElement
  * @class
  * @public
  *
  * @param {String} tagName - tag definition
  * @param {String} type - tag type (can be 'single' or 'paired')
  * @param {Object} props - expects object with two fields: children (ARRAY), attribute (OBJECT)
  * @param {String} body - inner body text.
  * @returns {HTMLElement} HTMLElement instance
  *
  * @example
  * const element = new HTMLElement(
      'h1',
      'paired',
      { attributes: {...}, children: [...] },
      'Hello world!',
    );
*/

class HTMLElement {
  constructor(tagName, type, props, body) {
    this.tagName = tagName;
    this.type = type;
    this.props = {
      ...props,
      attributes: Object.keys(props.attributes).length === 0 ? null : props.attributes,
    };
    this.body = body;
    this.transform = this.transform.bind(this);
  }

  /**
   * @summary transform
   * @method
   * @public
   *
   * @example
   * const element = new HTMLElement(
      'h1',
      'paired',
      { attributes: {...}, children: [...] },
      'Hello world!',
    );
   * element.transform();
   * > '<h1>Hello world!</h1>'
   */

  transform() {
    const attrToLine = (attr) => {
      if (typeof attr === 'object' && attr !== null) {
        return Object.keys(attr)
          .map((key) => ` ${key}="${attr[key]}"`)
          .join('');
      }
      return '';
    };

    const makePairedTag = (tagName, attributes, type, body, children) => (`\n\t<${tagName}${attrToLine(attributes)}>${children ? children.map((element) => element.transform(element)).join('') : ''}${body}</${tagName}>\n\t`);

    const makeSingleTag = (tagName, attributes) => (`\n\t<${tagName}${attrToLine(attributes)}/>\n`);

    const tagTypes = {
      paired: makePairedTag,
      single: makeSingleTag,
    };

    return pretty(
      tagTypes[this.type](
        this.tagName, this.props.attributes, this.type, this.body, this.props.children,
      ),
    );
  }
}

export default HTMLElement;
