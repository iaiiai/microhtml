# Introduction

**Let's connect library**
```js
const { createElement } = require('microhtml');
```

**Firstly you must have AST**
The syntax is pretty simple.
```js
const AST = {
   tagName: 'h1', // Any
   type: 'paired', // 'single' or 'paired'
   attr: {
      variant: 'bold'
   },
   children: [
      {...},
      {...},
   ],
   body: 'Hello world!'
};
```
**And now we can create our element, then transform it to HTML code.**
```js
const element = createElement(AST).transform();
console.log(element);
```
**A few words about AST**
AST is an object that can contain <code> tagName </code> <code> type </code> <code> attr </code> <code> children </code> and <code> body </code> fields and nothing more!
Elements created as the "single" type cannot have "children" and "body", only attributes, so you can leave these fields as empty object and array respectively.
Element is the same object as above.



## Classes

<dl>
<dt><a href="#HTMLElement">HTMLElement</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#createDocument">createDocument()</a> ⇒ <code>True</code></dt>
<dd><p>Creates document from certain content, like HTML tags.</p>
</dd>
<dt><a href="#createElement">createElement()</a> ⇒ <code><a href="#HTMLElement">HTMLElement</a></code></dt>
<dd><p>Recursive function that generates &quot;HTMLElement&quot; object from given AST.</p>
</dd>
</dl>

<a name="HTMLElement"></a>

## HTMLElement
**Kind**: global class  
**Summary**: Create an instance of HTMLElement  
**Access**: public  

* [HTMLElement](#HTMLElement)
    * [new HTMLElement(tagName, type, props, body)](#new_HTMLElement_new)
    * [.transform()](#HTMLElement+transform)

<a name="new_HTMLElement_new"></a>

### new HTMLElement(tagName, type, props, body)
**Returns**: [<code>HTMLElement</code>](#HTMLElement) - HTMLElement instance  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>String</code> | tag definition |
| type | <code>String</code> | tag type (can be 'single' or 'paired') |
| props | <code>Object</code> | expects object with two fields: children (ARRAY), attribute (OBJECT) |
| body | <code>String</code> | inner body text. |

**Example**  
```js
const element = new HTMLElement(
      'h1',
      'paired',
      { attributes: {...}, children: [...] },
      'Hello world!',
    );
```
<a name="HTMLElement+transform"></a>

### htmlElement.transform()
**Kind**: instance method of [<code>HTMLElement</code>](#HTMLElement)  
**Summary**: transform  
**Access**: public  
**Example**  
```js
const element = new HTMLElement(
      'h1',
      'paired',
      { attributes: {...}, children: [...] },
      'Hello world!',
    );
element.transform();
> '<h1>Hello world!</h1>'
```
<a name="createDocument"></a>

## createDocument() ⇒ <code>True</code>
Creates document from certain content, like HTML tags.

**Kind**: global function  
**Returns**: <code>True</code> - - if operation succeed.  

| Type | Description |
| --- | --- |
| <code>String</code> | HTML document file name. |
| <code>String</code> | HTML document content. |

<a name="createElement"></a>

## createElement() ⇒ [<code>HTMLElement</code>](#HTMLElement)
Recursive function that generates "HTMLElement" object from given AST.

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>Object</code> | AST |

**Example**  
```js
const AST = {
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
const elem = createElement(AST).transform();
createDocument('index', elem);
```
