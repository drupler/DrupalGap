/**
 * Themes a password input.
 * @param {Object} variables
 * @return {String}
 */
function theme_password(variables) {
  try {
    variables.attributes.type = 'password';
    var output = '<input ' + dg_attributes(variables.attributes) + ' />';
    return output;
  }
  catch (error) { console.log('theme_password - ' + error); }
}

/**
 * Themes a password input.
 * @param {Object} variables
 * @return {String}
 */
function theme_submit(variables) {
  try {
    //dpm('theme_submit');
    //console.log(variables);
    variables.attributes.type = 'submit';
    var output = '<input ' + dg_attributes(variables.attributes) + ' />';
    return output;
  }
  catch (error) { console.log('theme_submit - ' + error); }
}

/**
 * Themes a textarea input.
 * @param {Object} variables
 * @return {String}
 */
function theme_textarea(variables) {
  try {
    var value = typeof variables.value !== 'undefined' ?
      variables.value : '';
    return '<textarea ' + dg_attributes(variables.attributes) + '>' +
      value +
    '</textarea>';
  }
  catch (error) { console.log('theme_textarea - ' + error); }
}

/**
 * Themes a text input.
 * @param {Object} variables
 * @return {String}
 */
function theme_textfield(variables) {
  try {
    variables.attributes.type = 'text';
    var output = '<input ' + dg_attributes(variables.attributes) + ' />';
    return output;
  }
  catch (error) { console.log('theme_textfield - ' + error); }
}