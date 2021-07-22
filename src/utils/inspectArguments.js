const inspectArguments = (args, callback, index) => {
  const checkTagName = (element) => (typeof element === 'string');
  const checkType = (element) => (!!((typeof element === 'string' && element === 'paired') || element === 'single'));
  const checkAttr = (element) => ((typeof element === 'object' && element !== null));
  const checkChildren = (element) => (typeof element === 'object' && Array.isArray(element));
  const checkBody = (element) => (typeof element === 'string');

  const types = {
    0: checkTagName,
    1: checkType,
    2: checkAttr,
    3: checkChildren,
    4: checkBody,
  };

  if (index < 0) {
    return false;
  }
  if (!types[index](args[index])) {
    return callback(args[index], args);
  }

  return inspectArguments(args, callback, index - 1);
};

export default inspectArguments;
